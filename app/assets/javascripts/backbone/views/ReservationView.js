var stellarApp = stellarApp || {};

var seat_taken = [];
var id

stellarApp.ReservationView = Backbone.View.extend({
  tagName: 'div',
  events: {
    "click #flight_query_submit": "flight_query",
    "click .flight": "display_seatplan",
    "click .seat": 'create_Reservation'
  },
  initialize: function() {
    this.listenTo(stellarApp.reservations, 'add', this.seat_changed);
  },
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.reservationView);
    var model = this.model.toJSON();
    model.reservations = stellarApp.reservations.toJSON();
    this.$el.html(template(model))
    $('#main').html(this.$el);
    $('.name').html(passenger.name)
    return this;
  },
  seat_changed: function() {
    $('.booked').each(function() {
      seat_taken.push($(this).text())
      seat_taken = jQuery.unique(seat_taken)
    });
    var text = 'SEATs: ' + seat_taken.join(', ');
    $('.seats_name').html('').html(text);
  },
  flight_query: function(e) {
    e.preventDefault();
    $('.seating').empty;
    $.ajax({
      url: '/flights/search',
      dataType: 'json',
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
      stellarApp.flights.fetch().done(function() {
        matchedview.render();
      });
      // only need to call render once, else this cancels out the previous render;
    })
  },
  display_seatplan: function(e) {
    e.preventDefault();
    // $(.seating).empty();
    id = $(e.target).closest('tr').find('.id_value').text();
    $.ajax({
      url: '/flights/' + id,
      dataType: 'json'
    }).done(function(id) {
      var aival = id.plane.aisles;
      var rowval = id.plane.rows;
      var plane_name = id.plane.name;
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
      $('.seating').empty();
      var template = Handlebars.compile(templateHTML);
      for (var i = 0; i < parseInt(rowval); i++) {
        $('.seating').append(template({
          row: i + 1
        }))
      }
    })
      .done(function() {
        id = $(e.target).closest('tr').find('.id_value').text();
        console.log('id:' + id)
        var seat = 0
        $.ajax({
          url: '/flights/seats/' + id,
          dataType: 'json'
        })
          .done(function(data) {
            // debugger;
            for (var i = 0; i < data.length; i++) {
              $('.plane-row div:contains(' + data[i] + ')').css('background-color', 'black');
              seat = seat + 1;
            }
            console.log(seat + 'seat')

            var freedom = $('.plane-row div:not(' + data[i] + ')').length;
            var actual_free = freedom - seat - 1;
            console.log('free:' + freedom);
            $(e.target).closest('tr').find('.seats_avail').html(actual_free);
          })

      })
  },
  create_Reservation: function(e) {
    $(e.target).addClass('booked');
    var seat_name = $(e.target).text()
    seat_taken << seat_name;
    stellarApp.reservations.create({
      seat_name: seat_name,
      flight_id: id,
      passenger_id: passenger
    });
  }
})