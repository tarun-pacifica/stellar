var stellarApp = stellarApp || {};

var passenger;

stellarApp.PassengerView = Backbone.View.extend({
  // el: '#passenger',
  events: {
    "click #passenger_submit": "createPassenger",
    "click .passenger": "setPassenger"
  },
  initialize: function() {
    this.$el.off('click #passenger_submit');
    // this.render();
    this.listenTo(stellarApp.passengers, 'add', this.render);
  },
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.passengercreatorView);
    var model = this.model.toJSON();
    model.passengers = stellarApp.passengers.toJSON();
    this.$el.html(template(model));
    return this;
  },
  createPassenger: function(e) {
    e.preventDefault();
    var passenger = new stellarApp.Passenger();
    passenger.set('name', $('#passenger_name').val());
    passenger.set('contact_number', $('#contact_number').val());
    passenger.set('nationality', $('#nationality').val());
    passenger.set('meal_pref', $('#meal_pref').val());
    passenger.save().done(function() {
      stellarApp.passengers.fetch();
    })
  },
  setPassenger: function(e) {
    e.preventDefault;
    passenger = $(e.target).closest('tr').find('.pass_id').text();
    console.log(passenger);
  }
})