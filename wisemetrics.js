/* ================================================================
   WISEMETRICS — GLOBAL SCRIPT v1.0
   Load this at the bottom of every page: <script src="wisemetrics.js"></script>
   All interactive features auto-initialize via data-attributes and element IDs.
   ================================================================ */
(function WM() {
  'use strict';

  /* ============================================================
     1. THEME
     ============================================================ */
  const root = document.documentElement;

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    document.querySelectorAll('[data-theme-btn]').forEach(b => {
      b.classList.toggle('active', b.dataset.themeBtn === t);
    });
    try { localStorage.setItem('wm-theme', t); } catch (e) {}
    window.dispatchEvent(new Event('wm-theme-change'));
  }

  // Restore saved theme
  const saved = (() => { try { return localStorage.getItem('wm-theme'); } catch (e) { return null; } })();
  if (saved) setTheme(saved);

  // Bind all theme buttons on the page
  document.querySelectorAll('[data-theme-btn]').forEach(b => {
    b.addEventListener('click', () => setTheme(b.dataset.themeBtn));
  });

  /* ============================================================
     2. TOAST
     ============================================================ */
  const toastEl = document.getElementById('toast');

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toastEl.classList.remove('show'), 1800);
  }

  // Expose globally so other scripts can use it
  window.WM_toast = showToast;

  /* ============================================================
     3. CLIPBOARD UTILITY
     ============================================================ */
  function copyText(text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast(label || 'copiado'));
    }
  }
  window.WM_copy = copyText;

  // Color swatches auto-copy on click
  document.querySelectorAll('.wm-swatch[data-token]').forEach(sw => {
    sw.addEventListener('click', () => {
      const hex = sw.dataset.hex || getComputedStyle(root).getPropertyValue(sw.dataset.token).trim();
      copyText(`${sw.dataset.token}: ${hex}`, `${sw.dataset.token} · ${hex}`);
      sw.classList.add('copied');
      setTimeout(() => sw.classList.remove('copied'), 1400);
    });
  });

  /* ============================================================
     4. ACTIVE NAV LINK
     ============================================================ */
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.wm-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentFile) a.classList.add('active');
  });

  /* ============================================================
     5. CHECKBOXES (interactive checklist)
     ============================================================ */
  document.querySelectorAll('.wm-check-box').forEach(box => {
    box.addEventListener('click', () => {
      const checked = box.classList.toggle('checked');
      const item = box.closest('.wm-check-item');
      if (item) item.classList.toggle('checked', checked);
    });
  });

  /* ============================================================
     6. WEBGL HERO (Three.js point-field with cursor attraction)
     Auto-initializes if #heroCanvas exists and Three.js is loaded.
     ============================================================ */
  function initHero() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 18);

    const GRID = 56, GAP = 0.55, count = GRID * GRID;
    const positions = new Float32Array(count * 3);
    let k = 0;
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        const x = (i - GRID / 2) * GAP, y = (j - GRID / 2) * GAP;
        positions[k * 3]     = x;
        positions[k * 3 + 1] = y;
        positions[k * 3 + 2] = -Math.hypot(x, y) * 0.04;
        k++;
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const uniforms = {
      uTime:   { value: 0 },
      uMouse:  { value: new THREE.Vector2(0, 0) },
      uSize:   { value: 2.2 * (window.devicePixelRatio || 1) },
      uAccent: { value: new THREE.Color('#1db5a3') },
      uFg:     { value: new THREE.Color('#ece7dc') },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        uniform float uTime; uniform vec2 uMouse; uniform float uSize;
        varying float vDist; varying float vWave;
        void main(){
          vec3 p = position;
          float w = sin(p.x*0.35 + uTime*0.6)*0.35 + cos(p.y*0.45 - uTime*0.5)*0.35;
          p.z += w; vWave = w;
          vec2 toMouse = uMouse - p.xy; float d = length(toMouse);
          float inf = smoothstep(6.0, 0.0, d);
          p.xy -= normalize(toMouse + 1e-6) * inf * 0.9; p.z += inf * 1.4;
          vDist = d;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (1.0 + inf*1.6) * (20.0 / -mv.z);
        }`,
      fragmentShader: `
        uniform vec3 uAccent; uniform vec3 uFg;
        varying float vDist; varying float vWave;
        void main(){
          vec2 uv = gl_PointCoord - 0.5; float r = length(uv);
          if(r > 0.5) discard;
          float a = smoothstep(0.5, 0.0, r);
          float m = smoothstep(4.5, 0.0, vDist)*0.9 + smoothstep(0.2, 0.6, vWave)*0.3;
          vec3 col = mix(uFg * 0.35, uAccent, clamp(m, 0.0, 1.0));
          gl_FragColor = vec4(col, a * 0.85);
        }`
    });

    const points = new THREE.Points(geom, mat);
    points.rotation.x = -0.35;
    scene.add(points);

    function resize() {
      const el = canvas.parentElement;
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    resize();
    new ResizeObserver(resize).observe(canvas.parentElement);

    const mouseTarget = new THREE.Vector2(0, 0);
    const mouse       = new THREE.Vector2(0, 0);
    canvas.parentElement.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouseTarget.set(
        (((e.clientX - rect.left) / rect.width) * 2 - 1) * 10,
        (-(((e.clientY - rect.top) / rect.height) * 2 - 1)) * 6
      );
    });
    canvas.parentElement.addEventListener('mouseleave', () => mouseTarget.set(0, 0));

    function syncTheme() {
      const s = getComputedStyle(root);
      uniforms.uAccent.value.set(s.getPropertyValue('--wm-signal-400').trim() || '#1db5a3');
      uniforms.uFg.value.set(s.getPropertyValue('--fg').trim() || '#ece7dc');
    }
    syncTheme();
    window.addEventListener('wm-theme-change', syncTheme);

    const clock = new THREE.Clock();
    function tick() {
      uniforms.uTime.value = clock.getElapsedTime();
      mouse.lerp(mouseTarget, 0.08);
      uniforms.uMouse.value.copy(mouse);
      points.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.08;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) tick();
    else renderer.render(scene, camera);
  }
  initHero();

  /* ============================================================
     7. AMBIENT CANVAS — DATA GRAPH
     Auto-initializes on canvas[data-ambient="graph"]
     ============================================================ */
  function initAmbientGraph(canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pts = [], N = 28;

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function seed() {
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
          r: Math.random() * 1.6 + 0.6
        });
      }
    }
    function step() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.strokeStyle = `rgba(29,181,163,${(1 - d / 110) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#1db5a3'; ctx.fill();
        if (p.r > 1.5) {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(29,181,163,0.08)'; ctx.fill();
        }
      }
      requestAnimationFrame(step);
    }
    resize(); seed();
    new ResizeObserver(() => { resize(); seed(); }).observe(canvas);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) step();
  }

  /* ============================================================
     8. AMBIENT CANVAS — ORBIT
     Auto-initializes on canvas[data-ambient="orbit"]
     ============================================================ */
  function initAmbientOrbit(canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const orbits = [];

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      orbits.length = 0;
      const cx = W / 2, cy = H / 2;
      for (let i = 0; i < 6; i++) {
        orbits.push({
          cx, cy, r: 40 + i * 24,
          ang: Math.random() * Math.PI * 2,
          speed: .002 + Math.random() * .004,
          size: 1.4 + Math.random() * 1.6
        });
      }
    }
    function step() {
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath(); ctx.arc(cx, cy, 40 + i * 24, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(29,181,163,0.08)'; ctx.lineWidth = 1; ctx.stroke();
      }
      for (const o of orbits) {
        o.ang += o.speed;
        const x = o.cx + Math.cos(o.ang) * o.r, y = o.cy + Math.sin(o.ang) * o.r;
        ctx.beginPath(); ctx.arc(x, y, o.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(29,181,163,0.1)'; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, o.size, 0, Math.PI * 2);
        ctx.fillStyle = '#1db5a3'; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fillStyle = '#1db5a3'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(29,181,163,0.3)'; ctx.lineWidth = 1; ctx.stroke();
      requestAnimationFrame(step);
    }
    resize();
    new ResizeObserver(resize).observe(canvas);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) step();
  }

  /* ============================================================
     9. SOCIAL INK CANVAS (mini graph for social squares)
     Auto-initializes on canvas[data-social="ink"]
     ============================================================ */
  function initSocialInk(canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pts = [], N = 22;

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts.length = 0;
      for (let i = 0; i < N; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2,
          r: Math.random() * 1.4 + 0.6
        });
      }
    }
    function step() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 90) {
            ctx.strokeStyle = `rgba(29,181,163,${(1 - d / 90) * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#1db5a3'; ctx.fill();
      }
      requestAnimationFrame(step);
    }
    resize();
    new ResizeObserver(resize).observe(canvas);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) step();
  }

  /* ============================================================
     10. AUTO-INIT ALL AMBIENT / SOCIAL CANVASES
     ============================================================ */
  document.querySelectorAll('[data-ambient="graph"]').forEach(initAmbientGraph);
  document.querySelectorAll('[data-ambient="orbit"]').forEach(initAmbientOrbit);
  document.querySelectorAll('[data-social="ink"]').forEach(initSocialInk);

  /* ============================================================
     11. SMOOTH SCROLL FOR SAME-PAGE ANCHOR LINKS
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ============================================================
     12. INTERSECTION OBSERVER — animate bars & fade-ups on scroll
     ============================================================ */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.style.animationPlayState = 'running';
          io.unobserve(en.target);
        }
      });
    }, { threshold: .15 });

    document.querySelectorAll('.wm-metric-bar-fill, .wm-fade-up').forEach(el => {
      el.style.animationPlayState = 'paused';
      io.observe(el);
    });
  }

  /* ============================================================
     13. EXPOSE NAMESPACE
     ============================================================ */
  window.WM = {
    setTheme,
    toast: showToast,
    copy: copyText,
    initAmbientGraph,
    initAmbientOrbit,
    initSocialInk
  };

})();
