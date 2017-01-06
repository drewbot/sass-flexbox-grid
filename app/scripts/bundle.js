(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _marked = require('./marked.js');

var _marked2 = _interopRequireDefault(_marked);

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _marked2.default)();

// marked.setOptions({
//   sanitize: true
// });

$(function () {
  console.log('Hello ' + _main2.default.owner);
  console.log(_main2.default.isTouchDevice() ? 'Touch Device' : 'Desktop');

  $('#copyright').append(_main2.default.getCopyright());

  $('#responsiveExample').html(marked(_main2.default.responsiveExample));
  $('#offsetsExample').html(marked(_main2.default.offsetsExample));
  $('#autoWidthExample').html(marked(_main2.default.autoWidthExample));
  $('#nestedExample').html(marked(_main2.default.nestedExample));
  $('#alignmentExample').html(marked(_main2.default.alignmentExample));
});

},{"./main.js":2,"./marked.js":3}],2:[function(require,module,exports){
'use strict';

var indent = '&nbsp;&nbsp;',
    indentDouble = indent + indent,
    indentTriple = indentDouble + indent,
    indentQuadruple = indentTriple + indent,
    indentQuintuple = indentQuadruple + indent,
    indentSextuple = indentQuintuple + indent;

var mainObj = {
  owner: 'Drew Botka',
  copyright: new Date().getFullYear(),
  responsiveExample: '\n  <div class="row">\n  ' + indent + '<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4"></div>\n  </div>\n  ',
  offsetsExample: '\n  <div class="row">\n  ' + indent + '<div class="col-xs-offset-3 col-xs-9"></div>\n  </div>\n  ',
  autoWidthExample: '\n  <div class="row">\n  ' + indent + '<div class="col-xs"></div>\n  ' + indent + '<div class="col-xs"></div>\n  </div>\n  ',
  nestedExample: '\n  <div class="row">\n  ' + indent + '<div class="col-xs">\n  ' + indentDouble + '<div class="row">\n  ' + indentTriple + '<div class="col-xs"></div>\n  ' + indentDouble + '</div>\n  ' + indent + '</div>\n  </div>\n  ',
  alignmentExample: '\n  <div class="row start-xs">\n  ' + indent + '<div class="col-xs-6">content</div>\n  </div>\n  ',
  isTouchDevice: function isTouchDevice() {
    return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
  },
  getCopyright: function getCopyright() {
    return '&copy; ' + this.copyright + ' ' + this.owner + '. All Rights Reserved.';
  }
};

module.exports = mainObj;

},{}],3:[function(require,module,exports){
"use strict";

var setMarkedOptions = function setMarkedOptions() {
          return marked.setOptions({
                    breaks: true,
                    sanitize: true
          });
};

module.exports = setMarkedOptions;

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9hcHAuanMiLCJhcHAvc2NyaXB0cy9tYWluLmpzIiwiYXBwL3NjcmlwdHMvbWFya2VkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxZQUFXO0FBQ1gsVUFBUSxHQUFSLFlBQXFCLGVBQVEsS0FBN0I7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFRLGFBQVIsS0FBMEIsY0FBMUIsR0FBMEMsU0FBdEQ7O0FBRUEsSUFBRSxZQUFGLEVBQWdCLE1BQWhCLENBQXVCLGVBQVEsWUFBUixFQUF2Qjs7QUFFQSxJQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLE9BQU8sZUFBUSxpQkFBZixDQUE3QjtBQUNBLElBQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsT0FBTyxlQUFRLGNBQWYsQ0FBMUI7QUFDQSxJQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLE9BQU8sZUFBUSxnQkFBZixDQUE1QjtBQUNBLElBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsT0FBTyxlQUFRLGFBQWYsQ0FBekI7QUFDQSxJQUFFLG1CQUFGLEVBQXVCLElBQXZCLENBQTRCLE9BQU8sZUFBUSxnQkFBZixDQUE1QjtBQUVELENBWkQ7Ozs7O0FDVEEsSUFBSSx1QkFBSjtBQUFBLElBQ0ksZUFBZSxTQUFTLE1BRDVCO0FBQUEsSUFFSSxlQUFlLGVBQWUsTUFGbEM7QUFBQSxJQUdJLGtCQUFrQixlQUFlLE1BSHJDO0FBQUEsSUFJSSxrQkFBa0Isa0JBQWtCLE1BSnhDO0FBQUEsSUFLSSxpQkFBaUIsa0JBQWtCLE1BTHZDOztBQU9BLElBQUksVUFBVTtBQUNaLFNBQU8sWUFESztBQUVaLGFBQVcsSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUZDO0FBR1osbURBRUUsTUFGRiwyRUFIWTtBQVFaLGdEQUVFLE1BRkYsK0RBUlk7QUFhWixrREFFRSxNQUZGLHNDQUdFLE1BSEYsNkNBYlk7QUFtQlosK0NBRUUsTUFGRixnQ0FHRSxZQUhGLDZCQUlFLFlBSkYsc0NBS0UsWUFMRixrQkFNRSxNQU5GLHlCQW5CWTtBQTRCWiwyREFFRSxNQUZGLHNEQTVCWTtBQWlDWixlQWpDWSwyQkFpQ0k7QUFDZCxXQUFPLENBQUMsRUFBRSxrQkFBa0IsTUFBcEIsQ0FBRCxJQUFnQyxDQUFDLEVBQUUsc0JBQXNCLE9BQU8sU0FBL0IsQ0FBeEM7QUFDRCxHQW5DVztBQW9DWixjQXBDWSwwQkFvQ0c7QUFDYix1QkFBaUIsS0FBSyxTQUF0QixTQUFtQyxLQUFLLEtBQXhDO0FBQ0Q7QUF0Q1csQ0FBZDs7QUF5Q0EsT0FBTyxPQUFQLEdBQWlCLE9BQWpCOzs7OztBQ2hEQSxJQUFJLG1CQUFtQixTQUFuQixnQkFBbUIsR0FBVztBQUNoQyxpQkFBTyxPQUFPLFVBQVAsQ0FBa0I7QUFDZiw0QkFBUSxJQURPO0FBRWYsOEJBQVU7QUFGSyxXQUFsQixDQUFQO0FBSUQsQ0FMRDs7QUFPQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzZXRNYXJrZWRPcHRpb25zIGZyb20gJy4vbWFya2VkLmpzJztcbmltcG9ydCBtYWluT2JqIGZyb20gJy4vbWFpbi5qcyc7XG5cbnNldE1hcmtlZE9wdGlvbnMoKTtcblxuLy8gbWFya2VkLnNldE9wdGlvbnMoe1xuLy8gICBzYW5pdGl6ZTogdHJ1ZVxuLy8gfSk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKGBIZWxsbyAke21haW5PYmoub3duZXJ9YCk7XG4gIGNvbnNvbGUubG9nKG1haW5PYmouaXNUb3VjaERldmljZSgpID8gJ1RvdWNoIERldmljZSc6ICdEZXNrdG9wJyk7XG5cbiAgJCgnI2NvcHlyaWdodCcpLmFwcGVuZChtYWluT2JqLmdldENvcHlyaWdodCgpKTtcblxuICAkKCcjcmVzcG9uc2l2ZUV4YW1wbGUnKS5odG1sKG1hcmtlZChtYWluT2JqLnJlc3BvbnNpdmVFeGFtcGxlKSk7XG4gICQoJyNvZmZzZXRzRXhhbXBsZScpLmh0bWwobWFya2VkKG1haW5PYmoub2Zmc2V0c0V4YW1wbGUpKTtcbiAgJCgnI2F1dG9XaWR0aEV4YW1wbGUnKS5odG1sKG1hcmtlZChtYWluT2JqLmF1dG9XaWR0aEV4YW1wbGUpKTtcbiAgJCgnI25lc3RlZEV4YW1wbGUnKS5odG1sKG1hcmtlZChtYWluT2JqLm5lc3RlZEV4YW1wbGUpKTtcbiAgJCgnI2FsaWdubWVudEV4YW1wbGUnKS5odG1sKG1hcmtlZChtYWluT2JqLmFsaWdubWVudEV4YW1wbGUpKTtcblxufSk7XG4iLCJ2YXIgaW5kZW50ID0gYCZuYnNwOyZuYnNwO2AsXG4gICAgaW5kZW50RG91YmxlID0gaW5kZW50ICsgaW5kZW50LFxuICAgIGluZGVudFRyaXBsZSA9IGluZGVudERvdWJsZSArIGluZGVudCxcbiAgICBpbmRlbnRRdWFkcnVwbGUgPSBpbmRlbnRUcmlwbGUgKyBpbmRlbnQsXG4gICAgaW5kZW50UXVpbnR1cGxlID0gaW5kZW50UXVhZHJ1cGxlICsgaW5kZW50LFxuICAgIGluZGVudFNleHR1cGxlID0gaW5kZW50UXVpbnR1cGxlICsgaW5kZW50O1xuXG52YXIgbWFpbk9iaiA9IHtcbiAgb3duZXI6ICdEcmV3IEJvdGthJyxcbiAgY29weXJpZ2h0OiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gIHJlc3BvbnNpdmVFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbWQtNiBjb2wtbGctNFwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgb2Zmc2V0c0V4YW1wbGU6IGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzLW9mZnNldC0zIGNvbC14cy05XCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBhdXRvV2lkdGhFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPjwvZGl2PlxuICAke2luZGVudH08ZGl2IGNsYXNzPVwiY29sLXhzXCI+PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBuZXN0ZWRFeGFtcGxlOiBgXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgJHtpbmRlbnR9PGRpdiBjbGFzcz1cImNvbC14c1wiPlxuICAke2luZGVudERvdWJsZX08ZGl2IGNsYXNzPVwicm93XCI+XG4gICR7aW5kZW50VHJpcGxlfTxkaXYgY2xhc3M9XCJjb2wteHNcIj48L2Rpdj5cbiAgJHtpbmRlbnREb3VibGV9PC9kaXY+XG4gICR7aW5kZW50fTwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgYWxpZ25tZW50RXhhbXBsZTogYFxuICA8ZGl2IGNsYXNzPVwicm93IHN0YXJ0LXhzXCI+XG4gICR7aW5kZW50fTxkaXYgY2xhc3M9XCJjb2wteHMtNlwiPmNvbnRlbnQ8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGlzVG91Y2hEZXZpY2UoKSB7XG4gICAgcmV0dXJuICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgISEoJ21zbWF4dG91Y2hwb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9LFxuICBnZXRDb3B5cmlnaHQoKSB7XG4gICAgcmV0dXJuIGAmY29weTsgJHt0aGlzLmNvcHlyaWdodH0gJHt0aGlzLm93bmVyfS4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpbk9iajtcbiIsInZhciBzZXRNYXJrZWRPcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgICAgICBzYW5pdGl6ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE1hcmtlZE9wdGlvbnM7XG4iXX0=