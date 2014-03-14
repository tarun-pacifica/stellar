var stellarApp = stellarApp || {};

stellarApp.MatchedFlightsView = Backbone.View.extend({
  //subView of FlightsView, renders search results in a table;
  tagName: 'div',
  events: {},
  initialize: function() {},
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.matchedFlightsView);
    var matchedflights = this.collection.toJSON();
    console.log(this.collection);
    this.$el.html(template(matchedflights));
    // remove(".noresults");
    $('#flight_viewer tbody').empty();
    $("#flight_viewer table tbody").append(this.$el.html());
    return this;
  }
})