var stellarApp = stellarApp || {};

stellarApp.AppView = Backbone.View.extend({
  el: $('#main'),
  initialize: function () {
    this.$el.html(stellarApp.templates.appView);
    this.list = $('#planes');
  },
  render: function () {
    this.collection.each(function (plane){
      var view = new planeApp.PlaneListView({model:plane});
      this.list.append( view.render().el);
    }, this);
  }
});