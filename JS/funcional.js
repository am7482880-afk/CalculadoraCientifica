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
            if (p.operacion.innerHTML == "0") {
                    p.operacion.innerHTML = digito;
                } else {
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
                    p.resultado = false;
                }}
            break;

        case "decimal":
            if (!p.cantdecimal) {
                p.operacion.innerHTML += digito;
                p.cantdecimal = true;
                p.resultado = false;
            }
            break;

        case "igual":
            // división por cero
            if (p.operacion.innerHTML.includes("/0")) {
                p.operacion.innerHTML = "ERROR";
                p.resultado = true;
            } else {
                p.operacion.innerHTML = eval(p.operacion.innerHTML);
                p.resultado = true;
            }
            p.cantdecimal = false;
            p.cantisimbolo = 0;
            break;
          }
          
     },
    
    borrarCalculadora: function() {
        p.operacion.innerHTML = "0";
        p.cantdecimal = false;
        p.cantisimbolo = 0;
        p.resultado = false;
    }
}

m.inicio();
document.querySelector("#borrar").addEventListener("click", m.borrarCalculadora);


//TECLADO
window.addEventListener("keydown", function(e) {
    if (e.key >= 0 && e.key <= 9) m.calcular("numero", e.key);
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") m.calcular("simbolo", e.key);
    if (e.key == "." || e.key == ",") m.calcular("decimal", ".");
    if (e.key == "Enter") m.calcular("igual", "=");
    if (e.key == "Escape" || e.key == "Backspace") m.borrarCalculadora();
});
