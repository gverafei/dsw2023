    // Funciones por declaración
    function menu(){
        // Pinta menu
    }
    document.body.addEventListener('load', menu);

    // Funciones anónimas
    document.body.addEventListener('load',function() {
    });

    // Funciones anónimas con Arrow
    document.body.addEventListener('load', () => {
    });

    // Funciones por expresión con Arrow
    const menu = () => { 
        // Pinta menu
    };
    document.body.addEventListener('load', menu);

    // Función autoejecutable
    (function () {
        // Pinta menu
    })();