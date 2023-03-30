
//Flipcard 1
const FP1 = document.querySelector('.FP1');

FP1.addEventListener('mouseover', () => {
    FP1.classList.add('flip');
});

FP1.addEventListener('mouseout', () => {
    FP1.classList.remove('flip');
});

//Flipcard 2
const FP2 = document.querySelector('.FP2');

FP2.addEventListener('mouseover', () => {
    FP2.classList.add('flip');
});

FP2.addEventListener('mouseout', () => {
    FP2.classList.remove('flip');
});

//Flipcard 3
const FP3 = document.querySelector('.FP3');

FP3.addEventListener('mouseover', () => {
    FP3.classList.add('flip');
});

FP3.addEventListener('mouseout', () => {
    FP3.classList.remove('flip');
});

//Flipcard 4
const FP4 = document.querySelector('.FP4');

FP4.addEventListener('mouseover', () => {
    FP4.classList.add('flip');
});

FP4.addEventListener('mouseout', () => {
    FP4.classList.remove('flip');
});

//Flipcard 5
const FP5 = document.querySelector('.FP5');

FP5.addEventListener('mouseover', () => {
    FP5.classList.add('flip');
});

FP5.addEventListener('mouseout', () => {
    FP5.classList.remove('flip');
});

//Flipcard 6
const FP6 = document.querySelector('.FP6');

FP6.addEventListener('mouseover', () => {
    FP6.classList.add('flip');
});

FP6.addEventListener('mouseout', () => {
    FP6.classList.remove('flip');
});

//Flipcard 7
const FP7 = document.querySelector('.FP7');

FP7.addEventListener('mouseover', () => {
    FP7.classList.add('flip');
});

FP7.addEventListener('mouseout', () => {
    FP7.classList.remove('flip');
});

//Flipcard 8
const FP8 = document.querySelector('.FP8');

FP8.addEventListener('mouseover', () => {
    FP8.classList.add('flip');
});

FP8.addEventListener('mouseout', () => {
    FP8.classList.remove('flip');
});

//Flipcard 9
const FP9 = document.querySelector('.FP9');

FP9.addEventListener('mouseover', () => {
    FP9.classList.add('flip');
});

FP9.addEventListener('mouseout', () => {
    FP9.classList.remove('flip');
});

//Flipcard 10
const FP10 = document.querySelector('.FP10');

FP10.addEventListener('mouseover', () => {
    FP10.classList.add('flip');
});

FP10.addEventListener('mouseout', () => {
    FP10.classList.remove('flip');
});

//Flipcard 11
const FP11 = document.querySelector('.FP11');

FP11.addEventListener('mouseover', () => {
    FP11.classList.add('flip');
});

FP11.addEventListener('mouseout', () => {
    FP11.classList.remove('flip');
});

//Flipcard 12
const FP12 = document.querySelector('.FP12');

FP12.addEventListener('mouseover', () => {
    FP12.classList.add('flip');
});

FP12.addEventListener('mouseout', () => {
    FP12.classList.remove('flip');
});

//Flipcard 13
const FP13 = document.querySelector('.FP13');

FP13.addEventListener('mouseover', () => {
    FP13.classList.add('flip');
});

FP13.addEventListener('mouseout', () => {
    FP13.classList.remove('flip');
});

//Flipcard 14
const FP14 = document.querySelector('.FP14');

FP14.addEventListener('mouseover', () => {
    FP14.classList.add('flip');
});

FP14.addEventListener('mouseout', () => {
    FP14.classList.remove('flip');
});

//Flipcard 15
const FP15 = document.querySelector('.FP15');

FP15.addEventListener('mouseover', () => {
    FP15.classList.add('flip');
});

FP15.addEventListener('mouseout', () => {
    FP15.classList.remove('flip');
});


//Redes Sociais Hover

// LinkedIn
const linkedin = document.getElementById('linkedin');

linkedin.addEventListener('mouseover',() => {
    linkedin.src = "./Assets/LinkedIn_hover.png";
});

linkedin.addEventListener('mouseout',() => {
    linkedin.src = "./Assets/LinkedIn.png";
});

linkedin.addEventListener('click',() => {
    window.open('https://www.linkedin.com/company/kavan-contabilidade','_blank' );
});

//Instagram
const instagram = document.getElementById('instagram');

instagram.addEventListener('mouseover',() => {
    instagram.src = "./Assets/Instagram_hover.png";
});

instagram.addEventListener('mouseout',() => {
    instagram.src = "./Assets/Instagram.png";
});

instagram.addEventListener('click',() => {
    window.open('https://www.instagram.com/kavan.contabilidade/','_blank' );
});

//Facebook
const facebook = document.getElementById('facebook');

facebook.addEventListener('mouseover',() => {
    facebook.src = "./Assets/Facebook_hover.png";
});

facebook.addEventListener('mouseout',() => {
    facebook.src = "./Assets/Facebook.png";
});

facebook.addEventListener('click',() => {
    window.open('','_blank' );
});


//Email
const email = document.getElementById('email');

email.addEventListener('mouseover',() => {
    email.src = "./Assets/Email_hover.png";
});

email.addEventListener('mouseout',() => {
    email.src = "./Assets/Email.png";
});

email.addEventListener('click',() => {
    window.open('mailto:kavan@kavan.com.br','_blank' );
});


//Serviços CTA
var cta_servicos = document.getElementById("cta-servicos");

cta_servicos.addEventListener("click", () => {
    window.open("./instalinks.html","_self")
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


