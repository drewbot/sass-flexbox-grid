(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

var _marked = require('./marked.js');

var _marked2 = _interopRequireDefault(_marked);

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

var _examples = require('./content/examples.js');

var _examples2 = _interopRequireDefault(_examples);

var _sassVariables = require('./content/sass-variables.js');

var _sassVariables2 = _interopRequireDefault(_sassVariables);

var _sassMixins = require('./content/sass-mixins.js');

var _sassMixins2 = _interopRequireDefault(_sassMixins);

var _overview = require('./content/overview.js');

var _overview2 = _interopRequireDefault(_overview);

var _variables = require('./content/variables.js');

var _variables2 = _interopRequireDefault(_variables);

var _mixins = require('./content/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

(0, _marked2.default)();

var codeContentsArray = [_examples2.default, _sassVariables2.default, _sassMixins2.default];

$(function () {

  var featureDetailSource = $('#feature-detail').html(),
      featureDetailTemplate = Handlebars.compile(featureDetailSource);

  var makeFeatureDetail = function makeFeatureDetail(obj, i, array) {
    var context = obj,
        html = featureDetailTemplate(context);

    $('#' + obj.sectionId).prepend(html);
  };

  _overview2.default.forEach(makeFeatureDetail);

  _variables2.default.forEach(makeFeatureDetail);

  _mixins2.default.forEach(makeFeatureDetail);

  (0, _router2.default)();

  var markedSection = function markedSection(obj) {
    $.each(obj, function (key, value) {
      $('#' + key).html(marked(value));
    });
  };

  $.each(codeContentsArray, function (i, obj) {
    markedSection(obj);
  });

  $('#siteOwner').append(_main2.default.getOwnerContent());
});

},{"./content/examples.js":2,"./content/mixins.js":3,"./content/overview.js":4,"./content/sass-mixins.js":5,"./content/sass-variables.js":6,"./content/variables.js":7,"./main.js":8,"./marked.js":9,"./router.js":10}],2:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var examplesObj = {
  responsiveExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs-12 col-sm-8 col-md-6 col-lg-4\"></div>\n  </div>\n  ",
  offsetsExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs-offset-3 col-xs-9\"></div>\n  </div>\n  ",
  autoWidthExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  </div>\n  ",
  nestedExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs\">\n  " + indentDouble + "<div class=\"row\">\n  " + indentTriple + "<div class=\"col-xs\"></div>\n  " + indentDouble + "</div>\n  " + indent + "</div>\n  </div>\n  ",
  alignmentExample: "\n  <div class=\"row start-xs\">\n  " + indent + "<div class=\"col-xs-6\">content</div>\n  </div>\n  ",
  distributionExample: "\n  <div class=\"row around-xs\">\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  </div>\n  ",
  reorderExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs-2\">1</div>\n  " + indent + "<div class=\"col-xs-2\">2</div>\n  " + indent + "<div class=\"col-xs-2 first-xs\">3</div>\n  " + indent + "...\n  </div>\n  ",
  reverseExample: "\n  <div class=\"row reverse\">\n  " + indent + "<div class=\"col-xs\">1</div>\n  " + indent + "<div class=\"col-xs\">2</div>\n  " + indent + "<div class=\"col-xs\">3</div>\n  </div>\n  ",
  variablesExample: "\n  $grid-columns: 12;\n\n  $xs-max: 640px;\n  $sm-max: 1024px;\n  $md-max: 1440px;\n  $lg-max: 1920px;\n\n  $content-well-max-width: 2400px;\n  ",
  mixinsExample: "\n  .container {\n  " + indent + "@include row();\n  " + indent + ".box {\n  " + indentDouble + "@inlcude col(6);\n  " + indentDouble + "@inlcude col(md, 3);\n  " + indent + "}\n  " + indent + ".extras {\n  " + indentDouble + "@include hide(lg);\n  " + indent + "}\n  }\n  ",
  visibilityExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col hide-md-up\"></div>\n  " + indent + "<div class=\"col hide-xs-up show-md-up\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col hide-sm-only\"></div>\n  </div>\n  ",
  eqHeightExample: "\n  <div class=\"row eq-height\">\n  " + indent + "<div class=\"col\">Content of varying height</div>\n  " + indent + "<div class=\"col\">Content of varying height</div>\n  </div>\n  "
};

module.exports = examplesObj;

