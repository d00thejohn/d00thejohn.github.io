document.documentElement.classList.add('js');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.menu-toggle');
const navigation = [...document.querySelectorAll('.nav-links a')];
const closeMenu = () => {sidebar.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');};
toggle.addEventListener('click', () => {const open = sidebar.classList.toggle('menu-open');toggle.setAttribute('aria-expanded', String(open));});
navigation.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && sidebar.classList.contains('menu-open')){closeMenu();toggle.focus();}});
const setCurrent = id => navigation.forEach(link => {if(link.hash === '#' + id){link.setAttribute('aria-current', 'location');}else{link.removeAttribute('aria-current');}});
let scheduled = false;
function updateCurrent(){scheduled = false;const sections = [...document.querySelectorAll('main > section[id]')];const top = window.innerWidth <= 760 ? 110 : 120;const current = sections.filter(section => section.getBoundingClientRect().top <= top).pop() || sections[0];if(current)setCurrent(current.id);}
window.addEventListener('scroll', () => {if(!scheduled){scheduled=true;requestAnimationFrame(updateCurrent);}}, {passive:true});
window.addEventListener('resize', updateCurrent);
updateCurrent();
