(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _marked = require('./marked.js');

var _marked2 = _interopRequireDefault(_marked);

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

var _examples = require('./examples.js');

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _marked2.default)();

$(function () {
  console.log('Hello ' + _main2.default.owner);
  console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

  $('#siteOwner').append(_main2.default.getOwnerContent());

  // convert each example to markdown and append to el with id of the same name
  $.each(_examples2.default, function (key, value) {
    $('#' + key).html(marked(value));
  });
});

},{"./examples.js":2,"./main.js":3,"./marked.js":4}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

var setMarkedOptions = function setMarkedOptions() {
          return marked.setOptions({
                    breaks: true,
                    sanitize: true
          });
};

module.exports = setMarkedOptions;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9leGFtcGxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsZUFBUixFQUF2Qjs7QUFFQTtBQUNBLElBQUUsSUFBRixxQkFBb0IsVUFBUyxHQUFULEVBQWMsS0FBZCxFQUFxQjtBQUN2QyxNQUFFLE1BQU0sR0FBUixFQUFhLElBQWIsQ0FBa0IsT0FBTyxLQUFQLENBQWxCO0FBQ0QsR0FGRDtBQUlELENBWEQ7Ozs7O0FDTkEsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksY0FBYztBQUNoQixxREFFRSxNQUZGLDZFQURnQjtBQU1oQixrREFFRSxNQUZGLGlFQU5nQjtBQVdoQixvREFFRSxNQUZGLHFDQUdFLE1BSEYsNENBWGdCO0FBaUJoQixpREFFRSxNQUZGLGtDQUdFLFlBSEYsK0JBSUUsWUFKRix3Q0FLRSxZQUxGLGtCQU1FLE1BTkYseUJBakJnQjtBQTBCaEIsNkRBRUUsTUFGRix3REExQmdCO0FBK0JoQixpRUFFRSxNQUZGLDBDQUdFLE1BSEYsMENBSUUsTUFKRixpREEvQmdCO0FBc0NoQixrREFFRSxNQUZGLDJDQUdFLE1BSEYsMkNBSUUsTUFKRixvREFLRSxNQUxGLHNCQXRDZ0I7QUE4Q2hCLDBEQUVFLE1BRkYseUNBR0UsTUFIRix5Q0FJRSxNQUpGLGdEQTlDZ0I7QUFxRGhCLHVLQXJEZ0I7QUErRGhCLDBDQUVFLE1BRkYsMkJBR0UsTUFIRixrQkFJRSxZQUpGLDRCQUtFLFlBTEYsZ0NBTUUsTUFORixhQU9FLE1BUEYscUJBUUUsWUFSRiw4QkFTRSxNQVRGLGVBL0RnQjtBQTJFaEIscURBRUUsTUFGRixnREFHRSxNQUhGLDJEQUlFLE1BSkYscUNBS0UsTUFMRixxQ0FNRSxNQU5GLHFDQU9FLE1BUEYseURBM0VnQjtBQXFGaEIsNkRBRUUsTUFGRiw4REFHRSxNQUhGO0FBckZnQixDQUFsQjs7QUE2RkEsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDck9BLElBQUksVUFBVTtBQUNaLFNBQU8sWUFESztBQUVaLHlDQUZZO0FBR1osZUFBYSxJQUFJLElBQUosR0FBVyxXQUFYLEVBSEQ7QUFJWixlQUpZLDJCQUlJO0FBQ2QsV0FBTyxDQUFDLEVBQUUsa0JBQWtCLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQixPQUFPLFNBQS9CLENBQXhDO0FBQ0QsR0FOVztBQU9aLGNBUFksMEJBT0c7QUFDYix1QkFBaUIsS0FBSyxXQUF0QixTQUFxQyxLQUFLLEtBQTFDO0FBQ0QsR0FUVztBQVVaLGlCQVZZLDZCQVVNO0FBQ2hCLGlDQUEyQixLQUFLLFNBQWhDLFVBQThDLEtBQUssS0FBbkQ7QUFDRDtBQVpXLENBQWQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7OztBQ2ZBLElBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFXO0FBQ2hDLGlCQUFPLE9BQU8sVUFBUCxDQUFrQjtBQUNmLDRCQUFRLElBRE87QUFFZiw4QkFBVTtBQUZLLFdBQWxCLENBQVA7QUFJRCxDQUxEOztBQU9BLE9BQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNldE1hcmtlZE9wdGlvbnMgZnJvbSAnLi9tYXJrZWQuanMnO1xuaW1wb3J0IG1haW5PYmogZnJvbSAnLi9tYWluLmpzJztcbmltcG9ydCBleGFtcGxlc09iaiBmcm9tICcuL2V4YW1wbGVzLmpzJztcblxuc2V0TWFya2VkT3B0aW9ucygpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhgSGVsbG8gJHttYWluT2JqLm93bmVyfWApO1xuICBjb25zb2xlLmxvZyhtYWluT2JqLmlzVG91Y2hEZXZpY2UoKSA/ICdUb3VjaCBEZXZpY2UnOiAnRGVza3RvcCcpO1xuXG4gICQoJyNzaXRlT3duZXInKS5hcHBlbmQobWFpbk9iai5nZXRPd25lckNvbnRlbnQoKSk7XG5cbiAgLy8gY29udmVydCBlYWNoIGV4YW1wbGUgdG8gbWFya2Rvd24gYW5kIGFwcGVuZCB0byBlbCB3aXRoIGlkIG9mIHRoZSBzYW1lIG5hbWVcbiAgJC5lYWNoKGV4YW1wbGVzT2JqLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgJCgnIycgKyBrZXkpLmh0bWwobWFya2VkKHZhbHVlKSk7XG4gIH0pO1xuXG59KTtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBleGFtcGxlc09iaiA9IHtcbiAgcmVzcG9uc2l2ZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1tZC02IGNvbC1sZy00XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBvZmZzZXRzRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtb2Zmc2V0LTMgY29sLXhzLTlcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGF1dG9XaWR0aEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG5lc3RlZEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4gICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnRUcmlwbGV9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICAke2luZGVudERvdWJsZX08L2Rpdj5cbiAgJHtpbmRlbnR9PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbGlnbm1lbnRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZGlzdHJpYnV0aW9uRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgcmVvcmRlckV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yIGZpcnN0LXhzXCI+MzwvZGl2PlxuICAke2luZGVudH0uLi5cbiAgPC9kaXY+XG4gIGAsXG4gIHJldmVyc2VFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgcmV2ZXJzZVwiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MzwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgdmFyaWFibGVzRXhhbXBsZTogYFxuICAkZ3JpZC1jb2x1bW5zOiAxMjtcblxuICAkeHMtbWF4OiA2NDBweDtcbiAgJHNtLW1heDogMTAyNHB4O1xuICAkbWQtbWF4OiAxNDQwcHg7XG4gICRsZy1tYXg6IDE5MjBweDtcblxuICAkY29udGVudC13ZWxsLW1heC13aWR0aDogMjQwMHB4O1xuICBgLFxuICBtaXhpbnNFeGFtcGxlOiBgXG4gIC5jb250YWluZXIge1xuICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbiAgJHtpbmRlbnR9LmJveCB7XG4gICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbiAgJHtpbmRlbnR9fVxuICAke2luZGVudH0uZXh0cmFzIHtcbiAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4gICR7aW5kZW50fX1cbiAgfVxuICBgLFxuICB2aXNpYmlsaXR5RXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1tZC11cFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMtdXAgc2hvdy1tZC11cFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZXFIZWlnaHRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgZXEtaGVpZ2h0XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4gIDwvZGl2PlxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZXNPYmo7XG5cbi8vIHZhciBleGFtcGxlc0FycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXNwb25zaXZlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ29mZnNldHNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnYXV0b1dpZHRoRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICduZXN0ZWRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPlxuLy8gICAgICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnREb3VibGV9PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdhbGlnbm1lbnRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IHN0YXJ0LXhzXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZGlzdHJpYnV0aW9uRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyBhcm91bmQteHNcIj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Jlb3JkZXJFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MTwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9Li4uXG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdyZXZlcnNlRXhhbXBsZScsXG4vLyAgICAgbWFya3VwOiBgXG4vLyAgICAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjE8L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICd2YXJpYWJsZXNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAkZ3JpZC1jb2x1bW5zOiAxMjtcbi8vXG4vLyAgICAgJHhzLW1heDogNjQwcHg7XG4vLyAgICAgJHNtLW1heDogMTAyNHB4O1xuLy8gICAgICRtZC1tYXg6IDE0NDBweDtcbi8vICAgICAkbGctbWF4OiAxOTIwcHg7XG4vL1xuLy8gICAgICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4vLyAgICAgYFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdtaXhpbnNFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICAuY29udGFpbmVyIHtcbi8vICAgICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbi8vICAgICAke2luZGVudH0uYm94IHtcbi8vICAgICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2woNik7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbi8vICAgICAke2luZGVudH19XG4vLyAgICAgJHtpbmRlbnR9LmV4dHJhcyB7XG4vLyAgICAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4vLyAgICAgJHtpbmRlbnR9fVxuLy8gICAgIH1cbi8vICAgICBgXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ3Zpc2liaWxpdHlFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kLXVwXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLXhzLXVwIHNob3ctbWQtdXBcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbi8vICAgICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIGBcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnZXFIZWlnaHRFeGFtcGxlJyxcbi8vICAgICBtYXJrdXA6IGBcbi8vICAgICA8ZGl2IGNsYXNzPVwicm93IGVxLWhlaWdodFwiPlxuLy8gICAgICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5Db250ZW50IG9mIHZhcnlpbmcgaGVpZ2h0PC9kaXY+XG4vLyAgICAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPkNvbnRlbnQgb2YgdmFyeWluZyBoZWlnaHQ8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICBgXG4vLyAgIH1cbi8vIF1cbiIsInZhciBtYWluT2JqID0ge1xuICBvd25lcjogJ0RyZXcgQm90a2EnLFxuICBnaXRodWJVcmw6IGBodHRwczovL2dpdGh1Yi5jb20vZHJld2JvdGAsXG4gIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgISEoJ21zbWF4dG91Y2hwb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9LFxuICBnZXRDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIGAmY29weTsgJHt0aGlzLmN1cnJlbnRZZWFyfSAke3RoaXMub3duZXJ9LiBBbGwgUmlnaHRzIFJlc2VydmVkLmBcbiAgfSxcbiAgZ2V0T3duZXJDb250ZW50KCkge1xuICAgIHJldHVybiBgTWFkZSBieSA8YSBocmVmPVwiJHt0aGlzLmdpdGh1YlVybH1cIj4ke3RoaXMub3duZXJ9PC9hPmBcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluT2JqO1xuIiwidmFyIHNldE1hcmtlZE9wdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG1hcmtlZC5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgICAgIHNhbml0aXplOiB0cnVlXG4gICAgICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0TWFya2VkT3B0aW9ucztcbiJdfQ==