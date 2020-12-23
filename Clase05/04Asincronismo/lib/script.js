// Add your code here
$(function(){
    $("h1").text("Hola mundo");
    $("#btnCargar")
      .button()
      .click(function(){
        $("#contenidoAsincronico").load("./contenido.txt");
      });
  
    $("#btnCargarFijo")
      .button()
      .click(function(){
        $("#contenidoAsincronico").html("<b>Hola mundo fijo</b>");
      })
  
    $("#tabs").tabs()
  })
  