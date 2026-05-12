
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
function animR(){rx+=(mx-rx)*0.1;ry+=(my-ry)*0.1;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(animR);}
animR();
document.querySelectorAll('a,button,.sk-tag,.pj,.ab-card,.cert-card,.ps2-card,.c-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='translate(-50%,-50%) scale(2.5)';curR.style.transform='translate(-50%,-50%) scale(1.5)';curR.style.opacity='0.3';});
  el.addEventListener('mouseleave',()=>{cur.style.transform='translate(-50%,-50%) scale(1)';curR.style.transform='translate(-50%,-50%) scale(1)';curR.style.opacity='0.5';});
});

const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target);}});},{threshold:0.1});
reveals.forEach(el=>obs.observe(el));

window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('s',scrollY>50));

const btn=document.getElementById('themeBtn');
btn.addEventListener('click',()=>{
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',isDark?'light':'dark');
  btn.textContent=isDark?'🌙':'☀️';
});


// ============================================
// MOBILE HAMBURGER MENU
// Add this at the END of your script.js file
// ============================================

// Add hamburger button to nav dynamically
const nav = document.getElementById('nav');
const nl = nav.querySelector('.nl');

const hamburger = document.createElement('button');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';
hamburger.setAttribute('aria-label', 'Toggle menu');
nav.querySelector('.nav-r').before(hamburger);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nl.classList.toggle('open');
});

// Close menu when a nav link is clicked
nl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    nl.classList.remove('open');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    hamburger.classList.remove('open');
    nl.classList.remove('open');
  }
});
