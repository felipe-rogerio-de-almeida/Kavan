//Serviços CTA
const cta_servicos = document.getElementById("cta-servicos");

cta_servicos.addEventListener("click", () => {
    window.open(window.open("https://whatsa.me/5571996730632/?t=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade"))
});      

//Mensagens CTA

const cta_mensagens = document.getElementById("cta-mensagem");

cta_mensagens.addEventListener("click", () => {
    window.open("https://whatsa.me/5571996730632/?t=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20Contabilidade")
});


// Função Redes Sociais
function setSocialMediaIconEvents(icon, hoverImg, defaultImg, linkUrl) {
  icon.addEventListener('mouseover', () => {
    icon.src = hoverImg;
  });

  icon.addEventListener('mouseout', () => {
    icon.src = defaultImg;
  });

  icon.addEventListener('click', () => {
    window.open(linkUrl, '_blank');
  });
}

// LinkedIn
const linkedin = document.getElementById('linkedin');
setSocialMediaIconEvents(linkedin, "./Assets/redes-sociais/LinkedIn_hover.png", "./Assets/redes-sociais/LinkedIn.png", "https://www.linkedin.com/company/kavan-contabilidade");

// Instagram
const instagram = document.getElementById('instagram');
setSocialMediaIconEvents(instagram, "./Assets/redes-sociais/Instagram_hover.png", "./Assets/redes-sociais/Instagram.png", "https://www.instagram.com/kavan.contabilidade/");

// Facebook
const facebook = document.getElementById('facebook');
setSocialMediaIconEvents(facebook, "./Assets/redes-sociais/Facebook_hover.png", "./Assets/redes-sociais/Facebook.png", "https://www.facebook.com/KavanContabilidade");

// Email
const email = document.getElementById('email');
setSocialMediaIconEvents(email, "./Assets/redes-sociais/Email_hover.png", "./Assets/redes-sociais/Email.png", "mailto:kavan@kavan.com.br");

// whatsapp
const whatspp = document.getElementById('whatsapp');
setSocialMediaIconEvents(whatsapp, "./Assets/redes-sociais/Whatsapp_hover.png", "./Assets/redes-sociais/Whatsapp.png", "https://whatsa.me/5571996730632/?t=Ol%C3%A1,%20estou%20interessado%20em%20um%20servi%C3%A7o%20de%20contabilidade!");

// Scroll Animation
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  }
);


