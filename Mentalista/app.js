let tentativas = 10;
document.querySelector(  
  "#tentativas"
).innerText = `Tentativas restantes: ${tentativas}`;
let secretNumber = parseInt(Math.random() * 11)

function button(){
   const input = document.querySelector("input");
   if (tentativas < 1) {
        alert("Suas tentativas acabaram!")
                    setTimeout(function() {
          document.location.reload(true);
      }, 1)
   }
  else {
       
       if (
         parseInt(input.value) > 10 ||
         parseInt(input.value) <= 0 ||
         input.value == ""
       ) {
         alert("Valor inválido! Digite novamente.");
       } else {
           if (parseInt(input.value) == secretNumber) {
             document.querySelector("p").innerText = "Resposta certa, parabéns!";
             tentativas = 10;
     
             document.querySelector(
               "#tentativas"
             ).innerText = `Tentativas restantes: ${tentativas}`;
            
             document.querySelector("p").classList.add("Acertou");
             
             setTimeout(function() {
                 document.location.reload(true);
             }, 1500)
           } else if (parseInt(input.value) < secretNumber) {
             document.querySelector("p").innerText = "O número secreto é MAIOR!";
     
             tentativas -= 1;
             document.querySelector(
               "#tentativas"
             ).innerText = `Tentativas restantes: ${tentativas}`;
             document.querySelector("p").classList.add("Errou");
           } else if (parseInt(input.value) > secretNumber) {
             document.querySelector("p").innerText = "O número secreto é MENOR!";
     
             tentativas -= 1;
             document.querySelector(
               "#tentativas"
             ).innerText = `Tentativas restantes: ${tentativas}`;
             document.querySelector("p").classList.add("errou");
             }
         }
      }
}



  