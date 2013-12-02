var stellarApp = stellarApp || {};

stellarApp.PlaneView = Backbone.View.extend({
  el: '#main',
  events: {
    "change #rows": "render",
    "change #aisles": "render"
  },
  initialize: function() {},
  render: function() {
    alert('planeView.render');
    var rowval = $('#rows').val()
    var aival = $('#aisles').val();
    var template = Handlebars.compile(stellarApp.templates.appView);
    this.$el.html(template(this.model.toJSON()));
      $('#rowval').html(rowval);
      $('#aival').html(aival);
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