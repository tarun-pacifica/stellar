$(document).ready(function(){

  $('#rows').change(function(e){
      $('#rowval').html($(this).val() );
  });

  $('#aisles').change(function(e){

      $('#aival').html($(this).val() );
  });

  $('#columns').change(function(e){
      $('#colval').html($(this).val() );
  });

});
