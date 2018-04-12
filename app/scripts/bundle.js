(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

var _documentationObj = require('./content/documentation-obj.js');

var _documentationObj2 = _interopRequireDefault(_documentationObj);

var _overview = require('./content/overview.js');

var _overview2 = _interopRequireDefault(_overview);

var _variables = require('./content/variables.js');

var _variables2 = _interopRequireDefault(_variables);

var _mixins = require('./content/mixins.js');

var _mixins2 = _interopRequireDefault(_mixins);

var _classes = require('./content/classes.js');

var _classes2 = _interopRequireDefault(_classes);

var _documentation = require('./content/documentation.js');

var _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import customRouter from './router.js';
console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

(0, _marked2.default)();

var codeContentsArray = [_examples2.default, _sassClasses2.default, _sassVariables2.default, _sassMixins2.default, _documentationObj2.default];

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

  _documentation2.default.forEach(makeFeatureDetail);

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

},{"./content/classes.js":2,"./content/documentation-obj.js":3,"./content/documentation.js":4,"./content/examples.js":5,"./content/mixins.js":6,"./content/overview.js":7,"./content/sass-classes.js":8,"./content/sass-mixins.js":9,"./content/sass-variables.js":10,"./content/variables.js":11,"./main.js":12,"./marked.js":13}],2:[function(require,module,exports){
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

var documentationObj = {
  npmInstallationExample: "\n  npm install @drewbot/sass-flexbox-grid --save\n  ",
  cssInstallationExample: "\n  // Full version\n  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css\n  // Minified version\n  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css\n  ",
  sassInstallationExample: "\n  node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/scss\n  ",
  variableSetupExample: "\n  // .../sass-flexbox-grid/public/sass-flexbox/scss/variables/_grid-variables.scss\n  " + indent + "\n  $grid-columns: 12; // Set number of columns in the grid\n  " + indent + "\n  $xs-max: 40rem; // Set xs breakpoint's max width\n  $sm-max: 64rem; // Set sm breakpoint's max width\n  $md-max: 90rem; // Set md breakpoint's max width\n  $lg-max: 120rem; // Set lg breakpoint's max width\n  " + indent + "\n  $gutter: 1rem; // Set gutter size\n  " + indent + "\n  $content-well-max-width: \"none\"; // Set the max-width of the content well\n  "
};

module.exports = documentationObj;

},{}],4:[function(require,module,exports){
'use strict';

var documentationCollection = [{
  sectionId: 'npmInstallation',
  codeBlockId: 'npmInstallationExample',
  title: 'NPM Install',
  description: 'From the command line:',
  hasLink: false,
  href: 'https://www.npmjs.com/package/@drewbot/sass-flexbox-grid',
  linkContent: 'View the NPM package webpage'
}, {
  sectionId: 'cssInstallation',
  codeBlockId: 'cssInstallationExample',
  title: 'Link to CSS',
  description: 'Link to the full CSS file or the minified version.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'sassInstallation',
  codeBlockId: 'sassInstallationExample',
  title: 'Sass Usage',
  description: 'Copy the Sass folder over to your development directory in order to customize and preprocess on your own.',
  hasLink: false,
  href: '',
  linkContent: ''
}, {
  sectionId: 'variableSetup',
  codeBlockId: 'variableSetupExample',
  title: 'Customize Your Grid',
  description: 'If you\'re using the Sass version of the library you can update _grid-variables.scss with your preferred number of columns, breakpoint sizes, gutter size, and content well max-width.',
  hasLink: false,
  href: '',
  linkContent: ''
}];

module.exports = documentationCollection;

},{}],5:[function(require,module,exports){
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
  variablesExample: "\n  $grid-columns: 12; // Set number of columns in the grid\n  " + indent + "\n  $xs-max: 40rem; // Set xs breakpoint's max width\n  $sm-max: 64rem; // Set sm breakpoint's max width\n  $md-max: 90rem; // Set md breakpoint's max width\n  $lg-max: 120rem; // Set lg breakpoint's max width\n  " + indent + "\n  $gutter: 1rem; // Set gutter size\n  " + indent + "\n  $content-well-max-width: \"none\"; // Set the max-width of the content well\n  ",
  mixinsExample: "\n  .container {\n  " + indent + "@include row();\n  " + indent + ".box {\n  " + indentDouble + "@inlcude col(6);\n  " + indentDouble + "@inlcude col(md, 3);\n  " + indent + "}\n  " + indent + ".extras {\n  " + indentDouble + "@include hide(lg);\n  " + indent + "}\n  }\n  ",
  visibilityExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col hide-md\"></div>\n  " + indent + "<div class=\"col hide-xs show-md\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col hide-sm-only\"></div>\n  </div>\n  ",
  eqHeightExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col\">Content of varying height</div>\n  " + indent + "<div class=\"col\">Content of varying height</div>\n  </div>\n  "
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

var overviewCollection = [{
  sectionId: 'responsive',
  codeBlockId: 'responsiveExample',
  title: 'Responsive and Fluid',
  description: 'Responsive modifiers let you define column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths. Use the row class to define an outer row of columns and then place columns inside of rows.',
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
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
  hasLink: true,
  href: '/views/classes.html',
  linkContent: 'See all classes'
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
  description: 'By default, flexbox stretches each flex item to match the height of it\'s sibling. The .natural-height row utility class will make each column\'s height match it\'s content, giving the developer control of the behavior.',
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

},{}],8:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassClassesObj = {
  rowClassesExample: "\n  .row  // Define and element as a row\n  .reverse  // Reverse the order of the row's children\n  .natural-height  // Row children heights match their contents\n  .flex-column  // Arrange row children vertically\n  .start  // Align row children to the beginning of the row\n  .center  // Align row children to the center of the row\n  .end  // Align row children to the end of the row\n  .top  // Align row children to the top of the row\n  .middle  // Align row children to the middle of the row\n  .bottom  // Align row children to the bottom of the row\n  .around  // Apply equal space around each row child\n  .between  // Apply equal space between each row child\n  ",
  colClassesExample: "\n  .col  // Define a column with auto-sizing\n  .col-xs  // Define a column with auto-sizing on XS and up\n  .col-sm  // Define a column with auto-sizing on SM and up\n  .col-md  // Define a column with auto-sizing on MD and up\n  .col-lg  // Define a column with auto-sizing on LG and up\n  .col-xl  // Define a column with auto-sizing on XL and up\n  .col-xs-<column number>  // Define a column's number width on XS and up\n  .col-sm-<column number>  // Define a column's number width on SM and up\n  .col-md-<column number>  // Define a column's number width on MD and up\n  .col-lg-<column number>  // Define a column's number width on LG and up\n  .col-xl-<column number>  // Define a column's number width on XL and up\n  .col-xs-offset-<column number>  // Offset by a number width on XS and up\n  .col-sm-offset-<column number>  // Offset by a number width on SM and up\n  .col-md-offset-<column number>  // Offset by a number width on MD and up\n  .col-lg-offset-<column number>  // Offset by a number width on LG and up\n  .col-xl-offset-<column number>  // Offset by a number width on XL and up\n  .first  // Make a column first in order within a row\n  .first-xs  // Make a column first in order on XS and up\n  .first-sm  // Make a column first in order on SM and up\n  .first-md  // Make a column first in order on MD and up\n  .first-lg  // Make a column first in order on LG and up\n  .first-xl  // Make a column first in order on XL and up\n  .last  // Make a column last in order on XS and up\n  .last-xs  // Make a column last in order on XS and up\n  .last-sm  // Make a column last in order on SM and up\n  .last-md  // Make a column last in order on MD and up\n  .last-lg  // Make a column last in order on LG and up\n  .last-xl  // Make a column last in order on XL and up\n  ",
  visClassesExample: "\n  .show  // Show an element\n  .show-xs  // Show an element on XS and up\n  .show-xs-only  // Show an element on XS only\n  .show-sm  // Show an element on SM and up\n  .show-sm-only  // Show an element on SM only\n  .show-md  // Show an element on MD and up\n  .show-md-only  // Show an element on MD only\n  .show-lg  // Show an element on LG and up\n  .show-lg-only  // Show an element on LG only\n  .show-xl  // Show an element on XL screens\n  .hide  // Hide an element\n  .hide-xs  // Hide an element on XS and up\n  .hide-xs-only  // Hide an element on XS only\n  .hide-sm  // Hide an element on SM and up\n  .hide-sm-only  // Hide an element on SM only\n  .hide-md  // Hide an element on MD and up\n  .hide-md-only  // Hide an element on MD only\n  .hide-lg  // Hide an element on LG and up\n  .hide-lg-only  // Hide an element on LG only\n  .hide-xl  // Hide an element on XL screens\n  "
};

module.exports = sassClassesObj;

},{}],9:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassMixinsObj = {
  rowMixinsExample: "\n  row(); // Define and element as a row\n  row-reverse();  // Reverse the order of the row's children\n  row-natural-height();  // Row children heights match their contents\n  row-flex-column();  // Row children arrange vertically\n  ",
  colMixinsExample: "\n  //  Pass in breakpoint and number arguments to define a column\n  col(<breakpoint prefix>, <number of columns>);\n  " + indent + "\n  //  No breakpoint arg = xs-<number of columns>\n  col(<number of columns>);\n  " + indent + "\n  //  No args =  auto-width column at the xs breakpoint\n  col();\n  " + indent + "\n  //  Pass in breakpoint and number arguments to offset a column\n  col-offset(<breakpoint prefix>, <number of columns>);\n  " + indent + "\n  //  Reverse the order of an auto width col\n  col-reverse();\n  ",
  arrangeMixinsExample: "\n  // apply to a row to arrange descendants\n  start(<breakpoint prefix>);  // Align to the beginning of the row\n  center(<breakpoint prefix>);  // Align to the center of the row\n  end(<breakpoint prefix>);  // Align to the end of the row\n  top(<breakpoint prefix>);  // Align to the top of the row\n  middle(<breakpoint prefix>);  // Align to the middle of the row\n  bottom(<breakpoint prefix>);  // Align to the bottom of the row\n  around(<breakpoint prefix>);  // Apply equal space around each row child\n  between(<breakpoint prefix>);  // Apply equal space between each row child\n  " + indent + "\n  // Apply to a column to arrange this element\n  first(<breakpoint prefix>);  // Make a column first in order within a row\n  last(<breakpoint prefix>);  // Make a column last in order on XS and up\n  ",
  visibilityMixinsExample: "\n  show(<breakpoint range prefix>);  // Show an element\n  hide(<breakpoint range prefix>);  // Hide an element\n  "
};

