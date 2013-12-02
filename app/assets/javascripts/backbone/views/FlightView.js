var stellarApp = stellarApp || {};

stellarApp.FlightView = Backbone.View.extend({
    el: '#flight_container',
    events: {
    "click #create_flight": "createFlight",
    },
    initialize: function() {
      this.render();
    },
    render: function() {
      console.log(stellarApp)
      var template = Handlebars.compile(stellarApp.templates.flightcreatorView);
      this.$el.html(template(this.model.toJSON()));
    },
    createFlight: function(e) {
      e.preventDefault();
      var flight = new stellarApp.Flight();
      flight.set('call_sign', $('#call_sign').val()),
      flight.set('origin', $('#origin').val()),
      flight.set('destination', $('#destination').val()),
      flight.set('plane_type', $('#plane_type').val()),
      flight.set('departure_time', $('#departure_time').val()),
      flight.save()
    },
    flight_render: function() {
      var templateHTML;
      templateHTML = stellarApp.templates.flightcreatorView;
      ('#flight_container').empty();
      var template = Handlebars.compile(templateHTML);

      for (var i = 0; i < flights.length; i++) {
        this.$el.find('#flight_container').append(template)
    }
  }
})