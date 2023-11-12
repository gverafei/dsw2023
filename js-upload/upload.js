const wrapper = document.querySelector(".wrapper");
const form = document.querySelector("form");
const fileInput = form.querySelector(".file-input");
const progresoArea = document.querySelector(".progreso-area");
const subidoArea = document.querySelector(".subido-area");

// Requerimos el evento dragover para que no intente abrir el archivo en el navegador
form.addEventListener("dragover", e => {
    e.preventDefault();
});

// evento al soltar un archivo en el formulario
form.addEventListener("drop", e => {
    e.preventDefault();
    
    // Obtener file y [0] significa que si el usuario ha seleccionado
    // multiples archivos, entonces obten solo el primero
    fileInput.files = e.dataTransfer.files;
    let file = fileInput.files[0];
    preUploadFile(file);
});

// Evento click del formulario
form.addEventListener("click", () => {
    fileInput.click();
});

// Observa como obtenemos el e.target pero lo encerramos en llaves
// para solo obtener "target" y no todo el "e"
fileInput.addEventListener("change", ({target}) => {
    // Obtener file y [0] significa que si el usuario ha seleccionado
    // multiples archivos, entonces obten solo el primero
    let file = target.files[0];
    preUploadFile(file);
});

function preUploadFile(file) {
    // Si seleccionó un archivo
    if(file) {
        // Obtener el nombre del archivo
        let filename = file.name;
        if(filename.length >= 12){
            let splitName = filename.split('.');
            // Si el nombre es mayor a 12 se corta y se agregan ...
            filename = splitName[0].substring(0,12) + "... ." + splitName[1];
        }
        // Llamada a uploadFile pasando el nombre como argumento
        uploadFile(filename);
    }
}

function uploadFile(name) {
    // Objeto xml (AJAX)
    let xhr = new XMLHttpRequest();
    // Envia una petición POST al URL/archivo
    xhr.open("POST", "php/upload.php");

    // El xhr tiene un evento llamado "progress" que envía información sobre el progreso de la petición
    // Se ejecuta después del send() más abajo
    xhr.upload.addEventListener("progress", ({loaded, total}) => {
        // obtener el porcentaje de tamaño del archivo cargado
        let fileLoaded = Math.floor((loaded / total) * 100);
        // observa la función Math que obtiene el entero del número float
        // y se obtiene en KB de bytes al dividirlo entre 1000
        let fileTotal = Math.floor(total / 1000);
        let fileSize;
        // Si el tamaño es menor a 1024 son KB, pero si es mayor, hay que convertir a MB
        (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
        
        let progressHTML = `<li class="row">
                                <i class="fas fa-file-alt"></i>
                                <div class="contenido">
                                    <div class="detalles">
                                        <span class="nombre">${name} &bullet; Subiendo</span>
                                        <span class="porcentaje">${fileLoaded}%</span>
                                    </div>
                                    <div class="progreso-bar">
                                        <div class="progreso" style="width: ${fileLoaded}%"></div>
                                    </div>
                                </div>
                            </li>`;
        
        // Descomenta esto si quieres omitir es historial de subidas
        // subidoArea.innerHTML = "";
        subidoArea.classList.add("onprogress");
        progresoArea.innerHTML = progressHTML;
        if(loaded== total){
            progresoArea.innerHTML = "";
            let uploadedHTML = `<li class="row">
                                    <div class="contenido">
                                        <i class="fas fa-file-alt"></i>
                                        <div class="detalles">
                                            <span class="nombre">${name} &bullet; Subido</span>
                                            <span class="size">${fileSize}</span>
                                        </div>
                                    </div>
                                    <i class="fas fa-check"></i>
                                </li>`;
            subidoArea.classList.remove("onprogress");
            // Descomenta esto si quieres omitir es historial de subidas
            // subidoArea.innerHTML = uploadedHTML;
            // Comenta esto si quieres omitir es historial de subidas
            subidoArea.insertAdjacentHTML("afterbegin", uploadedHTML);
        }
    });
    // FormData es un API para crear objeto para enviar form data
    let formData = new FormData(form);
    // Enviamos form data a PHP
    xhr.send(formData);
}