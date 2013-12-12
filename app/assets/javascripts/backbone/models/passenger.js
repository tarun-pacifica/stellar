var stellarApp = stellarApp || {};

stellarApp.Passenger = Backbone.Model.extend({
  urlRoot: '/passengers',
  defaults: {}
});

stellarApp.Passengers = Backbone.Collection.extend({
  model: stellarApp.Passenger,
  url: '/passengers'
});