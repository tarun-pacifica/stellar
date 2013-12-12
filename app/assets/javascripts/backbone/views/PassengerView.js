var stellarApp = stellarApp || {};

stellarApp.PassengerView = Backbone.View.extend({
  el: '#main',
  events: {
    "click #passenger_submit" : "createPassenger"
  },
  initialize: function() {
    this.$el.off('click #passenger_submit');
    this.render();
    this.listenTo(stellarApp.passengers, 'add', this.render);
  },
  render: function() {
    console.log('passengers being rendered')
    var template = Handlebars.compile(stellarApp.templates.passengercreatorView);
    var model = this.model.toJSON();
    model.passengers = stellarApp.passengers.toJSON();
    this.$el.html(template(model));
  },
  createPassenger: function (e) {
    e.preventDefault();
    var passenger = new stellarApp.Passenger();
    passenger.set('name', $('#passenger_name').val());
    passenger.set('contact_number', $('#contact_number').val());
    passenger.set('nationality',$('#nationality').val());
    passenger.set('meal_pref',$('#meal_pref').val());
    passenger.save().done(function(){
      stellarApp.passengers.fetch();
      console.log('stellarApp.passengers');
    })
  }
})