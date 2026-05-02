const card = document.getElementById('card');

// 1. Efecto de "Tilt" (Inclinación 3D) al mover el ratón
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Calculamos la rotación (máximo 15 grados)
  const rotateX = ((y - centerY) / centerY) * -15;
  const rotateY = ((x - centerX) / centerX) * 15;
  
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Resetear la inclinación cuando el ratón sale
card.addEventListener('mouseleave', () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

// 2. Efecto de clic (Partículas, Ripple y Soundwave)
document.addEventListener('mousedown', (e) => {
  // Crear el Ripple (Aro dorado)
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  // Crear el texto "Soundwave" (como un grito de batalla)
  const wave = document.createElement('div');
  wave.className = 'soundwave';
  wave.innerText = 'GOMU GOMU NO!';
  wave.style.left = `${e.clientX}px`;
  wave.style.top = `${e.clientY}px`;
  document.body.appendChild(wave);

  // Crear Partículas (Efecto de chispas)
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.background = '#e8c97a'; // Color dorado
    p.style.left = `${e.clientX}px`;
    p.style.top = `${e.clientY}px`;
    
    // Direcciones aleatorias para las variables CSS --dx y --dy
    const dx = (Math.random() - 0.5) * 250 + 'px';
    const dy = (Math.random() - 0.5) * 250 + 'px';
    p.style.setProperty('--dx', dx);
    p.style.setProperty('--dy', dy);
    
    document.body.appendChild(p);
    
    // Eliminar partícula tras la animación
    setTimeout(() => p.remove(), 800);
  }

  // Limpiar Ripple y Wave
  setTimeout(() => {
    ripple.remove();
    wave.remove();
  }, 1000);
});
document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const luffyRender = card.querySelector('img:last-child');

    // Efecto de impacto al hacer clic
    card.addEventListener('mousedown', () => {
        // Hacemos que la imagen de Luffy "salte"
        luffyRender.style.transition = "transform 0.05s";
        luffyRender.style.transform = "translateX(-50%) translateY(-20%) scale(1.3)";
        
        // Añadir un flash blanco rápido al fondo (opcional)
        document.body.style.backgroundColor = "#1a1a2e";
        setTimeout(() => {
            document.body.style.backgroundColor = "#0a0a14";
            luffyRender.style.transform = "translateX(-50%) translateY(5%) scale(1.1)";
        }, 100);
    });

    // Mantén tu código anterior de partículas aquí abajo...
});