document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const luffyRender = card.querySelector('.luffy-img');

    // 1. EFECTO TILT 3D
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -15;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 15;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });

    // 2. EFECTO CLICK GOMU GOMU
    document.addEventListener('mousedown', (e) => {
        // Impacto visual
        luffyRender.style.transition = "transform 0.05s";
        luffyRender.style.transform = "translateX(-50%) translateY(-20%) scale(1.4)";
        document.body.style.backgroundColor = "#1a1a2e";
        
        setTimeout(() => {
            document.body.style.backgroundColor = "#0a0a14";
            luffyRender.style.transform = "translateX(-50%) translateY(5%) scale(1.1)";
        }, 100);

        // Ripple y Texto
        crearElemento('ripple', e.clientX, e.clientY);
        const wave = crearElemento('soundwave', e.clientX, e.clientY);
        wave.innerText = "GOMU GOMU NO!";

        // Partículas
        for (let i = 0; i < 12; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.background = '#e8c97a';
            p.style.left = `${e.clientX}px`;
            p.style.top = `${e.clientY}px`;
            p.style.setProperty('--dx', (Math.random() - 0.5) * 300 + 'px');
            p.style.setProperty('--dy', (Math.random() - 0.5) * 300 + 'px');
            document.body.appendChild(p);
            setTimeout(() => p.remove(), 800);
        }
    });

    function crearElemento(clase, x, y) {
        const el = document.createElement('div');
        el.className = clase;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1000);
        return el;
    }
});

// FUNCIONES GLOBALES
function toggleSeccion() {
    document.getElementById('seccion-unidad').classList.toggle('visible');
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        document.querySelector('.base-img').src = reader.result;
    }
    if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}