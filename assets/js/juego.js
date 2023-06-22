//creando el mazo

let mazo=[];
const tipos=["C", "D", "H", "S"]; 
      especiales=["A", "J", "Q", "K"];

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
    console.log(mazo);
    return mazo
}
crearMazo();

//pidiento una carta de la baraja

const pedirCarta=()=>{

    if(mazo.length===0){
        throw "No hay más cartas en el mazo"
    }
    const carta= mazo.pop(); //para remover la última carta del mazo

    console.log(mazo);
    console.log(carta);
    return carta
}
pedirCarta();

//asignando valores a las cartas
const valorCarta =(carta)=>{
        const valor= carta.substring(0,carta.length -1);
        return(isNaN(valor))?(valor==="A") ? 11:10 : valor*1;
  
}
const valor= valorCarta(pedirCarta());
console.log({valor});
 //sigue Introducción al DOM y su manipulación

















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