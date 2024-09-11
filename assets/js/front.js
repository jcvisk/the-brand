$(window).scroll(function(){
    if ($("#navbar").offset().top > 56) {
        $("#navbar").removeClass("bg-transparent");
        $("#navbar").addClass("navbar-dark");
    }else{
        $("#navbar").removeClass("navbar-dark");
        $("#navbar").addClass("bg-transparent");
    }
});

/* Video Modal Control */
$(".js-video-button").modalVideo({
    youtube: {
        controls: 0,
        nocookie: true
    }
});

/* Inicializando WOW */
new WOW().init();

/* FECHA DINAMICA PARA EL COPYRIGHT */
copyright = new Date();
update = copyright.getFullYear();
document.getElementById('year').innerHTML = update;

/* JS PARA QUE LOS METATAGAS SEAN DIANMICOS*/
//Asignando dominio a metaTags
var dominio = $(location).attr('hostname');
$('#metatagUrlFacebook').attr('content', dominio)
$('#metatagUrlTwitter').attr('content', dominio)
//Asignando direccion de favicon a metaTags
dominio+="/favicon.png"
$('#metatagFaviconFacebook').attr('content', dominio)
$('#metatagFaviconTwitter').attr('content', dominio)