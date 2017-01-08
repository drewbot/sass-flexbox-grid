import setMarkedOptions from './marked.js';
import mainObj from './main.js';
import examplesObj from './examples.js';

setMarkedOptions();

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#siteOwner').append(mainObj.getOwnerContent());

  $('#responsiveExample').html(marked(examplesObj.responsiveExample));
  $('#offsetsExample').html(marked(examplesObj.offsetsExample));
  $('#autoWidthExample').html(marked(examplesObj.autoWidthExample));
  $('#nestedExample').html(marked(examplesObj.nestedExample));
  $('#alignmentExample').html(marked(examplesObj.alignmentExample));
  $('#distributionExample').html(marked(examplesObj.distributionExample));
  $('#reorderExample').html(marked(examplesObj.reorderExample));
  $('#reverseExample').html(marked(examplesObj.reverseExample));
  $('#variablesExample').html(marked(examplesObj.variablesExample));
  $('#mixinsExample').html(marked(examplesObj.mixinsExample));

});
