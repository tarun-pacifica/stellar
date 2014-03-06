var stellarApp = stellarApp || {};

stellarApp.MatchedFlightsView = Backbone.View.extend({
  //subView of FlightsView, renders search results in a table;
  tagName: 'div',
  events: {},
  initialize: function() {},
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.matchedFlightsView);
    var matchedflights = this.collection.toJSON();
    this.$el.html(template(matchedflights));
    $("#flight_viewer table .matchbox20").remove();
    $("#flight_viewer table").append(this.$el.html());
    return this;
  }
})