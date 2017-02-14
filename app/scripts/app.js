import setMarkedOptions from './marked.js';
import mainObj from './main.js';
import examplesObj from './examples.js';

setMarkedOptions();

$(function() {
  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#siteOwner').append(mainObj.getOwnerContent());

  // convert each example to markdown and append to el with id of the same name
  $.each(examplesObj, function(key, value) {
    $('#' + key).html(marked(value));
  });

});
