try {
    const numero = "A";    // 4 numero // letras
    const resultado = numero / 2;
    if (isNaN (resultado)){
        throw new Error("dato NaN detectado")
    }
    console.log(resultado);
} catch (error) {
    console.log("error capturado");
console.log(error.message);
}