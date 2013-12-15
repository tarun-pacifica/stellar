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
    if(this.pageView){
      this.pageView.remove()
    };
    var plane = new stellarApp.Plane();
    stellarApp.planepageview = new stellarApp.PlaneView({model:plane});
    stellarApp.planepageview.render();
    console.log('new plane!');
  },
  newFlight: function(){
    console.log('render newFlight');
    if(this.pageView){
      this.pageView.remove()
    };
    this.pageView = new stellarApp.FlightView({model: new stellarApp.Flight()});
    this.pageView.render();
  },
  newPassenger: function(){
    if(this.pageView){
      this.pageView.remove()
    };
    var view = new stellarApp.PassengerView({model: new stellarApp.Passenger()});
    view.render();
    this.pageView = view;
    console.log('render newPassenger');
  },
  newReservation: function () {
    if(this.pageView){
      this.pageView.remove()
    };
    this.pageView = new stellarApp.ReservationView({model: new stellarApp.Reservation()});
    this.pageView.render();
    console.log('render newReservation');
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