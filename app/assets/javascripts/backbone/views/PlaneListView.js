var stellarApp = stellarApp || {};

stellarApp.PlaneListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'viewPlane'
  },
  initialize: function() {},
  render: function() {
    var template = Handlebars.compile(stellarApp.templates.planeList);
    this.$el.html(template(this.model.toJSON()));
    return this;
  },
  viewPlane: function() {
    stellarApp.router.navigate('planes/' + this.model.get('id'), true);
  }
});