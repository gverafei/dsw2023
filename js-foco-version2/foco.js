// Se ejecuta al cargar la página completa
window.addEventListener('load', function () {
    // Llamada a la función foco()
    // Observe como puede estar la declaración abajo de la llamada.
    foco();
});

function foco() {
    // Agrego los elementos del foco
    const focoContenedor = document.createElement("div");
    focoContenedor.classList.add("foco-contenedor");

    // focoContenedor.append(document.createElement("div").classList.add("cable"));
    // focoContenedor.append(document.createElement("div").classList.add("cable-conexion"));
    // focoContenedor.append(document.createElement("div").classList.add("socket-arriba"));
    // focoContenedor.append(document.createElement("div").classList.add("socket-abajo"));
    // focoContenedor.append(document.createElement("div").classList.add("socket-fondo"));
    // focoContenedor.append(document.createElement("div").classList.add("foco-arriba"));
    // focoContenedor.append(document.createElement("div").classList.add("foco-abajo"));

    // document.body.appendChild(focoContenedor);

    let switchPrendido = false;
    const btn = document.querySelector(".switch");
    const focoArriba = document.querySelector(".foco-arriba");
    const focoAbajo = document.querySelector(".foco-abajo");

    btn.addEventListener("click", function() {
        if( switchPrendido ){
            btn.classList.remove("on");
            focoArriba.classList.remove("focoOn");
            focoAbajo.classList.remove("focoOn");
        }else{
            btn.classList.add("on");
            focoArriba.classList.add("focoOn");
            focoAbajo.classList.add("focoOn");
        }
        switchPrendido = !switchPrendido;

    });
}