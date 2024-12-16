//almaceno todos los elementos que contengan la clase categoria
const categorias = document.querySelectorAll(".categoria");
//diferencia entre las 2 es que una selecciona todos y este solamente 1
//Almaceno SOLO UN elemento que contenga el id contenido
const contenido = document.querySelector("#contenido");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", async (e) => {
    const nombreArchivo = e.currentTarget.getAttribute("data-seccion");

    try {
      const archivo = await fetch(`${nombreArchivo}.html`);

      const html = await archivo.text();
      contenido.innerHTML = html;
    } catch (error) {
      const mensajeError = "h2";
      contenido.innerHTML = mensajeError;
    }
  });
});
