var stellarApp = stellarApp || {};

stellarApp.FlightView = Backbone.View.extend({
  el: '#flight',
  events: {
    "click #create_flight": "createFlight",
  },
  initialize: function() {
    this.$el.off('click #create_flight');
    this.render();
    this.listenTo(stellarApp.flights, 'add', this.render);
  },
  render: function() {
    console.log('flightView is being rendered:'+stellarApp)
    var template = Handlebars.compile(stellarApp.templates.flightcreatorView);
    var model = this.model.toJSON();
    model.planes = stellarApp.planes.toJSON();
    model.flights = stellarApp.flights.toJSON();
    $('#main').html(template(model));
    return this;
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
    flight.save().done(function(){
      console.log('saved!',flight);
      stellarApp.flights.fetch();
    });
  },
  flight_render: function() {
    var templateHTML;
    templateHTML = stellarApp.templates.flightcreatorView;
    ('#main').empty();
    var template = Handlebars.compile(templateHTML);
  }
});