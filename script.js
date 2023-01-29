$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
        $('html, body').animate({ scrollTop: destino.offset().top }, 850);
    return false;
    });
  });

  const nombre = document.getElementById("name")
  const email = document.getElementById("email")
  const form = document.getElementById("form")
  const parrafo = document.getElementById("warnings")
  
  form.addEventListener("submit", e=>{
      e.preventDefault()
      let warnings = ""
      let entrar = false
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
      parrafo.innerHTML = ""
      if(nombre.value.length <3){
          warnings += `El nombre no es valido <br>`
          entrar = true
      }
      if(!regexEmail.test(email.value)){
          warnings += `El email no es valido <br>`
          entrar = true
      }
      if(entrar){
          parrafo.innerHTML = warnings
      }else{
          parrafo.innerHTML = "Enviado"
      }
  })