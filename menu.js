const anio = new Date().getFullYear();

// Usando document.createElement();
const pintaMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add('header', 'bg-light', 'border-bottom', 'shadow', 'mb-3');

    const linkUV = document.createElement("a");
    linkUV.classList.add('text-bg-success', 'position-absolute', 'top-0', 'end-0', 'btn', 'btn-link', 'btn-sm', 'px-3', 'py-0', 'rounded-0', 'text-decoration-none');
    linkUV.setAttribute('title', 'Universidad Veracruzana');
    linkUV.textContent = 'Universidad Veracruzana';

    const titulo = document.createElement("h1");
    titulo.classList.add("h3", "text-center", "mt-5", "mt-sm-4");
    titulo.innerText = `Desarrollo de Sistemas Web ${anio}`;

    menu.appendChild(linkUV);
    menu.appendChild(titulo);

    document.body.insertAdjacentElement('afterbegin', menu);
};

// Usando Template literals
const pintaMenu2 = () => {
    let uv = "Universidad Veracruzana";
    const menu = `
    <div class="header bg-light border-bottom shadow mb-3">
        <a href="https://www.uv.mx/"
            class="text-bg-success position-absolute top-0 end-0 btn btn-link btn-sm px-3 py-0 rounded-0 text-decoration-none"
            title="${uv}">${uv}</a>
        <h1 class="h3 text-center mt-5 mt-sm-4""><a href="../index.html" class="link-dark text-decoration-none" title="Regresar al inicio">Desarrollo de Sistemas Web <small class="text-body-secondary">${anio}</small></a></h1>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', menu);
};

document.addEventListener('DOMContentLoaded', pintaMenu2);

//xmlhttp.setRequestHeader("Content-type", "application/json");
//xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xmlhttp.setRequestHeader("Content-type", "multipart/form-data");