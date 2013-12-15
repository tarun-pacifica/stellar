var stellarApp = stellarApp || {};

stellarApp.ReservationView = Backbone.View.extend({
  el: '#reservation',
  events: {

  },
  initialize: function () {
    this.render();
    this.$el.off('click #create');
  },
  render: function (){
    var template = Handlebars.compile(stellarApp.templates.reservationView);
    var model = this.model.toJSON();
    model.reservations = stellarApp.reservations.toJSON();
    $('#main').html(template(model));
    return this;
  }
})