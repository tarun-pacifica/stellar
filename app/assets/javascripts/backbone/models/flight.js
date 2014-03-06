var stellarApp = stellarApp || {};

stellarApp.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  label: function() {
    return this.get('origin');
  }
});

stellarApp.Flights = Backbone.Collection.extend({
  model: stellarApp.Flight,
  url: '/flights'
});