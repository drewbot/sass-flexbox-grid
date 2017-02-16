import customRouter from './router.js';
import setMarkedOptions from './marked.js';
import mainObj from './main.js';
import examplesObj from './examples.js';
import sassVarsObj from './sass-variables.js';
import sassMixinsObj from './sass-mixins.js'

setMarkedOptions();

var codeContentsArray = [examplesObj, sassVarsObj, sassMixinsObj];

$(function() {
  customRouter();

  console.log(`Hello ${mainObj.owner}`);
  console.log(mainObj.isTouchDevice() ? 'Touch Device': 'Desktop');

  $('#siteOwner').append(mainObj.getOwnerContent());

  function markedSection(obj) {
    $.each(obj, function(key, value) {
      $(`#${key}`).html(marked(value));
    });
  }

  $.each(codeContentsArray, function(i, obj) {
    markedSection(obj);
  })

});
