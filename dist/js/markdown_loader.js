async function cargarMarkdown(rutaArchivo, contenedorId) {
  const res = await fetch(rutaArchivo);
  const texto = await res.text();
  const html = marked.parse(texto);
  document.getElementById(contenedorId).innerHTML = html;
}
