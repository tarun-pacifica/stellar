var stellarApp = stellarApp || {};

stellarApp.PlaneView = Backbone.View.extend({
  el: '#main',
  events: {
    "change #rows": "seat_render",
    "change #aisles": "seat_render",
    "click #create": "createPlane"
  },
  initialize: function() {},
  render: function () {
    var template = Handlebars.compile(stellarApp.templates.appView);
    this.$el.html(template(this.model.toJSON()));
  },
  createPlane: function (e) {
    e.preventDefault();
    var plane = new stellarApp.Plane();
    plane.set('rows', $('#rows').val());
    plane.set('aisles', $('#aisles').val());
    plane.set('name', $('#name').val());
    plane.save();
  },
  seat_render: function() {
    // alert('planeView.render');
    var rowval = $('#rows').val()
    var aival = $('#aisles').val();
    $('#rowval').html(rowval);
    $('#aival').html(aival);

    var templateHTML;

    switch(aival) {
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

    this.$el.find('#seating','#name').empty();
    var template = Handlebars.compile(templateHTML);
    for (var i = 0; i < parseInt(rowval); i++) {
      this.$el.find('#seating').append(template({row: i+1}))
    }
/*
    var template = Handlebars.compile(stellarApp.templates.appView);
    this.$el.html(template(this.model.toJSON()));
      $('#rows').val(rowval);
      $('#aisles').val(aival);
 */
  },
  add_plane: function(event) {
    event.preventDefault();
    var row = this.$el.find('#rows').val();
    console.log('row:'+row);
    var aisle = this.$el.find('#aisles').val();
    var plane = new stellarApp.Plane({
      plane_id: plane_id,
      aisle: aisle,
      row: row
    });
    plane.save();
    var view = this;
    this.model.fetch().done(function() {
      alert('fetching');
      view.render();
    });
    return false;
  }
});