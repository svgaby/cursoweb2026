console.log("ping scritp01.js")

document
    .querySelector("#vertical")
    .addEventListener("click", () => {
        document
            .querySelector("#distribucion")
            .style.flexDirection = "column";
    })

    document
    .querySelector("#horizontal")
    .addEventListener("click", () => {
        document
            .querySelector("#distribucion")
            .style.flexDirection = "row";
    })

    // ===========================================
    //   funcpoin color
    //=============================================

    document
    .querySelectorAll("#cajacolor button")
    .forEach ((btn) => {
        btn.addEventListener("click", (e)=> {
            document
            .querySelector("#cajacolor")
            .style.backgroundColor = e.target.dataset.color;
        })
    })