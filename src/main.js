/* Manejo del DOM */
const data = RICKANDMORTY.results;
const card = document.getElementById("rick-mory-card");
const buttonRicks = document.getElementById("button-ricks");
const buttonMorty = document.getElementById("button-morty");
const buttonOtrosPersonajes = document.getElementById("button-otrosPersonajes");


//Muestra lista de todos los personajes en tarjetas
let dataSee = (data) => {
    let str = ''
    data.forEach(element => {
        console.log(element)
        str +=`<div class="card"><p> Nombre: ${element.name}<p>
        <p>Estado: ${element.status}<p>
        <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src ="${element.image}" id="imagen"> </div>`


    });
    card.innerHTML = str
}
dataSee(data)

//Para Filtrar versiones de Rick
let resultRick = (data) => {
    let result = window.dataManager.filterRick(data);
    let str = 'Rick'
    result.forEach(element => {
        str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonRicks.addEventListener('click', () => {
    resultRick(data)
});

//Para Filtrar versiones de Morty
let resultMorty = (data) => {
    let result = window.dataManager.filterMorty(data);
    let str = 'Morty'
    result.forEach(element => {
    str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonMorty.addEventListener('click', () => {
    resultMorty(data)
});

//Para Filtrar todos los demas personajes 
let resultOtrosPersonajes = (data) => {
    let result = window.dataManager.filterOtrosPersonajes(data);
    let str = ''
    result.forEach(element => {
     str += `<div class="card"><p> Nombre: ${element.name}<p>
     <p>Estado: ${element.status}<p>
     <p> Specie: ${element.species}<p> <p>Genero: ${element.gender}<p><p>Lugar de Origen: ${element.origin.name}<p><p>Ubicacion Actual: ${element.location.name}<p>
     <img src = "${element.image}"width="80%" height="90%"> </div>`
    });
     
    card.innerHTML = str;
    
}


buttonOtrosPersonajes.addEventListener('click', () => {
    resultOtrosPersonajes(data)
});
