var stellarApp = stellarApp || {}

stellarApp.Router = Backbone.Router.extend({
  routes: {
    '':'index',
    'planes': 'newPlane',
    'flights': 'newFlight',
    'passengers': 'newPassenger',
    'reservations': 'newReservation'
  },
  index: function() {
  },
  newPlane: function(){
    var plane = new stellarApp.Plane();
    stellarApp.planepageview = new stellarApp.PlaneView({model:plane});
    stellarApp.planepageview.render();
    console.log('new plane!');
  },
  newFlight: function(){
    console.log('render newFlight');
    var view = new stellarApp.FlightView({model: new stellarApp.Flight()});
    view.render();
  },
  newPassenger: function(){
    console.log('render newPassenger');
    var view = new stellarApp.PassengerView({model: new stellarApp.Passenger()});
    view.render();
  },
  newReservation: function () {
    console.log('render newReservation');
    var view = new stellarApp.ReservationView({model: new stellarApp.Reservation()});
    view.render();
    new AutoCompleteView({
      input: $('#destination_name'),
      queryParameter: "q_destination",
      model: stellarApp.flights
    }).render();
    new AutoCompleteView({
      input: $('#origin_name'),
      queryParameter: "q_origin",
      model: stellarApp.flights
    }).render();
  }
});