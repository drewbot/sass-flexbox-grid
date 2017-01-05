import mainObj from './main.js';

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#copyright').append(mainObj.getCopyright());

});
