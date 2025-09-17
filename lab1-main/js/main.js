
// Funcții simple pentru interactivitate
document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(a => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
    }
  }));
});
