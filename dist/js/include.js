document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (e) {
      el.innerHTML = `<div style="color:red;">Error al cargar el componente: ${file}</div>`;
      console.error(e);
    }
  });
});
