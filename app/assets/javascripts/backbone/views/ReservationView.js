var stellarApp = stellarApp || {};

stellarApp.ReservationView = Backbone.View.extend({
  el: '#reservation',
  events: {
    "click #flight_query_submit": "flight_query"
  },
  initialize: function() {
    this.render();
    this.$el.off('click #create');
  },
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.reservationView);
    var model = this.model.toJSON();
    model.reservations = stellarApp.reservations.toJSON();
    $('#main').html(template(model));
    return this;
  },
  flight_query: function(e) {
    // e.preventDefault();
    alert('alert');
    // console.log('flight_query');
    // var flight_list = stellarApp.Flight();
    //   flight_list.get("$('#origin_name').val()");
    //   flight_list.get("$('#destination_name').val()");
    }
})