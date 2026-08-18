document.querySelector("button")
    .addEventListener("click", () => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 2000)
        console.log(4);
        setTimeout(() => {
            console.log(5);
        }, 1000)
        console.log(6);

        // si es 0 sale igual de la fila y hace de vuelta la cola aunque sea instantane
    })

// promesas

const promesa1 = new Promise(() => { });
console.log(promesa1); 

const promesa2 = new Promise((resolve, reject) => {
    resolve("Promesa Resuelta");
});
console.log(promesa2);

const promesa3 = new Promise((resolve, reject) =>{reject("Promesa rechazada")});

console.log(promesa3);

const promesa4 = new Promise((res, rej) =>{
    setTimeout (()=>{
        rej("PROMESA 4 CUMPLIDA");    //res o rej
    }, 2000);
})
console.log (promesa4);

promesa4
.then((resp)=>{console.log(resp)})
.catch((error)=>{console.warn(error)})
.finally(() => {console.log("Proceso 4 finalizado")})

// ASYNC  AWAIT
console.log("T1")


const promesa5 = new Promise (( res,rej)=>{
    setTimeout(()=>{
       res("proceso exitoso 5"); 
    }, 4000)
    })

    async function leerPromesa5(){
        console.log(await promesa5)
    }

    // promise5.the((resp)=>{console.log(resp)})

    leerPromesa5();

    console.log("T2");