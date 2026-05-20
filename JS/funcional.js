//crear las propiedades del objeto

let p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operacion: document.querySelector("#operaciones"),
    cantisimbolo: 0,
    cantdecimal: false,
    resultado: false
}

//creas los metodos

let m = {
    inicio: function () {
               for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirtecla);
        }         
    
    }, oprimirtecla: function (tecla) {
        p.accion = tecla.currentTarget.getAttribute("class");
         p.digito = tecla.currentTarget.innerHTML; 
        m.calcular(p.accion, p.digito);



    }, calcular: function(accion, digito) {
        switch (accion) {
        case "numero":
            p.cantisimbolo = 0;
            //console.log(" numero");
            if (p.operacion.innerHTML == "0") {
                    p.operacion.innerHTML = digito;
                } else {
                   // p.operacion.innerHTML += digito;
                   if(p.resultado){
                    p.resultado = false;
                    p.operacion.innerHTML = digito;
                   }else{
                    p.operacion.innerHTML += digito;
                   }
                }         
        break;


        case "simbolo":
            p.cantisimbolo++;
            if (p.cantisimbolo == 1) {
                if (p.operacion.innerHTML == "0") {
                    p.operacion.innerHTML = "0" + digito;
                } else {
                    p.operacion.innerHTML += digito;
                    p.cantdecimal = false;
                }}
            //console.log("simbolo");
            break;


        case "decimal":
            if(!p.operacion){
            //console.log("decimal");
             p.operacion.innerHTML += digito;
             p.cantdecimal = true
            }
            break;


        case "igual":
            console.log("igual");
                p.operacion.innerHTML = eval(p.operacion.innerHTML);
                p.resultado = true;
            break;
          }
     },

    
    borrarCalculadora: function() {
        p.operacion.innerHTML = "0";
    }
}



m.inicio();
document.querySelector("#borrar").addEventListener("click", m.borrarCalculadora);