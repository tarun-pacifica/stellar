var stellarApp = stellarApp || {};

$(document).ready(function(){
  stellarApp.templates = {
    appView: $('#plane_creator').html(),
    singleaisleView: $('#single_aisle').html(),
    dualaisleView: $('#dual_aisle').html(),
    tripleaisleView: $('#triple_aisle').html()
  };
  stellarApp.planes = new stellarApp.Planes();
  // stellarApp.planes.fetch().done(function(){
    // alert('fetched');
  // })
  var router = new stellarApp.Router();
  Backbone.history.start();
});