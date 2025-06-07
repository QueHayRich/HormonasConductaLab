function loadPost(postName) {
  fetch(`posts/${postName}.md`) // Cambiar de 'blog/' a 'posts/'
    .then(response => response.text())
    .then(markdown => {
      const html = marked.parse(markdown);
      document.getElementById('post-content').innerHTML = html;
    })
    .catch(error => {
      document.getElementById('post-content').innerHTML = 
        '<h2>Error</h2><p>No se pudo cargar el artículo.</p>';
      console.error('Error:', error);
    });
}