// var examplesArray = [
//   {
//     id: 'responsiveExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"></div>
//     </div>
//     `
//   },
//   {
//     id: 'offsetsExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-offset-3 col-xs-9"></div>
//     </div>
//     `
//   },
//   {
//     id: 'autoWidthExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     </div>
//     `
//   },
//   {
//     id: 'nestedExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs">
//     ${indentDouble}<div class="row">
//     ${indentTriple}<div class="col-xs"></div>
//     ${indentDouble}</div>
//     ${indent}</div>
//     </div>
//     `
//   },
//   {
//     id: 'alignmentExample',
//     markup: `
//     <div class="row start-xs">
//     ${indent}<div class="col-xs-6">content</div>
//     </div>
//     `
//   },
//   {
//     id: 'distributionExample',
//     markup: `
//     <div class="row around-xs">
//     ${indent}<div class="col-xs-2"></div>
//     ${indent}<div class="col-xs-2"></div>
//     ${indent}<div class="col-xs-2"></div>
//     </div>
//     `
//   },
//   {
//     id: 'reorderExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col-xs-2">1</div>
//     ${indent}<div class="col-xs-2">2</div>
//     ${indent}<div class="col-xs-2 first-xs">3</div>
//     ${indent}...
//     </div>
//     `
//   },
//   {
//     id: 'reverseExample',
//     markup: `
//     <div class="row reverse">
//     ${indent}<div class="col-xs">1</div>
//     ${indent}<div class="col-xs">2</div>
//     ${indent}<div class="col-xs">3</div>
//     </div>
//     `
//   },
//   {
//     id: 'variablesExample',
//     markup: `
//     $grid-columns: 12;
//
//     $xs-max: 640px;
//     $sm-max: 1024px;
//     $md-max: 1440px;
//     $lg-max: 1920px;
//
//     $content-well-max-width: 2400px;
//     `
//   },
//   {
//     id: 'mixinsExample',
//     markup: `
//     .container {
//     ${indent}@include row();
//     ${indent}.box {
//     ${indentDouble}@inlcude col(6);
//     ${indentDouble}@inlcude col(md, 3);
//     ${indent}}
//     ${indent}.extras {
//     ${indentDouble}@include hide(lg);
//     ${indent}}
//     }
//     `
//   },
//   {
//     id: 'visibilityExample',
//     markup: `
//     <div class="row">
//     ${indent}<div class="col hide-md-up"></div>
//     ${indent}<div class="col hide-xs-up show-md-up"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col"></div>
//     ${indent}<div class="col hide-sm-only"></div>
//     </div>
//     `
//   },
//   {
//     id: 'eqHeightExample',
//     markup: `
//     <div class="row eq-height">
//     ${indent}<div class="col">Content of varying height</div>
//     ${indent}<div class="col">Content of varying height</div>
//     </div>
//     `
//   }
// ]

},{}],3:[function(require,module,exports){
'use strict';

var mixinsCollection = [{
  sectionId: 'rowMixins',
  codeBlockId: 'rowMixinsExample',
  title: 'Row Mixins',
  description: 'Establish a container as a row and customize.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'colMixins',
  codeBlockId: 'colMixinsExample',
  title: 'Column Mixins',
  description: 'Establish a container as a column and customize.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'arrangeMixins',
  codeBlockId: 'arrangeMixinsExample',
  title: 'Arrangement Mixins',
  description: 'Customize the arrangement, placement and orientation.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'visibilityMixins',
  codeBlockId: 'visibilityMixinsExample',
  title: 'Visibility Mixins',
  description: 'Hide and show content within all or various breakpoint ranges.',
  hasLink: false,
  href: '',
  linkContent: ''
}];

module.exports = mixinsCollection;

},{}],4:[function(require,module,exports){
'use strict';

var overviewCollection = [{
  sectionId: 'responsive',
  codeBlockId: 'responsiveExample',
  title: 'Responsive and Fluid',
  description: 'Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths. Percent based widths allow fluid resizing of columns and rows.',
  hasLink: true,
  href: '/row-classes',
  linkContent: 'See all row classes'
}, {
  sectionId: 'offsets',
  codeBlockId: 'offsetsExample',
  title: 'Offsets',
  description: 'Offset a column.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'autoWidth',
  codeBlockId: 'autoWidthExample',
  title: 'Auto Width',
  description: 'Add any number of auto sizing columns to a row. Let the grid figure it out.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'alignment',
  codeBlockId: 'alignmentExample',
  title: 'Alignment',
  description: 'Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'distribution',
  codeBlockId: 'distributionExample',
  title: 'Distribution',
  description: 'Add classes to distribute the contents of a row or column.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'reorder',
  codeBlockId: 'reorderExample',
  title: 'Reordering',
  description: 'Add classes to reorder columns.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'reverse',
  codeBlockId: 'reverseExample',
  title: 'Reversing',
  description: 'Add a class to reverse columns or column content.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'eqHeight',
  codeBlockId: 'eqHeightExample',
  title: 'Column Height Equalizer',
  description: 'By default, the .row class overrides flexbox\'s natural stretching of column height, allowing for custom horizontal alignment of row contents. The .eq-height row utility class applies the stretch behavior back to the columns, giving the developer control of the behavior.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'nested',
  codeBlockId: 'nestedExample',
  title: 'Nested Grids',
  description: 'Nest grids inside grids inside grids.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'visibility',
  codeBlockId: 'visibilityExample',
  title: 'Visibility',
  description: 'Visibility classes allow for responsive showing and hiding of content. See the full list of <a href="#">classes</a>.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'variables',
  codeBlockId: 'variablesExample',
  title: 'Variables',
  description: 'Customizable Sass variables allow you to create a grid and responsive framework to meet your needs. You can easily change the number of columns in your grid from the default 12. Update your breakpoint ranges by adjusting these variables and all of the media queries, classes and mixins will update accordingly.',
  hasLink: true,
  href: '/variables',
  linkContent: 'See all variables'
}, {
  sectionId: 'mixins',
  codeBlockId: 'mixinsExample',
  title: 'Mixins',
  description: 'Mixins are available for every Sass Flexbox Grid set of delarations.',
  hasLink: true,
  href: '/mixins',
  linkContent: 'See the full list of mixins'
}];

module.exports = overviewCollection;

},{}],5:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassMixinsObj = {
  rowMixinsExample: "\n  @include row();\n  @include row-reverse();\n  @include row-eq-height();\n  @include row-auto-height();\n  ",
  colMixinsExample: "\n  @include col(<breakpoint prefix>, <number of columns>);\n  " + indent + "// no breakpoint arg = xs-<number of columns>\n  " + indent + "@include col(<number of columns>);\n  " + indent + "// no args =  auto-width column at the xs breakpoint\n  " + indent + "@include col();\n  @include col-offset(<breakpoint prefix>, <number of columns>);\n  @include col-reverse();\n  ",
  arrangeMixinsExample: "\n  // apply to a row to arrange descendants\n  @include start(<breakpoint prefix>);\n  @include center(<breakpoint prefix>);\n  @include end(<breakpoint prefix>);\n  @include top(<breakpoint prefix>);\n  @include middle(<breakpoint prefix>);\n  @include bottom(<breakpoint prefix>);\n  @include around(<breakpoint prefix>);\n  @include between(<breakpoint prefix>);\n  " + indent + "\n  // Apply to a column to arrange this element\n  @include first(<breakpoint prefix>);\n  @include last(<breakpoint prefix>);\n  ",
  visibilityMixinsExample: "\n  @include show(<breakpoint range prefix>);\n  @include hide(<breakpoint range prefix>);\n  "
};

