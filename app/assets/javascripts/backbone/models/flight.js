var stellarApp = stellarApp || {};

stellarApp.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  label: function () {
    console.log('hello'+this.get('origin'));
    return this.get('origin');
    }
});

stellarApp.Flights = Backbone.Collection.extend({
  model: stellarApp.Flight,
  url: '/flights'
});