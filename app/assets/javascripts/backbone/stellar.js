var stellarApp = stellarApp || {};

$(document).ready(function(){
  stellarApp.templates = {
    // plane templates
    appView: $('#plane_creator').html(),
    singleaisleView: $('#single_aisle').html(),
    dualaisleView: $('#dual_aisle').html(),
    tripleaisleView: $('#triple_aisle').html(),
    // flight templates
    flightcreatorView: $('#flight_creator_template').html(),
  };
  stellarApp.planes = new stellarApp.Planes();
  stellarApp.planes.fetch().done(function(){
    console.log(stellarApp.planes.models);
  })
  stellarApp.flights = new stellarApp.Flights();
  stellarApp.flights.fetch().done(function(){
    var router = new stellarApp.Router();
    Backbone.history.start();
  });
});