module.exports = sassMixinsObj;

},{}],10:[function(require,module,exports){
"use strict";

var indent = "&nbsp;&nbsp;",
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var sassVarsObj = {
  gridVarsExample: "\n  $grid-columns: 12; // Set number of columns in the grid\n  " + indent + "\n  $xs-max: 40rem; // Set xs breakpoint's max width\n  $sm-max: 64rem; // Set sm breakpoint's max width\n  $md-max: 90rem; // Set md breakpoint's max width\n  $lg-max: 120rem; // Set lg breakpoint's max width\n  " + indent + "\n  $gutter: 1rem; // Set gutter size\n  " + indent + "\n  $content-well-max-width: \"none\"; // Set the max-width of the content well\n  " + indent + "\n  $sm-start: ($xs-max + 1); // Generate sm breakpoint's min width\n  $md-start: ($sm-max + 1); // Generate md breakpoint's min width\n  $lg-start: ($md-max + 1); // Generate lg breakpoint's min width\n  $xl-start: ($lg-max + 1); // Generate xl breakpoint's min width\n  ",
  breakpointVarsExample: "\n  $breakpoint-xs-only: \"only screen and (max-width: #{$xs-max})\";\n  $breakpoint-sm-up: \"only screen and (min-width: #{$sm-start})\";\n  $breakpoint-sm-only: \"only screen and (min-width: #{$sm-start}) and (max-width: #{$sm-max})\";\n  $breakpoint-md-up: \"only screen and (min-width: #{$md-start})\";\n  $breakpoint-md-only: \"only screen and (min-width: #{$md-start}) and (max-width: #{$md-max})\";\n  $breakpoint-lg-up: \"only screen and (min-width: #{$lg-start})\";\n  $breakpoint-lg-only: \"only screen and (min-width: #{$lg-start}) and (max-width: #{$lg-max})\";\n  $breakpoint-xl-up: \"only screen and (min-width: #{$xl-start})\";\n  "
};

module.exports = sassVarsObj;

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

var setMarkedOptions = function setMarkedOptions() {
          return marked.setOptions({
                    breaks: true,
                    sanitize: true
          });
};

module.exports = setMarkedOptions;

},{}]},{},[1]);

//# sourceMappingURL=../../maps/bundle.js.map
