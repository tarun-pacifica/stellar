var stellarApp = stellarApp || {}

stellarApp.Router = Backbone.Router.extend({
  routes: {
    '':'index',
    'planes': 'newPlane',
    'flights': 'newFlight',
    'passengers': 'newPassenger'
  },
  index: function() {
    // var planeView = new stellarApp.PlaneView({collection:planeApp.planes});
    // planeView.render();
    // console.log('index:planeView.render');
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
    var plane = new stellarApp.Plane();
    stellarApp.planepageview = new stellarApp.PlaneView({model:plane});
    stellarApp.planepageview.render();
    console.log('new plane!');
  },
  newFlight: function(){
    console.log(' render newFlight');
    var view = new stellarApp.FlightView({model: new stellarApp.Flight()});
    view.render();

  },
  newPassenger: function(){
    console.log('render newPassenger');
    var view = new stellarApp.PassengerView({model: new stellarApp.Passenger()});
    view.render();
  }
});