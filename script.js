// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Project Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Animate on scroll
AOS.init({
  duration: 800,
  once: true
});
