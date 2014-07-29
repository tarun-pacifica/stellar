var stellarApp = stellarApp || {}

stellarApp.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'planes': 'newPlane',
    'flights': 'newFlight',
    'passengers': 'newPassenger',
    'reservations': 'newReservation'
  },
  index: function() {},
  newPlane: function() {
    if (this.pageView) {
      this.pageView.remove()
    };
    this.pageView = new stellarApp.PlaneView({
      model: new stellarApp.Plane()
    });
    var html = this.pageView.render().el;
    $('#main').html(html);
  },
  newFlight: function() {

    if (this.pageView) {
      this.pageView.remove()
    };
    this.pageView = new stellarApp.FlightView({
      model: new stellarApp.Flight()
    });
    var html = this.pageView.render().el;
    $('#main').html(html);
  },
  newPassenger: function() {
    if (this.pageView) {
      this.pageView.remove();
      $('.name').text('');
      $('.seats_name').text('');
      seat_taken = [];
    };
    this.pageView = new stellarApp.PassengerView({
      model: new stellarApp.Passenger()
    });
    var html = this.pageView.render().el;
    $('#main').html(html);
  },
  newReservation: function() {
    if (this.pageView) {
      this.pageView.remove()
    };
    this.pageView = new stellarApp.ReservationView({
      model: new stellarApp.Reservation()
    });
    this.pageView.render();
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