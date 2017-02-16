var root = null,
    useHash = false,
    router = new Navigo(root, useHash),
    $viewContent = $('.view-content'),
    $homeContent = $('#homeContent'),
    $mixinsContent = $('#mixinsContent'),
    $variablesContent = $('#variablesContent');



var customRouter = function() {
  return router
          .on({
            'variables': function () {
              console.log('Variables');
              $homeContent.hide();
              $mixinsContent.hide();
              $variablesContent.show();
            },
            'mixins': function () {
              console.log('Mixins');
              $homeContent.hide();
              $variablesContent.hide();
              $mixinsContent.show();
            },
            '*': function () {
              console.log('home');
              $variablesContent.hide();
              $mixinsContent.hide();
            }
          })
          .resolve();
}

module.exports = customRouter;
