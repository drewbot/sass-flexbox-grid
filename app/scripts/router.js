var root = null,
    useHash = false,
    router = new Navigo(root, useHash),
    $viewContent = $('.view-content'),
    $allViews = $( '[id|="view"]' ),
    $homeContent = $('#view-home'),
    $mixinsContent = $('#view-mixins'),
    $variablesContent = $('#view-variables');

var replaceView = function($view) {
  $allViews.hide();
  $view.show();
}

var customRouter = function() {
  return router
          .on({
            'row-classes': function() {
              console.log('Row Classes');
            },
            'variables': function() {
              replaceView($variablesContent);
            },
            'mixins': function() {
              replaceView($mixinsContent);
            },
            '*': function() {
              replaceView($homeContent);
            }
          })
          .resolve();
}

module.exports = customRouter;
