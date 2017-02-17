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

var _sassClasses = require('./content/sass-classes.js');

var _sassClasses2 = _interopRequireDefault(_sassClasses);

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

var _classes = require('./content/classes.js');

var _classes2 = _interopRequireDefault(_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

(0, _marked2.default)();

var codeContentsArray = [_examples2.default, _sassClasses2.default, _sassVariables2.default, _sassMixins2.default];

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

  _classes2.default.forEach(makeFeatureDetail);

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

  $('#menuOpen').on('click', function () {
    $('#menu').show();
  });

  $('#menuClose').on('click', function () {
    $('#menu').hide();
  });

  $('#menu a').on('click', function () {
    event.stopPropagation();
  });
});

},{"./content/classes.js":2,"./content/examples.js":3,"./content/mixins.js":4,"./content/overview.js":5,"./content/sass-classes.js":6,"./content/sass-mixins.js":7,"./content/sass-variables.js":8,"./content/variables.js":9,"./main.js":10,"./marked.js":11,"./router.js":12}],2:[function(require,module,exports){
'use strict';

var classesCollection = [{
  sectionId: 'rowClasses',
  codeBlockId: 'rowClassesExample',
  title: 'Row Classes',
  description: 'Define how content is arranged horizontally and vertically. You can also get specific about ordering and distribution of space.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'colClasses',
  codeBlockId: 'colClassesExample',
  title: 'Column Classes',
  description: 'Define column width and placement for each breakpoint or for a set range',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'visClasses',
  codeBlockId: 'visClassesExample',
  title: 'Visibility Classes',
  description: 'Hide and show content. Define visibility for each breakpoint or for a set range',
  hasLink: false,
  href: '',
  linkContent: ''
}];

module.exports = classesCollection;

},{}],3:[function(require,module,exports){
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
  visibilityExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col hide-md\"></div>\n  " + indent + "<div class=\"col hide-xs show-md\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col hide-sm-only\"></div>\n  </div>\n  ",
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var overviewCollection = [{
  sectionId: 'responsive',
  codeBlockId: 'responsiveExample',
  title: 'Responsive and Fluid',
  description: 'Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths. Percent based widths allow fluid resizing of columns and rows.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'offsets',
  codeBlockId: 'offsetsExample',
  title: 'Offsets',
  description: 'Offset a column.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'autoWidth',
  codeBlockId: 'autoWidthExample',
  title: 'Auto Width',
  description: 'Add any number of auto sizing columns to a row. Let the grid figure it out.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'alignment',
  codeBlockId: 'alignmentExample',
  title: 'Alignment',
  description: 'Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'distribution',
  codeBlockId: 'distributionExample',
  title: 'Distribution',
  description: 'Add classes to distribute the contents of a row or column.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'reorder',
  codeBlockId: 'reorderExample',
  title: 'Reordering',
  description: 'Add classes to reorder columns.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'reverse',
  codeBlockId: 'reverseExample',
  title: 'Reversing',
  description: 'Add a class to reverse columns or column content.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'eqHeight',
  codeBlockId: 'eqHeightExample',
  title: 'Column Height Equalizer',
  description: 'By default, the .row class overrides flexbox\'s natural stretching of column height, allowing for custom horizontal alignment of row contents. The .eq-height row utility class applies the stretch behavior back to the columns, giving the developer control of the behavior.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'nested',
  codeBlockId: 'nestedExample',
  title: 'Nested Grids',
  description: 'Nest grids inside grids inside grids.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See all classes'
}, {
  sectionId: 'visibility',
  codeBlockId: 'visibilityExample',
  title: 'Visibility',
  description: 'Visibility classes allow for responsive showing and hiding of content.',
  hasLink: true,
  href: '/classes',
  linkContent: 'See the full list of classes'
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

},{}],6:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassClassesObj = {
  rowClassesExample: "\n  .row\n  .reverse\n  .eq-height\n  .auto-height\n  .start\n  .center\n  .end\n  .top\n  .middle\n  .bottom\n  .around\n  .between\n  ",
  colClassesExample: "\n  .col\n  .col-xs\n  .col-sm\n  .col-md\n  .col-lg\n  .col-xl\n  .col-xs-<column number>\n  .col-sm-<column number>\n  .col-md-<column number>\n  .col-lg-<column number>\n  .col-xl-<column number>\n  .col-xs-offset-<column number>\n  .col-sm-offset-<column number>\n  .col-md-offset-<column number>\n  .col-lg-offset-<column number>\n  .col-xl-offset-<column number>\n  .first\n  .first-xs\n  .first-sm\n  .first-md\n  .first-lg\n  .first-xl\n  .last\n  .last-xs\n  .last-sm\n  .last-md\n  .last-lg\n  .last-xl\n  ",
  visClassesExample: "\n  .show\n  .show-xs\n  .show-xs-only\n  .show-sm\n  .show-sm-only\n  .show-md\n  .show-md-only\n  .show-lg\n  .show-lg-only\n  .show-xl\n  .hide\n  .hide-xs\n  .hide-xs-only\n  .hide-sm\n  .hide-sm-only\n  .hide-md\n  .hide-md-only\n  .hide-lg\n  .hide-lg-only\n  .hide-xl\n  "
};

module.exports = sassClassesObj;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
"use strict";

var setMarkedOptions = function setMarkedOptions() {
          return marked.setOptions({
                    breaks: true,
                    sanitize: true
          });
};

module.exports = setMarkedOptions;

},{}],12:[function(require,module,exports){
'use strict';

var root = null,
    useHash = false,
    router = new Navigo(root, useHash),
    $allViews = $('[id|="view"]'),
    $homeView = $('#view-home'),
    $classesView = $('#view-classes'),
    $mixinsView = $('#view-mixins'),
    $variablesView = $('#view-variables');

var replaceView = function replaceView($view) {
  $allViews.hide();
  $view.show();
};

var customRouter = function customRouter() {
  return router.on({
    'classes': function classes() {
      replaceView($classesView);
    },
    'variables': function variables() {
      replaceView($variablesView);
    },
    'mixins': function mixins() {
      replaceView($mixinsView);
    },
    '*': function _() {
      replaceView($homeView);
    }
  }).resolve();
};

module.exports = customRouter;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2NsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2V4YW1wbGVzLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9taXhpbnMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L292ZXJ2aWV3LmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLWNsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L3Nhc3MtbWl4aW5zLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLXZhcmlhYmxlcy5qcyIsImFwcC9zY3JpcHRzL2NvbnRlbnQvdmFyaWFibGVzLmpzIiwiYXBwL3NjcmlwdHMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL21hcmtlZC5qcyIsImFwcC9zY3JpcHRzL3JvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBUSxHQUFSLENBQVksZUFBUSxhQUFSLEtBQTBCLGNBQTFCLEdBQTBDLFNBQXREOztBQUVBOztBQUVBLElBQUksb0JBQW9CLDBGQUF4Qjs7QUFFQSxFQUFFLFlBQVc7O0FBRVgsTUFBSSxzQkFBd0IsRUFBRSxpQkFBRixFQUFxQixJQUFyQixFQUE1QjtBQUFBLE1BQ0ksd0JBQXdCLFdBQVcsT0FBWCxDQUFtQixtQkFBbkIsQ0FENUI7O0FBR0EsTUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUMsUUFBSSxVQUFVLEdBQWQ7QUFBQSxRQUNJLE9BQVUsc0JBQXNCLE9BQXRCLENBRGQ7O0FBR0EsWUFBTSxJQUFJLFNBQVYsRUFB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QUFVLEtBRGQ7QUFBQSxJQUVJLFNBQVMsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixPQUFqQixDQUZiO0FBQUEsSUFHSSxZQUFZLEVBQUcsY0FBSCxDQUhoQjtBQUFBLElBSUksWUFBWSxFQUFFLFlBQUYsQ0FKaEI7QUFBQSxJQUtJLGVBQWUsRUFBRSxlQUFGLENBTG5CO0FBQUEsSUFNSSxjQUFjLEVBQUUsY0FBRixDQU5sQjtBQUFBLElBT0ksaUJBQWlCLEVBQUUsaUJBQUYsQ0FQckI7O0FBU0EsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFTLEtBQVQsRUFBZ0I7QUFDaEMsWUFBVSxJQUFWO0FBQ0EsUUFBTSxJQUFOO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJLGVBQWUsU0FBZixZQUFlLEdBQVc7QUFDNUIsU0FBTyxPQUNFLEVBREYsQ0FDSztBQUNGLGVBQVcsbUJBQVc7QUFDcEIsa0JBQVksWUFBWjtBQUNELEtBSEM7QUFJRixpQkFBYSxxQkFBVztBQUN0QixrQkFBWSxjQUFaO0FBQ0QsS0FOQztBQU9GLGNBQVUsa0JBQVc7QUFDbkIsa0JBQVksV0FBWjtBQUNELEtBVEM7QUFVRixTQUFLLGFBQVc7QUFDZCxrQkFBWSxTQUFaO0FBQ0Q7QUFaQyxHQURMLEVBZUUsT0FmRixFQUFQO0FBZ0JELENBakJEOztBQW1CQSxPQUFPLE9BQVAsR0FBaUIsWUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGN1c3RvbVJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XG5pbXBvcnQgc2V0TWFya2VkT3B0aW9ucyBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IGV4YW1wbGVzT2JqIGZyb20gJy4vY29udGVudC9leGFtcGxlcy5qcyc7XG5pbXBvcnQgc2Fzc0NsYXNzZXNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtY2xhc3Nlcy5qcyc7XG5pbXBvcnQgc2Fzc1ZhcnNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtdmFyaWFibGVzLmpzJztcbmltcG9ydCBzYXNzTWl4aW5zT2JqIGZyb20gJy4vY29udGVudC9zYXNzLW1peGlucy5qcyc7XG5pbXBvcnQgb3ZlcnZpZXdDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9vdmVydmlldy5qcyc7XG5pbXBvcnQgdmFyaWFibGVzQ29sbGVjdGlvbiBmcm9tICcuL2NvbnRlbnQvdmFyaWFibGVzLmpzJztcbmltcG9ydCBtaXhpbnNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9taXhpbnMuanMnO1xuaW1wb3J0IGNsYXNzZXNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9jbGFzc2VzLmpzJztcblxuY29uc29sZS5sb2cobWFpbk9iai5pc1RvdWNoRGV2aWNlKCkgPyAnVG91Y2ggRGV2aWNlJzogJ0Rlc2t0b3AnKTtcblxuc2V0TWFya2VkT3B0aW9ucygpO1xuXG52YXIgY29kZUNvbnRlbnRzQXJyYXkgPSBbZXhhbXBsZXNPYmosIHNhc3NDbGFzc2VzT2JqLCBzYXNzVmFyc09iaiwgc2Fzc01peGluc09ial07XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGZlYXR1cmVEZXRhaWxTb3VyY2UgICA9ICQoJyNmZWF0dXJlLWRldGFpbCcpLmh0bWwoKSxcbiAgICAgIGZlYXR1cmVEZXRhaWxUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShmZWF0dXJlRGV0YWlsU291cmNlKTtcblxuICB2YXIgbWFrZUZlYXR1cmVEZXRhaWwgPSBmdW5jdGlvbihvYmosIGksIGFycmF5KSB7XG4gICAgdmFyIGNvbnRleHQgPSBvYmosXG4gICAgICAgIGh0bWwgICAgPSBmZWF0dXJlRGV0YWlsVGVtcGxhdGUoY29udGV4dCk7XG5cbiAgICAkKGAjJHtvYmouc2VjdGlvbklkfWApLnByZXBlbmQoaHRtbCk7XG4gIH1cblxuICBvdmVydmlld0NvbGxlY3Rpb24uZm9yRWFjaCggbWFrZUZlYXR1cmVEZXRhaWwgKTtcblxuICB2YXJpYWJsZXNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgbWl4aW5zQ29sbGVjdGlvbi5mb3JFYWNoKCBtYWtlRmVhdHVyZURldGFpbCApO1xuXG4gIGNsYXNzZXNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgY3VzdG9tUm91dGVyKCk7XG5cbiAgdmFyIG1hcmtlZFNlY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAkLmVhY2gob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkKGAjJHtrZXl9YCkuaHRtbChtYXJrZWQodmFsdWUpKTtcbiAgICB9KVxuICB9XG5cbiAgJC5lYWNoKGNvZGVDb250ZW50c0FycmF5LCBmdW5jdGlvbihpLCBvYmopIHtcbiAgICBtYXJrZWRTZWN0aW9uKG9iaik7XG4gIH0pXG5cbiAgJCgnI3NpdGVPd25lcicpLmFwcGVuZChtYWluT2JqLmdldE93bmVyQ29udGVudCgpKTtcblxuICAkKCcjbWVudU9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcjbWVudScpLnNob3coKTtcbiAgfSlcblxuICAkKCcjbWVudUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnI21lbnUnKS5oaWRlKCk7XG4gIH0pXG5cbiAgJCgnI21lbnUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KVxuXG59KTtcbiIsInZhciBjbGFzc2VzQ29sbGVjdGlvbiA9IFtcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Jvd0NsYXNzZXMnLFxuICAgIGNvZGVCbG9ja0lkOiAncm93Q2xhc3Nlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnUm93IENsYXNzZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVmaW5lIGhvdyBjb250ZW50IGlzIGFycmFuZ2VkIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS4gWW91IGNhbiBhbHNvIGdldCBzcGVjaWZpYyBhYm91dCBvcmRlcmluZyBhbmQgZGlzdHJpYnV0aW9uIG9mIHNwYWNlLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdjb2xDbGFzc2VzJyxcbiAgICBjb2RlQmxvY2tJZDogJ2NvbENsYXNzZXNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0NvbHVtbiBDbGFzc2VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0RlZmluZSBjb2x1bW4gd2lkdGggYW5kIHBsYWNlbWVudCBmb3IgZWFjaCBicmVha3BvaW50IG9yIGZvciBhIHNldCByYW5nZScsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2aXNDbGFzc2VzJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Zpc0NsYXNzZXNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHkgQ2xhc3NlcycsXG4gICAgZGVzY3JpcHRpb246ICdIaWRlIGFuZCBzaG93IGNvbnRlbnQuIERlZmluZSB2aXNpYmlsaXR5IGZvciBlYWNoIGJyZWFrcG9pbnQgb3IgZm9yIGEgc2V0IHJhbmdlJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc2VzQ29sbGVjdGlvbjtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBleGFtcGxlc09iaiA9IHtcbiAgcmVzcG9uc2l2ZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1tZC02IGNvbC1sZy00XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBvZmZzZXRzRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtb2Zmc2V0LTMgY29sLXhzLTlcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGF1dG9XaWR0aEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG5lc3RlZEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4gICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnRUcmlwbGV9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICAke2luZGVudERvdWJsZX08L2Rpdj5cbiAgJHtpbmRlbnR9PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbGlnbm1lbnRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZGlzdHJpYnV0aW9uRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgcmVvcmRlckV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yIGZpcnN0LXhzXCI+MzwvZGl2PlxuICAke2luZGVudH0uLi5cbiAgPC9kaXY+XG4gIGAsXG4gIHJldmVyc2VFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgcmV2ZXJzZVwiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MzwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgdmFyaWFibGVzRXhhbXBsZTogYFxuICAkZ3JpZC1jb2x1bW5zOiAxMjtcblxuICAkeHMtbWF4OiA2NDBweDtcbiAgJHNtLW1heDogMTAyNHB4O1xuICAkbWQtbWF4OiAxNDQwcHg7XG4gICRsZy1tYXg6IDE5MjBweDtcblxuICAkY29udGVudC13ZWxsLW1heC13aWR0aDogMjQwMHB4O1xuICBgLFxuICBtaXhpbnNFeGFtcGxlOiBgXG4gIC5jb250YWluZXIge1xuICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbiAgJHtpbmRlbnR9LmJveCB7XG4gICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbiAgJHtpbmRlbnR9fVxuICAke2luZGVudH0uZXh0cmFzIHtcbiAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4gICR7aW5kZW50fX1cbiAgfVxuICBgLFxuICB2aXNpYmlsaXR5RXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1tZFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMgc2hvdy1tZFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZXFIZWlnaHRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgZXEtaGVpZ2h0XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gIDwvZGl2PlxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZXNPYmo7XG5cbi8vIHZhciBleGFtcGxlc0FycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXNwb25zaXZlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ29mZnNldHNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnYXV0b1dpZHRoRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICduZXN0ZWRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPlxuLy8gICAgICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnREb3VibGV9PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdhbGlnbm1lbnRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IHN0YXJ0LXhzXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZGlzdHJpYnV0aW9uRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyBhcm91bmQteHNcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Jlb3JkZXJFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MTwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9Li4uXG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXZlcnNlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjE8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICd2YXJpYWJsZXNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAkZ3JpZC1jb2x1bW5zOiAxMjtcbi8vXG4vLyAgICAgJHhzLW1heDogNjQwcHg7XG4vLyAgICAgJHNtLW1heDogMTAyNHB4O1xuLy8gICAgICRtZC1tYXg6IDE0NDBweDtcbi8vICAgICAkbGctbWF4OiAxOTIwcHg7XG4vL1xuLy8gICAgICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdtaXhpbnNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAuY29udGFpbmVyIHtcbi8vICAgICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbi8vICAgICAke2luZGVudH0uYm94IHtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2woNik7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbi8vICAgICAke2luZGVudH19XG4vLyAgICAgJHtpbmRlbnR9LmV4dHJhcyB7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4vLyAgICAgJHtpbmRlbnR9fVxuLy8gICAgIH1cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Zpc2liaWxpdHlFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kLXVwXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLXhzLXVwIHNob3ctbWQtdXBcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZXFIZWlnaHRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IGVxLWhlaWdodFwiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH1cbi8vIF1cbiIsInZhciBtaXhpbnNDb2xsZWN0aW9uID0gW1xuICB7XG4gICAgc2VjdGlvbklkOiAncm93TWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Jvd01peGluc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnUm93IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdFc3RhYmxpc2ggYSBjb250YWluZXIgYXMgYSByb3cgYW5kIGN1c3RvbWl6ZS4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnY29sTWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ2NvbE1peGluc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnQ29sdW1uIE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdFc3RhYmxpc2ggYSBjb250YWluZXIgYXMgYSBjb2x1bW4gYW5kIGN1c3RvbWl6ZS4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYXJyYW5nZU1peGlucycsXG4gICAgY29kZUJsb2NrSWQ6ICdhcnJhbmdlTWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdBcnJhbmdlbWVudCBNaXhpbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9taXplIHRoZSBhcnJhbmdlbWVudCwgcGxhY2VtZW50IGFuZCBvcmllbnRhdGlvbi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAndmlzaWJpbGl0eU1peGlucycsXG4gICAgY29kZUJsb2NrSWQ6ICd2aXNpYmlsaXR5TWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdWaXNpYmlsaXR5IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdIaWRlIGFuZCBzaG93IGNvbnRlbnQgd2l0aGluIGFsbCBvciB2YXJpb3VzIGJyZWFrcG9pbnQgcmFuZ2VzLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW5zQ29sbGVjdGlvbjtcbiIsInZhciBvdmVydmlld0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyZXNwb25zaXZlJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Jlc3BvbnNpdmVFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Jlc3BvbnNpdmUgYW5kIEZsdWlkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Jlc3BvbnNpdmUgbW9kaWZpZXJzIGVuYWJsZSBzcGVjaWZ5aW5nIGRpZmZlcmVudCBjb2x1bW4gc2l6ZXMsIG9mZnNldHMsIGFsaWdubWVudCBhbmQgZGlzdHJpYnV0aW9uIGF0IHhzLCBzbSwgbWQgJiBsZyB2aWV3cG9ydCB3aWR0aHMuIFBlcmNlbnQgYmFzZWQgd2lkdGhzIGFsbG93IGZsdWlkIHJlc2l6aW5nIG9mIGNvbHVtbnMgYW5kIHJvd3MuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvY2xhc3NlcycsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdvZmZzZXRzJyxcbiAgICBjb2RlQmxvY2tJZDogJ29mZnNldHNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ09mZnNldHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnT2Zmc2V0IGEgY29sdW1uLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL2NsYXNzZXMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYXV0b1dpZHRoJyxcbiAgICBjb2RlQmxvY2tJZDogJ2F1dG9XaWR0aEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnQXV0byBXaWR0aCcsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgYW55IG51bWJlciBvZiBhdXRvIHNpemluZyBjb2x1bW5zIHRvIGEgcm93LiBMZXQgdGhlIGdyaWQgZmlndXJlIGl0IG91dC4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9jbGFzc2VzJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2FsaWdubWVudCcsXG4gICAgY29kZUJsb2NrSWQ6ICdhbGlnbm1lbnRFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0FsaWdubWVudCcsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgY2xhc3NlcyB0byBhbGlnbiBlbGVtZW50cyB0byB0aGUgc3RhcnQgb3IgZW5kIG9mIGEgcm93IGFzIHdlbGwgYXMgdGhlIHRvcCwgYm90dG9tLCBvciBjZW50ZXIgb2YgYSBjb2x1bW4uJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvY2xhc3NlcycsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdkaXN0cmlidXRpb24nLFxuICAgIGNvZGVCbG9ja0lkOiAnZGlzdHJpYnV0aW9uRXhhbXBsZScsXG4gICAgdGl0bGU6ICdEaXN0cmlidXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGNsYXNzZXMgdG8gZGlzdHJpYnV0ZSB0aGUgY29udGVudHMgb2YgYSByb3cgb3IgY29sdW1uLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL2NsYXNzZXMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAncmVvcmRlcicsXG4gICAgY29kZUJsb2NrSWQ6ICdyZW9yZGVyRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSZW9yZGVyaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBjbGFzc2VzIHRvIHJlb3JkZXIgY29sdW1ucy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9jbGFzc2VzJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3JldmVyc2UnLFxuICAgIGNvZGVCbG9ja0lkOiAncmV2ZXJzZUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnUmV2ZXJzaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBhIGNsYXNzIHRvIHJldmVyc2UgY29sdW1ucyBvciBjb2x1bW4gY29udGVudC4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9jbGFzc2VzJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2VxSGVpZ2h0JyxcbiAgICBjb2RlQmxvY2tJZDogJ2VxSGVpZ2h0RXhhbXBsZScsXG4gICAgdGl0bGU6ICdDb2x1bW4gSGVpZ2h0IEVxdWFsaXplcicsXG4gICAgZGVzY3JpcHRpb246ICdCeSBkZWZhdWx0LCB0aGUgLnJvdyBjbGFzcyBvdmVycmlkZXMgZmxleGJveFxcJ3MgbmF0dXJhbCBzdHJldGNoaW5nIG9mIGNvbHVtbiBoZWlnaHQsIGFsbG93aW5nIGZvciBjdXN0b20gaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2Ygcm93IGNvbnRlbnRzLiBUaGUgLmVxLWhlaWdodCByb3cgdXRpbGl0eSBjbGFzcyBhcHBsaWVzIHRoZSBzdHJldGNoIGJlaGF2aW9yIGJhY2sgdG8gdGhlIGNvbHVtbnMsIGdpdmluZyB0aGUgZGV2ZWxvcGVyIGNvbnRyb2wgb2YgdGhlIGJlaGF2aW9yLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL2NsYXNzZXMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnbmVzdGVkJyxcbiAgICBjb2RlQmxvY2tJZDogJ25lc3RlZEV4YW1wbGUnLFxuICAgIHRpdGxlOiAnTmVzdGVkIEdyaWRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ05lc3QgZ3JpZHMgaW5zaWRlIGdyaWRzIGluc2lkZSBncmlkcy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9jbGFzc2VzJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Zpc2liaWxpdHknLFxuICAgIGNvZGVCbG9ja0lkOiAndmlzaWJpbGl0eUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnVmlzaWJpbGl0eScsXG4gICAgZGVzY3JpcHRpb246ICdWaXNpYmlsaXR5IGNsYXNzZXMgYWxsb3cgZm9yIHJlc3BvbnNpdmUgc2hvd2luZyBhbmQgaGlkaW5nIG9mIGNvbnRlbnQuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvY2xhc3NlcycsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgdGhlIGZ1bGwgbGlzdCBvZiBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAndmFyaWFibGVzJyxcbiAgICBjb2RlQmxvY2tJZDogJ3ZhcmlhYmxlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnVmFyaWFibGVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbWl6YWJsZSBTYXNzIHZhcmlhYmxlcyBhbGxvdyB5b3UgdG8gY3JlYXRlIGEgZ3JpZCBhbmQgcmVzcG9uc2l2ZSBmcmFtZXdvcmsgdG8gbWVldCB5b3VyIG5lZWRzLiBZb3UgY2FuIGVhc2lseSBjaGFuZ2UgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHlvdXIgZ3JpZCBmcm9tIHRoZSBkZWZhdWx0IDEyLiBVcGRhdGUgeW91ciBicmVha3BvaW50IHJhbmdlcyBieSBhZGp1c3RpbmcgdGhlc2UgdmFyaWFibGVzIGFuZCBhbGwgb2YgdGhlIG1lZGlhIHF1ZXJpZXMsIGNsYXNzZXMgYW5kIG1peGlucyB3aWxsIHVwZGF0ZSBhY2NvcmRpbmdseS4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy92YXJpYWJsZXMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCB2YXJpYWJsZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdtaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnbWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdNaXhpbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIGV2ZXJ5IFNhc3MgRmxleGJveCBHcmlkIHNldCBvZiBkZWxhcmF0aW9ucy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy9taXhpbnMnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIHRoZSBmdWxsIGxpc3Qgb2YgbWl4aW5zJ1xuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJ2aWV3Q29sbGVjdGlvbjtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBzYXNzQ2xhc3Nlc09iaiA9IHtcbiAgcm93Q2xhc3Nlc0V4YW1wbGU6IGBcbiAgLnJvd1xuICAucmV2ZXJzZVxuICAuZXEtaGVpZ2h0XG4gIC5hdXRvLWhlaWdodFxuICAuc3RhcnRcbiAgLmNlbnRlclxuICAuZW5kXG4gIC50b3BcbiAgLm1pZGRsZVxuICAuYm90dG9tXG4gIC5hcm91bmRcbiAgLmJldHdlZW5cbiAgYCxcbiAgY29sQ2xhc3Nlc0V4YW1wbGU6IGBcbiAgLmNvbFxuICAuY29sLXhzXG4gIC5jb2wtc21cbiAgLmNvbC1tZFxuICAuY29sLWxnXG4gIC5jb2wteGxcbiAgLmNvbC14cy08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1zbS08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1tZC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1sZy08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC14bC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC14cy1vZmZzZXQtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtc20tb2Zmc2V0LTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLW1kLW9mZnNldC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1sZy1vZmZzZXQtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wteGwtb2Zmc2V0LTxjb2x1bW4gbnVtYmVyPlxuICAuZmlyc3RcbiAgLmZpcnN0LXhzXG4gIC5maXJzdC1zbVxuICAuZmlyc3QtbWRcbiAgLmZpcnN0LWxnXG4gIC5maXJzdC14bFxuICAubGFzdFxuICAubGFzdC14c1xuICAubGFzdC1zbVxuICAubGFzdC1tZFxuICAubGFzdC1sZ1xuICAubGFzdC14bFxuICBgLFxuICB2aXNDbGFzc2VzRXhhbXBsZTogYFxuICAuc2hvd1xuICAuc2hvdy14c1xuICAuc2hvdy14cy1vbmx5XG4gIC5zaG93LXNtXG4gIC5zaG93LXNtLW9ubHlcbiAgLnNob3ctbWRcbiAgLnNob3ctbWQtb25seVxuICAuc2hvdy1sZ1xuICAuc2hvdy1sZy1vbmx5XG4gIC5zaG93LXhsXG4gIC5oaWRlXG4gIC5oaWRlLXhzXG4gIC5oaWRlLXhzLW9ubHlcbiAgLmhpZGUtc21cbiAgLmhpZGUtc20tb25seVxuICAuaGlkZS1tZFxuICAuaGlkZS1tZC1vbmx5XG4gIC5oaWRlLWxnXG4gIC5oaWRlLWxnLW9ubHlcbiAgLmhpZGUteGxcbiAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhc3NDbGFzc2VzT2JqO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIHNhc3NNaXhpbnNPYmogPSB7XG4gIHJvd01peGluc0V4YW1wbGU6IGBcbiAgQGluY2x1ZGUgcm93KCk7XG4gIEBpbmNsdWRlIHJvdy1yZXZlcnNlKCk7XG4gIEBpbmNsdWRlIHJvdy1lcS1oZWlnaHQoKTtcbiAgQGluY2x1ZGUgcm93LWF1dG8taGVpZ2h0KCk7XG4gIGAsXG4gIGNvbE1peGluc0V4YW1wbGU6IGBcbiAgQGluY2x1ZGUgY29sKDxicmVha3BvaW50IHByZWZpeD4sIDxudW1iZXIgb2YgY29sdW1ucz4pO1xuICAke2luZGVudH0vLyBubyBicmVha3BvaW50IGFyZyA9IHhzLTxudW1iZXIgb2YgY29sdW1ucz5cbiAgJHtpbmRlbnR9QGluY2x1ZGUgY29sKDxudW1iZXIgb2YgY29sdW1ucz4pO1xuICAke2luZGVudH0vLyBubyBhcmdzID0gIGF1dG8td2lkdGggY29sdW1uIGF0IHRoZSB4cyBicmVha3BvaW50XG4gICR7aW5kZW50fUBpbmNsdWRlIGNvbCgpO1xuICBAaW5jbHVkZSBjb2wtb2Zmc2V0KDxicmVha3BvaW50IHByZWZpeD4sIDxudW1iZXIgb2YgY29sdW1ucz4pO1xuICBAaW5jbHVkZSBjb2wtcmV2ZXJzZSgpO1xuICBgLFxuICBhcnJhbmdlTWl4aW5zRXhhbXBsZTogYFxuICAvLyBhcHBseSB0byBhIHJvdyB0byBhcnJhbmdlIGRlc2NlbmRhbnRzXG4gIEBpbmNsdWRlIHN0YXJ0KDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBjZW50ZXIoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGVuZCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgdG9wKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBtaWRkbGUoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGJvdHRvbSg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgYXJvdW5kKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBiZXR3ZWVuKDxicmVha3BvaW50IHByZWZpeD4pO1xuICAke2luZGVudH1cbiAgLy8gQXBwbHkgdG8gYSBjb2x1bW4gdG8gYXJyYW5nZSB0aGlzIGVsZW1lbnRcbiAgQGluY2x1ZGUgZmlyc3QoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGxhc3QoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIGAsXG4gIHZpc2liaWxpdHlNaXhpbnNFeGFtcGxlOiBgXG4gIEBpbmNsdWRlIHNob3coPGJyZWFrcG9pbnQgcmFuZ2UgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGhpZGUoPGJyZWFrcG9pbnQgcmFuZ2UgcHJlZml4Pik7XG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXNzTWl4aW5zT2JqO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIHNhc3NWYXJzT2JqID0ge1xuICBncmlkVmFyc0V4YW1wbGU6IGBcbiAgJGdyaWQtY29sdW1uczogMTI7IC8vIFNldCBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZFxuICAke2luZGVudH1cbiAgJHhzLW1heDogNjQwcHg7IC8vIFNldCB4cyBicmVha3BvaW50J3MgbWF4IHdpZHRoXG4gICRzbS1tYXg6IDEwMjRweDsgLy8gU2V0IHNtIGJyZWFrcG9pbnQncyBtYXggd2lkdGhcbiAgJG1kLW1heDogMTQ0MHB4OyAvLyBTZXQgbWQgYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAkbGctbWF4OiAxOTIwcHg7IC8vIFNldCBsZyBicmVha3BvaW50J3MgbWF4IHdpZHRoXG4gICR7aW5kZW50fVxuICAkc20tc3RhcnQ6ICgkeHMtbWF4ICsgMSk7IC8vIFNldCBzbSBicmVha3BvaW50J3MgbWluIHdpZHRoXG4gICRtZC1zdGFydDogKCRzbS1tYXggKyAxKTsgLy8gU2V0IG1kIGJyZWFrcG9pbnQncyBtaW4gd2lkdGhcbiAgJGxnLXN0YXJ0OiAoJG1kLW1heCArIDEpOyAvLyBTZXQgbGcgYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAkeGwtc3RhcnQ6ICgkbGctbWF4ICsgMSk7IC8vIFNldCB4bCBicmVha3BvaW50J3MgbWluIHdpZHRoXG4gICR7aW5kZW50fVxuICAkY29udGVudC13ZWxsLW1heC13aWR0aDogMjQwMHB4OyAvLyBTZXQgdGhlIG1heC13aWR0aCBvZiB0aGUgY29udGVudCB3ZWxsXG4gIGAsXG4gIGJyZWFrcG9pbnRWYXJzRXhhbXBsZTogYFxuICAkYnJlYWtwb2ludC14cy1vbmx5OiBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAjeyR4cy1tYXh9KVwiO1xuICAkYnJlYWtwb2ludC1zbS11cDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skc20tc3RhcnR9KVwiO1xuICAkYnJlYWtwb2ludC1zbS1vbmx5OiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRzbS1zdGFydH0pIGFuZCAobWF4LXdpZHRoOiAjeyRzbS1tYXh9KVwiO1xuICAkYnJlYWtwb2ludC1tZC11cDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWQtc3RhcnR9KVwiO1xuICAkYnJlYWtwb2ludC1tZC1vbmx5OiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZC1zdGFydH0pIGFuZCAobWF4LXdpZHRoOiAjeyRtZC1tYXh9KVwiO1xuICAkYnJlYWtwb2ludC1sZy11cDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbGctc3RhcnR9KVwiO1xuICAkYnJlYWtwb2ludC1sZy1vbmx5OiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRsZy1zdGFydH0pIGFuZCAobWF4LXdpZHRoOiAjeyRsZy1tYXh9KVwiO1xuICAkYnJlYWtwb2ludC14bC11cDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skeGwtc3RhcnR9KVwiO1xuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2Fzc1ZhcnNPYmo7XG4iLCJ2YXIgdmFyaWFibGVzQ29sbGVjdGlvbiA9IFtcbiAge1xuICAgIHNlY3Rpb25JZDogJ2dyaWRWYXJzJyxcbiAgICBjb2RlQmxvY2tJZDogJ2dyaWRWYXJzRXhhbXBsZScsXG4gICAgdGl0bGU6ICdHcmlkIENvbnRyb2wnLFxuICAgIGRlc2NyaXB0aW9uOiAnWW91IGNhbiBlYXNpbHkgY2hhbmdlIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB5b3VyIGdyaWQgZnJvbSB0aGUgZGVmYXVsdCAxMi4gVXBkYXRlIHlvdXIgYnJlYWtwb2ludCByYW5nZXMgYnkgYWRqdXN0aW5nIHRoZXNlIHZhcmlhYmxlcyBhbmQgYWxsIG9mIHRoZSBtZWRpYSBxdWVyaWVzLCBjbGFzc2VzIGFuZCBtaXhpbnMgd2lsbCB1cGRhdGUgYWNjb3JkaW5nbHkuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2JyZWFrcG9pbnRWYXJzJyxcbiAgICBjb2RlQmxvY2tJZDogJ2JyZWFrcG9pbnRWYXJzRXhhbXBsZScsXG4gICAgdGl0bGU6ICdCcmVha3BvaW50IFJhbmdlcycsXG4gICAgZGVzY3JpcHRpb246ICdCcmVha3BvaW50IHJhbmdlIHZhcmlhYmxlcyBhcmUgYXV0b21hZ2ljYWxseSBjcmVhdGVkIGJhc2VkIG9uIHRoZSBncmlkIHZhcmlhYmxlcy4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhcmlhYmxlc0NvbGxlY3Rpb247XG4iLCJ2YXIgbWFpbk9iaiA9IHtcbiAgb3duZXI6ICdEcmV3IEJvdGthJyxcbiAgZ2l0aHViVXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL2RyZXdib3RgLFxuICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICBpc1RvdWNoRGV2aWNlKCkge1xuICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgfSxcbiAgZ2V0Q29weXJpZ2h0KCkge1xuICAgIHJldHVybiBgJmNvcHk7ICR7dGhpcy5jdXJyZW50WWVhcn0gJHt0aGlzLm93bmVyfS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gXG4gIH0sXG4gIGdldE93bmVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gYE1hZGUgYnkgPGEgaHJlZj1cIiR7dGhpcy5naXRodWJVcmx9XCI+JHt0aGlzLm93bmVyfTwvYT5gXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbk9iajtcbiIsInZhciBzZXRNYXJrZWRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgICBzYW5pdGl6ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE1hcmtlZE9wdGlvbnM7XG4iLCJ2YXIgcm9vdCA9IG51bGwsXG4gICAgdXNlSGFzaCA9IGZhbHNlLFxuICAgIHJvdXRlciA9IG5ldyBOYXZpZ28ocm9vdCwgdXNlSGFzaCksXG4gICAgJGFsbFZpZXdzID0gJCggJ1tpZHw9XCJ2aWV3XCJdJyApLFxuICAgICRob21lVmlldyA9ICQoJyN2aWV3LWhvbWUnKSxcbiAgICAkY2xhc3Nlc1ZpZXcgPSAkKCcjdmlldy1jbGFzc2VzJyksXG4gICAgJG1peGluc1ZpZXcgPSAkKCcjdmlldy1taXhpbnMnKSxcbiAgICAkdmFyaWFibGVzVmlldyA9ICQoJyN2aWV3LXZhcmlhYmxlcycpO1xuXG52YXIgcmVwbGFjZVZpZXcgPSBmdW5jdGlvbigkdmlldykge1xuICAkYWxsVmlld3MuaGlkZSgpO1xuICAkdmlldy5zaG93KCk7XG59XG5cbnZhciBjdXN0b21Sb3V0ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvdXRlclxuICAgICAgICAgIC5vbih7XG4gICAgICAgICAgICAnY2xhc3Nlcyc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXBsYWNlVmlldygkY2xhc3Nlc1ZpZXcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2YXJpYWJsZXMnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmVwbGFjZVZpZXcoJHZhcmlhYmxlc1ZpZXcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtaXhpbnMnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmVwbGFjZVZpZXcoJG1peGluc1ZpZXcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcqJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJlcGxhY2VWaWV3KCRob21lVmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAucmVzb2x2ZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbVJvdXRlcjtcbiJdfQ==