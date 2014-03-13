var stellarApp = stellarApp || {};

stellarApp.ReservationView = Backbone.View.extend({
  tagName: 'div',
  events: {
    "click #flight_query_submit": "flight_query",
    "click .flight": "display_flight"
  },
  initialize: function() {
    //this.render();
    // this.$el.off('click #flight_query_submit');
  },
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.reservationView);
    var model = this.model.toJSON();
    model.reservations = stellarApp.reservations.toJSON();
    this.$el.html(template(model))
    $('#main').html(this.$el);
    return this;
  },
  flight_query: function(e) {
    e.preventDefault();
    $.ajax({
      url: '/flights/search',
      dataType: 'JSON',
      data: { //queries the origin/destination from db
        origin_name: $('#origin_name').val(),
        destination_name: $('#destination_name').val()
      }
    }).done(function(flights) {
      stellarApp.matchingFlights = new stellarApp.Flights();
      //passes the search query into a template view to be rendered as a subview of FlightsView
      _.each(flights, function(flight) {
        f = new stellarApp.Flight();
        f.set(flight);
        stellarApp.matchingFlights.add(f);
      });
      // if (matchedview) {
      //   matchedview.remove()
      // };
      var matchedview = new stellarApp.MatchedFlightsView({
        collection: stellarApp.matchingFlights
      });
      matchedview.render(); // only need to call render once, else this cancels out the previous render;
    })
  },
  display_flight: function(e) {
    e.preventDefault();
    this.render();
    $.ajax({
      url: '/flights/3',
      // + this.$el.find($('.id_value').html()),
      dataType: 'json',
    }).done(function(id) {
      var aival = id.plane.aisles;
      var rowval = id.plane.rows;
      var plane_name = id.plane.name;
      debugger;
      $('#rowval').html(rowval);
      $('#aival').html(aival);
      $('#plane_name').html(plane_name);
      var templateHTML;
      switch (aival) {
        default:
        case "1":
          templateHTML = stellarApp.templates.singleaisleView;
          break;
        case "2":
          templateHTML = stellarApp.templates.dualaisleView;
          break;
        case "3":
          templateHTML = stellarApp.templates.tripleaisleView;
      }
      this.$el.find('#seating', '#name').empty();
      var template = Handlebars.compile(templateHTML);
      for (var i = 0; i < parseInt(rowval); i++) {
        this.$el.find('#seating').append(template({
          row: i + 1
        }))
      }
    })
  }
});