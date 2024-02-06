

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

window.onload = (cardGenerator) => {
    let generadorCartas = document.querySelector(".numeroCarta");
    let imprimirPinta = document.querySelector(".cartaTipo")
    let imprimirPintaAbajo = document.querySelector(".cartaTipoAbajo")
    let pintaAzar=random(5,1);
    let randomCard=random(14,1);
    imprimirPinta.innerHTML="♣";
    imprimirPintaAbajo.innerHTML="♣";
    generadorCartas.innerHTML = randomCard;
    if (pintaAzar==1){
        imprimirPinta.innerHTML="♦"
        imprimirPintaAbajo.innerHTML="♦";
        imprimirPinta.classList.add ("text-danger");
        imprimirPintaAbajo.classList.add("text-danger");
    }
    else if(pintaAzar==2){
        imprimirPinta.innerHTML="♥";
        imprimirPintaAbajo.innerHTML="♥";
        imprimirPinta.classList.add ("text-danger");
        imprimirPintaAbajo.classList.add("text-danger")
    }
    else if(pintaAzar==3){
        imprimirPinta.innerHTML="♠";
        imprimirPintaAbajo.innerHTML="♠";
    }
    if (randomCard == 11) {
        generadorCartas.innerHTML = "J";
    }
    else if (randomCard == 12) {
        generadorCartas.innerHTML = "Q";

    }
    else if (randomCard == 13) {
        generadorCartas.innerHTML = "K";
    }
    else if (randomCard == 1) {
        generadorCartas.innerHTML = "A";
    }

        

    


}