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
  $('#eqHeightExample').html(marked(_examples2.default.eqHeightExample));
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
  eqHeightExample: "\n  <div class=\"row eq-height\">\n  " + indent + "<div class=\"col\">\n  " + indentDouble + "<div height=\"20px\"></div>\n  " + indent + "</div>\n  " + indent + "<div class=\"col\">\n  " + indentDouble + "<div height=\"150px\"></div>\n  " + indent + "</div>\n  </div>\n  "
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9leGFtcGxlcy5qcyIsImFwcC9zY3JpcHRzL21haW4uanMiLCJhcHAvc2NyaXB0cy9tYXJrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsZUFBUixFQUF2Qjs7QUFFQSxJQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLE9BQU8sbUJBQVksaUJBQW5CLENBQTdCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixJQUF2QixDQUE0QixPQUFPLG1CQUFZLGdCQUFuQixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxtQkFBWSxhQUFuQixDQUF6QjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsSUFBdkIsQ0FBNEIsT0FBTyxtQkFBWSxnQkFBbkIsQ0FBNUI7QUFDQSxJQUFFLHNCQUFGLEVBQTBCLElBQTFCLENBQStCLE9BQU8sbUJBQVksbUJBQW5CLENBQS9CO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxpQkFBRixFQUFxQixJQUFyQixDQUEwQixPQUFPLG1CQUFZLGNBQW5CLENBQTFCO0FBQ0EsSUFBRSxtQkFBRixFQUF1QixJQUF2QixDQUE0QixPQUFPLG1CQUFZLGdCQUFuQixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxtQkFBWSxhQUFuQixDQUF6QjtBQUNBLElBQUUsb0JBQUYsRUFBd0IsSUFBeEIsQ0FBNkIsT0FBTyxtQkFBWSxpQkFBbkIsQ0FBN0I7QUFDQSxJQUFFLGtCQUFGLEVBQXNCLElBQXRCLENBQTJCLE9BQU8sbUJBQVksZUFBbkIsQ0FBM0I7QUFFRCxDQW5CRDs7Ozs7QUNOQSxJQUFJLHVCQUFKO0FBQUEsSUFDSSxlQUFlLFNBQVMsTUFENUI7QUFBQSxJQUVJLGVBQWUsZUFBZSxNQUZsQztBQUFBLElBR0ksa0JBQWtCLGVBQWUsTUFIckM7QUFBQSxJQUlJLGtCQUFrQixrQkFBa0IsTUFKeEM7QUFBQSxJQUtJLGlCQUFpQixrQkFBa0IsTUFMdkM7O0FBT0EsSUFBSSxjQUFjO0FBQ2hCLHFEQUVFLE1BRkYsNkVBRGdCO0FBTWhCLGtEQUVFLE1BRkYsaUVBTmdCO0FBV2hCLG9EQUVFLE1BRkYscUNBR0UsTUFIRiw0Q0FYZ0I7QUFpQmhCLGlEQUVFLE1BRkYsa0NBR0UsWUFIRiwrQkFJRSxZQUpGLHdDQUtFLFlBTEYsa0JBTUUsTUFORix5QkFqQmdCO0FBMEJoQiw2REFFRSxNQUZGLHdEQTFCZ0I7QUErQmhCLGlFQUVFLE1BRkYsMENBR0UsTUFIRiwwQ0FJRSxNQUpGLGlEQS9CZ0I7QUFzQ2hCLGtEQUVFLE1BRkYsMkNBR0UsTUFIRiwyQ0FJRSxNQUpGLG9EQUtFLE1BTEYsc0JBdENnQjtBQThDaEIsMERBRUUsTUFGRix5Q0FHRSxNQUhGLHlDQUlFLE1BSkYsZ0RBOUNnQjtBQXFEaEIsdUtBckRnQjtBQStEaEIsMENBRUUsTUFGRiwyQkFHRSxNQUhGLGtCQUlFLFlBSkYsNEJBS0UsWUFMRixnQ0FNRSxNQU5GLGFBT0UsTUFQRixxQkFRRSxZQVJGLDhCQVNFLE1BVEYsZUEvRGdCO0FBMkVoQixxREFFRSxNQUZGLGdEQUdFLE1BSEYsMkRBSUUsTUFKRixxQ0FLRSxNQUxGLHFDQU1FLE1BTkYscUNBT0UsTUFQRix5REEzRWdCO0FBcUZoQiw2REFFRSxNQUZGLCtCQUdFLFlBSEYsdUNBSUUsTUFKRixrQkFLRSxNQUxGLCtCQU1FLFlBTkYsd0NBT0UsTUFQRjtBQXJGZ0IsQ0FBbEI7O0FBaUdBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7Ozs7QUN4R0EsSUFBSSxVQUFVO0FBQ1osU0FBTyxZQURLO0FBRVoseUNBRlk7QUFHWixlQUFhLElBQUksSUFBSixHQUFXLFdBQVgsRUFIRDtBQUlaLGVBSlksMkJBSUk7QUFDZCxXQUFPLENBQUMsRUFBRSxrQkFBa0IsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCLE9BQU8sU0FBL0IsQ0FBeEM7QUFDRCxHQU5XO0FBT1osY0FQWSwwQkFPRztBQUNiLHVCQUFpQixLQUFLLFdBQXRCLFNBQXFDLEtBQUssS0FBMUM7QUFDRCxHQVRXO0FBVVosaUJBVlksNkJBVU07QUFDaEIsaUNBQTJCLEtBQUssU0FBaEMsVUFBOEMsS0FBSyxLQUFuRDtBQUNEO0FBWlcsQ0FBZDs7QUFlQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDZkEsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLEdBQVc7QUFDaEMsaUJBQU8sT0FBTyxVQUFQLENBQWtCO0FBQ2YsNEJBQVEsSUFETztBQUVmLDhCQUFVO0FBRkssV0FBbEIsQ0FBUDtBQUlELENBTEQ7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLGdCQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc2V0TWFya2VkT3B0aW9ucyBmcm9tICcuL21hcmtlZC5qcyc7XG5pbXBvcnQgbWFpbk9iaiBmcm9tICcuL21haW4uanMnO1xuaW1wb3J0IGV4YW1wbGVzT2JqIGZyb20gJy4vZXhhbXBsZXMuanMnO1xuXG5zZXRNYXJrZWRPcHRpb25zKCk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKGBIZWxsbyAke21haW5PYmoub3duZXJ9YCk7XG4gIGNvbnNvbGUubG9nKG1haW5PYmouaXNUb3VjaERldmljZSgpID8gJ1RvdWNoIERldmljZSc6ICdEZXNrdG9wJyk7XG5cbiAgJCgnI3NpdGVPd25lcicpLmFwcGVuZChtYWluT2JqLmdldE93bmVyQ29udGVudCgpKTtcblxuICAkKCcjcmVzcG9uc2l2ZUV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5yZXNwb25zaXZlRXhhbXBsZSkpO1xuICAkKCcjb2Zmc2V0c0V4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5vZmZzZXRzRXhhbXBsZSkpO1xuICAkKCcjYXV0b1dpZHRoRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmF1dG9XaWR0aEV4YW1wbGUpKTtcbiAgJCgnI25lc3RlZEV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai5uZXN0ZWRFeGFtcGxlKSk7XG4gICQoJyNhbGlnbm1lbnRFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmouYWxpZ25tZW50RXhhbXBsZSkpO1xuICAkKCcjZGlzdHJpYnV0aW9uRXhhbXBsZScpLmh0bWwobWFya2VkKGV4YW1wbGVzT2JqLmRpc3RyaWJ1dGlvbkV4YW1wbGUpKTtcbiAgJCgnI3Jlb3JkZXJFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmVvcmRlckV4YW1wbGUpKTtcbiAgJCgnI3JldmVyc2VFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoucmV2ZXJzZUV4YW1wbGUpKTtcbiAgJCgnI3ZhcmlhYmxlc0V4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai52YXJpYWJsZXNFeGFtcGxlKSk7XG4gICQoJyNtaXhpbnNFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmoubWl4aW5zRXhhbXBsZSkpO1xuICAkKCcjdmlzaWJpbGl0eUV4YW1wbGUnKS5odG1sKG1hcmtlZChleGFtcGxlc09iai52aXNpYmlsaXR5RXhhbXBsZSkpO1xuICAkKCcjZXFIZWlnaHRFeGFtcGxlJykuaHRtbChtYXJrZWQoZXhhbXBsZXNPYmouZXFIZWlnaHRFeGFtcGxlKSk7XG5cbn0pO1xuIiwidmFyIGluZGVudCA9IGAmbmJzcDsmbmJzcDtgLFxuICAgIGluZGVudERvdWJsZSA9IGluZGVudCArIGluZGVudCxcbiAgICBpbmRlbnRUcmlwbGUgPSBpbmRlbnREb3VibGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVhZHJ1cGxlID0gaW5kZW50VHJpcGxlICsgaW5kZW50LFxuICAgIGluZGVudFF1aW50dXBsZSA9IGluZGVudFF1YWRydXBsZSArIGluZGVudCxcbiAgICBpbmRlbnRTZXh0dXBsZSA9IGluZGVudFF1aW50dXBsZSArIGluZGVudDtcblxudmFyIGV4YW1wbGVzT2JqID0ge1xuICByZXNwb25zaXZlRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLW1kLTYgY29sLWxnLTRcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIG9mZnNldHNFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy1vZmZzZXQtMyBjb2wteHMtOVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYXV0b1dpZHRoRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgbmVzdGVkRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudFRyaXBsZX08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gICR7aW5kZW50RG91YmxlfTwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGFsaWdubWVudEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBzdGFydC14c1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5jb250ZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBkaXN0cmlidXRpb25FeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3cgYXJvdW5kLXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTJcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICByZW9yZGVyRXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtMlwiPjE8L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0yXCI+MjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLTIgZmlyc3QteHNcIj4zPC9kaXY+XG4gICR7aW5kZW50fS4uLlxuICA8L2Rpdj5cbiAgYCxcbiAgcmV2ZXJzZUV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyByZXZlcnNlXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4xPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4yPC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHNcIj4zPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICB2YXJpYWJsZXNFeGFtcGxlOiBgXG4gICRncmlkLWNvbHVtbnM6IDEyO1xuXG4gICR4cy1tYXg6IDY0MHB4O1xuICAkc20tbWF4OiAxMDI0cHg7XG4gICRtZC1tYXg6IDE0NDBweDtcbiAgJGxnLW1heDogMTkyMHB4O1xuXG4gICRjb250ZW50LXdlbGwtbWF4LXdpZHRoOiAyNDAwcHg7XG4gIGAsXG4gIG1peGluc0V4YW1wbGU6IGBcbiAgLmNvbnRhaW5lciB7XG4gICR7aW5kZW50fUBpbmNsdWRlIHJvdygpO1xuICAke2luZGVudH0uYm94IHtcbiAgJHtpbmRlbnREb3VibGV9QGlubGN1ZGUgY29sKDYpO1xuICAke2luZGVudERvdWJsZX1AaW5sY3VkZSBjb2wobWQsIDMpO1xuICAke2luZGVudH19XG4gICR7aW5kZW50fS5leHRyYXMge1xuICAke2luZGVudERvdWJsZX1AaW5jbHVkZSBoaWRlKGxnKTtcbiAgJHtpbmRlbnR9fVxuICB9XG4gIGAsXG4gIHZpc2liaWxpdHlFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbCBoaWRlLW1kLXVwXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS14cy11cCBzaG93LW1kLXVwXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sXCI+PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wgaGlkZS1zbS1vbmx5XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBlcUhlaWdodEV4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvdyBlcS1oZWlnaHRcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbFwiPlxuICAke2luZGVudERvdWJsZX08ZGl2IGhlaWdodD1cIjIwcHhcIj48L2Rpdj5cbiAgJHtpbmRlbnR9PC9kaXY+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgJHtpbmRlbnREb3VibGV9PGRpdiBoZWlnaHQ9XCIxNTBweFwiPjwvZGl2PlxuICAke2luZGVudH08L2Rpdj5cbiAgPC9kaXY+XG4gIGBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlc09iajtcbiIsInZhciBtYWluT2JqID0ge1xuICBvd25lcjogJ0RyZXcgQm90a2EnLFxuICBnaXRodWJVcmw6IGBodHRwczovL2dpdGh1Yi5jb20vZHJld2JvdGAsXG4gIGN1cnJlbnRZZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgISEoJ21zbWF4dG91Y2hwb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9LFxuICBnZXRDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIGAmY29weTsgJHt0aGlzLmN1cnJlbnRZZWFyfSAke3RoaXMub3duZXJ9LiBBbGwgUmlnaHRzIFJlc2VydmVkLmBcbiAgfSxcbiAgZ2V0T3duZXJDb250ZW50KCkge1xuICAgIHJldHVybiBgTWFkZSBieSA8YSBocmVmPVwiJHt0aGlzLmdpdGh1YlVybH1cIj4ke3RoaXMub3duZXJ9PC9hPmBcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYWluT2JqO1xuIiwidmFyIHNldE1hcmtlZE9wdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG1hcmtlZC5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgICAgIHNhbml0aXplOiB0cnVlXG4gICAgICAgICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0TWFya2VkT3B0aW9ucztcbiJdfQ==