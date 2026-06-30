console.log("ping sript.js")

/* document.querySelector("#btnhome").addEventListener("click", (e) => {
     console.log("Click en Botom HOME"); 
          console.log(e.target.dataset.destino);
           console.log(e.target.dataset.url); });


document.querySelector("#btncontactos").addEventListener("click", (e) => { 
    console.log("Click en Botom Contactos") 
console.log(e.target.dataset.destino);
           console.log(e.target.dataset.url); });


document.querySelector("#productos").addEventListener("click", (e) => { 
    console.log("Click en Botom productos") 
    console.log(e.target.dataset.destino);
           console.log(e.target.dataset.url); });
 */


document.querySelectorAll("button")
.forEach((btn) => {
  btn.addEventListener("click", (e) => {
console.log(`click en ${e.target.dataset.destino}`);
window.location = e.target.dataset.url
  })
})