var stellarApp = stellarApp || {};

$(document).ready(function(){
  stellarApp.templates = {
    appView: $('#plane_creator').html(),
    planeView1: $('#single_aisle').html(),
    planeView2: $('#dual_aisle').html(),
    planeView3: $('#triple_aisle').html()
  };
  stellarApp.planes = new stellarApp.Planes();
  // stellarApp.planes.fetch().done(function(){
    // alert('fetched');
  // })
  var router = new stellarApp.Router();
  Backbone.history.start();
});