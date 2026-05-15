let  p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelectorAll("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false
}

let m = {
    inicio: function() 
    {
        for(let i = 0; i < p.teclas.length; i++)
        {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }

    
    },
    oprimirTecla: function()
    {
        p.accion = tecla.target.getAttribute("class");
        m.calculadora(p.accion);

    },
    calculadora: function(accion)
    {
        switch(accion)
        {
            case "numero":
                console.log("numero");
            break;

            case "signo":
                console.log("simbolo");
            break;

            case "decimal":
                console.log("decimal");
            break;

            case "igual":
                console.log("igual");
            break;
        }

    }
}