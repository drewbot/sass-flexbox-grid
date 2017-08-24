(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

// import customRouter from './router.js';
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

  // customRouter();

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

  // $('#menu a').on('click', function() {
  //   event.stopPropagation();
  // })
});

},{"./content/classes.js":2,"./content/examples.js":3,"./content/mixins.js":4,"./content/overview.js":5,"./content/sass-classes.js":6,"./content/sass-mixins.js":7,"./content/sass-variables.js":8,"./content/variables.js":9,"./main.js":10,"./marked.js":11}],2:[function(require,module,exports){
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
  description: 'Set a container as a row and customize.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'colMixins',
  codeBlockId: 'colMixinsExample',
  title: 'Column Mixins',
  description: 'Set a container as a column and customize.',
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
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'offsets',
  codeBlockId: 'offsetsExample',
  title: 'Offsets',
  description: 'Offset a column.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'autoWidth',
  codeBlockId: 'autoWidthExample',
  title: 'Auto Width',
  description: 'Add any number of auto sizing columns to a row. Let the grid figure it out.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'alignment',
  codeBlockId: 'alignmentExample',
  title: 'Alignment',
  description: 'Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'distribution',
  codeBlockId: 'distributionExample',
  title: 'Distribution',
  description: 'Add classes to distribute the contents of a row or column.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'reorder',
  codeBlockId: 'reorderExample',
  title: 'Reordering',
  description: 'Add classes to reorder columns.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'reverse',
  codeBlockId: 'reverseExample',
  title: 'Reversing',
  description: 'Add a class to reverse columns or column content.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'eqHeight',
  codeBlockId: 'eqHeightExample',
  title: 'Column Height Equalizer',
  description: 'By default, the .row class overrides flexbox\'s natural stretching of column height, allowing for custom horizontal alignment of row contents. The .eq-height row utility class applies the stretch behavior back to the columns, giving the developer control of the behavior.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'nested',
  codeBlockId: 'nestedExample',
  title: 'Nested Grids',
  description: 'Nest grids inside grids inside grids.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'visibility',
  codeBlockId: 'visibilityExample',
  title: 'Visibility',
  description: 'Visibility classes allow for responsive showing and hiding of content.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
}, {
  sectionId: 'variables',
  codeBlockId: 'variablesExample',
  title: 'Variables',
  description: 'Customizable Sass variables allow you to create a grid and responsive framework to meet your needs. You can easily change the number of columns in your grid from the default 12. Update your breakpoint ranges by adjusting these variables and all of the media queries, classes and mixins will update accordingly.',
  hasLink: true,
  href: '/views/variables.html',
  linkContent: 'See all variables'
}, {
  sectionId: 'mixins',
  codeBlockId: 'mixinsExample',
  title: 'Mixins',
  description: 'Mixins are available for every Sass Flexbox Grid set of delarations.',
  hasLink: true,
  href: '/views/mixins.html',
  linkContent: 'See all mixins'
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

},{}]},{},[1]);
