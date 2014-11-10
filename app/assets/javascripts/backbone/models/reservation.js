var stellarApp = stellarApp || {};

stellarApp.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',
  defaults: {}
});

// stellarApp.Reservation.bind('remove',function(){
//   this.destroy();
// })

stellarApp.Reservations = Backbone.Collection.extend({
  model: stellarApp.Reservation,
  url: '/reservations'
});