
// Estrategias para la carga de scripts
// document.addEventListener('DOMContentLoaded', function() {
//     alert("Se ejecuta hasta que carga el body (DOM).");
// });

// window.addEventListener("load", function() {
//     alert("Se ejecuta hasta que carga toda la página y sus scripts.");
// });

/*************************** */
// Funciones por expresión
// El segundo "saludar" (nombre de la función) se suele omitir: es redundante
// const saludo = function saludar() {
//     return "Hola";
// };
// console.log( saludo() ); // 'Hola'

// Función anónima "saludo"
// const saludo = function () {
//     return "Hola";
// };
// console.log( saludo ); // ƒ () { return 'Hola'; }
// console.log( saludo() ); // 'Hola'
    
// Función autoejecutable
// (function () {
//     console.log("Hola!!");
// })();
// // Función autoejecutable con parámetros
// (function (name) {
//     console.log(`¡Hola, ${name}!`);
// })("Fei");
    
// Funciones Arrow
// const func = function () {
//     return "Función tradicional.";
// };
// const func = () => {
//     return "Función flecha.";
// };
// const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
// const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
// const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b

// console.log(func());


/*************************** */
// Arreglos
// var fruits = ["Banana","Orange","Apple","Mango"];
// console.log(fruits);
// console.log(fruits.toString()); // Banana,Orange,Apple,Mango
// console.log(fruits.join ("-")); // Banana-Orange-Apple-Mango
// fruits.pop(); // remueve ultimo
// console.log(fruits);
// fruits.push("Kiwi"); // agrega al final
// console.log(fruits);
// fruits.shift(); // remueve primero
// console.log(fruits);
// fruits.unshift("Lemon"); // agrega al inicio
// console.log(fruits);
// delete fruits[0]; // cambia a undefined el primero
// console.log(fruits);

/*************************** */
// Sentencias de control
// const time = new Date().getHours();
// let saludo = "";
// if (time < 12) {
//     saludo = "Buen día";
// } else if (time < 20) {
//     saludo = "Buena tarde";
// } else {
//     saludo = "Buena noche";
// }
// console.log(saludo);

// var text = "";
// switch (new Date().getDay()) {
//     case 6:
//         text = "Hoy es sábado";
//         break;
//     case 0:
//         text = "Hoy es domingo";
//         break;
//     default:
//         text = "Estoy esperando el fin de semana";
// }
// console.log(text);

// let i = 0;
// while (i < 5) {
//     console.log("El número es " + i);
//     i++;
// }

// i = 0;
// do {
//     console.log("El número es " + i);
//     i++;
// }
// while (i < 5);

// i = 0;
// for (i = 0; i < 5; i++) {
//     console.log("El número es " + i);
// }


/*************************** */
// Prototipos
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }
// console.log(Person);
// var miPadre = new Person("Rosario", "Pérez", 50, "negros");
// console.log(miPadre);
// miPadre.eyeColor = "cafés";
// console.log(miPadre);
// // Agregar elementos a la función inicial
// Person.prototype.nacionalidad = ""; // se agrega al prototipo
// Person.prototype.despedida = function () {
//     return this.firstName + ' ha dejado el edificio. ¡Adiós por ahora!';
// };
// console.log(miPadre);
// miPadre.nacionalidad = "Mexicano"; // nueva propiedad
// console.log(miPadre);
// console.log(miPadre.despedida());  // nuevo método


/*************************** */
// Clases
// class Person {
//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     introduceSelf() {
//         console.log(`Hola. Me llamo ${this.name}`);
//     }
// }
// const pedro = new Person("Pedro");
// pedro.introduceSelf(); // Hola. Me llamo Pedro

// Clases
// class Professor extends Person {
//     #teaches;

//     constructor(name, teaches) {
//         super(name);
//         this.#teaches = teaches;
//     }

//     introduceSelf() {
//         console.log(
//         `Mi nombre es ${this.name}, y seré su profesor de ${this.#teaches}.`,
//         );
//     }
    
//     get getTeaches() {
//         return this.#teaches;
//     }
//     set setTeaches(valor) {
//         this.#teaches = valor;
//     }

//     grade(paper) {
//         const grade = Math.floor(Math.random() * (10 - 1) + 1);
//         console.log(`Se recibe una tarea llamada: "${paper}" con calificación: ${grade}`);
//     }
// }
// const guillermo = new Professor("Guillermo", "Desarrollo Web");
// guillermo.introduceSelf(); // Llama la función
// guillermo.grade("Ensayo"); // Se envía una tarea
// guillermo.setTeaches = "Bases de datos";
// console.log(guillermo.getTeaches);


/*************************** */
// Eventos
// const boton = document.createElement("button");
// boton.innerText = "Dame clic";
// boton.classList.add("btn", "btn-primary");
// boton.setAttribute("type", "button");
// document.querySelector(".container").appendChild(boton);

