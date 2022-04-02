var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {

    $('#enviar').click(function () {
        alert('Su mensaje ha sido enviado con exito.');
    });


    $(".card-title").click(function () {
        $(".card-text").toggle()
    })
});