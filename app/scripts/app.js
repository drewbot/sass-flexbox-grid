import setMarkedOptions from './marked.js';
import mainObj from './main.js';

setMarkedOptions();

// marked.setOptions({
//   sanitize: true
// });

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#copyright').append(mainObj.getCopyright());

  $('#responsiveExample').html(marked(mainObj.responsiveExample));
  $('#offsetsExample').html(marked(mainObj.offsetsExample));
  $('#autoWidthExample').html(marked(mainObj.autoWidthExample));
  $('#nestedExample').html(marked(mainObj.nestedExample));
  $('#alignmentExample').html(marked(mainObj.alignmentExample));

});
