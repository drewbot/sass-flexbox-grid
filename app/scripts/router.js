// var root = null,
//     useHash = false,
//     router = new Navigo(root, useHash),
//     $allViews = $( '[id|="view"]' ),
//     $homeView = $('#view-home'),
//     $classesView = $('#view-classes'),
//     $mixinsView = $('#view-mixins'),
//     $variablesView = $('#view-variables');
//
// var replaceView = function($view) {
//   $allViews.hide();
//   $view.show();
// }
//
// var customRouter = function() {
//   return router
//     .on({
//       'classes': function() {
//         replaceView($classesView);
//       },
//       'variables': function() {
//         replaceView($variablesView);
//       },
//       'mixins': function() {
//         replaceView($mixinsView);
//       },
//       '*': function() {
//         replaceView($homeView);
//       }
//     })
//     .resolve();
// }
//
// module.exports = customRouter;
