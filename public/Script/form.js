var nomeInput = document.getElementById("input-nome");
var telefoneInput = document.getElementById("input-telefone");
var emailInput = document.getElementById("input-email");
var assuntoInput = document.getElementById("input-assunto");
var mensagemInput = document.getElementById("input-mensagem");
var enviarBotao = document.getElementById("enviar-email");

function validarNome() {
  var valor = nomeInput.value.trim();
  if (valor.length < 3) {
    nomeInput.classList.add("invalido");
    nomeInput.classList.remove("valido");
  } else {
    nomeInput.classList.remove("invalido");
    nomeInput.classList.add("valido");
  }
}

function validarTelefone() {
  var valor = telefoneInput.value.trim();
  var regex = /^(\d{2})?\s*(\d{4,5})\s*\-?\s*(\d{4})$/;
  if (!regex.test(valor)) {
    telefoneInput.classList.add("invalido");
    telefoneInput.classList.remove("valido");
  } else {
    telefoneInput.classList.remove("invalido");
    telefoneInput.classList.add("valido");
  }
}

function validarEmail() {
  var valor = emailInput.value.trim();
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(valor)) {
    emailInput.classList.add("invalido");
    emailInput.classList.remove("valido");
  } else {
    emailInput.classList.remove("invalido");
    emailInput.classList.add("valido");
  }
}

function validarAssunto() {
  var valor = assuntoInput.value.trim();
  if (valor.length < 5) {
    assuntoInput.classList.add("invalido");
    assuntoInput.classList.remove("valido");
  } else {
    assuntoInput.classList.remove("invalido");
    assuntoInput.classList.add("valido");
  }
}

function validarMensagem() {
  var valor = mensagemInput.value.trim();
  if (valor.length < 10) {
    mensagemInput.classList.add("invalido");
    mensagemInput.classList.remove("valido");
  } else {
    mensagemInput.classList.remove("invalido");
    mensagemInput.classList.add("valido");
  }
}

function validarFormulario() {
  var valido = true;
  validarNome();
  validarTelefone();
  validarEmail();
  validarAssunto();
  validarMensagem();

  // Verifica se algum campo de entrada é inválido
  var camposInvalidos = document.querySelectorAll(".invalido");
  if (camposInvalidos.length > 0) {
    valido = false;
    console.log(valido);
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
    sendEmail();
  };

});

/*
//Telefone Formatação
function formatarTelefone(telefone) {
    var regex = /^(\d{2})(\d{5})(\d{4})$/;
    return telefone.replace(regex, "($1) $2-$3");
}
  
var telefoneInput = document.getElementById("input-telefone");
  
telefoneInput.addEventListener("input", function(event) {
    var input = event.target;
    var valor = input.value;
  
    // Remove todos os caracteres que não são números
    valor = valor.replace(/\D/g, "");
  
    // Formata o número de telefone
    valor = formatarTelefone(valor);
  
    // Define o valor formatado de volta no campo de entrada de telefone
    input.value = valor;
});
  
*/


function loadConfig() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../../Config/config.php", true);
    xhr.onload = function () {
      if (this.status === 200) {
        const config = JSON.parse(this.responseText);
        // Usar as informações de configuração obtidas
        sendEmail(config);
      }
    };
    xhr.send();
}
  
function sendEmail(config) {
    // Obter informações do formulário
    const name = document.getElementById("input-nome").value;
    const email = document.getElementById("input-email").value;
    const message = document.getElementById("input-mensagem").value;
    const assunto = document.getElementById("input-assunto").value;
    const telefone = document.getElementById("input-telefone").value;

    // Construir mensagem de e-mail
    const subject = `Nova mensagem de ${name} - ${assunto}`;
    const body = `Nome: ${name}\nE-mail: ${email}\n \nMensagem:\n${message}`;

    // Enviar e-mail usando o serviço de e-mail
    Email.send({
        Host: config.host,
        Username: config.username,
        Password: config.password,
        To: config.to,
        From: config.from,
        Subject: subject,
        Body: body,
    }).then((message) => alert("E-mail enviado com sucesso!"));
}

// Chamar a função loadConfig() para obter as informações de configuração e enviar o e-mail
loadConfig();

