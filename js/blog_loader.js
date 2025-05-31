async function loadPost(filename) {
  const postSection = document.getElementById('post-content');

  // Oculta mientras carga
  postSection.classList.add('hidden');
  postSection.classList.remove('slide-in');

  const res = await fetch(`posts/${filename}`);
  const text = await res.text();

  postSection.innerHTML = marked.parse(text);

  // Muestra con animación
  void postSection.offsetWidth; // reinicia animación
  postSection.classList.remove('hidden');
  postSection.classList.add('slide-in');
}