module.exports = sassMixinsObj;

},{}],6:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassVarsObj = {
  gridVarsExample: "\n  $grid-columns: 12; // Set number of columns in the grid\n  " + indent + "\n  $xs-max: 640px; // Set xs breakpoint's max width\n  $sm-max: 1024px; // Set sm breakpoint's max width\n  $md-max: 1440px; // Set md breakpoint's max width\n  $lg-max: 1920px; // Set lg breakpoint's max width\n  " + indent + "\n  $sm-start: ($xs-max + 1); // Set sm breakpoint's min width\n  $md-start: ($sm-max + 1); // Set md breakpoint's min width\n  $lg-start: ($md-max + 1); // Set lg breakpoint's min width\n  $xl-start: ($lg-max + 1); // Set xl breakpoint's min width\n  " + indent + "\n  $content-well-max-width: 2400px; // Set the max-width of the content well\n  ",
  breakpointVarsExample: "\n  $breakpoint-xs-only: \"only screen and (max-width: #{$xs-max})\";\n  $breakpoint-sm-up: \"only screen and (min-width: #{$sm-start})\";\n  $breakpoint-sm-only: \"only screen and (min-width: #{$sm-start}) and (max-width: #{$sm-max})\";\n  $breakpoint-md-up: \"only screen and (min-width: #{$md-start})\";\n  $breakpoint-md-only: \"only screen and (min-width: #{$md-start}) and (max-width: #{$md-max})\";\n  $breakpoint-lg-up: \"only screen and (min-width: #{$lg-start})\";\n  $breakpoint-lg-only: \"only screen and (min-width: #{$lg-start}) and (max-width: #{$lg-max})\";\n  $breakpoint-xl-up: \"only screen and (min-width: #{$xl-start})\";\n  "
};

