//patron módulo  FUNCIÓN ANÓNIMA AUTO INVOCADA, permite que no se pueda llamar al objeto dentro de la misma ni manipularlos en cosola
(()=>{
    "use strict"

//creando el mazo
let mazo=[];

const tipos=["C", "D", "H", "S"], 
      especiales=["A", "J", "Q", "K"];

let puntosJugadores=[];

//referencias html
const btnPedirCarta= document.querySelector ("#btnPedirCarta"), 
      btnDetener= document.querySelector("#btnDetener"), 
      btnNuevoJuego= document.querySelector("#btnNuevoJuego"); 

const divCartasJugadores=document.querySelectorAll("divCartas"),
      puntosHTML= document.querySelectorAll("small");

//función que inicia el juego
const iniciarJuego=(numeroJugadores=2)=>{
    mazo= crearMazo();
    for(let i=0; i<numeroJugadores; i++){
        puntosJugadores.push(0);
    }
}

//creando el nuevo mazo
const crearMazo= ()=>{
    mazo=[];
    
    for(let i=2; i<=10; i++){
        for (let tipo of tipos){
            mazo.push(i+tipo);
        }        
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            mazo.push(esp+tipo);  
        }
    }
    return _.shuffle(mazo); //librería underscore: _.shuffle devuelve el arreglo desordenado
}

//pidiento una carta de la baraja
const pedirCarta=()=>{

    if(mazo.length===0){
       throw "No hay más cartas en el mazo"
    }
    return mazo.pop(); //para remover la última carta del mazo
}

//asignando valores a las cartas
const valorCarta =(carta)=>{
        const valor= carta.substring(0,carta.length -1);
        return(isNaN(valor))?(valor==="A") ? 11:10 : valor*1;
}
// 0= primero jugador, últim es computadora
const acumularPuntos=(carta, turno)=>{
    puntosJugadores[turno]= puntosJugadores[turno]+valorCarta(carta);
    puntosHTML[turno].innerText= puntosJugadores[turno];
    return puntosJugadores[turno];
}

//Función para crear una carta
const crearCarta=(carta, turno)=>{

    const imgCarta=document.createElement("img");
        imgCarta.src=`assets/cartas/${carta}.png`;// `${}` agregar código JS a la imagen
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
}

//Turno computadora
const turnoComputadora=(puntosMinimos)=>{
    do{
        const carta= pedirCarta();
        acumularPuntos(carta,puntosJugadores.length -1);
        crearCarta(carta,puntosJugadores.length -1);
        
        /*const imgCarta=document.createElement("img");
        imgCarta.src=`assets/cartas/${carta}.png`;// `${}` agregar código JS a la imagen
        imgCarta.classList.add("carta");
        divCartasComputadora.append(imgCarta);*/
     
        if(puntosMinimos>21){
            break;
        }
    } while((puntosComputadora < puntosMinimos) && puntosMinimos <= 21 );

    setTimeout(()=>{ //if se evalua y ejecuta cuando termina el ciclo
        if(puntosComputadora===puntosMinimos){
            alert("Nadie gana =(");
        } else if(puntosMinimos>21){
            alert("Computadora gana =(");
        } else if(puntosComputadora>21){
            alert("Ganaste =D");
        } else{
            alert("Computadora gana =(");
        }
    }, 200);
}
//eventos click
btnPedirCarta.addEventListener("click", ()=>{ //al hacer click en el boón, se realiza la acción dentro de la función
    const carta= pedirCarta();
    const puntosJugador= acumularPuntos(carta, 0);
    crearCarta(carta,0);

   if(puntosJugador>21){
        console.warn("Perdiste =(");
        btnPedirCarta.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador);

   } else if(puntosJugador ===21){
        console.warn("21 =D");
        btnPedirCarta.disabled=true;
        btnDetener.disabled=true;
        turnoComputadora(puntosJugador);
   }
});

btnDetener.addEventListener("click",()=>{
    btnPedirCarta.disabled=true;
    btnDetener.disabled=true;

    turnoComputadora(puntosJugador);
});

btnNuevoJuego.addEventListener("click", ()=>{
   console.clear();
    iniciarJuego();
   // mazo=[];
    //mazo=crearMazo();

    //puntosJugador=0;
    //puntosComputadora=0;

    //puntosHTML[0].innerText=0;
    //puntosHTML[1].innerText=0;

    //divCartasJugador.innerText="";
    //divCartasComputadora.innerText="";

    //btnPedirCarta.disabled=false;
    //btnDetener.disabled=false;  
});  
})();










//otra forma de crear el mazo 
    /*console.log(mazo); 
    mazo= mazo.sort(()=> 0.5 - Math.random());
    console.log(mazo);*/


//Fforma larga de asignar valor
     /* const valor= carta.substring(0,carta.length -1);

    if(isNaN(valor)){ //isNaN evalua si valor es un número o no
        puntos=(valor==="A")?11:10;
    }else{
        puntos=valor*1; //*1 para transformar valor en número
    }
    console.log({valor});
    console.log(puntos);*/