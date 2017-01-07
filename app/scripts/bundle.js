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

  $('#responsiveExample').html(marked(_examples2.default.responsiveExample));
  $('#offsetsExample').html(marked(_examples2.default.offsetsExample));
  $('#autoWidthExample').html(marked(_examples2.default.autoWidthExample));
  $('#nestedExample').html(marked(_examples2.default.nestedExample));
  $('#alignmentExample').html(marked(_examples2.default.alignmentExample));
  $('#distributionExample').html(marked(_examples2.default.distributionExample));
  $('#reorderExample').html(marked(_examples2.default.reorderExample));
  $('#reverseExample').html(marked(_examples2.default.reverseExample));
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
  autoWidthExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs\"></div>\n  " + indent + "<div class=\"col-xs\"></div>\n  </div>\n  ",
  nestedExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs\">\n  " + indentDouble + "<div class=\"row\">\n  " + indentTriple + "<div class=\"col-xs\"></div>\n  " + indentDouble + "</div>\n  " + indent + "</div>\n  </div>\n  ",
  alignmentExample: "\n  <div class=\"row start-xs\">\n  " + indent + "<div class=\"col-xs-6\">content</div>\n  </div>\n  ",
  distributionExample: "\n  <div class=\"row around-xs\">\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  </div>\n  ",
  reorderExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col-xs-2\">1</div>\n  " + indent + "<div class=\"col-xs-2\">2</div>\n  " + indent + "<div class=\"col-xs-2 first-xs\">3</div>\n  " + indent + "...\n  </div>\n  ",
  reverseExample: "\n  <div class=\"row reverse\">\n  " + indent + "<div class=\"col-xs\">1</div>\n  " + indent + "<div class=\"col-xs\">2</div>\n  " + indent + "<div class=\"col-xs\">3</div>\n  </div>\n  "
};

