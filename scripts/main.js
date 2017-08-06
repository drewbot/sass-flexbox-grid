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
  title: 'Auto balls Width',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2NsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L2V4YW1wbGVzLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9taXhpbnMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L292ZXJ2aWV3LmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLWNsYXNzZXMuanMiLCJhcHAvc2NyaXB0cy9jb250ZW50L3Nhc3MtbWl4aW5zLmpzIiwiYXBwL3NjcmlwdHMvY29udGVudC9zYXNzLXZhcmlhYmxlcy5qcyIsImFwcC9zY3JpcHRzL2NvbnRlbnQvdmFyaWFibGVzLmpzIiwiYXBwL3NjcmlwdHMvbWFpbi5qcyIsImFwcC9zY3JpcHRzL21hcmtlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVZBO0FBWUEsUUFBUSxHQUFSLENBQVksZUFBUSxhQUFSLEtBQTBCLGNBQTFCLEdBQTBDLFNBQXREOztBQUVBOztBQUVBLElBQUksb0JBQW9CLDBGQUF4Qjs7QUFFQSxFQUFFLFlBQVc7O0FBRVgsTUFBSSxzQkFBd0IsRUFBRSxpQkFBRixFQUFxQixJQUFyQixFQUE1QjtBQUFBLE1BQ0ksd0JBQXdCLFdBQVcsT0FBWCxDQUFtQixtQkFBbkIsQ0FENUI7O0FBR0EsTUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQVMsR0FBVCxFQUFjLENBQWQsRUFBaUIsS0FBakIsRUFBd0I7QUFDOUMsUUFBSSxVQUFVLEdBQWQ7QUFBQSxRQUNJLE9BQVUsc0JBQXNCLE9BQXRCLENBRGQ7O0FBR0EsWUFBTSxJQUFJLFNBQVYsRUFBdUIsT0FBdkIsQ0FBK0IsSUFBL0I7QUFDRCxH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Q0EsSUFBSSxzQkFBc0IsQ0FDeEI7QUFDRSxhQUFXLFVBRGI7QUFFRSxlQUFhLGlCQUZmO0FBR0UsU0FBTyxjQUhUO0FBSUUsZUFBYSxvTkFKZjtBQUtFLFdBQVMsS0FMWDtBQU1FLFFBQU0sRUFOUjtBQU9FLGVBQWE7QUFQZixDQUR3QixFQVV4QjtBQUNFLGFBQVcsZ0JBRGI7QUFFRSxlQUFhLHVCQUZmO0FBR0UsU0FBTyxtQkFIVDtBQUlFLGVBQWEsbUZBSmY7QUFLRSxXQUFTLEtBTFg7QUFNRSxRQUFNLEVBTlI7QUFPRSxlQUFhO0FBUGYsQ0FWd0IsQ0FBMUI7O0FBcUJBLE9BQU8sT0FBUCxHQUFpQixtQkFBakI7Ozs7O0FDckJBLElBQUksVUFBVTtBQUNaLFNBQU8sWUFESztBQUVaLHlDQUZZO0FBR1osZUFBYSxJQUFJLElBQUosR0FBVyxXQUFYLEVBSEQ7QUFJWixlQUpZLDJCQUlJO0FBQ2QsV0FBTyxDQUFDLEVBQUUsa0JBQWtCLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQixPQUFPLFNBQS9CLENBQXhDO0FBQ0QsR0FOVztBQU9aLGNBUFksMEJBT0c7QUFDYix1QkFBaUIsS0FBSyxXQUF0QixTQUFxQyxLQUFLLEtBQTFDO0FBQ0QsR0FUVztBQVVaLGlCQVZZLDZCQVVNO0FBQ2hCLGlDQUEyQixLQUFLLFNBQWhDLFVBQThDLEtBQUssS0FBbkQ7QUFDRDtBQVpXLENBQWQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7OztBQ2ZBLElBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFXO0FBQ2hDLGlCQUFPLE9BQU8sVUFBUCxDQUFrQjtBQUNmLDRCQUFRLElBRE87QUFFZiw4QkFBVTtBQUZLLFdBQWxCLENBQVA7QUFJRCxDQUxEOztBQU9BLE9BQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IGN1c3RvbVJvdXRlciBmcm9tICcuL3JvdXRlci5qcyc7XG5pbXBvcnQgc2V0TWFya2VkT3B0aW9ucyBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IGV4YW1wbGVzT2JqIGZyb20gJy4vY29udGVudC9leGFtcGxlcy5qcyc7XG5pbXBvcnQgc2Fzc0NsYXNzZXNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtY2xhc3Nlcy5qcyc7XG5pbXBvcnQgc2Fzc1ZhcnNPYmogZnJvbSAnLi9jb250ZW50L3Nhc3MtdmFyaWFibGVzLmpzJztcbmltcG9ydCBzYXNzTWl4aW5zT2JqIGZyb20gJy4vY29udGVudC9zYXNzLW1peGlucy5qcyc7XG5pbXBvcnQgb3ZlcnZpZXdDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9vdmVydmlldy5qcyc7XG5pbXBvcnQgdmFyaWFibGVzQ29sbGVjdGlvbiBmcm9tICcuL2NvbnRlbnQvdmFyaWFibGVzLmpzJztcbmltcG9ydCBtaXhpbnNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9taXhpbnMuanMnO1xuaW1wb3J0IGNsYXNzZXNDb2xsZWN0aW9uIGZyb20gJy4vY29udGVudC9jbGFzc2VzLmpzJztcblxuY29uc29sZS5sb2cobWFpbk9iai5pc1RvdWNoRGV2aWNlKCkgPyAnVG91Y2ggRGV2aWNlJzogJ0Rlc2t0b3AnKTtcblxuc2V0TWFya2VkT3B0aW9ucygpO1xuXG52YXIgY29kZUNvbnRlbnRzQXJyYXkgPSBbZXhhbXBsZXNPYmosIHNhc3NDbGFzc2VzT2JqLCBzYXNzVmFyc09iaiwgc2Fzc01peGluc09ial07XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGZlYXR1cmVEZXRhaWxTb3VyY2UgICA9ICQoJyNmZWF0dXJlLWRldGFpbCcpLmh0bWwoKSxcbiAgICAgIGZlYXR1cmVEZXRhaWxUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShmZWF0dXJlRGV0YWlsU291cmNlKTtcblxuICB2YXIgbWFrZUZlYXR1cmVEZXRhaWwgPSBmdW5jdGlvbihvYmosIGksIGFycmF5KSB7XG4gICAgdmFyIGNvbnRleHQgPSBvYmosXG4gICAgICAgIGh0bWwgICAgPSBmZWF0dXJlRGV0YWlsVGVtcGxhdGUoY29udGV4dCk7XG5cbiAgICAkKGAjJHtvYmouc2VjdGlvbklkfWApLnByZXBlbmQoaHRtbCk7XG4gIH1cblxuICBvdmVydmlld0NvbGxlY3Rpb24uZm9yRWFjaCggbWFrZUZlYXR1cmVEZXRhaWwgKTtcblxuICB2YXJpYWJsZXNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgbWl4aW5zQ29sbGVjdGlvbi5mb3JFYWNoKCBtYWtlRmVhdHVyZURldGFpbCApO1xuXG4gIGNsYXNzZXNDb2xsZWN0aW9uLmZvckVhY2goIG1ha2VGZWF0dXJlRGV0YWlsICk7XG5cbiAgLy8gY3VzdG9tUm91dGVyKCk7XG5cbiAgdmFyIG1hcmtlZFNlY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAkLmVhY2gob2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAkKGAjJHtrZXl9YCkuaHRtbChtYXJrZWQodmFsdWUpKTtcbiAgICB9KVxuICB9XG5cbiAgJC5lYWNoKGNvZGVDb250ZW50c0FycmF5LCBmdW5jdGlvbihpLCBvYmopIHtcbiAgICBtYXJrZWRTZWN0aW9uKG9iaik7XG4gIH0pXG5cbiAgJCgnI3NpdGVPd25lcicpLmFwcGVuZChtYWluT2JqLmdldE93bmVyQ29udGVudCgpKTtcblxuICAkKCcjbWVudU9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcjbWVudScpLnNob3coKTtcbiAgfSlcblxuICAkKCcjbWVudUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnI21lbnUnKS5oaWRlKCk7XG4gIH0pXG5cbiAgLy8gJCgnI21lbnUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAvLyAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAvLyB9KVxuXG59KTtcbiIsInZhciBjbGFzc2VzQ29sbGVjdGlvbiA9IFtcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Jvd0NsYXNzZXMnLFxuICAgIGNvZGVCbG9ja0lkOiAncm93Q2xhc3Nlc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnUm93IENsYXNzZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVmaW5lIGhvdyBjb250ZW50IGlzIGFycmFuZ2VkIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS4gWW91IGNhbiBhbHNvIGdldCBzcGVjaWZpYyBhYm91dCBvcmRlcmluZyBhbmQgZGlzdHJpYnV0aW9uIG9mIHNwYWNlLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdjb2xDbGFzc2VzJyxcbiAgICBjb2RlQmxvY2tJZDogJ2NvbENsYXNzZXNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0NvbHVtbiBDbGFzc2VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0RlZmluZSBjb2x1bW4gd2lkdGggYW5kIHBsYWNlbWVudCBmb3IgZWFjaCBicmVha3BvaW50IG9yIGZvciBhIHNldCByYW5nZScsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICd2aXNDbGFzc2VzJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Zpc0NsYXNzZXNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHkgQ2xhc3NlcycsXG4gICAgZGVzY3JpcHRpb246ICdIaWRlIGFuZCBzaG93IGNvbnRlbnQuIERlZmluZSB2aXNpYmlsaXR5IGZvciBlYWNoIGJyZWFrcG9pbnQgb3IgZm9yIGEgc2V0IHJhbmdlJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc2VzQ29sbGVjdGlvbjtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBleGFtcGxlc09iaiA9IHtcbiAgcmVzcG9uc2l2ZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1tZC02IGNvbC1sZy00XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBvZmZzZXRzRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtb2Zmc2V0LTMgY29sLXhzLTlcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGF1dG9XaWR0aEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG5lc3RlZEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4gICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnRUcmlwbGV9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICAke2luZGVudERvdWJsZX08L2Rpdj5cbiAgJHtpbmRlbnR9PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbGlnbm1lbnRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZGlzdHJpYnV0aW9uRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgcmVvcmRlckV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yIGZpcnN0LXhzXCI+MzwvZGl2PlxuICAke2luZGVudH0uLi5cbiAgPC9kaXY+XG4gIGAsXG4gIHJldmVyc2VFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgcmV2ZXJzZVwiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MzwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgdmFyaWFibGVzRXhhbXBsZTogYFxuICAkZ3JpZC1jb2x1bW5zOiAxMjtcblxuICAkeHMtbWF4OiA2NDBweDtcbiAgJHNtLW1heDogMTAyNHB4O1xuICAkbWQtbWF4OiAxNDQwcHg7XG4gICRsZy1tYXg6IDE5MjBweDtcblxuICAkY29udGVudC13ZWxsLW1heC13aWR0aDogMjQwMHB4O1xuICBgLFxuICBtaXhpbnNFeGFtcGxlOiBgXG4gIC5jb250YWluZXIge1xuICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbiAgJHtpbmRlbnR9LmJveCB7XG4gICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbiAgJHtpbmRlbnR9fVxuICAke2luZGVudH0uZXh0cmFzIHtcbiAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4gICR7aW5kZW50fX1cbiAgfVxuICBgLFxuICB2aXNpYmlsaXR5RXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1tZFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMgc2hvdy1tZFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZXFIZWlnaHRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgZXEtaGVpZ2h0XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gIDwvZGl2PlxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZXNPYmo7XG5cbi8vIHZhciBleGFtcGxlc0FycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXNwb25zaXZlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ29mZnNldHNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnYXV0b1dpZHRoRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICduZXN0ZWRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPlxuLy8gICAgICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnREb3VibGV9PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdhbGlnbm1lbnRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IHN0YXJ0LXhzXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZGlzdHJpYnV0aW9uRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyBhcm91bmQteHNcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Jlb3JkZXJFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MTwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9Li4uXG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXZlcnNlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjE8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICd2YXJpYWJsZXNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAkZ3JpZC1jb2x1bW5zOiAxMjtcbi8vXG4vLyAgICAgJHhzLW1heDogNjQwcHg7XG4vLyAgICAgJHNtLW1heDogMTAyNHB4O1xuLy8gICAgICRtZC1tYXg6IDE0NDBweDtcbi8vICAgICAkbGctbWF4OiAxOTIwcHg7XG4vL1xuLy8gICAgICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdtaXhpbnNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAuY29udGFpbmVyIHtcbi8vICAgICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbi8vICAgICAke2luZGVudH0uYm94IHtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2woNik7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbi8vICAgICAke2luZGVudH19XG4vLyAgICAgJHtpbmRlbnR9LmV4dHJhcyB7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4vLyAgICAgJHtpbmRlbnR9fVxuLy8gICAgIH1cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Zpc2liaWxpdHlFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kLXVwXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLXhzLXVwIHNob3ctbWQtdXBcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZXFIZWlnaHRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IGVxLWhlaWdodFwiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH1cbi8vIF1cbiIsInZhciBtaXhpbnNDb2xsZWN0aW9uID0gW1xuICB7XG4gICAgc2VjdGlvbklkOiAncm93TWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Jvd01peGluc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnUm93IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgYSBjb250YWluZXIgYXMgYSByb3cgYW5kIGN1c3RvbWl6ZS4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnY29sTWl4aW5zJyxcbiAgICBjb2RlQmxvY2tJZDogJ2NvbE1peGluc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnQ29sdW1uIE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgYSBjb250YWluZXIgYXMgYSBjb2x1bW4gYW5kIGN1c3RvbWl6ZS4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnYXJyYW5nZU1peGlucycsXG4gICAgY29kZUJsb2NrSWQ6ICdhcnJhbmdlTWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdBcnJhbmdlbWVudCBNaXhpbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9taXplIHRoZSBhcnJhbmdlbWVudCwgcGxhY2VtZW50IGFuZCBvcmllbnRhdGlvbi4nLFxuICAgIGhhc0xpbms6IGZhbHNlLFxuICAgIGhyZWY6ICcnLFxuICAgIGxpbmtDb250ZW50OiAnJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAndmlzaWJpbGl0eU1peGlucycsXG4gICAgY29kZUJsb2NrSWQ6ICd2aXNpYmlsaXR5TWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdWaXNpYmlsaXR5IE1peGlucycsXG4gICAgZGVzY3JpcHRpb246ICdIaWRlIGFuZCBzaG93IGNvbnRlbnQgd2l0aGluIGFsbCBvciB2YXJpb3VzIGJyZWFrcG9pbnQgcmFuZ2VzLicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH1cbl07XG5cbm1vZHVsZS5leHBvcnRzID0gbWl4aW5zQ29sbGVjdGlvbjtcbiIsInZhciBvdmVydmlld0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdyZXNwb25zaXZlJyxcbiAgICBjb2RlQmxvY2tJZDogJ3Jlc3BvbnNpdmVFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1Jlc3BvbnNpdmUgYW5kIEZsdWlkJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Jlc3BvbnNpdmUgbW9kaWZpZXJzIGVuYWJsZSBzcGVjaWZ5aW5nIGRpZmZlcmVudCBjb2x1bW4gc2l6ZXMsIG9mZnNldHMsIGFsaWdubWVudCBhbmQgZGlzdHJpYnV0aW9uIGF0IHhzLCBzbSwgbWQgJiBsZyB2aWV3cG9ydCB3aWR0aHMuIFBlcmNlbnQgYmFzZWQgd2lkdGhzIGFsbG93IGZsdWlkIHJlc2l6aW5nIG9mIGNvbHVtbnMgYW5kIHJvd3MuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ29mZnNldHMnLFxuICAgIGNvZGVCbG9ja0lkOiAnb2Zmc2V0c0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnT2Zmc2V0cycsXG4gICAgZGVzY3JpcHRpb246ICdPZmZzZXQgYSBjb2x1bW4uJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2F1dG9XaWR0aCcsXG4gICAgY29kZUJsb2NrSWQ6ICdhdXRvV2lkdGhFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0F1dG8gYmFsbHMgV2lkdGgnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWRkIGFueSBudW1iZXIgb2YgYXV0byBzaXppbmcgY29sdW1ucyB0byBhIHJvdy4gTGV0IHRoZSBncmlkIGZpZ3VyZSBpdCBvdXQuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2FsaWdubWVudCcsXG4gICAgY29kZUJsb2NrSWQ6ICdhbGlnbm1lbnRFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0FsaWdubWVudCcsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgY2xhc3NlcyB0byBhbGlnbiBlbGVtZW50cyB0byB0aGUgc3RhcnQgb3IgZW5kIG9mIGEgcm93IGFzIHdlbGwgYXMgdGhlIHRvcCwgYm90dG9tLCBvciBjZW50ZXIgb2YgYSBjb2x1bW4uJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ2Rpc3RyaWJ1dGlvbicsXG4gICAgY29kZUJsb2NrSWQ6ICdkaXN0cmlidXRpb25FeGFtcGxlJyxcbiAgICB0aXRsZTogJ0Rpc3RyaWJ1dGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgY2xhc3NlcyB0byBkaXN0cmlidXRlIHRoZSBjb250ZW50cyBvZiBhIHJvdyBvciBjb2x1bW4uJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Jlb3JkZXInLFxuICAgIGNvZGVCbG9ja0lkOiAncmVvcmRlckV4YW1wbGUnLFxuICAgIHRpdGxlOiAnUmVvcmRlcmluZycsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgY2xhc3NlcyB0byByZW9yZGVyIGNvbHVtbnMuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3JldmVyc2UnLFxuICAgIGNvZGVCbG9ja0lkOiAncmV2ZXJzZUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnUmV2ZXJzaW5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ0FkZCBhIGNsYXNzIHRvIHJldmVyc2UgY29sdW1ucyBvciBjb2x1bW4gY29udGVudC4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy92aWV3cy9jbGFzc2VzLmh0bWwnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCBjbGFzc2VzJ1xuICB9LFxuICB7XG4gICAgc2VjdGlvbklkOiAnZXFIZWlnaHQnLFxuICAgIGNvZGVCbG9ja0lkOiAnZXFIZWlnaHRFeGFtcGxlJyxcbiAgICB0aXRsZTogJ0NvbHVtbiBIZWlnaHQgRXF1YWxpemVyJyxcbiAgICBkZXNjcmlwdGlvbjogJ0J5IGRlZmF1bHQsIHRoZSAucm93IGNsYXNzIG92ZXJyaWRlcyBmbGV4Ym94XFwncyBuYXR1cmFsIHN0cmV0Y2hpbmcgb2YgY29sdW1uIGhlaWdodCwgYWxsb3dpbmcgZm9yIGN1c3RvbSBob3Jpem9udGFsIGFsaWdubWVudCBvZiByb3cgY29udGVudHMuIFRoZSAuZXEtaGVpZ2h0IHJvdyB1dGlsaXR5IGNsYXNzIGFwcGxpZXMgdGhlIHN0cmV0Y2ggYmVoYXZpb3IgYmFjayB0byB0aGUgY29sdW1ucywgZ2l2aW5nIHRoZSBkZXZlbG9wZXIgY29udHJvbCBvZiB0aGUgYmVoYXZpb3IuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ25lc3RlZCcsXG4gICAgY29kZUJsb2NrSWQ6ICduZXN0ZWRFeGFtcGxlJyxcbiAgICB0aXRsZTogJ05lc3RlZCBHcmlkcycsXG4gICAgZGVzY3JpcHRpb246ICdOZXN0IGdyaWRzIGluc2lkZSBncmlkcyBpbnNpZGUgZ3JpZHMuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3Zpc2liaWxpdHknLFxuICAgIGNvZGVCbG9ja0lkOiAndmlzaWJpbGl0eUV4YW1wbGUnLFxuICAgIHRpdGxlOiAnVmlzaWJpbGl0eScsXG4gICAgZGVzY3JpcHRpb246ICdWaXNpYmlsaXR5IGNsYXNzZXMgYWxsb3cgZm9yIHJlc3BvbnNpdmUgc2hvd2luZyBhbmQgaGlkaW5nIG9mIGNvbnRlbnQuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvY2xhc3Nlcy5odG1sJyxcbiAgICBsaW5rQ29udGVudDogJ1NlZSBhbGwgY2xhc3NlcydcbiAgfSxcbiAge1xuICAgIHNlY3Rpb25JZDogJ3ZhcmlhYmxlcycsXG4gICAgY29kZUJsb2NrSWQ6ICd2YXJpYWJsZXNFeGFtcGxlJyxcbiAgICB0aXRsZTogJ1ZhcmlhYmxlcycsXG4gICAgZGVzY3JpcHRpb246ICdDdXN0b21pemFibGUgU2FzcyB2YXJpYWJsZXMgYWxsb3cgeW91IHRvIGNyZWF0ZSBhIGdyaWQgYW5kIHJlc3BvbnNpdmUgZnJhbWV3b3JrIHRvIG1lZXQgeW91ciBuZWVkcy4gWW91IGNhbiBlYXNpbHkgY2hhbmdlIHRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB5b3VyIGdyaWQgZnJvbSB0aGUgZGVmYXVsdCAxMi4gVXBkYXRlIHlvdXIgYnJlYWtwb2ludCByYW5nZXMgYnkgYWRqdXN0aW5nIHRoZXNlIHZhcmlhYmxlcyBhbmQgYWxsIG9mIHRoZSBtZWRpYSBxdWVyaWVzLCBjbGFzc2VzIGFuZCBtaXhpbnMgd2lsbCB1cGRhdGUgYWNjb3JkaW5nbHkuJyxcbiAgICBoYXNMaW5rOiB0cnVlLFxuICAgIGhyZWY6ICcvdmlld3MvdmFyaWFibGVzLmh0bWwnLFxuICAgIGxpbmtDb250ZW50OiAnU2VlIGFsbCB2YXJpYWJsZXMnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdtaXhpbnMnLFxuICAgIGNvZGVCbG9ja0lkOiAnbWl4aW5zRXhhbXBsZScsXG4gICAgdGl0bGU6ICdNaXhpbnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnTWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIGV2ZXJ5IFNhc3MgRmxleGJveCBHcmlkIHNldCBvZiBkZWxhcmF0aW9ucy4nLFxuICAgIGhhc0xpbms6IHRydWUsXG4gICAgaHJlZjogJy92aWV3cy9taXhpbnMuaHRtbCcsXG4gICAgbGlua0NvbnRlbnQ6ICdTZWUgYWxsIG1peGlucydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBvdmVydmlld0NvbGxlY3Rpb247XG4iLCJ2YXIgaW5kZW50ID0gYCZuYnNwOyZuYnNwO2AsXG4gICAgaW5kZW50RG91YmxlID0gaW5kZW50ICsgaW5kZW50LFxuICAgIGluZGVudFRyaXBsZSA9IGluZGVudERvdWJsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWFkcnVwbGUgPSBpbmRlbnRUcmlwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVpbnR1cGxlID0gaW5kZW50UXVhZHJ1cGxlICsgaW5kZW50LFxuICAgIGluZGVudFNleHR1cGxlID0gaW5kZW50UXVpbnR1cGxlICsgaW5kZW50O1xuXG52YXIgc2Fzc0NsYXNzZXNPYmogPSB7XG4gIHJvd0NsYXNzZXNFeGFtcGxlOiBgXG4gIC5yb3dcbiAgLnJldmVyc2VcbiAgLmVxLWhlaWdodFxuICAuYXV0by1oZWlnaHRcbiAgLnN0YXJ0XG4gIC5jZW50ZXJcbiAgLmVuZFxuICAudG9wXG4gIC5taWRkbGVcbiAgLmJvdHRvbVxuICAuYXJvdW5kXG4gIC5iZXR3ZWVuXG4gIGAsXG4gIGNvbENsYXNzZXNFeGFtcGxlOiBgXG4gIC5jb2xcbiAgLmNvbC14c1xuICAuY29sLXNtXG4gIC5jb2wtbWRcbiAgLmNvbC1sZ1xuICAuY29sLXhsXG4gIC5jb2wteHMtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtc20tPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtbWQtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtbGctPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wteGwtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wteHMtb2Zmc2V0LTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLXNtLW9mZnNldC08Y29sdW1uIG51bWJlcj5cbiAgLmNvbC1tZC1vZmZzZXQtPGNvbHVtbiBudW1iZXI+XG4gIC5jb2wtbGctb2Zmc2V0LTxjb2x1bW4gbnVtYmVyPlxuICAuY29sLXhsLW9mZnNldC08Y29sdW1uIG51bWJlcj5cbiAgLmZpcnN0XG4gIC5maXJzdC14c1xuICAuZmlyc3Qtc21cbiAgLmZpcnN0LW1kXG4gIC5maXJzdC1sZ1xuICAuZmlyc3QteGxcbiAgLmxhc3RcbiAgLmxhc3QteHNcbiAgLmxhc3Qtc21cbiAgLmxhc3QtbWRcbiAgLmxhc3QtbGdcbiAgLmxhc3QteGxcbiAgYCxcbiAgdmlzQ2xhc3Nlc0V4YW1wbGU6IGBcbiAgLnNob3dcbiAgLnNob3cteHNcbiAgLnNob3cteHMtb25seVxuICAuc2hvdy1zbVxuICAuc2hvdy1zbS1vbmx5XG4gIC5zaG93LW1kXG4gIC5zaG93LW1kLW9ubHlcbiAgLnNob3ctbGdcbiAgLnNob3ctbGctb25seVxuICAuc2hvdy14bFxuICAuaGlkZVxuICAuaGlkZS14c1xuICAuaGlkZS14cy1vbmx5XG4gIC5oaWRlLXNtXG4gIC5oaWRlLXNtLW9ubHlcbiAgLmhpZGUtbWRcbiAgLmhpZGUtbWQtb25seVxuICAuaGlkZS1sZ1xuICAuaGlkZS1sZy1vbmx5XG4gIC5oaWRlLXhsXG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYXNzQ2xhc3Nlc09iajtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBzYXNzTWl4aW5zT2JqID0ge1xuICByb3dNaXhpbnNFeGFtcGxlOiBgXG4gIEBpbmNsdWRlIHJvdygpO1xuICBAaW5jbHVkZSByb3ctcmV2ZXJzZSgpO1xuICBAaW5jbHVkZSByb3ctZXEtaGVpZ2h0KCk7XG4gIEBpbmNsdWRlIHJvdy1hdXRvLWhlaWdodCgpO1xuICBgLFxuICBjb2xNaXhpbnNFeGFtcGxlOiBgXG4gIEBpbmNsdWRlIGNvbCg8YnJlYWtwb2ludCBwcmVmaXg+LCA8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgJHtpbmRlbnR9Ly8gbm8gYnJlYWtwb2ludCBhcmcgPSB4cy08bnVtYmVyIG9mIGNvbHVtbnM+XG4gICR7aW5kZW50fUBpbmNsdWRlIGNvbCg8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgJHtpbmRlbnR9Ly8gbm8gYXJncyA9ICBhdXRvLXdpZHRoIGNvbHVtbiBhdCB0aGUgeHMgYnJlYWtwb2ludFxuICAke2luZGVudH1AaW5jbHVkZSBjb2woKTtcbiAgQGluY2x1ZGUgY29sLW9mZnNldCg8YnJlYWtwb2ludCBwcmVmaXg+LCA8bnVtYmVyIG9mIGNvbHVtbnM+KTtcbiAgQGluY2x1ZGUgY29sLXJldmVyc2UoKTtcbiAgYCxcbiAgYXJyYW5nZU1peGluc0V4YW1wbGU6IGBcbiAgLy8gYXBwbHkgdG8gYSByb3cgdG8gYXJyYW5nZSBkZXNjZW5kYW50c1xuICBAaW5jbHVkZSBzdGFydCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgY2VudGVyKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBlbmQoPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIHRvcCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgbWlkZGxlKDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBib3R0b20oPGJyZWFrcG9pbnQgcHJlZml4Pik7XG4gIEBpbmNsdWRlIGFyb3VuZCg8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgQGluY2x1ZGUgYmV0d2Vlbig8YnJlYWtwb2ludCBwcmVmaXg+KTtcbiAgJHtpbmRlbnR9XG4gIC8vIEFwcGx5IHRvIGEgY29sdW1uIHRvIGFycmFuZ2UgdGhpcyBlbGVtZW50XG4gIEBpbmNsdWRlIGZpcnN0KDxicmVha3BvaW50IHByZWZpeD4pO1xuICBAaW5jbHVkZSBsYXN0KDxicmVha3BvaW50IHByZWZpeD4pO1xuICBgLFxuICB2aXNpYmlsaXR5TWl4aW5zRXhhbXBsZTogYFxuICBAaW5jbHVkZSBzaG93KDxicmVha3BvaW50IHJhbmdlIHByZWZpeD4pO1xuICBAaW5jbHVkZSBoaWRlKDxicmVha3BvaW50IHJhbmdlIHByZWZpeD4pO1xuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2Fzc01peGluc09iajtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBzYXNzVmFyc09iaiA9IHtcbiAgZ3JpZFZhcnNFeGFtcGxlOiBgXG4gICRncmlkLWNvbHVtbnM6IDEyOyAvLyBTZXQgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWRcbiAgJHtpbmRlbnR9XG4gICR4cy1tYXg6IDY0MHB4OyAvLyBTZXQgeHMgYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAkc20tbWF4OiAxMDI0cHg7IC8vIFNldCBzbSBicmVha3BvaW50J3MgbWF4IHdpZHRoXG4gICRtZC1tYXg6IDE0NDBweDsgLy8gU2V0IG1kIGJyZWFrcG9pbnQncyBtYXggd2lkdGhcbiAgJGxnLW1heDogMTkyMHB4OyAvLyBTZXQgbGcgYnJlYWtwb2ludCdzIG1heCB3aWR0aFxuICAke2luZGVudH1cbiAgJHNtLXN0YXJ0OiAoJHhzLW1heCArIDEpOyAvLyBTZXQgc20gYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAkbWQtc3RhcnQ6ICgkc20tbWF4ICsgMSk7IC8vIFNldCBtZCBicmVha3BvaW50J3MgbWluIHdpZHRoXG4gICRsZy1zdGFydDogKCRtZC1tYXggKyAxKTsgLy8gU2V0IGxnIGJyZWFrcG9pbnQncyBtaW4gd2lkdGhcbiAgJHhsLXN0YXJ0OiAoJGxnLW1heCArIDEpOyAvLyBTZXQgeGwgYnJlYWtwb2ludCdzIG1pbiB3aWR0aFxuICAke2luZGVudH1cbiAgJGNvbnRlbnQtd2VsbC1tYXgtd2lkdGg6IDI0MDBweDsgLy8gU2V0IHRoZSBtYXgtd2lkdGggb2YgdGhlIGNvbnRlbnQgd2VsbFxuICBgLFxuICBicmVha3BvaW50VmFyc0V4YW1wbGU6IGBcbiAgJGJyZWFrcG9pbnQteHMtb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogI3skeHMtbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtc20tdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHNtLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtc20tb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skc20tc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skc20tbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtbWQtdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JG1kLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtbWQtb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbWQtc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skbWQtbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQtbGctdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGxnLXN0YXJ0fSlcIjtcbiAgJGJyZWFrcG9pbnQtbGctb25seTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skbGctc3RhcnR9KSBhbmQgKG1heC13aWR0aDogI3skbGctbWF4fSlcIjtcbiAgJGJyZWFrcG9pbnQteGwtdXA6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JHhsLXN0YXJ0fSlcIjtcbiAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNhc3NWYXJzT2JqO1xuIiwidmFyIHZhcmlhYmxlc0NvbGxlY3Rpb24gPSBbXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdncmlkVmFycycsXG4gICAgY29kZUJsb2NrSWQ6ICdncmlkVmFyc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnR3JpZCBDb250cm9sJyxcbiAgICBkZXNjcmlwdGlvbjogJ1lvdSBjYW4gZWFzaWx5IGNoYW5nZSB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4geW91ciBncmlkIGZyb20gdGhlIGRlZmF1bHQgMTIuIFVwZGF0ZSB5b3VyIGJyZWFrcG9pbnQgcmFuZ2VzIGJ5IGFkanVzdGluZyB0aGVzZSB2YXJpYWJsZXMgYW5kIGFsbCBvZiB0aGUgbWVkaWEgcXVlcmllcywgY2xhc3NlcyBhbmQgbWl4aW5zIHdpbGwgdXBkYXRlIGFjY29yZGluZ2x5LicsXG4gICAgaGFzTGluazogZmFsc2UsXG4gICAgaHJlZjogJycsXG4gICAgbGlua0NvbnRlbnQ6ICcnXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uSWQ6ICdicmVha3BvaW50VmFycycsXG4gICAgY29kZUJsb2NrSWQ6ICdicmVha3BvaW50VmFyc0V4YW1wbGUnLFxuICAgIHRpdGxlOiAnQnJlYWtwb2ludCBSYW5nZXMnLFxuICAgIGRlc2NyaXB0aW9uOiAnQnJlYWtwb2ludCByYW5nZSB2YXJpYWJsZXMgYXJlIGF1dG9tYWdpY2FsbHkgY3JlYXRlZCBiYXNlZCBvbiB0aGUgZ3JpZCB2YXJpYWJsZXMuJyxcbiAgICBoYXNMaW5rOiBmYWxzZSxcbiAgICBocmVmOiAnJyxcbiAgICBsaW5rQ29udGVudDogJydcbiAgfVxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YXJpYWJsZXNDb2xsZWN0aW9uO1xuIiwidmFyIG1haW5PYmogPSB7XG4gIG93bmVyOiAnRHJldyBCb3RrYScsXG4gIGdpdGh1YlVybDogYGh0dHBzOi8vZ2l0aHViLmNvbS9kcmV3Ym90YCxcbiAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgaXNUb3VjaERldmljZSgpIHtcbiAgICByZXR1cm4gISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAhISgnbXNtYXh0b3VjaHBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvcik7XG4gIH0sXG4gIGdldENvcHlyaWdodCgpIHtcbiAgICByZXR1cm4gYCZjb3B5OyAke3RoaXMuY3VycmVudFllYXJ9ICR7dGhpcy5vd25lcn0uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuYFxuICB9LFxuICBnZXRPd25lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGBNYWRlIGJ5IDxhIGhyZWY9XCIke3RoaXMuZ2l0aHViVXJsfVwiPiR7dGhpcy5vd25lcn08L2E+YFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5PYmo7XG4iLCJ2YXIgc2V0TWFya2VkT3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICAgICAgc2FuaXRpemU6IHRydWVcbiAgICAgICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRNYXJrZWRPcHRpb25zO1xuIl19