var stellarApp = stellarApp || {}

stellarApp.Router = Backbone.Router.extend({
  routes: {
    '':'index',
    'planes/new': 'newPlane',
    'planes/:id': 'getPlane',
    'flights/new': 'newFlight',
    'flights/:id': 'getFlight'
  },
  index: function() {
    var planeView = new stellarApp.PlaneView({collection:planeApp.planes});
    planeView.render();
    console.log('index:planeView.render');
  },
  getPlane: function(id) {
    console.log('getplane');
    var plane = stellarApp.planes.get(id);
    var view = new stellarApp.PlaneView({model:plane});
    plane.fetch({
      success: function(){
        view.render();
        console.log('getPlane:.fetchsuccess!');
      }
    })
  },
  newPlane: function(){
    var view = new stellarApp.PlaneView({model:new stellarApp.Plane()});
    view.render();
    console.log('new plane!');
  }
});