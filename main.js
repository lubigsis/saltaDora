/*------------------------------------------------------------referencias---------------------*/
let doraSalta= document.getElementById("dora-js");
let vasijaArq= document.getElementById("vasija-js");
let cactusCata= document.getElementById("cactus-js");


/*Función para que agregue y saque la clase saltar c/300ms. De lo contrario hay que ir actualizando la página
Esto va a ser ejecutado solo si la clase 'saltar' no está*/
function saltar(){  
  if(doraSalta.classList != "saltar"){
    doraSalta.classList.add("saltar");
  //-------------------------------------------------tiempo----------------
    setTimeout(function (){
        doraSalta.classList.remove("saltar");
    }, 300);
  }
}

/*Para que salte al apretar cualquier tecla. Pero salta una vez, hay que volver a actualizar sitio*/

document.addEventListener("keydown", function (event){
    saltar();
});


//-----------------------------------------------------------------choque con cactus

let vive2 = setInterval(function(){

  //posición actual de Dora en Y
  let doraTop2= parseInt(window.getComputedStyle(doraSalta).getPropertyValue("top"));
  // posición actual cactus en X
  let cactusLeft = parseInt(window.getComputedStyle(cactusCata).getPropertyValue("left"));

  //detectar el choque
  if(cactusLeft < 50 && cactusLeft > 0 && doraTop2 >= 140){

      //hay choque con el cactus
      alert("Perdiste");
  }
},10);

//--------------------------------------------------------