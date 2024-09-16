onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
  const nombreElement = document.getElementById('camilo');
  setTimeout(() => {
  nombreElement.style.opacity = 'camilo';
  }, 3000); 