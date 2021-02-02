document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && documento.getElementById("telefone").value != ""){
    alert("Prontinho! você receberá as novidades por e-mail!")
  }else{
    alert("Por favor, preencha os campos Nome, E-mail e Telefone!")
  }
}
