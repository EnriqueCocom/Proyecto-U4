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

$(function() {
  $(".rslides").responsiveSlides();
});

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
var mostrarmodal = document.getElementById("modal") ;
var cerrarmodal = document.getElementById("cerrarbtn");
var btnejecutar = document.getElementById("Btn");


btnejecutar.onclick = function(){
  mostrarmodal.style.display = "block";
}

cerrarmodal.onclick = function(){
  mostrarmodal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == mostrarmodal) {
    mostrarmodal.style.display = "none";
  }
};


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
