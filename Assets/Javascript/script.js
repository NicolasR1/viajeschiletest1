var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function(){

    $('#enviar').click(function(){
      alert('Su mensaje ha sido enviado con exito.');
    });
  
    
    $("h2").dblclick(function(){
      $(this).css({
        color: "red",
        borderColor: "red"
      });
    })
    
    $(".card-title").click(function(){
      $(".card-text").toggle()
    })
  });