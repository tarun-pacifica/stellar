var stellarApp = stellarApp || {};


//reservations

$(document).ready(function() {
  stellarApp.templates = {
    // plane templates
    appView: $('#plane_creator').html(),
    singleaisleView: $('#single_aisle').html(),
    dualaisleView: $('#dual_aisle').html(),
    tripleaisleView: $('#triple_aisle').html(),

    // flight templates
    flightcreatorView: $('#flight_creator_template').html(),

    // passenger templates
    passengercreatorView: $('#passenger_creator_template').html(),

    // reservation templates
    reservationView: $('#reservations_template').html(),

    matchedFlightsView: $('#matching_flights_template').html()
  };

  stellarApp.reservations = new stellarApp.Reservations();
  stellarApp.reservations.fetch();

  // planes
  stellarApp.planes = new stellarApp.Planes();
  stellarApp.planes.fetch().done(function() {})

  //flights
  stellarApp.flights = new stellarApp.Flights();
  stellarApp.flights.fetch().done(function() {});

  //passengers
  stellarApp.passengers = new stellarApp.Passengers();

  stellarApp.passengers.fetch().done(function() {
    var router = new stellarApp.Router();
    Backbone.history.start();
  })
});