//script para animaciones
new WOW().init();

//Funcion del menu responsive
$("#iconomenu").click(function () {
  $(".contenedor_menu").slideToggle();
  // Animation complete.
});

//Función para el desplazamiento de los vinculos.
$(".btn_ancla").click(function () {
  var ancla = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(ancla).offset().top,
    },
    1000
  );
  $("nav ul").toggleClass("abrirmenu");
});

//Funciones de Javascript Para hacer el Slide_Fotos
$(function () {
  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $(".events").append("<li>before event fired.</li>");
    },
    after: function () {
      $(".events").append("<li>after event fired.</li>");
    },
  });
});

//Funcion del carrousel
$(document).ready(function () {
  $("#slider1").tinycarousel();
});

//FUNCION DEL MODAL
// var fondomodal = document.getElementById("modal");
// var btn = document.getElementById("Btn");
// var cerrar = document.getElementById("cerrarbtn");

/*  function tiempo() {
  fondomodal.style.display = "block";
}
setTimeout(tiempo, 5000); */
// btn.onclick = function () {
//   fondomodal.style.display = "block";
// };
// cerrar.onclick = function () {
//   fondomodal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == fondomodal) {
//     fondomodal.style.display = "none";
//   }
// };

//FUNCION DEL ACORDEON
//Acordeon 2
$(".acordeon_titulo").click(function () {
  var t = $(this);
  var icon = t.children("#iconomas");
  var tp = t.next();
  tp.slideToggle();
  icon.toggleClass("fa-plus-square fa-minus-square");
});

//FUNCION DE LA FLECHA SUBIR
$(document).ready(function () {
  $("#arriba").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});
