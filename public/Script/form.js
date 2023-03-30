const nomeInput = document.getElementById("input-nome");
const telefoneInput = document.getElementById("input-telefone");
const emailInput = document.getElementById("input-email");
const assuntoInput = document.getElementById("input-assunto");
const mensagemInput = document.getElementById("input-mensagem");
const enviarBotao = document.getElementById("enviar-email");

function validarNome() {
  const valor = nomeInput.value.trim();
  if (valor.length < 3) {
    nomeInput.classList.add("invalido");
    nomeInput.classList.remove("valido");
  } else {
    nomeInput.classList.remove("invalido");
    nomeInput.classList.add("valido");
  }
}

function validarTelefone() {
  const valor = telefoneInput.value.replace(/\D/g, '');
  const regex = /^(\d{2})\s*(\d{5})\s*\-?\s*(\d{4})$/;
  if (!regex.test(valor)) {
    telefoneInput.classList.add("invalido");
    telefoneInput.classList.remove("valido");
  } else {
    telefoneInput.classList.remove("invalido");
    telefoneInput.classList.add("valido");
  }

  telefoneInput.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}


function validarEmail() {
  const valor = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(valor)) {
    emailInput.classList.add("invalido");
    emailInput.classList.remove("valido");
  } else {
    emailInput.classList.remove("invalido");
    emailInput.classList.add("valido");
  }
}

function validarAssunto() {
  const valor = assuntoInput.value.trim();
  if (valor.length < 5) {
    assuntoInput.classList.add("invalido");
    assuntoInput.classList.remove("valido");
  } else {
    assuntoInput.classList.remove("invalido");
    assuntoInput.classList.add("valido");
  }
}

function validarMensagem() {
  const valor = mensagemInput.value.trim();
  if (valor.length < 10) {
    mensagemInput.classList.add("invalido");
    mensagemInput.classList.remove("valido");
  } else {
    mensagemInput.classList.remove("invalido");
    mensagemInput.classList.add("valido");
  }
}

function validarFormulario() {
  const valido = true;
  validarNome();
  validarTelefone();
  validarEmail();
  validarAssunto();
  validarMensagem();

  // Verifica se algum campo de entrada é inválido
  const camposInvalidos = document.querySelectorAll(".invalido");
  if (camposInvalidos.length > 0) {
    valido = false;
  }

  return valido;
}

nomeInput.addEventListener("input", validarNome);
telefoneInput.addEventListener("input", validarTelefone);
emailInput.addEventListener("input", validarEmail);
assuntoInput.addEventListener("input", validarAssunto);
mensagemInput.addEventListener("input", validarMensagem);

enviarBotao.addEventListener("click", function(event) {
  if (!validarFormulario()) {
    event.preventDefault();
    alert("Por favor, preencha todos os campos corretamente.");
  }else {
    // Chamar a função enviaremail() para enviar o e-mail
    enviaremail();
  };

});


function enviaremail(){
// Obter informações do formulário
  const name = document.getElementById("input-nome").value;
  const email = document.getElementById("input-email").value;
  const message = document.getElementById("input-mensagem").value;
  const assunto = document.getElementById("input-assunto").value;
  const telefone = document.getElementById("input-telefone").value;

  // Construir mensagem de e-mail
  const body = `Nome: ${name}\nE-mail:${email}\n${assunto}\n${telefone}\nMensagem:\n${message}`;

  fetch("https://formsubmit.co/ajax/site.kavan@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          nome: "FormSubmit",
          message: body
      })
  })
  .then(response => response.json())
  .then(() => {
    limparFormulario();
    alert("Email enviado com sucesso!");
    
  })
  .catch(error => console.log(error));
}

function limparFormulario() {
  document.getElementById("input-nome").value = "";
  document.getElementById("input-email").value = "";
  document.getElementById("input-mensagem").value = "";
  document.getElementById("input-assunto").value = "";
  document.getElementById("input-telefone").value = "";


  document.getElementById("input-nome").classList.remove("valido");
  document.getElementById("input-email").classList.remove("valido");
  document.getElementById("input-mensagem").classList.remove("valido");
  document.getElementById("input-assunto").classList.remove("valido");
  document.getElementById("input-telefone").classList.remove("valido");
  
}