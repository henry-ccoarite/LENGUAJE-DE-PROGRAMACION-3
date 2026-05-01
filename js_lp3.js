const card = document.getElementById('card');
const colors = ['#e8c97a','#ff4444','#4488ff','#ffffff','#ff8c00'];

// TILT 3D — la tarjeta se inclina siguiendo el mouse
document.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / (rect.width / 2);
  const dy = (e.clientY - cy) / (rect.height / 2);
  const dist = Math.sqrt(dx*dx + dy*dy);
  if (dist < 2.5) {
    card.style.transform = `rotateY(${dx * 12}deg) rotateX(${-dy * 10}deg)`;
  } else {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// CLICK — partículas + ripple + frases de One Piece
card.addEventListener('click', (e) => {
  spawnParticles(e.clientX, e.clientY);
  spawnRipple(e.clientX, e.clientY);
  spawnText(e.clientX, e.clientY);
});

function spawnParticles(x, y) {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (Math.PI * 2 / 12) * i;
    const dist = 40 + Math.random() * 60;
    p.style.cssText = `
      left: ${x}px; top: ${y}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --dx: ${Math.cos(angle) * dist}px;
      --dy: ${Math.sin(angle) * dist}px;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

function spawnRipple(x, y) {
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = x + 'px';
  r.style.top = y + 'px';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

const phrases = ['¡GOMU GOMU!', '¡NAKAMA!', '¡PIRATE KING!', '¡GEAR 5!', '¡YOHOHOHO!'];
let phraseIdx = 0;
function spawnText(x, y) {
  const t = document.createElement('div');
  t.className = 'soundwave';
  t.textContent = phrases[phraseIdx % phrases.length];
  phraseIdx++;
  t.style.left = x + 'px';
  t.style.top = y + 'px';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1100);
}