module.exports = examplesObj;

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9leGFtcGxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsZUFBUixFQUF2Qjs7QUFFQSxJQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLE9BQU8sbUJBQVksaUJBQW5CLENBQTdCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixJQUF2QixDQUE0QixPQUFPLG1CQUFZLGdCQUFuQixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxtQkFBWSxhQUFuQixDQUF6QjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsT0FBTyxtQkFBWSxnQkFBbkIsQ0FBNUI7QUFDQSxJQUFFLHNCQUFGLEVBQTBCLElBQTFCLENBQStCLE9BQU8sbUJBQVksbUJBQW5CLENBQS9CO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBRUQsQ0FmRDs7Ozs7QUNOQSxJQUFJLHVCQUFKO0FBQUEsSUFDSSxlQUFlLFNBQVMsTUFENUI7QUFBQSxJQUVJLGVBQWUsZUFBZSxNQUZsQztBQUFBLElBR0ksa0JBQWtCLGVBQWUsTUFIckM7QUFBQSxJQUlJLGtCQUFrQixrQkFBa0IsTUFKeEM7QUFBQSxJQUtJLGlCQUFpQixrQkFBa0IsTUFMdkM7O0FBT0EsSUFBSSxjQUFjO0FBQ2hCLHFEQUVFLE1BRkYsNkVBRGdCO0FBTWhCLGtEQUVFLE1BRkYsaUVBTmdCO0FBV2hCLG9EQUVFLE1BRkYsd0NBR0UsTUFIRiwrQ0FYZ0I7QUFpQmhCLGlEQUVFLE1BRkYsa0NBR0UsWUFIRiwrQkFJRSxZQUpGLHdDQUtFLFlBTEYsa0JBTUUsTUFORix5QkFqQmdCO0FBMEJoQiw2REFFRSxNQUZGLHdEQTFCZ0I7QUErQmhCLGlFQUVFLE1BRkYsMENBR0UsTUFIRiwwQ0FJRSxNQUpGLGlEQS9CZ0I7QUFzQ2hCLGtEQUVFLE1BRkYsMkNBR0UsTUFIRiwyQ0FJRSxNQUpGLG9EQUtFLE1BTEYsc0JBdENnQjtBQThDaEIsMERBRUUsTUFGRix5Q0FHRSxNQUhGLHlDQUlFLE1BSkY7QUE5Q2dCLENBQWxCOztBQXVEQSxPQUFPLE9BQVAsR0FBaUIsV0FBakI7Ozs7O0FDOURBLElBQUksVUFBVTtBQUNaLFNBQU8sWUFESztBQUVaLHlDQUZZO0FBR1osZUFBYSxJQUFJLElBQUosR0FBVyxXQUFYLEVBSEQ7QUFJWixlQUpZLDJCQUlJO0FBQ2QsV0FBTyxDQUFDLEVBQUUsa0JBQWtCLE1BQXBCLENBQUQsSUFBZ0MsQ0FBQyxFQUFFLHNCQUFzQixPQUFPLFNBQS9CLENBQXhDO0FBQ0QsR0FOVztBQU9aLGNBUFksMEJBT0c7QUFDYix1QkFBaUIsS0FBSyxXQUF0QixTQUFxQyxLQUFLLEtBQTFDO0FBQ0QsR0FUVztBQVVaLGlCQVZZLDZCQVVNO0FBQ2hCLGlDQUEyQixLQUFLLFNBQWhDLFVBQThDLEtBQUssS0FBbkQ7QUFDRDtBQVpXLENBQWQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7OztBQ2ZBLElBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixHQUFXO0FBQ2hDLGlCQUFPLE9BQU8sVUFBUCxDQUFrQjtBQUNmLDRCQUFRLElBRE87QUFFZiw4QkFBVTtBQUZLLFdBQWxCLENBQVA7QUFJRCxDQUxEOztBQU9BLE9BQU8sT0FBUCxHQUFpQixnQkFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNldE1hcmtlZE9wdGlvbnMgZnJvbSAnLi9tYXJrZWQuanMnO1xuaW1wb3J0IG1haW5PYmogZnJvbSAnLi9tYWluLmpzJztcbmltcG9ydCBleGFtcGxlc09iaiBmcm9tICcuL2V4YW1wbGVzLmpzJztcblxuc2V0TWFya2VkT3B0aW9ucygpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhgSGVsbG8gJHttYWluT2JqLm93bmVyfWApO1xuICBjb25zb2xlLmxvZyhtYWluT2JqLmlzVG91Y2hEZXZpY2UoKSA/ICdUb3VjaCBEZXZpY2UnOiAnRGVza3RvcCcpO1xuXG4gICQoJyNzaXRlT3duZXInKS5hcHBlbmQobWFpbk9iai5nZXRPd25lckNvbnRlbnQoKSk7XG5cbiAgJCgnI3Jlc3BvbnNpdmVFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmVzcG9uc2l2ZUV4YW1wbGUpKTtcbiAgJCgnI29mZnNldHNFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoub2Zmc2V0c0V4YW1wbGUpKTtcbiAgJCgnI2F1dG9XaWR0aEV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5hdXRvV2lkdGhFeGFtcGxlKSk7XG4gICQoJyNuZXN0ZWRFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoubmVzdGVkRXhhbXBsZSkpO1xuICAkKCcjYWxpZ25tZW50RXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmFsaWdubWVudEV4YW1wbGUpKTtcbiAgJCgnI2Rpc3RyaWJ1dGlvbkV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5kaXN0cmlidXRpb25FeGFtcGxlKSk7XG4gICQoJyNyZW9yZGVyRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLnJlb3JkZXJFeGFtcGxlKSk7XG4gICQoJyNyZXZlcnNlRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLnJldmVyc2VFeGFtcGxlKSk7XG5cbn0pO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIGV4YW1wbGVzT2JqID0ge1xuICByZXNwb25zaXZlRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG9mZnNldHNFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYXV0b1dpZHRoRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgbmVzdGVkRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gICR7aW5kZW50RG91YmxlfTwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFsaWdubWVudEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBzdGFydC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBkaXN0cmlidXRpb25FeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgYXJvdW5kLXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICByZW9yZGVyRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjE8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4gICR7aW5kZW50fS4uLlxuICA8L2Rpdj5cbiAgYCxcbiAgcmV2ZXJzZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4gIDwvZGl2PlxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZXNPYmo7XG4iLCJ2YXIgbWFpbk9iaiA9IHtcbiAgb3duZXI6ICdEcmV3IEJvdGthJyxcbiAgZ2l0aHViVXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL2RyZXdib3RgLFxuICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICBpc1RvdWNoRGV2aWNlKCkge1xuICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgfSxcbiAgZ2V0Q29weXJpZ2h0KCkge1xuICAgIHJldHVybiBgJmNvcHk7ICR7dGhpcy5jdXJyZW50WWVhcn0gJHt0aGlzLm93bmVyfS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gXG4gIH0sXG4gIGdldE93bmVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gYE1hZGUgYnkgPGEgaHJlZj1cIiR7dGhpcy5naXRodWJVcmx9XCI+JHt0aGlzLm93bmVyfTwvYT5gXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbk9iajtcbiIsInZhciBzZXRNYXJrZWRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgICBzYW5pdGl6ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE1hcmtlZE9wdGlvbnM7XG4iXX0=