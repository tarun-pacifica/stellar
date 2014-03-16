var stellarApp = stellarApp || {};

stellarApp.MatchedFlightsView = Backbone.View.extend({
  //subView of FlightsView, renders search results in a table;
  tagName: 'div',
  events: {},
  initialize: function() {
    this.listenTo(stellarApp.reservations, 'add', this.fetchAndRender);
  },

  render: function() {
    var template = Handlebars.compile(stellarApp.templates.matchedFlightsView);
    var matchedflights = this.collection.toJSON();
    console.log(this.collection);
    this.$el.html(template(matchedflights));
    // remove(".noresults");
    $('.reservation_flight_viewer tbody').empty();
    $(".reservation_flight_viewer table tbody").prepend(this.$el.html());
    return this;
  },

  fetchAndRender: function() {
    var view = this;
    console.log('fetchAndRender');
    $.ajax({
      url: '/flights/search',
      dataType: 'json',
      data: {
        origin_name: $('#origin_name').val(),
        destination_name: $('#destination_name').val()
      }
    })
      .done(function(p) {
        console.log('p' + p);
        view.collection.reset(p);
        view.render();
      })
  }
})