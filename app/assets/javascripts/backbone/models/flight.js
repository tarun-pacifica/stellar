var stellarApp = stellarApp || {};

stellarApp.Flight = Backbone.Model.extend({
  urlRoot: '/flights'
});

stellarApp.Flights = Backbone.Collection.extend({
  model: stellarApp.Flight,
  url: '/flights'
});