var stellarApp = stellarApp || {}

stellarApp.Plugin = Backbone.Model.extend({
  label: function() {
    return this.get('name');
  }
});
stellarApp.PluginCollection = Backbone.Collection.extend({
  model: Plugin
})