var stellarApp = stellarApp || {};

stellarApp.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    "click #create_flight": "createFlight",
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    console.log(stellarApp)
    var template = Handlebars.compile(stellarApp.templates.flightcreatorView);
    var model = this.model.toJSON();
    model.planes = stellarApp.planes.toJSON();
    this.$el.html(template(model));
  },
  createFlight: function(e) {
    e.preventDefault();
    var flight = new stellarApp.Flight();
    flight.set('call_sign', $('#call_sign').val()),
    flight.set('origin', $('#origin').val()),
    flight.set('destination', $('#destination').val()),
    flight.set('plane_id', $('#plane_type').val()),
    flight.set('time_departed', $('#time_departed').val()),
    flight.set('time_arrived', $('#time_arrived').val()),
    flight.set('date_departed', $('#date_departed').val()),
    flight.set('date_arrived', $('#date_arrived').val()),
    flight.save()
  },
  flight_render: function() {
    var templateHTML;
    templateHTML = stellarApp.templates.flightcreatorView;
    ('#flight_container').empty();
    var template = Handlebars.compile(templateHTML);
  }
});