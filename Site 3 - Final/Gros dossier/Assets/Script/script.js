// ── Navbar scroll
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Burger menu
const burger = document.getElementById('burger');
const mobNav = document.getElementById('mob-nav');
const b1=document.getElementById('b1'),b2=document.getElementById('b2'),b3=document.getElementById('b3');
let menuOpen = false;
burger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobNav.classList.toggle('open', menuOpen);
  b1.style.cssText = menuOpen ? 'transform:translateY(6px) rotate(45deg)' : '';
  b2.style.opacity = menuOpen ? '0' : '1';
  b3.style.cssText = menuOpen ? 'transform:translateY(-6px) rotate(-45deg);width:20px' : '';
});
mobNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuOpen = false;
  mobNav.classList.remove('open');
  b1.style.cssText = b3.style.cssText = ''; b2.style.opacity = '1';
}));

// ── Active nav on scroll
const navLinks = document.querySelectorAll('.nav-a');
const allSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  allSections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
});

// ── Portfolio filter
function filterCards(cat) {
  const cards = document.querySelectorAll('.project-card');
  const btns  = document.querySelectorAll('.filter-btn');
  let vis = 0;
  btns.forEach(b => {
    const active = b.dataset.filter === cat;
    b.style.background = active ? 'rgba(16,185,129,.1)' : 'transparent';
    b.style.borderColor = active ? 'rgba(52,211,153,.4)' : 'rgba(255,255,255,.1)';
    b.style.color = active ? '#6ee7b7' : '#64748b';
  });
  cards.forEach(c => {
    const show = cat === 'tous' || c.dataset.category === cat;
    c.style.display = show ? 'flex' : 'none';
    if (show) vis++;
  });
  document.getElementById('no-result').classList.toggle('hidden', vis > 0);
}

// ── Intersection Observer (reveal + card images hover)
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Card image zoom on hover
document.querySelectorAll('.proj-card').forEach(card => {
  const img = card.querySelector('img');
  card.addEventListener('mouseenter', () => img && (img.style.transform = 'scale(1.06)'));
  card.addEventListener('mouseleave', () => img && (img.style.transform = 'scale(1)'));
});
function submitBeatport() {
        document.beatport.submit();
        document.beatport.reset();
      }