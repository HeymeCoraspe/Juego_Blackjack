//creando el mazo
let mazo=[];
const tipos=["C", "D", "H", "S"]; especiales=["A", "J", "Q", "K"];
let puntosJugador=0; 
let puntosComputadora=0;


//referencias html
 const btnPedirCarta= document.querySelector ("#btnPedirCarta");
 const btnDetener= document.querySelector("#btnDetener"); 
 const btnNuevoJuego= document.querySelector("#btnNuevoJuego");

 const puntosHTML= document.querySelectorAll("small"); 

 const divCartasJugador=document.querySelector("#jugador-cartas");
 const divCartasComputadora= document.querySelector("#computadora-cartas");


const crearMazo= ()=>{
    for(let i=2; i<=10; i++){
        for (let tipo of tipos){
            mazo.push(i+tipo);
        }        
    }
    for(let tipo of tipos){
        for(esp of especiales){
            mazo.push(esp+tipo);  
        }
    }
    mazo= _.shuffle(mazo); //librería underscore: _.shuffle devuelve el arreglo desordenado
    return mazo;
}
crearMazo();

//pidiento una carta de la baraja

const pedirCarta=()=>{

    if(mazo.length===0){
        throw "No hay más cartas en el mazo"
    }
    const carta= mazo.pop(); //para remover la última carta del mazo
    return carta;
}
pedirCarta();
//asignando valores a las cartas
const valorCarta =(carta)=>{
        const valor= carta.substring(0,carta.length -1);
        return(isNaN(valor))?(valor==="A") ? 11:10 : valor*1;
}
//Turno computadora
const turnoComputadora=(puntosMinimos)=>{
    do{
        const carta= pedirCarta();

        puntosComputadora= puntosComputadora+ valorCarta(carta);
        puntosHTML[1].innerText=puntosComputadora;

        const imgCarta=document.createElement("img");
        imgCarta.src=`assets/cartas/${carta}.png`;// `${}` agregar código JS a la imagen
        imgCarta.classList.add("carta");
        divCartasComputadora.append(imgCarta);
        console.log(carta);

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
    }, 30);
}
//eventos click
btnPedirCarta.addEventListener("click", ()=>{ //al hacer click en el boón, se realiza la acción dentro de la función
   const carta= pedirCarta();

   puntosJugador= puntosJugador+ valorCarta(carta);
   puntosHTML[0].innerText=puntosJugador;

   const imgCarta=document.createElement("img");
   imgCarta.src=`assets/cartas/${carta}.png`;// `${}` agregar código JS a la imagen
   imgCarta.classList.add("carta");
   divCartasJugador.append(imgCarta);
   console.log(carta);

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
})

btnNuevoJuego.addEventListener("click", ()=>{
     console.clear();
     
    mazo=[];
    mazo=crearMazo();

    puntosJugador=0;
    puntosComputadora=0;

    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;

    divCartasJugador.innerText="";
    divCartasComputadora.innerText="";

    btnPedirCarta.disabled=false;
    btnDetener.disabled=false;
    console.log(mazo);
})

// empieza sección 6














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