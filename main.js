let doraSalta= document.getElementById("dora-js");
let vasijaArq= document.getElementById("vasija-js");


/*Función para que agregue y saque la clase saltar. De lo contrario hay que ir actualizando la página

Esto va a ser ejecutado solo si la clase 'saltar' no está*/

function saltar(){
  
  if(doraSalta.classList != "saltar"){
    doraSalta.classList.add("saltar");


    setTimeout(function (){
        doraSalta.classList.remove("saltar");
    }, 300);
  }
}

/*Para que salte al apretar cualquier tecla. Pero salta una vez, hay que volver a actualizar sitio*/

document.addEventListener("keydown", function (event){
    saltar();
});


/* Para ver cuando se choca la vasija. Lo hago x medio d ela posición de Dora. Como te lo da en px, lo convierto. luego para la vasija, pero su izq*/

let vive = setInterval(function(){

    //posición actual de Dora en Y
    let doraTop= parseInt(window.getComputedStyle(doraSalta).getPropertyValue("top"));

    //posición actual de la vasija en X
    let vasijaLeft= parseInt(window.getComputedStyle(vasijaArq).getPropertyValue("left"));


    //detectar el choque

    if(vasijaLeft <50 && vasijaLeft >0 && doraTop >= 145){

        //hay choque con la vasija
        alert("Game Over");
    }


},10);

