// let num1 = 5;
// let num2 = 3;

// if(num1=>num2) {
//     alert("si es menor")
// } else{
//         alert("no es menor");
// };

// // = asignacion
// // == comparacion
// // === comparacion de tipo 
// // < 
// // >
// // >=
// // <=

// const lanzador = document.querySelector(".lanzador");

// console.log(lanzador);

// lanzador.addEventListener("click", function(){
//     alert("hola mundo");
// });
// //elemento afectado relativo a las acciones
// const navigator = document.querySelector (".nav1");

// //acciones que afectan al navigator
// const open = document.querySelector(".nav-btn");
// const close = document.querySelector (".close-nav");
// const out = document.querySelector("main");
// console.log(navigator);

// // console.log(lanzador);

// open.addEventListener("click", function(){
//     navigator.classList.add('show');
// });

// close.addEventListener("click", function (){
//     navigator.classList.remove('show');
// });


// out.addEventListener("click", function (){
//     navigator.classList.remove('show');
// });



//segunda funcionalidad

//elemento afectado relativo a las acciones
const navigator = document.querySelector (".nav1");

//acciones que afectan al navigator
const open = document.querySelector(".nav-btn");
const close = document.querySelector (".close-nav");
const out = document.querySelector("main");


const showNavigator = function(){
    navigator.classList.add('show')
};


const hiddeNavigator = function(){
    navigator.classList.remove('show')
};




open.addEventListener("click", showNavigator);