var stellarApp = stellarApp || {};

stellarApp.Plane = Backbone.Model.extend({
  urlRoot: '/planes',
  defaults: {
    rows: 10,
    aisles: 1,
  }
});

stellarApp.Planes = Backbone.Collection.extend({
  model: stellarApp.Plane,
  url: 'planes'
});