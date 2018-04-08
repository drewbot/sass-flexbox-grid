// generated on 2016-12-01 using generator-webapp 2.1.0
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');
const wiredep = require('wiredep').stream;
const historyApiFallback = require('connect-history-api-fallback');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Browserify bundle related
const babelify   = require('babelify');
const browserify = require('browserify');
const buffer     = require('vinyl-buffer');
const gutil      = require('gulp-util');
const livereload = require('gulp-livereload');
const merge      = require('merge');
const rename     = require('gulp-rename');
const source     = require('vinyl-source-stream');
const sourceMaps = require('gulp-sourcemaps');
const watchify   = require('watchify');
const uglify     = require('gulp-uglify');
const zip        = require('gulp-zip');
const runSequence = require('run-sequence');

const servePort = 9003;

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('app/scripts/**/*.js', {
    fix: true
  })
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js', {
    fix: true,
    env: {
      mocha: true
    }
  })
    .pipe(gulp.dest('test/spec/**/*.js'));
});

gulp.task('html', ['styles', 'bundleMin'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('views', () => {
  return gulp.src('app/views/*.html')
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('images-lite', () => {
  return gulp.src('app/images/**/*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'bundle', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      middleware: [ historyApiFallback() ],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/styles/library/**/*.scss', ['compileLibrary']);
  gulp.watch('app/scripts/**/*.js', ['bundleServe']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: servePort,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['bundle'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['bundle']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

// // Removing lint from build task
// gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
//   return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
// });

gulp.task('build', ['html', 'images', 'fonts', 'extras', 'views', 'buildLibrary'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build-lite', ['html', 'images-lite', 'fonts', 'extras', 'views'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

/////// Begin browserify bundling
var config = {
  js: {
    src: './app/scripts/app.js',      // Entry point
    outputDir: './app/scripts/',      // Directory to save bundle to
    mapDir: '../../maps/',            // Subdirectory to save maps to
    buildOutputDir: './dist/scripts', // Output to dist
    outputFile: 'bundle.js'           // Name to use for bundle
  },
};

// Watch task: Bundle, kick off live reload server, nd rebundle/reload on file changes
gulp.task('watch', function () {
  livereload.listen();
  var args = merge(watchify.args, { debug : true});
  var bundler = browserify(config.js.src, args)
                 .plugin(watchify, { ignoreWatch: ['**/node_modules'] })
                 .transform(babelify, { presets : [ 'es2015' ] });

  bundler
    .bundle()                                    // Start bundle
    .pipe(source(config.js.src))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .on('error', gutil.log)
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
    .pipe(reload({stream: true}));

  bundler.on('update', function () {
    // Add options to add to "base" bundler passed as parameter
    bundler
      .bundle()                                    // Start bundle
      .pipe(source(config.js.src))                 // Entry point
      .pipe(buffer())                              // Convert to gulp pipeline
      .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
      .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
      .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
      .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
      // .pipe(livereload());                         // Reload browser if relevant
  });
});

gulp.task('bundle', function () {
  var bundler = browserify(config.js.src)  // Pass browserify the entry point
                  .transform(babelify, { presets : [ 'es2015' ] });  // Then, babelify, with ES2015 preset

  // Add options to add to "base" bundler passed as parameter
  bundler
    .bundle()                                    // Start bundle
    .pipe(source(config.js.src))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
    // .pipe(livereload());                         // Reload browser if relevant
})

gulp.task('bundleReload', function () {
  var args = merge(watchify.args, { debug : true});
  var bundler = browserify(config.js.src, args)
                 .plugin(watchify, { ignoreWatch: ['**/node_modules'] })
                 .transform(babelify, { presets : [ 'es2015' ] });

  bundler
    .bundle()                                    // Start bundle
    .pipe(source(config.js.src))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .on('error', gutil.log)
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
    .pipe(reload({stream: true}));
});

gulp.task('bundleServe', function () {
  var args = merge(watchify.args, { debug : true});
  var bundler = browserify(config.js.src, args)
                 .plugin(watchify, { ignoreWatch: ['**/node_modules'] })
                 .transform(babelify, { presets : [ 'es2015' ] });

  // Add options to add to "base" bundler passed as parameter
  bundler
    .bundle()                                    // Start bundle
    .pipe(source(config.js.src))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write(config.js.mapDir))    // Save source maps to their own directory
    .pipe(gulp.dest(config.js.outputDir))        // Save 'bundle' to build/
    .pipe(reload({stream: true}));
});

gulp.task('bundleMin', function () {
  var bundler = browserify(config.js.src)
                  .transform(babelify, { presets : [ 'es2015' ], comments : true, compact: false });
  bundler
    .bundle()                                    // Start bundle
    .pipe(source(config.js.src))                 // Entry point
    .pipe(buffer())                              // Convert to gulp pipeline
    // .pipe(ngAnnotate())                          // ng-annotate to enable uglification of services injected
    // .pipe(uglify())
    .pipe(rename(config.js.outputFile))          // Rename output from 'main.js' to 'bundle.js'
    .pipe(gulp.dest(config.js.buildOutputDir))        // Save 'bundle' to build/
})
/////// End browserify bundling

/////////// Start manual build browserify task
gulp.task('buildbundle', function(){
  var exec = require('child_process').exec;
  // var cmd = 'browserify app/scripts/main.js > app/scripts/bundle.js';
  // var cmd = 'browserify app/scripts/main.js --debug | exorcist app/scripts/bundle.map.js > app/scripts/bundle.js';
  var cmd = 'watchify app/scripts/main.js -o app/scripts/bundle.js -v';

  exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
  });
});
/////////// End manual browserify task


////////////////////////////////////////////////////
    // Sass Flexbox library build tasks //
////////////////////////////////////////////////////

// Clean public folder
gulp.task('cleanLibrary', del.bind(null, ['public/sass-flexbox/**/*']));

// Copy sass library to public folder
gulp.task('copyLibrary', () => {
  return gulp.src('app/styles/library/**/*.scss')
    .pipe($.plumber())
    .pipe(gulp.dest('public/sass-flexbox/scss'))
});

/// process scss and compile library for public use
gulp.task('compileLibrary', () => {
  return gulp.src('app/styles/library/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('public/sass-flexbox'))
});

// Minify library for public use
gulp.task('minifyLibrary', () => {
  return gulp.src('public/sass-flexbox/main.css')
    .pipe($.plumber())
    .pipe(rename('main.min.css'))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe(gulp.dest('public/sass-flexbox'))
});

// zip library
gulp.task('zipLibrary', () => {
  return gulp.src('public/sass-flexbox/**/*')
  .pipe(zip('sass-flexbox.zip'))
  .pipe(gulp.dest('public'))
});

// Copy, compile, minify, zip
gulp.task('buildLibrary', ['cleanLibrary'], function() {
  runSequence('copyLibrary', 'compileLibrary', 'minifyLibrary', 'zipLibrary');
});
