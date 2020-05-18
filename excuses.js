let quien = ['El perro', 'Mi gato', 'Mi conejo', 'Mi abuela', 'El cartero'];
let que = ['se comió', 'destruyó', 'rompió', 'tiró'];
let cosa = ['la tarea', 'mi laptop', 'el cuaderno'];
let cuando = ['antes de la clase', 'ayer por la noche', 'hoy en la mañana mientras dormía', 'cuando fui al baño'];


let randomQuien = Math.floor(Math.random() * quien.length)
let randomQue = Math.floor(Math.random() * que.length)
let randomCosa = Math.floor(Math.random() * cosa.length)
let randomCuando = Math.floor(Math.random() * cuando.length)

document.querySelector("#excuse").innerHTML = (`${quien[randomQuien]} ${que[randomQue]} ${cosa[randomCosa]} ${cuando[randomCuando]}`);


/* function randomizer(array){
    numeroRandom = Math.random() * array.length;
    numeroRandom = Math.floor(numeroRandom);
    return array[numeroRandom];
}

let randomQuien = randomizer(quien);
let randomQue = randomizer(que);
let randomCosa = randomizer(cosa);
let randomCuando = randomizer(cuando);



document.getElementById("excuse").innerHTML = (`${randomQuien} ${randomQue} ${randomCosa} ${randomCuando}`); */