// // Agregamos un manejador en el evento click
// boton.addEventListener("click", function(){ alert("Hello World!"); });

// // Agregamos un manejador en el evento click
// boton.addEventListener("click", () => { 
//     alert("Hello World! Again!"); 
// });


// Bubbling
// const h3Bubbling = document.createElement("h3");
// h3Bubbling.innerText = "Bubbling:";
// const divBubbling = document.createElement("div");
// divBubbling.classList.add("p-5", "bg-warning");
// const parrafoBubbling = document.createElement("p");
// parrafoBubbling.innerText = "Dame clic";
// parrafoBubbling.classList.add("border", "border-black", "bg-white", "p-2");
// divBubbling.appendChild(parrafoBubbling);
// // Se agrega al .container HTML
// document.querySelector(".container").appendChild(h3Bubbling);
// document.querySelector(".container").appendChild(divBubbling);
// // Agregamos un manejador en el evento click
// parrafoBubbling.addEventListener("click", () => alert("Clic en el parrafo blanco.") );
// divBubbling.addEventListener("click", () => alert("Clic en el div naranja.") );

// Capturing
// const h3Capturing = document.createElement("h3");
// h3Capturing.innerText = "Capturing:";
// const divCapturing = document.createElement("div");
// divCapturing.classList.add("p-5", "bg-warning");
// const parrafoCapturing = document.createElement("p");
// parrafoCapturing.innerText = "Dame clic";
// parrafoCapturing.classList.add("border", "border-black", "bg-white", "p-2");
// divCapturing.appendChild(parrafoCapturing);
// // Se agrega al .container HTML
// document.querySelector(".container").appendChild(h3Capturing);
// document.querySelector(".container").appendChild(divCapturing);
// // Agregamos un manejador en el evento click
// parrafoCapturing.addEventListener("click", () => alert("Clic en el parrafo blanco."), true );
// divCapturing.addEventListener("click", () => alert("Clic en el div naranja."), true );

//AJAX 1
// function reqListener() {
//     console.log(this.responseText);
// }
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "datos.json");
// req.send();

// AJAX 2
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.addEventListener("progress", updateProgress);
// xmlhttp.addEventListener("load", transferComplete);
// xmlhttp.addEventListener("error", transferFailed);
// xmlhttp.addEventListener("abort", transferCanceled);
// xmlhttp.open("GET", "datos.json");
// xmlhttp.send();
// // Progreso del cliente al servidor
// function updateProgress(event) {
//     console.log(event);
//     if (event.lengthComputable) {
//         const percentComplete = (event.loaded / event.total) * 100;
//         console.log(percentComplete);
//     } else {
//         // No se puede obtener progreso, total size es desconocido
//     }
// }
// function transferComplete(evt) {
//     console.log("La transferencia esta completa.");
// }
// function transferFailed(evt) {
//     console.log("Ocurrió un error al transferir el archivo.");
// }
// function transferCanceled(evt) {
//     console.log("La tranferencia fue cancelada por el usuario.");
// }

// AJAX SIN SSL
// function reqListener() {
//     console.log(this.responseText);
// }
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "http://www.example.org/example.txt");
// req.send();

// AJAX CORS
const xmlhttp = new XMLHttpRequest();
xmlhttp.addEventListener("progress", updateProgress);
xmlhttp.addEventListener("load", transferComplete);
xmlhttp.addEventListener("error", transferFailed);
xmlhttp.addEventListener("abort", transferCanceled);
xmlhttp.open("GET", "https://erikabookservice.azurewebsites.net/api/Books");
xmlhttp.send();
// Progreso del cliente al servidor
function updateProgress(event) {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(percentComplete);
    } else {
        // No se puede obtener progreso, total size es desconocido
    }
}
function transferComplete(evt) {
    console.log("La transferencia esta completa.");
}
function transferFailed(evt) {
    console.log("Ocurrió un error al transferir el archivo.");
}
function transferCanceled(evt) {
    console.log("La tranferencia fue cancelada por el usuario.");
}

//AJAX POST
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.addEventListener("load", function (e) {
//     console.log(this);
// });
// xmlhttp.open("POST", "https://erikabookservice.azurewebsites.net/api/Authors");
// //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xmlhttp.setRequestHeader("Content-type", "application/json");
// const data = JSON.stringify({ Id: 4, Name: "Prueba desde HTML DSW" });
// xmlhttp.send(data);

// AJAX PUT
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.addEventListener("load", function (e) {
//     console.log(this);
// });
// xmlhttp.open("PUT", "https://erikabookservice.azurewebsites.net/api/Authors/5");
// xmlhttp.setRequestHeader("Content-type", "application/json");
// const data = JSON.stringify({ Id: 5, Name: "Mas prueba desde HTML" });
// xmlhttp.send(data);

// AJAX GET
// function reqListener() {
//     console.log(this.responseText);
// }
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "https://erikabookservice.azurewebsites.net/api/Authors");
// req.send();