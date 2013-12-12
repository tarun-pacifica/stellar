var stellarApp = stellarApp || {};

stellarApp.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {}
});

stellarApp.Reservations = Backbone.Collection.extend({
  model: stellarApp.Reservation,
  url: '/reservations'
});