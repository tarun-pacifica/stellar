var stellarApp = stellarApp || {};

stellarApp.PlaneView = Backbone.View.extend({
  events: {
    "change #rows": "seat_render",
    "change #aisles": "seat_render",
    "click #create": "createPlane",
    "change #plane_name": "seat_render"
  },
  initialize: function() {
    this.$el.off('click #create'); // prevents create method firing multiple times, accidentally creating multiple db entries
    this.listenTo(stellarApp.planes, 'add', this.render);
  },
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.appView);
    var model = this.model.toJSON();
    model.planes = stellarApp.planes.toJSON();
    //debugger;
    this.$el.html(template(model));
    return this; // escapes the view from memory, prevents memory leaking
  },
  createPlane: function(e) {
    e.preventDefault();
    var plane = new stellarApp.Plane();
    plane.set('rows', $('#rows').val());
    plane.set('aisles', $('#aisles').val());
    plane.set('name', $('#name').val());
    plane.save().done(function() {
      stellarApp.planes.fetch();
    });
  },
  seat_render: function() {
    var rowval = $('#rows').val()
    var aival = $('#aisles').val();
    var plane_name = $('#name').val();
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
    this.$el.find('.seating', '#name').empty();
    var template = Handlebars.compile(templateHTML);
    for (var i = 0; i < parseInt(rowval); i++) {
      this.$el.find('.seating').append(template({
        row: i + 1
      }))
    }
  }
});