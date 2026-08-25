console.log("ping 03")
document
.querySelector("#btnChiste")
.addEventListener("click", () => {
    fetch("http://www.official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span>${res.setup}</span>
        <span>${res.punchline}</span>`
        document.querySelector("#salidaChiste")
        .innerHTML = html;
    })
    .catch((error) =>{
        console.log("ERROR EN FECH A CHISTE " + error);
    })
})

document
.querySelector("#btnGatos")
.addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span>${res.fact}</span>
        <span>${res.punchline}</span>`
        document.querySelector("#salidaGatos")
        .innerHTML = html;
    })
    .catch((error) =>{
        console.log("ERROR EN FECH A HECHOS GATOS " + error);
    })
})

document
.querySelector("#btnPerros")
.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
        const html = `
        <span> <img src="${res.message}" style"with : 300px"</span>`
        document.querySelector("#salidaPerros")
        .innerHTML = html;
    })
    .catch((error) =>{
        console.log("ERROR Imagen perro " + error);
    })
})

document
.querySelector("#btnEdad")
.addEventListener("click", () => {
    const nombre = document.querySelector("#nombreEdad").value;
    if(nombre === "") {return}
    fetch(`https://api.agify.io?name=${nombre}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        const html = `
        <span>${res.age}</span>`
        document.querySelector("#salidaEdad")
        .innerHTML = html;
    })
    .catch((error) =>{
        console.log("ERROR Edad " + error);
    })
})

const click = new Event("click");



document
.querySelector("#btnChiste")
.dispatchEvent(click);

document
.querySelector("#btnGatos")
.dispatchEvent(click);

document
.querySelector("#btnPerros")
.dispatchEvent(click);

