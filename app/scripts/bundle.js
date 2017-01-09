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
  $('#variablesExample').html(marked(_examples2.default.variablesExample));
  $('#mixinsExample').html(marked(_examples2.default.mixinsExample));
  $('#visibilityExample').html(marked(_examples2.default.visibilityExample));
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
  visibilityExample: "\n  <div class=\"row\">\n  " + indent + "<div class=\"col hide-md-up\"></div>\n  " + indent + "<div class=\"col hide-xs-up show-md-up\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col\"></div>\n  " + indent + "<div class=\"col hide-sm-only\"></div>\n  </div>\n  "
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9leGFtcGxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsZUFBUixFQUF2Qjs7QUFFQSxJQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLE9BQU8sbUJBQVksaUJBQW5CLENBQTdCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixJQUF2QixDQUE0QixPQUFPLG1CQUFZLGdCQUFuQixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxtQkFBWSxhQUFuQixDQUF6QjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsT0FBTyxtQkFBWSxnQkFBbkIsQ0FBNUI7QUFDQSxJQUFFLHNCQUFGLEVBQTBCLElBQTFCLENBQStCLE9BQU8sbUJBQVksbUJBQW5CLENBQS9CO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixJQUF2QixDQUE0QixPQUFPLG1CQUFZLGdCQUFuQixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxtQkFBWSxhQUFuQixDQUF6QjtBQUNBLElBQUUsb0JBQUYsRUFBd0IsSUFBeEIsQ0FBNkIsT0FBTyxtQkFBWSxpQkFBbkIsQ0FBN0I7QUFFRCxDQWxCRDs7Ozs7QUNOQSxJQUFJLHVCQUFKO0FBQUEsSUFDSSxlQUFlLFNBQVMsTUFENUI7QUFBQSxJQUVJLGVBQWUsZUFBZSxNQUZsQztBQUFBLElBR0ksa0JBQWtCLGVBQWUsTUFIckM7QUFBQSxJQUlJLGtCQUFrQixrQkFBa0IsTUFKeEM7QUFBQSxJQUtJLGlCQUFpQixrQkFBa0IsTUFMdkM7O0FBT0EsSUFBSSxjQUFjO0FBQ2hCLHFEQUVFLE1BRkYsNkVBRGdCO0FBTWhCLGtEQUVFLE1BRkYsaUVBTmdCO0FBV2hCLG9EQUVFLE1BRkYscUNBR0UsTUFIRiw0Q0FYZ0I7QUFpQmhCLGlEQUVFLE1BRkYsa0NBR0UsWUFIRiwrQkFJRSxZQUpGLHdDQUtFLFlBTEYsa0JBTUUsTUFORix5QkFqQmdCO0FBMEJoQiw2REFFRSxNQUZGLHdEQTFCZ0I7QUErQmhCLGlFQUVFLE1BRkYsMENBR0UsTUFIRiwwQ0FJRSxNQUpGLGlEQS9CZ0I7QUFzQ2hCLGtEQUVFLE1BRkYsMkNBR0UsTUFIRiwyQ0FJRSxNQUpGLG9EQUtFLE1BTEYsc0JBdENnQjtBQThDaEIsMERBRUUsTUFGRix5Q0FHRSxNQUhGLHlDQUlFLE1BSkYsZ0RBOUNnQjtBQXFEaEIsdUtBckRnQjtBQStEaEIsMENBRUUsTUFGRiwyQkFHRSxNQUhGLGtCQUlFLFlBSkYsNEJBS0UsWUFMRixnQ0FNRSxNQU5GLGFBT0UsTUFQRixxQkFRRSxZQVJGLDhCQVNFLE1BVEYsZUEvRGdCO0FBMkVoQixxREFFRSxNQUZGLGdEQUdFLE1BSEYsMkRBSUUsTUFKRixxQ0FLRSxNQUxGLHFDQU1FLE1BTkYscUNBT0UsTUFQRjtBQTNFZ0IsQ0FBbEI7O0FBdUZBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUM5RkEsSUFBSSxVQUFVO0FBQ1osU0FBTyxZQURLO0FBRVoseUNBRlk7QUFHWixlQUFhLElBQUksSUFBSixHQUFXLFdBQVgsRUFIRDtBQUlaLGVBSlksMkJBSUk7QUFDZCxXQUFPLENBQUMsRUFBRSxrQkFBa0IsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCLE9BQU8sU0FBL0IsQ0FBeEM7QUFDRCxHQU5XO0FBT1osY0FQWSwwQkFPRztBQUNiLHVCQUFpQixLQUFLLFdBQXRCLFNBQXFDLEtBQUssS0FBMUM7QUFDRCxHQVRXO0FBVVosaUJBVlksNkJBVU07QUFDaEIsaUNBQTJCLEtBQUssU0FBaEMsVUFBOEMsS0FBSyxLQUFuRDtBQUNEO0FBWlcsQ0FBZDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDZkEsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVc7QUFDaEMsaUJBQU8sT0FBTyxVQUFQLENBQWtCO0FBQ2YsNEJBQVEsSUFETztBQUVmLDhCQUFVO0FBRkssV0FBbEIsQ0FBUDtBQUlELENBTEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc2V0TWFya2VkT3B0aW9ucyBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IGV4YW1wbGVzT2JqIGZyb20gJy4vZXhhbXBsZXMuanMnO1xuXG5zZXRNYXJrZWRPcHRpb25zKCk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKGBIZWxsbyAke21haW5PYmoub3duZXJ9YCk7XG4gIGNvbnNvbGUubG9nKG1haW5PYmouaXNUb3VjaERldmljZSgpID8gJ1RvdWNoIERldmljZSc6ICdEZXNrdG9wJyk7XG5cbiAgJCgnI3NpdGVPd25lcicpLmFwcGVuZChtYWluT2JqLmdldE93bmVyQ29udGVudCgpKTtcblxuICAkKCcjcmVzcG9uc2l2ZUV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5yZXNwb25zaXZlRXhhbXBsZSkpO1xuICAkKCcjb2Zmc2V0c0V4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5vZmZzZXRzRXhhbXBsZSkpO1xuICAkKCcjYXV0b1dpZHRoRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmF1dG9XaWR0aEV4YW1wbGUpKTtcbiAgJCgnI25lc3RlZEV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5uZXN0ZWRFeGFtcGxlKSk7XG4gICQoJyNhbGlnbm1lbnRFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmouYWxpZ25tZW50RXhhbXBsZSkpO1xuICAkKCcjZGlzdHJpYnV0aW9uRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmRpc3RyaWJ1dGlvbkV4YW1wbGUpKTtcbiAgJCgnI3Jlb3JkZXJFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmVvcmRlckV4YW1wbGUpKTtcbiAgJCgnI3JldmVyc2VFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmV2ZXJzZUV4YW1wbGUpKTtcbiAgJCgnI3ZhcmlhYmxlc0V4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai52YXJpYWJsZXNFeGFtcGxlKSk7XG4gICQoJyNtaXhpbnNFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoubWl4aW5zRXhhbXBsZSkpO1xuICAkKCcjdmlzaWJpbGl0eUV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai52aXNpYmlsaXR5RXhhbXBsZSkpO1xuXG59KTtcbiIsInZhciBpbmRlbnQgPSBgJm5ic3A7Jm5ic3A7YCxcbiAgICBpbmRlbnREb3VibGUgPSBpbmRlbnQgKyBpbmRlbnQsXG4gICAgaW5kZW50VHJpcGxlID0gaW5kZW50RG91YmxlICsgaW5kZW50LFxuICAgIGluZGVudFF1YWRydXBsZSA9IGluZGVudFRyaXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWludHVwbGUgPSBpbmRlbnRRdWFkcnVwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50U2V4dHVwbGUgPSBpbmRlbnRRdWludHVwbGUgKyBpbmRlbnQ7XG5cbnZhciBleGFtcGxlc09iaiA9IHtcbiAgcmVzcG9uc2l2ZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1tZC02IGNvbC1sZy00XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBvZmZzZXRzRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtb2Zmc2V0LTMgY29sLXhzLTlcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGF1dG9XaWR0aEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG5lc3RlZEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+XG4gICR7aW5kZW50RG91YmxlfTxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnRUcmlwbGV9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICAke2luZGVudERvdWJsZX08L2Rpdj5cbiAgJHtpbmRlbnR9PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhbGlnbm1lbnRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgc3RhcnQteHNcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy02XCI+Y29udGVudDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgZGlzdHJpYnV0aW9uRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93IGFyb3VuZC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgcmVvcmRlckV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjI8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yIGZpcnN0LXhzXCI+MzwvZGl2PlxuICAke2luZGVudH0uLi5cbiAgPC9kaXY+XG4gIGAsXG4gIHJldmVyc2VFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgcmV2ZXJzZVwiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MTwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+MzwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgdmFyaWFibGVzRXhhbXBsZTogYFxuICAkZ3JpZC1jb2x1bW5zOiAxMjtcblxuICAkeHMtbWF4OiA2NDBweDtcbiAgJHNtLW1heDogMTAyNHB4O1xuICAkbWQtbWF4OiAxNDQwcHg7XG4gICRsZy1tYXg6IDE5MjBweDtcblxuICAkY29udGVudC13ZWxsLW1heC13aWR0aDogMjQwMHB4O1xuICBgLFxuICBtaXhpbnNFeGFtcGxlOiBgXG4gIC5jb250YWluZXIge1xuICAke2luZGVudH1AaW5jbHVkZSByb3coKTtcbiAgJHtpbmRlbnR9LmJveCB7XG4gICR7aW5kZW50RG91YmxlfUBpbmxjdWRlIGNvbCg2KTtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKG1kLCAzKTtcbiAgJHtpbmRlbnR9fVxuICAke2luZGVudH0uZXh0cmFzIHtcbiAgJHtpbmRlbnREb3VibGV9QGluY2x1ZGUgaGlkZShsZyk7XG4gICR7aW5kZW50fX1cbiAgfVxuICBgLFxuICB2aXNpYmlsaXR5RXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1tZC11cFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUteHMtdXAgc2hvdy1tZC11cFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sIGhpZGUtc20tb25seVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVzT2JqO1xuIiwidmFyIG1haW5PYmogPSB7XG4gIG93bmVyOiAnRHJldyBCb3RrYScsXG4gIGdpdGh1YlVybDogYGh0dHBzOi8vZ2l0aHViLmNvbS9kcmV3Ym90YCxcbiAgY3VycmVudFllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgaXNUb3VjaERldmljZSgpIHtcbiAgICByZXR1cm4gISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAhISgnbXNtYXh0b3VjaHBvaW50cycgaW4gd2luZG93Lm5hdmlnYXRvcik7XG4gIH0sXG4gIGdldENvcHlyaWdodCgpIHtcbiAgICByZXR1cm4gYCZjb3B5OyAke3RoaXMuY3VycmVudFllYXJ9ICR7dGhpcy5vd25lcn0uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuYFxuICB9LFxuICBnZXRPd25lckNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGBNYWRlIGJ5IDxhIGhyZWY9XCIke3RoaXMuZ2l0aHViVXJsfVwiPiR7dGhpcy5vd25lcn08L2E+YFxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5PYmo7XG4iLCJ2YXIgc2V0TWFya2VkT3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbWFya2VkLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICAgICAgc2FuaXRpemU6IHRydWVcbiAgICAgICAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRNYXJrZWRPcHRpb25zO1xuIl19