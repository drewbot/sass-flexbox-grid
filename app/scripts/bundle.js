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

// marked.setOptions({
//   sanitize: true
// });

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
  distributionExample: "\n  <div class=\"row around-xs\">\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  " + indent + "<div class=\"col-xs-2\"></div>\n  </div>\n  "
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9leGFtcGxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsWUFBVztBQUNYLFVBQVEsR0FBUixZQUFxQixlQUFRLEtBQTdCO0FBQ0EsVUFBUSxHQUFSLENBQVksZUFBUSxhQUFSLEtBQTBCLGNBQTFCLEdBQTBDLFNBQXREOztBQUVBLElBQUUsWUFBRixFQUFnQixNQUFoQixDQUF1QixlQUFRLGVBQVIsRUFBdkI7O0FBRUEsSUFBRSxvQkFBRixFQUF3QixJQUF4QixDQUE2QixPQUFPLG1CQUFZLGlCQUFuQixDQUE3QjtBQUNBLElBQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsT0FBTyxtQkFBWSxjQUFuQixDQUExQjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsT0FBTyxtQkFBWSxnQkFBbkIsQ0FBNUI7QUFDQSxJQUFFLGdCQUFGLEVBQW9CLElBQXBCLENBQXlCLE9BQU8sbUJBQVksYUFBbkIsQ0FBekI7QUFDQSxJQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLE9BQU8sbUJBQVksZ0JBQW5CLENBQTVCO0FBQ0EsSUFBRSxzQkFBRixFQUEwQixJQUExQixDQUErQixPQUFPLG1CQUFZLG1CQUFuQixDQUEvQjtBQUVELENBYkQ7Ozs7O0FDVkEsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksY0FBYztBQUNoQixxREFFRSxNQUZGLDZFQURnQjtBQU1oQixrREFFRSxNQUZGLGlFQU5nQjtBQVdoQixvREFFRSxNQUZGLHdDQUdFLE1BSEYsK0NBWGdCO0FBaUJoQixpREFFRSxNQUZGLGtDQUdFLFlBSEYsK0JBSUUsWUFKRix3Q0FLRSxZQUxGLGtCQU1FLE1BTkYseUJBakJnQjtBQTBCaEIsNkRBRUUsTUFGRix3REExQmdCO0FBK0JoQixpRUFFRSxNQUZGLDBDQUdFLE1BSEYsMENBSUUsTUFKRjtBQS9CZ0IsQ0FBbEI7O0FBd0NBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUMvQ0EsSUFBSSxVQUFVO0FBQ1osU0FBTyxZQURLO0FBRVoseUNBRlk7QUFHWixlQUFhLElBQUksSUFBSixHQUFXLFdBQVgsRUFIRDtBQUlaLGVBSlksMkJBSUk7QUFDZCxXQUFPLENBQUMsRUFBRSxrQkFBa0IsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCLE9BQU8sU0FBL0IsQ0FBeEM7QUFDRCxHQU5XO0FBT1osY0FQWSwwQkFPRztBQUNiLHVCQUFpQixLQUFLLFdBQXRCLFNBQXFDLEtBQUssS0FBMUM7QUFDRCxHQVRXO0FBVVosaUJBVlksNkJBVU07QUFDaEIsaUNBQTJCLEtBQUssU0FBaEMsVUFBOEMsS0FBSyxLQUFuRDtBQUNEO0FBWlcsQ0FBZDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDZkEsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVc7QUFDaEMsaUJBQU8sT0FBTyxVQUFQLENBQWtCO0FBQ2YsNEJBQVEsSUFETztBQUVmLDhCQUFVO0FBRkssV0FBbEIsQ0FBUDtBQUlELENBTEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc2V0TWFya2VkT3B0aW9ucyBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IGV4YW1wbGVzT2JqIGZyb20gJy4vZXhhbXBsZXMuanMnO1xuXG5zZXRNYXJrZWRPcHRpb25zKCk7XG5cbi8vIG1hcmtlZC5zZXRPcHRpb25zKHtcbi8vICAgc2FuaXRpemU6IHRydWVcbi8vIH0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhgSGVsbG8gJHttYWluT2JqLm93bmVyfWApO1xuICBjb25zb2xlLmxvZyhtYWluT2JqLmlzVG91Y2hEZXZpY2UoKSA/ICdUb3VjaCBEZXZpY2UnOiAnRGVza3RvcCcpO1xuXG4gICQoJyNzaXRlT3duZXInKS5hcHBlbmQobWFpbk9iai5nZXRPd25lckNvbnRlbnQoKSk7XG5cbiAgJCgnI3Jlc3BvbnNpdmVFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmVzcG9uc2l2ZUV4YW1wbGUpKTtcbiAgJCgnI29mZnNldHNFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoub2Zmc2V0c0V4YW1wbGUpKTtcbiAgJCgnI2F1dG9XaWR0aEV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5hdXRvV2lkdGhFeGFtcGxlKSk7XG4gICQoJyNuZXN0ZWRFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoubmVzdGVkRXhhbXBsZSkpO1xuICAkKCcjYWxpZ25tZW50RXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmFsaWdubWVudEV4YW1wbGUpKTtcbiAgJCgnI2Rpc3RyaWJ1dGlvbkV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5kaXN0cmlidXRpb25FeGFtcGxlKSk7XG5cbn0pO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIGV4YW1wbGVzT2JqID0ge1xuICByZXNwb25zaXZlRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG9mZnNldHNFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYXV0b1dpZHRoRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgbmVzdGVkRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gICR7aW5kZW50RG91YmxlfTwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFsaWdubWVudEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBzdGFydC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBkaXN0cmlidXRpb25FeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgYXJvdW5kLXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZXNPYmo7XG4iLCJ2YXIgbWFpbk9iaiA9IHtcbiAgb3duZXI6ICdEcmV3IEJvdGthJyxcbiAgZ2l0aHViVXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL2RyZXdib3RgLFxuICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICBpc1RvdWNoRGV2aWNlKCkge1xuICAgIHJldHVybiAhISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8ICEhKCdtc21heHRvdWNocG9pbnRzJyBpbiB3aW5kb3cubmF2aWdhdG9yKTtcbiAgfSxcbiAgZ2V0Q29weXJpZ2h0KCkge1xuICAgIHJldHVybiBgJmNvcHk7ICR7dGhpcy5jdXJyZW50WWVhcn0gJHt0aGlzLm93bmVyfS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gXG4gIH0sXG4gIGdldE93bmVyQ29udGVudCgpIHtcbiAgICByZXR1cm4gYE1hZGUgYnkgPGEgaHJlZj1cIiR7dGhpcy5naXRodWJVcmx9XCI+JHt0aGlzLm93bmVyfTwvYT5gXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbk9iajtcbiIsInZhciBzZXRNYXJrZWRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgICBzYW5pdGl6ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE1hcmtlZE9wdGlvbnM7XG4iXX0=