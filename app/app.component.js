(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: show-properties.html
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
