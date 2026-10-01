export const mainDashboard = (user) => {
    console.log("mainDashboard en ejecucion");
    let vista = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home de mi empresa</title>
    <link rel="stylesheet" href="/css/estilo.css">
</head>
<body>
    <header>Home de mi empresa</header>
    <nav>
        <a href="index.html">Home</a>
        <a href="/productos">Productos</a>
        <a href="contactos.html">Contactos</a>
        <a href="login.html">Login</a>
    </nav>
    <main>
    <h1> Panel de control </h1>
    <div> BIENVENIDO ${user?.usuario || "usuario no logueado"}!!!!</div>

    </main>
    <footer>
        Creado por LORD-SGON &copy;2026
    </footer>
</body>`;
    return vista;
}