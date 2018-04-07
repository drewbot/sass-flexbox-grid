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
  description: 'Responsive modifiers let you define column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths. Percent based widths allow fluid resizing of columns and rows.',
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

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2NsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2V4YW1wbGVzLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9taXhpbnMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L292ZXJ2aWV3LmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLWNsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L3Nhc3MtbWl4aW5zLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLXZhcmlhYmxlcy5qcyIsImFwcC9zY3JpcHRzL2NvbnRlbnQvdmFyaWFibGVzLmpzIiwiYXBwL3NjcmlwdHMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL21hcmtlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVZBO0FBWUEsUUFBUSxHQUFSLENBQVksZUFBUSxhQUFSLEtBQTBCLGNBQTFCLEdBQTBDLFNBQXREOztBQUVBOztBQUVBLElBQUksb0JBQW9CLDBGQUF4Qjs7QUFFQSxFQUFFLFlBQVc7O0FBRVgsTUFBSSxzQkFBd0IsRUFBRSxpQkFBRixFQUFxQixJQUFyQixFQUE1QjtBQUFBLE1BQ0ksd0JBQXdCLFdBQVcsT0FBWCxDQUFtQixtQkFBbkIsQ0FENUI7O0FBR0EsTUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUMsUUFBSSxVQUFVLEdBQWQ7QUFBQSxRQUNJLE9BQVUsc0JBQXNCLE9BQXRCLENBRGQ7O0FBR0EsWUFBTSxJQUFJLFNBQVYsRUFBdUIsT0FBdkIsQ0FBK0IsSUFBL0I7QUFDRCxHQUxEOztBQU9BLHFCQUFtQixPQUFuQixDQUE0QixpQkFBNUI7O0FBRUEsc0JBQW9CLE9BQXBCLENBQTZCLGlCQUE3Qjs7QUFFQSxtQkFBaUIsT0FBakIsQ0FBMEIsaUJBQTFCOztBQUVBLG9CQUFrQixPQUFsQixDQUEyQixpQkFBM0I7O0FBRUE7O0FBRUEsTUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBUyxHQUFULEVBQWM7QUFDaEMsTUFBRSxJQUFGLENBQU8sR0FBUCxFQUFZLFVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDL0IsY0FBTSxHQUFOLEVBQWEsSUFBYixDQUFrQixPQUFPLEtBQVAsQ0FBbEI7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQSxJQUFFLElBQUYsQ0FBTyxpQkFBUCxFQUEwQixVQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCO0FBQ3pDLGtCQUFjLEdBQWQ7QUFDRCxHQUZEOztBQUlBLElBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixlQUFRLGVBQVIsRUFBdkI7O0FBRUEsSUFBRSxXQUFGLEVBQWUsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFXO0FBQ3BDLE1BQUUsT0FBRixFQUFXLElBQVg7QUFDRCxHQUZEOztBQUlBLElBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDLE1BQUUsT0FBRixFQUFXLElBQVg7QUFDRCxHQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUVELENBOUNEOzs7OztBQ2xCQSxJQUFJLG9CQUFvQixDQUN0QjtBQUNFLGFBQVcsWUFEYjtBQUVFLGVBQWEsbUJBRmY7QUFHRSxTQUFPLGFBSFQ7QUFJRSxlQUFhLGlJQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBRHNCLEVBVXRCO0FBQ0UsYUFBVyxZQURiO0FBRUUsZUFBYSxtQkFGZjtBQUdFLFNBQU8sZ0JBSFQ7QUFJRSxlQUFhLDBFQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBVnNCLEVBbUJ0QjtBQUNFLGFBQVcsWUFEYjtBQUVFLGVBQWEsbUJBRmY7QUFHRSxTQUFPLG9CQUhUO0FBSUUsZUFBYSxpRkFKZjtBQUtFLFdBQVMsS0FMWDtBQU1FLFFBQU0sRUFOUjtBQU9FLGVBQWE7QUFQZixDQW5Cc0IsQ0FBeEI7O0FBOEJBLE9BQU8sT0FBUCxHQUFpQixpQkFBakI7Ozs7O0FDOUJBLElBQUksdUJBQUo7QUFBQSxJQUNJLGVBQWUsU0FBUyxNQUQ1QjtBQUFBLElBRUksZUFBZSxlQUFlLE1BRmxDO0FBQUEsSUFHSSxrQkFBa0IsZUFBZSxNQUhyQztBQUFBLElBSUksa0JBQWtCLGtCQUFrQixNQUp4QztBQUFBLElBS0ksaUJBQWlCLGtCQUFrQixNQUx2Qzs7QUFPQSxJQUFJLGNBQWM7QUFDaEIscURBRUUsTUFGRiw2RUFEZ0I7QUFNaEIsa0RBRUUsTUFGRixpRUFOZ0I7QUFXaEIsb0RBRUUsTUFGRixxQ0FHRSxNQUhGLDRDQVhnQjtBQWlCaEIsaURBRUUsTUFGRixrQ0FHRSxZQUhGLCtCQUlFLFlBSkYsd0NBS0UsWUFMRixrQkFNRSxNQU5GLHlCQWpCZ0I7QUEwQmhCLDZEQUVFLE1BRkYsd0RBMUJnQjtBQStCaEIsaUVBRUUsTUFGRiwwQ0FHRSxNQUhGLDBDQUlFLE1BSkYsaURBL0JnQjtBQXNDaEIsa0RBRUUsTUFGRiwyQ0FHRSxNQUhGLDJDQUlFLE1BSkYsb0RBS0UsTUFMRixzQkF0Q2dCO0FBOENoQiwwREFFRSxNQUZGLHlDQUdFLE1BSEYseUNBSUUsTUFKRixnREE5Q2dCO0FBcURoQix1S0FyRGdCO0FBK0RoQiwwQ0FFRSxNQUZGLDJCQUdFLE1BSEYsa0JBSUUsWUFKRiw0QkFLRSxZQUxGLGdDQU1FLE1BTkYsYUFPRSxNQVBGLHFCQVFFLFlBUkYsOEJBU0UsTUFURixlQS9EZ0I7QUEyRWhCLHFEQUVFLE1BRkYsNkNBR0UsTUFIRixxREFJRSxNQUpGLHFDQUtFLE1BTEYscUNBTUUsTUFORixxQ0FPRSxNQVBGLHlEQTNFZ0I7QUFxRmhCLDZEQUVFLE1BRkYsOERBR0UsTUFIRjtBQXJGZ0IsQ0FBbEI7O0FBNkZBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JPQSxJQUFJLG1CQUFtQixDQUNyQjtBQUNFLGFBQVcsV0FEYjtBQUVFLGVBQWEsa0JBRmY7QUFHRSxTQUFPLFlBSFQ7QUFJRSxlQUFhLHlDQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBRHFCLEVBVXJCO0FBQ0UsYUFBVyxXQURiO0FBRUUsZUFBYSxrQkFGZjtBQUdFLFNBQU8sZUFIVDtBQUlFLGVBQWEsNENBSmY7QUFLRSxXQUFTLEtBTFg7QUFNRSxRQUFNLEVBTlI7QUFPRSxlQUFhO0FBUGYsQ0FWcUIsRUFtQnJCO0FBQ0UsYUFBVyxlQURiO0FBRUUsZUFBYSxzQkFGZjtBQUdFLFNBQU8sb0JBSFQ7QUFJRSxlQUFhLHVEQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBbkJxQixFQTRCckI7QUFDRSxhQUFXLGtCQURiO0FBRUUsZUFBYSx5QkFGZjtBQUdFLFNBQU8sbUJBSFQ7QUFJRSxlQUFhLGdFQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBNUJxQixDQUF2Qjs7QUF1Q0EsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQjs7Ozs7QUN2Q0EsSUFBSSxxQkFBcUIsQ0FDdkI7QUFDRSxhQUFXLFlBRGI7QUFFRSxlQUFhLG1CQUZmO0FBR0UsU0FBTyxzQkFIVDtBQUlFLGVBQWEsMExBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBRHVCLEVBVXZCO0FBQ0UsYUFBVyxTQURiO0FBRUUsZUFBYSxnQkFGZjtBQUdFLFNBQU8sU0FIVDtBQUlFLGVBQWEsa0JBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBVnVCLEVBbUJ2QjtBQUNFLGFBQVcsV0FEYjtBQUVFLGVBQWEsa0JBRmY7QUFHRSxTQUFPLFlBSFQ7QUFJRSxlQUFhLDZFQUpmO0FBS0UsV0FBUyxJQUxYO0FBTUUsUUFBTSxxQkFOUjtBQU9FLGVBQWE7QUFQZixDQW5CdUIsRUE0QnZCO0FBQ0UsYUFBVyxXQURiO0FBRUUsZUFBYSxrQkFGZjtBQUdFLFNBQU8sV0FIVDtBQUlFLGVBQWEsK0dBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBNUJ1QixFQXFDdkI7QUFDRSxhQUFXLGNBRGI7QUFFRSxlQUFhLHFCQUZmO0FBR0UsU0FBTyxjQUhUO0FBSUUsZUFBYSw0REFKZjtBQUtFLFdBQVMsSUFMWDtBQU1FLFFBQU0scUJBTlI7QUFPRSxlQUFhO0FBUGYsQ0FyQ3VCLEVBOEN2QjtBQUNFLGFBQVcsU0FEYjtBQUVFLGVBQWEsZ0JBRmY7QUFHRSxTQUFPLFlBSFQ7QUFJRSxlQUFhLGlDQUpmO0FBS0UsV0FBUyxJQUxYO0FBTUUsUUFBTSxxQkFOUjtBQU9FLGVBQWE7QUFQZixDQTlDdUIsRUF1RHZCO0FBQ0UsYUFBVyxTQURiO0FBRUUsZUFBYSxnQkFGZjtBQUdFLFNBQU8sV0FIVDtBQUlFLGVBQWEsbURBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBdkR1QixFQWdFdkI7QUFDRSxhQUFXLFVBRGI7QUFFRSxlQUFhLGlCQUZmO0FBR0UsU0FBTyx5QkFIVDtBQUlFLGVBQWEsaVJBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBaEV1QixFQXlFdkI7QUFDRSxhQUFXLFFBRGI7QUFFRSxlQUFhLGVBRmY7QUFHRSxTQUFPLGNBSFQ7QUFJRSxlQUFhLHVDQUpmO0FBS0UsV0FBUyxJQUxYO0FBTUUsUUFBTSxxQkFOUjtBQU9FLGVBQWE7QUFQZixDQXpFdUIsRUFrRnZCO0FBQ0UsYUFBVyxZQURiO0FBRUUsZUFBYSxtQkFGZjtBQUdFLFNBQU8sWUFIVDtBQUlFLGVBQWEsd0VBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLHFCQU5SO0FBT0UsZUFBYTtBQVBmLENBbEZ1QixFQTJGdkI7QUFDRSxhQUFXLFdBRGI7QUFFRSxlQUFhLGtCQUZmO0FBR0UsU0FBTyxXQUhUO0FBSUUsZUFBYSx3VEFKZjtBQUtFLFdBQVMsSUFMWDtBQU1FLFFBQU0sdUJBTlI7QUFPRSxlQUFhO0FBUGYsQ0EzRnVCLEVBb0d2QjtBQUNFLGFBQVcsUUFEYjtBQUVFLGVBQWEsZUFGZjtBQUdFLFNBQU8sUUFIVDtBQUlFLGVBQWEsc0VBSmY7QUFLRSxXQUFTLElBTFg7QUFNRSxRQUFNLG9CQU5SO0FBT0UsZUFBYTtBQVBmLENBcEd1QixDQUF6Qjs7QUErR0EsT0FBTyxPQUFQLEdBQWlCLGtCQUFqQjs7Ozs7QUMvR0EsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksaUJBQWlCO0FBQ25CLCtKQURtQjtBQWVuQiwyaEJBZm1CO0FBNkNuQjtBQTdDbUIsQ0FBckI7O0FBcUVBLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7Ozs7QUM1RUEsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksZ0JBQWdCO0FBQ2xCLG9JQURrQjtBQU9sQix3RkFFRSxNQUZGLHlEQUdFLE1BSEYsOENBSUUsTUFKRixnRUFLRSxNQUxGLHFIQVBrQjtBQWdCbEIsK1lBVUUsTUFWRix3SUFoQmtCO0FBK0JsQjtBQS9Ca0IsQ0FBcEI7O0FBcUNBLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7QUM1Q0EsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksY0FBYztBQUNoQix1RkFFRSxNQUZGLCtOQU9FLE1BUEYsb1FBWUUsTUFaRixzRkFEZ0I7QUFnQmhCO0FBaEJnQixDQUFsQjs7QUE0QkEsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7OztBQ25DQSxJQUFJLHNCQUFzQixDQUN4QjtBQUNFLGFBQVcsVUFEYjtBQUVFLGVBQWEsaUJBRmY7QUFHRSxTQUFPLGNBSFQ7QUFJRSxlQUFhLG9OQUpmO0FBS0UsV0FBUyxLQUxYO0FBTUUsUUFBTSxFQU5SO0FBT0UsZUFBYTtBQVBmLENBRHdCLEVBVXhCO0FBQ0UsYUFBVyxnQkFEYjtBQUVFLGVBQWEsdUJBRmY7QUFHRSxTQUFPLG1CQUhUO0FBSUUsZUFBYSxtRkFKZjtBQUtFLFdBQVMsS0FMWDtBQU1FLFFBQU0sRUFOUjtBQU9FLGVBQWE7QUFQZixDQVZ3QixDQUExQjs7QUFxQkEsT0FBTyxPQUFQLEdBQWlCLG1CQUFqQjs7Ozs7QUNyQkEsSUFBSSxVQUFVO0FBQ1osU0FBTyxZQURLO0FBRVoseUNBRlk7QUFHWixlQUFhLElBQUksSUFBSixHQUFXLFdBQVgsRUFIRDtBQUlaLGVBSlksMkJBSUk7QUFDZCxXQUFPLENBQUMsRUFBRSxrQkFBa0IsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCLE9BQU8sU0FBL0IsQ0FBeEM7QUFDRCxHQU5XO0FBT1osY0FQWSwwQkFPRztBQUNiLHVCQUFpQixLQUFLLFdBQXRCLFNBQXFDLEtBQUssS0FBMUM7QUFDRCxHQVRXO0FBVVosaUJBVlksNkJBVU07QUFDaEIsaUNBQTJCLEtBQUssU0FBaEMsVUFBOEMsS0FBSyxLQUFuRDtBQUNEO0FBWlcsQ0FBZDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDZkEsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVc7QUFDaEMsaUJBQU8sT0FBTyxVQUFQLENBQWtCO0FBQ2YsNEJBQVEsSUFETztBQUVmLDhCQUFVO0FBRkssV0FBbEIsQ0FBUDtBQUlELENBTEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBpbXBvcnQgY3VzdG9tUm91dGVyIGZyb20gJy4vcm91dGVyLmpzJztcbmltcG9ydCBzZXRNYXJrZWRPcHRpb25zIGZyb20gJy4vbWFya2VkLmpzJztcbmltcG9ydCBtYWluT2JqIGZyb20gJy4vbWFpbi5qcyc7XG5pbXBvcnQgZXhhbXBsZXNPYmogZnJvbSAnLi9jb250ZW50L2V4YW1wbGVzLmpzJztcbmltcG9ydCBzYXNzQ2xhc3Nlc09iaiBmcm9tICcuL2NvbnRlbnQvc2Fzcy1jbGFzc2VzLmpzJztcbmltcG9ydCBzYXNzVmFyc09iaiBmcm9tICcuL2NvbnRlbnQvc2Fzcy12YXJpYWJsZXMuanMnO1xuaW1wb3J0IHNhc3NNaXhpbnNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtbWl4aW5zLmpzJztcbmltcG9ydCBvdmVydmlld0NvbGxlY3Rpb24gZnJvbSAnLi9jb250ZW50L292ZXJ2aWV3LmpzJztcbmltcG9ydCB2YXJpYWJsZXNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC92YXJpYWJsZXMuanMnO1xuaW1wb3J0IG1peGluc0NvbGxlY3Rpb24gZnJvbSAnLi9jb250ZW50L21peGlucy5qcyc7XG5pbXBvcnQgY2xhc3Nlc0NvbGxlY3Rpb24gZnJvbSAnLi9jb250ZW50L2NsYXNzZXMuanMnO1xuXG5jb25zb2xlLmxvZyhtYWluT2JqLmlzVG91Y2hEZXZpY2UoKSA/ICdUb3VjaCBEZXZpY2UnOiAnRGVza3RvcCcpO1xuXG5zZXRNYXJrZWRPcHRpb25zKCk7XG5cbnZhciBjb2RlQ29udGVudHNBcnJheSA9IFtleGFtcGxlc09iaiwgc2Fzc0NsYXNzZXNPYmosIHNhc3NWYXJzT2JqLCBzYXNzTWl4aW5zT2JqXTtcblxuJChmdW5jdGlvbigpIHtcblxuICB2YXIgZmVhdHVyZURldGFpbFNvdXJjZSAgID0gJCgnI2ZlYXR1cmUtZGV0YWlsJykuaHRtbCgpLFxuICAgICAgZmVhdHVyZURldGFpbFRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGZlYXR1cmVEZXRhaWxTb3VyY2UpO1xuXG4gIHZhciBtYWtlRmVhdHVyZURldGFpbCA9IGZ1bmN0aW9uKG9iaiwgaSwgYXJyYXkpIHtcbiAgICB2YXIgY29udGV4dCA9IG9iaixcbiAgICAgICAgaHRtbCAgICA9IGZlYXR1cmVEZXRhaWxUZW1wbGF0ZShjb250ZXh0KTtcblxuICAgICQoYCMke29iai5zZWN0aW9uSWR9YCkucHJlcGVuZChodG1sKTtcbiAgfVxuXG4gIG92ZXJ2aWV3Q29sbGVjdGlvbi5mb3JFYWNoKCBtYWtlRmVhdHVyZURldGFpbCApO1xuXG4gIHZhcmlhYmxlc0NvbGxlY3Rpb24uZm9yRWFjaCggbWFrZUZlYXR1cmVEZXRhaWwgKTtcblxuICBtaXhpbnNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgY2xhc3Nlc0NvbGxlY3Rpb24uZm9yRWFjaCggbWFrZUZlYXR1cmVEZXRhaWwgKTtcblxuICAvLyBjdXN0b21Sb3V0ZXIoKTtcblxuICB2YXIgbWFya2VkU2VjdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICQuZWFjaChvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICQoYCMke2tleX1gKS5odG1sKG1hcmtlZCh2YWx1ZSkpO1xuICAgIH0pXG4gIH1cblxuICAkLmVhY2goY29kZUNvbnRlbnRzQXJyYXksIGZ1bmN0aW9uKGksIG9iaikge1xuICAgIG1hcmtlZFNlY3Rpb24ob2JqKTtcbiAgfSlcblxuICAkKCcjc2l0ZU93bmVyJykuYXBwZW5kKG1haW5PYmouZ2V0T3duZXJDb250ZW50KCkpO1xuXG4gICQoJyNtZW51T3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJyNtZW51Jykuc2hvdygpO1xuICB9KVxuXG4gICQoJyNtZW51Q2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcjbWVudScpLmhpZGUoKTtcbiAgfSlcblxuICAvLyAkKCcjbWVudSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIC8vICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIC8vIH0pXG5cbn0pO1xuIiwidmFyIGNsYXNzZXNDb2xsZWN0aW9uID0gW1xuICB7XG4gICAgc2VjdGlvbklkOiAncm93Q2xhc3NlcycsXG4gICAgY29kZUJsb2NrSWQ6ICdyb3dDbGFzc2VzRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSb3cgQ2xhc3NlcycsXG4gICAgZGVzY3JpcHRpb246ICdEZWZpbmUgaG93IGNvbnRlbnQgaXMgYXJyYW5nZWQgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5LiBZb3UgY2FuIGFsc28gZ2V0IHNwZWNpZmljIGFib3V0IG9yZGVyaW5nIGFuZCBkaXN0cmlidXRpb24gb2Ygc3BhY2UuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2NvbENsYXNzZXMnLFxuICAgIGNvZGVCbG9ja0lkOiAnY29sQ2xhc3Nlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnQ29sdW1uIENsYXNzZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVmaW5lIGNvbHVtbiB3aWR0aCBhbmQgcGxhY2VtZW50IGZvciBlYWNoIGJyZWFrcG9pbnQgb3IgZm9yIGEgc2V0IHJhbmdlJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Zpc0NsYXNzZXMnLFxuICAgIGNvZGVCbG9ja0lkOiAndmlzQ2xhc3Nlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnVmlzaWJpbGl0eSBDbGFzc2VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZGUgYW5kIHNob3cgY29udGVudC4gRGVmaW5lIHZpc2liaWxpdHkgZm9yIGVhY2ggYnJlYWtwb2ludCBvciBmb3IgYSBzZXQgcmFuZ2UnLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzZXNDb2xsZWN0aW9uO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIGV4YW1wbGVzT2JqID0ge1xuICByZXNwb25zaXZlRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG9mZnNldHNFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYXV0b1dpZHRoRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgbmVzdGVkRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gICR7aW5kZW50RG91YmxlfTwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFsaWdubWVudEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBzdGFydC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBkaXN0cmlidXRpb25FeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgYXJvdW5kLXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICByZW9yZGVyRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjE8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4gICR7aW5kZW50fS4uLlxuICA8L2Rpdj5cbiAgYCxcbiAgcmV2ZXJzZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICB2YXJpYWJsZXNFeGFtcGxlOiBgXG4gICRncmlkLWNvbHVtbnM6IDEyO1xuXG4gICR4cy1tYXg6IDY0MHB4O1xuICAkc20tbWF4OiAxMDI0cHg7XG4gICRtZC1tYXg6IDE0NDBweDtcbiAgJGxnLW1heDogMTkyMHB4O1xuXG4gICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4gIGAsXG4gIG1peGluc0V4YW1wbGU6IGBcbiAgLmNvbnRhaW5lciB7XG4gICR7aW5kZW50fUBpbmNsdWRlIHJvdygpO1xuICAke2luZGVudH0uYm94IHtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKDYpO1xuICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2wobWQsIDMpO1xuICAke2luZGVudH19XG4gICR7aW5kZW50fS5leHRyYXMge1xuICAke2luZGVudERvdWJsZX1AaW5jbHVkZSBoaWRlKGxnKTtcbiAgJHtpbmRlbnR9fVxuICB9XG4gIGAsXG4gIHZpc2liaWxpdHlFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS14cyBzaG93LW1kXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1zbS1vbmx5XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBlcUhlaWdodEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBlcS1oZWlnaHRcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbiAgPC9kaXY+XG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlc09iajtcblxuLy8gdmFyIGV4YW1wbGVzQXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogJ3Jlc3BvbnNpdmVFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbWQtNiBjb2wtbGctNFwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnb2Zmc2V0c0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLW9mZnNldC0zIGNvbC14cy05XCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdhdXRvV2lkdGhFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ25lc3RlZEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4vLyAgICAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50VHJpcGxlfTxkaXYgY2xhc3M9XCJjb2wteHNcIj48L2Rpdj5cbi8vICAgICAke2luZGVudERvdWJsZX08L2Rpdj5cbi8vICAgICAke2luZGVudH08L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ2FsaWdubWVudEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdkaXN0cmlidXRpb25FeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAncmVvcmRlckV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMiBmaXJzdC14c1wiPjM8L2Rpdj5cbi8vICAgICAke2luZGVudH0uLi5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3JldmVyc2VFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IHJldmVyc2VcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjM8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3ZhcmlhYmxlc0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgICRncmlkLWNvbHVtbnM6IDEyO1xuLy9cbi8vICAgICAkeHMtbWF4OiA2NDBweDtcbi8vICAgICAkc20tbWF4OiAxMDI0cHg7XG4vLyAgICAgJG1kLW1heDogMTQ0MHB4O1xuLy8gICAgICRsZy1tYXg6IDE5MjBweDtcbi8vXG4vLyAgICAgJGNvbnRlbnQtd2VsbC1tYXgtd2lkdGg6IDI0MDBweDtcbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ21peGluc0V4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIC5jb250YWluZXIge1xuLy8gICAgICR7aW5kZW50fUBpbmNsdWRlIHJvdygpO1xuLy8gICAgICR7aW5kZW50fS5ib3gge1xuLy8gICAgICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2wobWQsIDMpO1xuLy8gICAgICR7aW5kZW50fX1cbi8vICAgICAke2luZGVudH0uZXh0cmFzIHtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5jbHVkZSBoaWRlKGxnKTtcbi8vICAgICAke2luZGVudH19XG4vLyAgICAgfVxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAndmlzaWJpbGl0eUV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtbWQtdXBcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMtdXAgc2hvdy1tZC11cFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1zbS1vbmx5XCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdlcUhlaWdodEV4YW1wbGUnLFxuLy8gICAgIG1hcmt1cDogYFxuLy8gICAgIDxkaXYgY2xhc3M9XCJyb3cgZXEtaGVpZ2h0XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+Q29udGVudCBvZiB2YXJ5aW5nIGhlaWdodDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfVxuLy8gXVxuIiwidmFyIG1peGluc0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyb3dNaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAncm93TWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdSb3cgTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCBhIGNvbnRhaW5lciBhcyBhIHJvdyBhbmQgY3VzdG9taXplLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdjb2xNaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnY29sTWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdDb2x1bW4gTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCBhIGNvbnRhaW5lciBhcyBhIGNvbHVtbiBhbmQgY3VzdG9taXplLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdhcnJhbmdlTWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ2FycmFuZ2VNaXhpbnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0FycmFuZ2VtZW50IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdDdXN0b21pemUgdGhlIGFycmFuZ2VtZW50LCBwbGFjZW1lbnQgYW5kIG9yaWVudGF0aW9uLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2aXNpYmlsaXR5TWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Zpc2liaWxpdHlNaXhpbnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHkgTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ0hpZGUgYW5kIHNob3cgY29udGVudCB3aXRoaW4gYWxsIG9yIHZhcmlvdXMgYnJlYWtwb2ludCByYW5nZXMuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBtaXhpbnNDb2xsZWN0aW9uO1xuIiwidmFyIG92ZXJ2aWV3Q29sbGVjdGlvbiA9IFtcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Jlc3BvbnNpdmUnLFxuICAgIGNvZGVCbG9ja0lkOiAncmVzcG9uc2l2ZUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnUmVzcG9uc2l2ZSBhbmQgRmx1aWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVzcG9uc2l2ZSBtb2RpZmllcnMgbGV0IHlvdSBkZWZpbmUgY29sdW1uIHNpemVzLCBvZmZzZXRzLCBhbGlnbm1lbnQgYW5kIGRpc3RyaWJ1dGlvbiBhdCB4cywgc20sIG1kICYgbGcgdmlld3BvcnQgd2lkdGhzLiBQZXJjZW50IGJhc2VkIHdpZHRocyBhbGxvdyBmbHVpZCByZXNpemluZyBvZiBjb2x1bW5zIGFuZCByb3dzLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdvZmZzZXRzJyxcbiAgICBjb2RlQmxvY2tJZDogJ29mZnNldHNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ09mZnNldHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnT2Zmc2V0IGEgY29sdW1uLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdhdXRvV2lkdGgnLFxuICAgIGNvZGVCbG9ja0lkOiAnYXV0b1dpZHRoRXhhbXBsZScsXG4gICAgdGl0bGU6ICdBdXRvIFdpZHRoJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBhbnkgbnVtYmVyIG9mIGF1dG8gc2l6aW5nIGNvbHVtbnMgdG8gYSByb3cuIExldCB0aGUgZ3JpZCBmaWd1cmUgaXQgb3V0LicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdhbGlnbm1lbnQnLFxuICAgIGNvZGVCbG9ja0lkOiAnYWxpZ25tZW50RXhhbXBsZScsXG4gICAgdGl0bGU6ICdBbGlnbm1lbnQnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGNsYXNzZXMgdG8gYWxpZ24gZWxlbWVudHMgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiBhIHJvdyBhcyB3ZWxsIGFzIHRoZSB0b3AsIGJvdHRvbSwgb3IgY2VudGVyIG9mIGEgY29sdW1uLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdkaXN0cmlidXRpb24nLFxuICAgIGNvZGVCbG9ja0lkOiAnZGlzdHJpYnV0aW9uRXhhbXBsZScsXG4gICAgdGl0bGU6ICdEaXN0cmlidXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGNsYXNzZXMgdG8gZGlzdHJpYnV0ZSB0aGUgY29udGVudHMgb2YgYSByb3cgb3IgY29sdW1uLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyZW9yZGVyJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Jlb3JkZXJFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Jlb3JkZXJpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGNsYXNzZXMgdG8gcmVvcmRlciBjb2x1bW5zLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyZXZlcnNlJyxcbiAgICBjb2RlQmxvY2tJZDogJ3JldmVyc2VFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1JldmVyc2luZycsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgYSBjbGFzcyB0byByZXZlcnNlIGNvbHVtbnMgb3IgY29sdW1uIGNvbnRlbnQuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2VxSGVpZ2h0JyxcbiAgICBjb2RlQmxvY2tJZDogJ2VxSGVpZ2h0RXhhbXBsZScsXG4gICAgdGl0bGU6ICdDb2x1bW4gSGVpZ2h0IEVxdWFsaXplcicsXG4gICAgZGVzY3JpcHRpb246ICdCeSBkZWZhdWx0LCB0aGUgLnJvdyBjbGFzcyBvdmVycmlkZXMgZmxleGJveFxcJ3MgbmF0dXJhbCBzdHJldGNoaW5nIG9mIGNvbHVtbiBoZWlnaHQsIGFsbG93aW5nIGZvciBjdXN0b20gaG9yaXpvbnRhbCBhbGlnbm1lbnQgb2Ygcm93IGNvbnRlbnRzLiBUaGUgLmVxLWhlaWdodCByb3cgdXRpbGl0eSBjbGFzcyBhcHBsaWVzIHRoZSBzdHJldGNoIGJlaGF2aW9yIGJhY2sgdG8gdGhlIGNvbHVtbnMsIGdpdmluZyB0aGUgZGV2ZWxvcGVyIGNvbnRyb2wgb2YgdGhlIGJlaGF2aW9yLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICduZXN0ZWQnLFxuICAgIGNvZGVCbG9ja0lkOiAnbmVzdGVkRXhhbXBsZScsXG4gICAgdGl0bGU6ICdOZXN0ZWQgR3JpZHMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTmVzdCBncmlkcyBpbnNpZGUgZ3JpZHMgaW5zaWRlIGdyaWRzLicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2aXNpYmlsaXR5JyxcbiAgICBjb2RlQmxvY2tJZDogJ3Zpc2liaWxpdHlFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHknLFxuICAgIGRlc2NyaXB0aW9uOiAnVmlzaWJpbGl0eSBjbGFzc2VzIGFsbG93IGZvciByZXNwb25zaXZlIHNob3dpbmcgYW5kIGhpZGluZyBvZiBjb250ZW50LicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL2NsYXNzZXMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIGNsYXNzZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2YXJpYWJsZXMnLFxuICAgIGNvZGVCbG9ja0lkOiAndmFyaWFibGVzRXhhbXBsZScsXG4gICAgdGl0bGU6ICdWYXJpYWJsZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9taXphYmxlIFNhc3MgdmFyaWFibGVzIGFsbG93IHlvdSB0byBjcmVhdGUgYSBncmlkIGFuZCByZXNwb25zaXZlIGZyYW1ld29yayB0byBtZWV0IHlvdXIgbmVlZHMuIFlvdSBjYW4gZWFzaWx5IGNoYW5nZSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4geW91ciBncmlkIGZyb20gdGhlIGRlZmF1bHQgMTIuIFVwZGF0ZSB5b3VyIGJyZWFrcG9pbnQgcmFuZ2VzIGJ5IGFkanVzdGluZyB0aGVzZSB2YXJpYWJsZXMgYW5kIGFsbCBvZiB0aGUgbWVkaWEgcXVlcmllcywgY2xhc3NlcyBhbmQgbWl4aW5zIHdpbGwgdXBkYXRlIGFjY29yZGluZ2x5LicsXG4gICAgaGFzTGluazogdHJ1ZSxcbiAgICBocmVmOiAnL3ZpZXdzL3ZhcmlhYmxlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgdmFyaWFibGVzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnbWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ21peGluc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnTWl4aW5zJyxcbiAgICBkZXNjcmlwdGlvbjogJ01peGlucyBhcmUgYXZhaWxhYmxlIGZvciBldmVyeSBTYXNzIEZsZXhib3ggR3JpZCBzZXQgb2YgZGVsYXJhdGlvbnMuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvbWl4aW5zLmh0bWwnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCBtaXhpbnMnXG4gIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlcnZpZXdDb2xsZWN0aW9uO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIHNhc3NDbGFzc2VzT2JqID0ge1xuICByb3dDbGFzc2VzRXhhbXBsZTogYFxuICAucm93XG4gIC5yZXZlcnNlXG4gIC5lcS1oZWlnaHRcbiAgLmF1dG8taGVpZ2h0XG4gIC5zdGFydFxuICAuY2VudGVyXG4gIC5lbmRcbiAgLnRvcFxuICAubWlkZGxlXG4gIC5ib3R0b21cbiAgLmFyb3VuZFxuICAuYmV0d2VlblxuICBgLFxuICBjb2xDbGFzc2VzRXhhbXBsZTogYFxuICAuY29sXG4gIC5jb2wteHNcbiAgLmNvbC1zbVxuICAuY29sLW1kXG4gIC5jb2wtbGdcbiAgLmNvbC14bFxuICAuY29sLXhzLTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLXNtLTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLW1kLTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLWxnLTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLXhsLTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLXhzLW9mZnNldC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1zbS1vZmZzZXQtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtbWQtb2Zmc2V0LTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLWxnLW9mZnNldC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC14bC1vZmZzZXQtPGNvbHVtbiBudW1iZXI+XG4gIC5maXJzdFxuICAuZmlyc3QteHNcbiAgLmZpcnN0LXNtXG4gIC5maXJzdC1tZFxuICAuZmlyc3QtbGdcbiAgLmZpcnN0LXhsXG4gIC5sYXN0XG4gIC5sYXN0LXhzXG4gIC5sYXN0LXNtXG4gIC5sYXN0LW1kXG4gIC5sYXN0LWxnXG4gIC5sYXN0LXhsXG4gIGAsXG4gIHZpc0NsYXNzZXNFeGFtcGxlOiBgXG4gIC5zaG93XG4gIC5zaG93LXhzXG4gIC5zaG93LXhzLW9ubHlcbiAgLnNob3ctc21cbiAgLnNob3ctc20tb25seVxuICAuc2hvdy1tZFxuICAuc2hvdy1tZC1vbmx5XG4gIC5zaG93LWxnXG4gIC5zaG93LWxnLW9ubHlcbiAgLnNob3cteGxcbiAgLmhpZGVcbiAgLmhpZGUteHNcbiAgLmhpZGUteHMtb25seVxuICAuaGlkZS1zbVxuICAuaGlkZS1zbS1vbmx5XG4gIC5oaWRlLW1kXG4gIC5oaWRlLW1kLW9ubHlcbiAgLmhpZGUtbGdcbiAgLmhpZGUtbGctb25seVxuICAuaGlkZS14bFxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2Fzc0NsYXNzZXNPYmo7XG4iLCJ2YXIgaW5kZW50ID0gYCZuYnNwOyZuYnNwO2AsXG4gICAgaW5kZW50RG91YmxlID0gaW5kZW50ICsgaW5kZW50LFxuICAgIGluZGVudFRyaXBsZSA9IGluZGVudERvdWJsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWFkcnVwbGUgPSBpbmRlbnRUcmlwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVpbnR1cGxlID0gaW5kZW50UXVhZHJ1cGxlICsgaW5kZW50LFxuICAgIGluZGVudFNleHR1cGxlID0gaW5kZW50UXVpbnR1cGxlICsgaW5kZW50O1xuXG52YXIgc2Fzc01peGluc09iaiA9IHtcbiAgcm93TWl4aW5zRXhhbXBsZTogYFxuICBAaW5jbHVkZSByb3coKTtcbiAgQGluY2x1ZGUgcm93LXJldmVyc2UoKTtcbiAgQGluY2x1ZGUgcm93LWVxLWhlaWdodCgpO1xuICBAaW5jbHVkZSByb3ctYXV0by1oZWlnaHQoKTtcbiAgYCxcbiAgY29sTWl4aW5zRXhhbXBsZTogYFxuICBAaW5jbHVkZSBjb2woPGJyZWFrcG9pbnQgcHJlZml4PiwgPG51bWJlciBvZiBjb2x1bW5zPik7XG4gICR7aW5kZW50fS8vIG5vIGJyZWFrcG9pbnQgYXJnID0geHMtPG51bWJlciBvZiBjb2x1bW5zPlxuICAke2luZGVudH1AaW5jbHVkZSBjb2woPG51bWJlciBvZiBjb2x1bW5zPik7XG4gICR7aW5kZW50fS8vIG5vIGFyZ3MgPSAgYXV0by13aWR0aCBjb2x1bW4gYXQgdGhlIHhzIGJyZWFrcG9pbnRcbiAgJHtpbmRlbnR9QGluY2x1ZGUgY29sKCk7XG4gIEBpbmNsdWRlIGNvbC1vZmZzZXQoPGJyZWFrcG9pbnQgcHJlZml4PiwgPG51bWJlciBvZiBjb2x1bW5zPik7XG4gIEBpbmNsdWRlIGNvbC1yZXZlcnNlKCk7XG4gIGAsXG4gIGFycmFuZ2VNaXhpbnNFeGFtcGxlOiBgXG4gIC8vIGFwcGx5IHRvIGEgcm93IHRvIGFycmFuZ2UgZGVzY2VuZGFudHNcbiAgQGluY2x1ZGUgc3RhcnQoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGNlbnRlcig8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgZW5kKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSB0b3AoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIG1pZGRsZSg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgYm90dG9tKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBhcm91bmQoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGJldHdlZW4oPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gICR7aW5kZW50fVxuICAvLyBBcHBseSB0byBhIGNvbHVtbiB0byBhcnJhbmdlIHRoaXMgZWxlbWVudFxuICBAaW5jbHVkZSBmaXJzdCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgbGFzdCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgYCxcbiAgdmlzaWJpbGl0eU1peGluc0V4YW1wbGU6IGBcbiAgQGluY2x1ZGUgc2hvdyg8YnJlYWtwb2ludCByYW5nZSBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgaGlkZSg8YnJlYWtwb2ludCByYW5nZSBwcmVmaXg+KTtcbiAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhc3NNaXhpbnNPYmo7XG4iLCJ2YXIgaW5kZW50ID0gYCZuYnNwOyZuYnNwO2AsXG4gICAgaW5kZW50RG91YmxlID0gaW5kZW50ICsgaW5kZW50LFxuICAgIGluZGVudFRyaXBsZSA9IGluZGVudERvdWJsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWFkcnVwbGUgPSBpbmRlbnRUcmlwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVpbnR1cGxlID0gaW5kZW50UXVhZHJ1cGxlICsgaW5kZW50LFxuICAgIGluZGVudFNleHR1cGxlID0gaW5kZW50UXVpbnR1cGxlICsgaW5kZW50O1xuXG52YXIgc2Fzc1ZhcnNPYmogPSB7XG4gIGdyaWRWYXJzRXhhbXBsZTogYFxuICAkZ3JpZC1jb2x1bW5zOiAxMjsgLy8gU2V0IG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBncmlkXG4gICR7aW5kZW50fVxuICAkeHMtbWF4OiA2NDBweDsgLy8gU2V0IHhzIGJyZWFrcG9pbnQncyBtYXggd2lkdGhcbiAgJHNtLW1heDogMTAyNHB4OyAvLyBTZXQgc20gYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAkbWQtbWF4OiAxNDQwcHg7IC8vIFNldCBtZCBicmVha3BvaW50J3MgbWF4IHdpZHRoXG4gICRsZy1tYXg6IDE5MjBweDsgLy8gU2V0IGxnIGJyZWFrcG9pbnQncyBtYXggd2lkdGhcbiAgJHtpbmRlbnR9XG4gICRzbS1zdGFydDogKCR4cy1tYXggKyAxKTsgLy8gU2V0IHNtIGJyZWFrcG9pbnQncyBtaW4gd2lkdGhcbiAgJG1kLXN0YXJ0OiAoJHNtLW1heCArIDEpOyAvLyBTZXQgbWQgYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAkbGctc3RhcnQ6ICgkbWQtbWF4ICsgMSk7IC8vIFNldCBsZyBicmVha3BvaW50J3MgbWluIHdpZHRoXG4gICR4bC1zdGFydDogKCRsZy1tYXggKyAxKTsgLy8gU2V0IHhsIGJyZWFrcG9pbnQncyBtaW4gd2lkdGhcbiAgJHtpbmRlbnR9XG4gICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7IC8vIFNldCB0aGUgbWF4LXdpZHRoIG9mIHRoZSBjb250ZW50IHdlbGxcbiAgYCxcbiAgYnJlYWtwb2ludFZhcnNFeGFtcGxlOiBgXG4gICRicmVha3BvaW50LXhzLW9ubHk6IFwib25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICN7JHhzLW1heH0pXCI7XG4gICRicmVha3BvaW50LXNtLXVwOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRzbS1zdGFydH0pXCI7XG4gICRicmVha3BvaW50LXNtLW9ubHk6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHNtLXN0YXJ0fSkgYW5kIChtYXgtd2lkdGg6ICN7JHNtLW1heH0pXCI7XG4gICRicmVha3BvaW50LW1kLXVwOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRtZC1zdGFydH0pXCI7XG4gICRicmVha3BvaW50LW1kLW9ubHk6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1kLXN0YXJ0fSkgYW5kIChtYXgtd2lkdGg6ICN7JG1kLW1heH0pXCI7XG4gICRicmVha3BvaW50LWxnLXVwOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyRsZy1zdGFydH0pXCI7XG4gICRicmVha3BvaW50LWxnLW9ubHk6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGxnLXN0YXJ0fSkgYW5kIChtYXgtd2lkdGg6ICN7JGxnLW1heH0pXCI7XG4gICRicmVha3BvaW50LXhsLXVwOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAjeyR4bC1zdGFydH0pXCI7XG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXNzVmFyc09iajtcbiIsInZhciB2YXJpYWJsZXNDb2xsZWN0aW9uID0gW1xuICB7XG4gICAgc2VjdGlvbklkOiAnZ3JpZFZhcnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnZ3JpZFZhcnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0dyaWQgQ29udHJvbCcsXG4gICAgZGVzY3JpcHRpb246ICdZb3UgY2FuIGVhc2lseSBjaGFuZ2UgdGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHlvdXIgZ3JpZCBmcm9tIHRoZSBkZWZhdWx0IDEyLiBVcGRhdGUgeW91ciBicmVha3BvaW50IHJhbmdlcyBieSBhZGp1c3RpbmcgdGhlc2UgdmFyaWFibGVzIGFuZCBhbGwgb2YgdGhlIG1lZGlhIHF1ZXJpZXMsIGNsYXNzZXMgYW5kIG1peGlucyB3aWxsIHVwZGF0ZSBhY2NvcmRpbmdseS4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYnJlYWtwb2ludFZhcnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnYnJlYWtwb2ludFZhcnNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0JyZWFrcG9pbnQgUmFuZ2VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0JyZWFrcG9pbnQgcmFuZ2UgdmFyaWFibGVzIGFyZSBhdXRvbWFnaWNhbGx5IGNyZWF0ZWQgYmFzZWQgb24gdGhlIGdyaWQgdmFyaWFibGVzLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFyaWFibGVzQ29sbGVjdGlvbjtcbiIsInZhciBtYWluT2JqID0ge1xuICBvd25lcjogJ0RyZXcgQm90a2EnLFxuICBnaXRodWJVcmw6IGBodHRwczovL2dpdGh1Yi5jb20vZHJld2JvdGAsXG4gIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgISEoJ21zbWF4dG91Y2hwb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9LFxuICBnZXRDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIGAmY29weTsgJHt0aGlzLmN1cnJlbnRZZWFyfSAke3RoaXMub3duZXJ9LiBBbGwgUmlnaHRzIFJlc2VydmVkLmBcbiAgfSxcbiAgZ2V0T3duZXJDb250ZW50KCkge1xuICAgIHJldHVybiBgTWFkZSBieSA8YSBocmVmPVwiJHt0aGlzLmdpdGh1YlVybH1cIj4ke3RoaXMub3duZXJ9PC9hPmBcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluT2JqO1xuIiwidmFyIHNldE1hcmtlZE9wdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG1hcmtlZC5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgICAgIHNhbml0aXplOiB0cnVlXG4gICAgICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0TWFya2VkT3B0aW9ucztcbiJdfQ==