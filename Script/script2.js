//Serviços CTA
var cta_servicos = document.getElementById("cta-servicos");

cta_servicos.addEventListener("click", () => {
    window.open(window.open("https://whatsa.me/5571996730632/?t=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade"))
});      

//Mensagens CTA

var cta_mensagens = document.getElementById("cta-mensagem");

cta_mensagens.addEventListener("click", () => {
    window.open("https://whatsa.me/5571996730632/?t=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade")
});


// Scroll Animation
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  }
);