module.exports = sassVarsObj;

},{}],7:[function(require,module,exports){
'use strict';

var variablesCollection = [{
  sectionId: 'gridVars',
  codeBlockId: 'gridVarsExample',
  title: 'Grid Control',
  description: 'You can easily change the number of columns in your grid from the default 12. Update your breakpoint ranges by adjusting these variables and all of the media queries, classes and mixins will update accordingly.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'breakpointVars',
  codeBlockId: 'breakpointVarsExample',
  title: 'Breakpoint Ranges',
  description: 'Breakpoint range variables are automagically created based on the grid variables.',
  hasLink: false,
  href: '',
  linkContent: ''
}];

module.exports = variablesCollection;

},{}],8:[function(require,module,exports){
'use strict';

var mainObj = {
  owner: 'Drew Botka',
  githubUrl: 'https://github.com/drewbot',
  currentYear: new Date().getFullYear(),
  isTouchDevice: function isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright: function getCopyright() {
    return '&copy; ' + this.currentYear + ' ' + this.owner + '. All Rights Reserved.';
  },
  getOwnerContent: function getOwnerContent() {
    return 'Made by <a href="' + this.githubUrl + '">' + this.owner + '</a>';
  }
};

module.exports = mainObj;

},{}],9:[function(require,module,exports){
"use strict";

var setMarkedOptions = function setMarkedOptions() {
          return marked.setOptions({
                    breaks: true,
                    sanitize: true
          });
};

module.exports = setMarkedOptions;

},{}],10:[function(require,module,exports){
'use strict';

var root = null,
    useHash = false,
    router = new Navigo(root, useHash),
    $viewContent = $('.view-content'),
    $allViews = $('[id|="view"]'),
    $homeContent = $('#view-home'),
    $mixinsContent = $('#view-mixins'),
    $variablesContent = $('#view-variables');

var replaceView = function replaceView($view) {
  $allViews.hide();
  $view.show();
};

var customRouter = function customRouter() {
  return router.on({
    'row-classes': function rowClasses() {
      console.log('Row Classes');
    },
    'variables': function variables() {
      replaceView($variablesContent);
    },
    'mixins': function mixins() {
      replaceView($mixinsContent);
    },
    '*': function _() {
      replaceView($homeContent);
    }
  }).resolve();
};

module.exports = customRouter;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2V4YW1wbGVzLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9taXhpbnMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L292ZXJ2aWV3LmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLW1peGlucy5qcyIsImFwcC9zY3JpcHRzL2NvbnRlbnQvc2Fzcy12YXJpYWJsZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L3ZhcmlhYmxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiLCJhcHAvc2NyaXB0cy9yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBUSxHQUFSLENBQVksZUFBUSxhQUFSLEtBQTBCLGNBQTFCLEdBQTBDLFNBQXREOztBQUVBOztBQUVBLElBQUksb0JBQW9CLG1FQUF4Qjs7QUFFQSxFQUFFLFlBQVc7O0FBRVgsTUFBSSxzQkFBd0IsRUFBRSxpQkFBRixFQUFxQixJQUFyQixFQUE1QjtBQUFBLE1BQ0ksd0JBQXdCLFdBQVcsT0FBWCxDQUFtQixtQkFBbkIsQ0FENUI7O0FBR0EsTUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUMsUUFBSSxVQUFVLEdBQWQ7QUFBQSxRQUNJLE9BQVUsc0JBQXNCLE9BQXRCLENBRGQ7O0FBR0EsWUFBTSxJQUFJLFNBQVYsRUFBdUIsT0FBdkIsQ0FBK0IsSUFBL0I7QUFDRCxHQUxEOztBQU9BLHFCQUFtQixPQUFuQixDQUE0QixpQkFBNUI7O0FBRUEsc0JBQW9CLE9BQXBCLENBQTZC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QUUsWUFBRixDQUxuQjtBQUFBLElBTUksaUJBQWlCLEVBQUUsY0FBRixDQU5yQjtBQUFBLElBT0ksb0JBQW9CLEVBQUUsaUJBQUYsQ0FQeEI7O0FBU0EsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFTLEtBQVQsRUFBZ0I7QUFDaEMsWUFBVSxJQUFWO0FBQ0EsUUFBTSxJQUFOO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJLGVBQWUsU0FBZixZQUFlLEdBQVc7QUFDNUIsU0FBTyxPQUNFLEVBREYsQ0FDSztBQUNGLG1CQUFlLHNCQUFXO0FBQ3hCLGNBQVEsR0FBUixDQUFZLGFBQVo7QUFDRCxLQUhDO0FBSUYsaUJBQWEscUJBQVc7QUFDdEIsa0JBQVksaUJBQVo7QUFDRCxLQU5DO0FBT0YsY0FBVSxrQkFBVztBQUNuQixrQkFBWSxjQUFaO0FBQ0QsS0FUQztBQVVGLFNBQUssYUFBVztBQUNkLGtCQUFZLFlBQVo7QUFDRDtBQVpDLEdBREwsRUFlRSxPQWZGLEVBQVA7QUFnQkQsQ0FqQkQ7O0FBbUJBLE9BQU8sT0FBUCxHQUFpQixZQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgY3VzdG9tUm91dGVyIGZyb20gJy4vcm91dGVyLmpzJztcbmltcG9ydCBzZXRNYXJrZWRPcHRpb25zIGZyb20gJy4vbWFya2VkLmpzJztcbmltcG9ydCBtYWluT2JqIGZyb20gJy4vbWFpbi5qcyc7XG5pbXBvcnQgZXhhbXBsZXNPYmogZnJvbSAnLi9jb250ZW50L2V4YW1wbGVzLmpzJztcbmltcG9ydCBzYXNzVmFyc09iaiBmcm9tICcuL2NvbnRlbnQvc2Fzcy12YXJpYWJsZXMuanMnO1xuaW1wb3J0IHNhc3NNaXhpbnNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtbWl4aW5zLmpzJztcbmltcG9ydCBvdmVydmlld0NvbGxlY3Rpb24gZnJvbSAnLi9jb250ZW50L292ZXJ2aWV3LmpzJztcbmltcG9ydCB2YXJpYWJsZXNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC92YXJpYWJsZXMuanMnO1xuaW1wb3J0IG1peGluc0NvbGxlY3Rpb24gZnJvbSAnLi9jb250ZW50L21peGlucy5qcyc7XG5cbmNvbnNvbGUubG9nKG1haW5PYmouaXNUb3VjaERldmljZSgpID8gJ1RvdWNoIERldmljZSc6ICdEZXNrdG9wJyk7XG5cbnNldE1hcmtlZE9wdGlvbnMoKTtcblxudmFyIGNvZGVDb250ZW50c0FycmF5ID0gW2V4YW1wbGVzT2JqLCBzYXNzVmFyc09iaiwgc2Fzc01peGluc09ial07XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGZlYXR1cmVEZXRhaWxTb3VyY2UgICA9ICQoJyNmZWF0dXJlLWRldGFpbCcpLmh0bWwoKSxcbiAgICAgIGZlYXR1cmVEZXRhaWxUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShmZWF0dXJlRGV0YWlsU291cmNlKTtcblxuICB2YXIgbWFrZUZlYXR1cmVEZXRhaWwgPSBmdW5jdGlvbihvYmosIGksIGFycmF5KSB7XG4gICAgdmFyIGNvbnRleHQgPSBvYmosXG4gICAgICAgIGh0bWwgICAgPSBmZWF0dXJlRGV0YWlsVGVtcGxhdGUoY29udGV4dCk7XG5cbiAgICAkKGAjJHtvYmouc2VjdGlvbklkfWApLnByZXBlbmQoaHRtbCk7XG4gIH1cblxuICBvdmVydmlld0NvbGxlY3Rpb24uZm9yRWFjaCggbWFrZUZlYXR1cmVEZXRhaWwgKTtcblxuICB2YXJpYWJsZXNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgbWl4aW5zQ29sbGVjdGlvbi5mb3JFYWNoKCBtYWtlRmVhdHVyZURldGFpbCApO1xuXG4gIGN1c3RvbVJvdXRlcigpO1xuXG4gIHZhciBtYXJrZWRTZWN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgJC5lYWNoKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgJChgIyR7a2V5fWApLmh0bWwobWFya2VkKHZhbHVlKSk7XG4gICAgfSlcbiAgfVxuXG4gICQuZWFjaChjb2RlQ29udGVudHNBcnJheSwgZnVuY3Rpb24oaSwgb2JqKSB7XG4gICAgbWFya2VkU2VjdGlvbihvYmopO1xuICB9KVxuXG4gICQoJyNzaXRlT3duZXInKS5hcHBlbmQobWFpbk9iai5nZXRPd25lckNvbnRlbnQoKSk7XG5cbn0pO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIGV4YW1wbGVzT2JqID0ge1xuICByZXNwb25zaXZlRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG9mZnNldHNFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYXV0b1dpZHRoRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgbmVzdGVkRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gICR7aW5kZW50RG91YmxlfTwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFsaWdubWVudEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBzdGFydC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBkaXN0cmlidXRpb25FeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgYXJvdW5kLXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICByZW9yZGVyRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjE8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4gICR7aW5kZW50fS4uLlxuICA8L2Rpdj5cbiAgYCxcbiAgcmV2ZXJzZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICB2YXJpYWJsZXNFeGFtcGxlOiBgXG4gICRncmlkLWNvbHVtbnM6IDEyO1xuXG4gICR4cy1tYXg6IDY0MHB4O1xuICAkc20tbWF4OiAxMDI0cHg7XG4gICRtZC1tYXg6IDE0NDBweDtcbiAgJGxnLW1heDogMTkyMHB4O1xuXG4gICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4gIGAsXG4gIG1peGluc0V4YW1wbGU6IGBcbiAgLmNvbnRhaW5lciB7XG4gICR7aW5kZW50fUBpbmNsdWRlIHJvdygpO1xuICAke2luZGVudH0uYm94IHtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKDYpO1xuICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2wobWQsIDMpO1xuICAke2luZGVudH19XG4gICR7aW5kZW50fS5leHRyYXMge1xuICAke2luZGVudERvdWJsZX1AaW5jbHVkZSBoaWRlKGxnKTtcbiAgJHtpbmRlbnR9fVxuICB9XG4gIGAsXG4gIHZpc2liaWxpdHlFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kLXVwXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS14cy11cCBzaG93LW1kLXVwXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1zbS1vbmx5XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBlcUhlaWdodEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBlcS1oZWlnaHRcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbiAgPC9kaXY+XG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlc09iajtcblxuLy8gdmFyIGV4YW1wbGVzQXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogJ3Jlc3BvbnNpdmVFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbWQtNiBjb2wtbGctNFwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnb2Zmc2V0c0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLW9mZnNldC0zIGNvbC14cy05XCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdhdXRvV2lkdGhFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ25lc3RlZEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4vLyAgICAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50VHJpcGxlfTxkaXYgY2xhc3M9XCJjb2wteHNcIj48L2Rpdj5cbi8vICAgICAke2luZGVudERvdWJsZX08L2Rpdj5cbi8vICAgICAke2luZGVudH08L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ2FsaWdubWVudEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdkaXN0cmlidXRpb25FeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAncmVvcmRlckV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMiBmaXJzdC14c1wiPjM8L2Rpdj5cbi8vICAgICAke2luZGVudH0uLi5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3JldmVyc2VFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IHJldmVyc2VcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjM8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3ZhcmlhYmxlc0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgICRncmlkLWNvbHVtbnM6IDEyO1xuLy9cbi8vICAgICAkeHMtbWF4OiA2NDBweDtcbi8vICAgICAkc20tbWF4OiAxMDI0cHg7XG4vLyAgICAgJG1kLW1heDogMTQ0MHB4O1xuLy8gICAgICRsZy1tYXg6IDE5MjBweDtcbi8vXG4vLyAgICAgJGNvbnRlbnQtd2VsbC1tYXgtd2lkdGg6IDI0MDBweDtcbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ21peGluc0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIC5jb250YWluZXIge1xuLy8gICAgICR7aW5kZW50fUBpbmNsdWRlIHJvdygpO1xuLy8gICAgICR7aW5kZW50fS5ib3gge1xuLy8gICAgICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2wobWQsIDMpO1xuLy8gICAgICR7aW5kZW50fX1cbi8vICAgICAke2luZGVudH0uZXh0cmFzIHtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5jbHVkZSBoaWRlKGxnKTtcbi8vICAgICAke2luZGVudH19XG4vLyAgICAgfVxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAndmlzaWJpbGl0eUV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtbWQtdXBcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMtdXAgc2hvdy1tZC11cFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1zbS1vbmx5XCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdlcUhlaWdodEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3cgZXEtaGVpZ2h0XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+Q29udGVudCBvZiB2YXJ5aW5nIGhlaWdodDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfVxuLy8gXVxuIiwidmFyIG1peGluc0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyb3dNaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAncm93TWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSb3cgTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ0VzdGFibGlzaCBhIGNvbnRhaW5lciBhcyBhIHJvdyBhbmQgY3VzdG9taXplLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdjb2xNaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnY29sTWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdDb2x1bW4gTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ0VzdGFibGlzaCBhIGNvbnRhaW5lciBhcyBhIGNvbHVtbiBhbmQgY3VzdG9taXplLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdhcnJhbmdlTWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ2FycmFuZ2VNaXhpbnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0FycmFuZ2VtZW50IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdDdXN0b21pemUgdGhlIGFycmFuZ2VtZW50LCBwbGFjZW1lbnQgYW5kIG9yaWVudGF0aW9uLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2aXNpYmlsaXR5TWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Zpc2liaWxpdHlNaXhpbnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHkgTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZGUgYW5kIHNob3cgY29udGVudCB3aXRoaW4gYWxsIG9yIHZhcmlvdXMgYnJlYWtwb2ludCByYW5nZXMuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbnNDb2xsZWN0aW9uO1xuIiwidmFyIG92ZXJ2aWV3Q29sbGVjdGlvbiA9IFtcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Jlc3BvbnNpdmUnLFxuICAgIGNvZGVCbG9ja0lkOiAncmVzcG9uc2l2ZUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnUmVzcG9uc2l2ZSBhbmQgRmx1aWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVzcG9uc2l2ZSBtb2RpZmllcnMgZW5hYmxlIHNwZWNpZnlpbmcgZGlmZmVyZW50IGNvbHVtbiBzaXplcywgb2Zmc2V0cywgYWxpZ25tZW50IGFuZCBkaXN0cmlidXRpb24gYXQgeHMsIHNtLCBtZCAmIGxnIHZpZXdwb3J0IHdpZHRocy4gUGVyY2VudCBiYXNlZCB3aWR0aHMgYWxsb3cgZmx1aWQgcmVzaXppbmcgb2YgY29sdW1ucyBhbmQgcm93cy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9yb3ctY2xhc3NlcycsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIHJvdyBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnb2Zmc2V0cycsXG4gICAgY29kZUJsb2NrSWQ6ICdvZmZzZXRzRXhhbXBsZScsXG4gICAgdGl0bGU6ICdPZmZzZXRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ09mZnNldCBhIGNvbHVtbi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYXV0b1dpZHRoJyxcbiAgICBjb2RlQmxvY2tJZDogJ2F1dG9XaWR0aEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnQXV0byBXaWR0aCcsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgYW55IG51bWJlciBvZiBhdXRvIHNpemluZyBjb2x1bW5zIHRvIGEgcm93LiBMZXQgdGhlIGdyaWQgZmlndXJlIGl0IG91dC4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYWxpZ25tZW50JyxcbiAgICBjb2RlQmxvY2tJZDogJ2FsaWdubWVudEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnQWxpZ25tZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBjbGFzc2VzIHRvIGFsaWduIGVsZW1lbnRzIHRvIHRoZSBzdGFydCBvciBlbmQgb2YgYSByb3cgYXMgd2VsbCBhcyB0aGUgdG9wLCBib3R0b20sIG9yIGNlbnRlciBvZiBhIGNvbHVtbi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnZGlzdHJpYnV0aW9uJyxcbiAgICBjb2RlQmxvY2tJZDogJ2Rpc3RyaWJ1dGlvbkV4YW1wbGUnLFxuICAgIHRpdGxlOiAnRGlzdHJpYnV0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBjbGFzc2VzIHRvIGRpc3RyaWJ1dGUgdGhlIGNvbnRlbnRzIG9mIGEgcm93IG9yIGNvbHVtbi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAncmVvcmRlcicsXG4gICAgY29kZUJsb2NrSWQ6ICdyZW9yZGVyRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSZW9yZGVyaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBjbGFzc2VzIHRvIHJlb3JkZXIgY29sdW1ucy4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAncmV2ZXJzZScsXG4gICAgY29kZUJsb2NrSWQ6ICdyZXZlcnNlRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSZXZlcnNpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGEgY2xhc3MgdG8gcmV2ZXJzZSBjb2x1bW5zIG9yIGNvbHVtbiBjb250ZW50LicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdlcUhlaWdodCcsXG4gICAgY29kZUJsb2NrSWQ6ICdlcUhlaWdodEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnQ29sdW1uIEhlaWdodCBFcXVhbGl6ZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnQnkgZGVmYXVsdCwgdGhlIC5yb3cgY2xhc3Mgb3ZlcnJpZGVzIGZsZXhib3hcXCdzIG5hdHVyYWwgc3RyZXRjaGluZyBvZiBjb2x1bW4gaGVpZ2h0LCBhbGxvd2luZyBmb3IgY3VzdG9tIGhvcml6b250YWwgYWxpZ25tZW50IG9mIHJvdyBjb250ZW50cy4gVGhlIC5lcS1oZWlnaHQgcm93IHV0aWxpdHkgY2xhc3MgYXBwbGllcyB0aGUgc3RyZXRjaCBiZWhhdmlvciBiYWNrIHRvIHRoZSBjb2x1bW5zLCBnaXZpbmcgdGhlIGRldmVsb3BlciBjb250cm9sIG9mIHRoZSBiZWhhdmlvci4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnbmVzdGVkJyxcbiAgICBjb2RlQmxvY2tJZDogJ25lc3RlZEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnTmVzdGVkIEdyaWRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ05lc3QgZ3JpZHMgaW5zaWRlIGdyaWRzIGluc2lkZSBncmlkcy4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAndmlzaWJpbGl0eScsXG4gICAgY29kZUJsb2NrSWQ6ICd2aXNpYmlsaXR5RXhhbXBsZScsXG4gICAgdGl0bGU6ICdWaXNpYmlsaXR5JyxcbiAgICBkZXNjcmlwdGlvbjogJ1Zpc2liaWxpdHkgY2xhc3NlcyBhbGxvdyBmb3IgcmVzcG9uc2l2ZSBzaG93aW5nIGFuZCBoaWRpbmcgb2YgY29udGVudC4gU2VlIHRoZSBmdWxsIGxpc3Qgb2YgPGEgaHJlZj1cIiNcIj5jbGFzc2VzPC9hPi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAndmFyaWFibGVzJyxcbiAgICBjb2RlQmxvY2tJZDogJ3ZhcmlhYmxlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnVmFyaWFibGVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbWl6YWJsZSBTYXNzIHZhcmlhYmxlcyBhbGxvdyB5b3UgdG8gY3JlYXRlIGEgZ3JpZCBhbmQgcmVzcG9uc2l2ZSBmcmFtZXdvcmsgdG8gbWVldCB5b3VyIG5lZWRzLiBZb3UgY2FuIGVhc2lseSBjaGFuZ2UgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHlvdXIgZ3JpZCBmcm9tIHRoZSBkZWZhdWx0IDEyLiBVcGRhdGUgeW91ciBicmVha3BvaW50IHJhbmdlcyBieSBhZGp1c3RpbmcgdGhlc2UgdmFyaWFibGVzIGFuZCBhbGwgb2YgdGhlIG1lZGlhIHF1ZXJpZXMsIGNsYXNzZXMgYW5kIG1peGlucyB3aWxsIHVwZGF0ZSBhY2NvcmRpbmdseS4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy92YXJpYWJsZXMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCB2YXJpYWJsZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdtaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnbWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdNaXhpbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIGV2ZXJ5IFNhc3MgRmxleGJveCBHcmlkIHNldCBvZiBkZWxhcmF0aW9ucy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9taXhpbnMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIHRoZSBmdWxsIGxpc3Qgb2YgbWl4aW5zJ1xuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJ2aWV3Q29sbGVjdGlvbjtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBzYXNzTWl4aW5zT2JqID0ge1xuICByb3dNaXhpbnNFeGFtcGxlOiBgXG4gIEBpbmNsdWRlIHJvdygpO1xuICBAaW5jbHVkZSByb3ctcmV2ZXJzZSgpO1xuICBAaW5jbHVkZSByb3ctZXEtaGVpZ2h0KCk7XG4gIEBpbmNsdWRlIHJvdy1hdXRvLWhlaWdodCgpO1xuICBgLFxuICBjb2xNaXhpbnNFeGFtcGxlOiBgXG4gIEBpbmNsdWRlIGNvbCg8YnJlYWtwb2ludCBwcmVmaXg+LCA8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgJHtpbmRlbnR9Ly8gbm8gYnJlYWtwb2ludCBhcmcgPSB4cy08bnVtYmVyIG9mIGNvbHVtbnM+XG4gICR7aW5kZW50fUBpbmNsdWRlIGNvbCg8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgJHtpbmRlbnR9Ly8gbm8gYXJncyA9ICBhdXRvLXdpZHRoIGNvbHVtbiBhdCB0aGUgeHMgYnJlYWtwb2ludFxuICAke2luZGVudH1AaW5jbHVkZSBjb2woKTtcbiAgQGluY2x1ZGUgY29sLW9mZnNldCg8YnJlYWtwb2ludCBwcmVmaXg+LCA8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgQGluY2x1ZGUgY29sLXJldmVyc2UoKTtcbiAgYCxcbiAgYXJyYW5nZU1peGluc0V4YW1wbGU6IGBcbiAgLy8gYXBwbHkgdG8gYSByb3cgdG8gYXJyYW5nZSBkZXNjZW5kYW50c1xuICBAaW5jbHVkZSBzdGFydCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgY2VudGVyKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBlbmQoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIHRvcCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgbWlkZGxlKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBib3R0b20oPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGFyb3VuZCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgYmV0d2Vlbig8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgJHtpbmRlbnR9XG4gIC8vIEFwcGx5IHRvIGEgY29sdW1uIHRvIGFycmFuZ2UgdGhpcyBlbGVtZW50XG4gIEBpbmNsdWRlIGZpcnN0KDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBsYXN0KDxicmVha3BvaW50IHByZWZpeD4pO1xuICBgLFxuICB2aXNpYmlsaXR5TWl4aW5zRXhhbXBsZTogYFxuICBAaW5jbHVkZSBzaG93KDxicmVha3BvaW50IHJhbmdlIHByZWZpeD4pO1xuICBAaW5jbHVkZSBoaWRlKDxicmVha3BvaW50IHJhbmdlIHByZWZpeD4pO1xuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2Fzc01peGluc09iajtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBzYXNzVmFyc09iaiA9IHtcbiAgZ3JpZFZhcnNFeGFtcGxlOiBgXG4gICRncmlkLWNvbHVtbnM6IDEyOyAvLyBTZXQgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWRcbiAgJHtpbmRlbnR9XG4gICR4cy1tYXg6IDY0MHB4OyAvLyBTZXQgeHMgYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAkc20tbWF4OiAxMDI0cHg7IC8vIFNldCBzbSBicmVha3BvaW50J3MgbWF4IHdpZHRoXG4gICRtZC1tYXg6IDE0NDBweDsgLy8gU2V0IG1kIGJyZWFrcG9pbnQncyBtYXggd2lkdGhcbiAgJGxnLW1heDogMTkyMHB4OyAvLyBTZXQgbGcgYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAke2luZGVudH1cbiAgJHNtLXN0YXJ0OiAoJHhzLW1heCArIDEpOyAvLyBTZXQgc20gYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAkbWQtc3RhcnQ6ICgkc20tbWF4ICsgMSk7IC8vIFNldCBtZCBicmVha3BvaW50J3MgbWluIHdpZHRoXG4gICRsZy1zdGFydDogKCRtZC1tYXggKyAxKTsgLy8gU2V0IGxnIGJyZWFrcG9pbnQncyBtaW4gd2lkdGhcbiAgJHhsLXN0YXJ0OiAoJGxnLW1heCArIDEpOyAvLyBTZXQgeGwgYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAke2luZGVudH1cbiAgJGNvbnRlbnQtd2VsbC1tYXgtd2lkdGg6IDI0MDBweDsgLy8gU2V0IHRoZSBtYXgtd2lkdGggb2YgdGhlIGNvbnRlbnQgd2VsbFxuICBgLFxuICBicmVha3BvaW50VmFyc0V4YW1wbGU6IGBcbiAgJGJyZWFrcG9pbnQteHMtb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogI3skeHMtbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtc20tdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHNtLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtc20tb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skc20tc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skc20tbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtbWQtdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1kLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtbWQtb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWQtc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skbWQtbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtbGctdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGxnLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtbGctb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbGctc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skbGctbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQteGwtdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHhsLXN0YXJ0fSlcIjtcbiAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhc3NWYXJzT2JqO1xuIiwidmFyIHZhcmlhYmxlc0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdncmlkVmFycycsXG4gICAgY29kZUJsb2NrSWQ6ICdncmlkVmFyc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnR3JpZCBDb250cm9sJyxcbiAgICBkZXNjcmlwdGlvbjogJ1lvdSBjYW4gZWFzaWx5IGNoYW5nZSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4geW91ciBncmlkIGZyb20gdGhlIGRlZmF1bHQgMTIuIFVwZGF0ZSB5b3VyIGJyZWFrcG9pbnQgcmFuZ2VzIGJ5IGFkanVzdGluZyB0aGVzZSB2YXJpYWJsZXMgYW5kIGFsbCBvZiB0aGUgbWVkaWEgcXVlcmllcywgY2xhc3NlcyBhbmQgbWl4aW5zIHdpbGwgdXBkYXRlIGFjY29yZGluZ2x5LicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdicmVha3BvaW50VmFycycsXG4gICAgY29kZUJsb2NrSWQ6ICdicmVha3BvaW50VmFyc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnQnJlYWtwb2ludCBSYW5nZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJlYWtwb2ludCByYW5nZSB2YXJpYWJsZXMgYXJlIGF1dG9tYWdpY2FsbHkgY3JlYXRlZCBiYXNlZCBvbiB0aGUgZ3JpZCB2YXJpYWJsZXMuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YXJpYWJsZXNDb2xsZWN0aW9uO1xuIiwidmFyIG1haW5PYmogPSB7XG4gIG93bmVyOiAnRHJldyBCb3RrYScsXG4gIGdpdGh1YlVybDogYGh0dHBzOi8vZ2l0aHViLmNvbS9kcmV3Ym90YCxcbiAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgaXNUb3VjaERldmljZSgpIHtcbiAgICByZXR1cm4gISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAhISgnbXNtYXh0b3VjaHBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvcik7XG4gIH0sXG4gIGdldENvcHlyaWdodCgpIHtcbiAgICByZXR1cm4gYCZjb3B5OyAke3RoaXMuY3VycmVudFllYXJ9ICR7dGhpcy5vd25lcn0uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuYFxuICB9LFxuICBnZXRPd25lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGBNYWRlIGJ5IDxhIGhyZWY9XCIke3RoaXMuZ2l0aHViVXJsfVwiPiR7dGhpcy5vd25lcn08L2E+YFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5PYmo7XG4iLCJ2YXIgc2V0TWFya2VkT3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICAgICAgc2FuaXRpemU6IHRydWVcbiAgICAgICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRNYXJrZWRPcHRpb25zO1xuIiwidmFyIHJvb3QgPSBudWxsLFxuICAgIHVzZUhhc2ggPSBmYWxzZSxcbiAgICByb3V0ZXIgPSBuZXcgTmF2aWdvKHJvb3QsIHVzZUhhc2gpLFxuICAgICR2aWV3Q29udGVudCA9ICQoJy52aWV3LWNvbnRlbnQnKSxcbiAgICAkYWxsVmlld3MgPSAkKCAnW2lkfD1cInZpZXdcIl0nICksXG4gICAgJGhvbWVDb250ZW50ID0gJCgnI3ZpZXctaG9tZScpLFxuICAgICRtaXhpbnNDb250ZW50ID0gJCgnI3ZpZXctbWl4aW5zJyksXG4gICAgJHZhcmlhYmxlc0NvbnRlbnQgPSAkKCcjdmlldy12YXJpYWJsZXMnKTtcblxudmFyIHJlcGxhY2VWaWV3ID0gZnVuY3Rpb24oJHZpZXcpIHtcbiAgJGFsbFZpZXdzLmhpZGUoKTtcbiAgJHZpZXcuc2hvdygpO1xufVxuXG52YXIgY3VzdG9tUm91dGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb3V0ZXJcbiAgICAgICAgICAub24oe1xuICAgICAgICAgICAgJ3Jvdy1jbGFzc2VzJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb3cgQ2xhc3NlcycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2YXJpYWJsZXMnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmVwbGFjZVZpZXcoJHZhcmlhYmxlc0NvbnRlbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtaXhpbnMnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmVwbGFjZVZpZXcoJG1peGluc0NvbnRlbnQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcqJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJlcGxhY2VWaWV3KCRob21lQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVzb2x2ZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbVJvdXRlcjtcbiJdfQ==