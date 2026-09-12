import { useEffect, useRef } from 'react';

export default function FireworksCanvas({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palettes for celebratory fireworks (Brilliant Golds, Amber, Neon Emerald, Cyan, Rose Ruby, Royal Purple)
    const colorPalettes = [
      ['#FFE066', '#FFC107', '#FF9800', '#FFF8E1', '#FFFFFF'], // Super Gold & Amber
      ['#00FF87', '#10B981', '#6EE7B7', '#D1FAE5', '#FFFFFF'], // Electric Emerald & Mint
      ['#00E5FF', '#0284C7', '#38BDF8', '#BAE6FD', '#FFFFFF'], // Cyan & Sky Blue
      ['#FF1493', '#F43F5E', '#FDA4AF', '#FFE4E6', '#FFFFFF'], // Neon Rose & Ruby
      ['#FFD700', '#FF8C00', '#FF4500', '#FFFDF0', '#FFFFFF'], // Topaz & Solar Fire
      ['#A855F7', '#C084FC', '#E9D5FF', '#FFFFFF'],             // Royal Amethyst
    ];

    const rockets = [];
    const particles = [];
    const sparkles = [];
    const confettiList = [];

    // Helper: Random in range
    const random = (min, max) => Math.random() * (max - min) + min;

    // Create a fireworks explosion
    const createExplosion = (x, y, palette, isLarge = false) => {
      const particleCount = isLarge ? Math.floor(random(110, 160)) : Math.floor(random(80, 120));
      const chosenPalette = palette || colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

      // 1. Primary High-Velocity Starburst Particles
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + random(-0.2, 0.2);
        const speed = random(1.5, isLarge ? 8.5 : 6.8);
        const color = chosenPalette[Math.floor(Math.random() * chosenPalette.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: random(0.010, 0.022),
          gravity: 0.058,
          size: random(1.8, 3.4),
          flicker: Math.random() > 0.3,
        });
      }

      // 2. Cascading Glitter / Willow Droplets
      const willowCount = Math.floor(random(25, 45));
      for (let j = 0; j < willowCount; j++) {
        const wAngle = random(0, Math.PI * 2);
        const wSpeed = random(0.8, 3.5);
        sparkles.push({
          x: x + random(-6, 6),
          y: y + random(-6, 6),
          vx: Math.cos(wAngle) * wSpeed,
          vy: Math.sin(wAngle) * wSpeed - random(0.5, 1.5),
          alpha: 1,
          decay: random(0.008, 0.018),
          gravity: 0.04,
          color: '#FFF3A8',
          size: random(1.2, 2.2),
        });
      }

      // 3. Falling Confetti Shimmer Flutter
      const confettiCount = Math.floor(random(12, 22));
      for (let k = 0; k < confettiCount; k++) {
        confettiList.push({
          x,
          y,
          vx: random(-3.5, 3.5),
          vy: random(-3, 0.5),
          rotation: random(0, 360),
          rotSpeed: random(-6, 6),
          w: random(3, 6),
          h: random(2, 4),
          color: chosenPalette[Math.floor(Math.random() * chosenPalette.length)],
          alpha: 1,
          decay: random(0.006, 0.014),
          gravity: 0.045,
        });
      }
    };

    // Launch a rocket
    const launchRocket = (targetX, targetY, forcedPalette) => {
      const startX = targetX !== undefined ? targetX : random(width * 0.05, width * 0.95);
      const startY = height + 10;
      const endY = targetY !== undefined ? targetY : random(height * 0.1, height * 0.58);
      const palette = forcedPalette || colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

      const duration = 28 + Math.random() * 14;
      const vy = (endY - startY) / duration;
      const vx = ((targetX || startX) - startX) / duration + random(-0.6, 0.6);

      rockets.push({
        x: startX,
        y: startY,
        vx,
        vy,
        endY,
        palette,
        color: palette[0],
        trail: [],
        isLarge: Math.random() > 0.4,
      });
    };

    // Launch multi-rocket barrage
    const launchBarrage = (count = 3) => {
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const spreadX = (width / (count + 1)) * (i + 1) + random(-width * 0.08, width * 0.08);
          launchRocket(spreadX, random(height * 0.12, height * 0.5));
        }, i * 140);
      }
    };

    // Immediate celebratory opening salvo
    launchBarrage(4);
    setTimeout(() => launchBarrage(3), 800);
    setTimeout(() => launchBarrage(4), 1800);

    // Click on canvas to launch intense firework explosion
    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      createExplosion(clickX, clickY, null, true);
      createExplosion(clickX + random(-30, 30), clickY + random(-25, 25), null, false);
    };
    canvas.addEventListener('click', handleCanvasClick);

    let tick = 0;

    // Main Animation Loop
    const render = () => {
      tick++;

      // Continuous high-energy automatic salvo schedule
      if (tick % 24 === 0) {
        launchRocket();
      }
      if (tick % 36 === 0) {
        launchRocket();
      }
      if (tick % 90 === 0) {
        launchBarrage(Math.random() > 0.5 ? 3 : 4);
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Update & Draw Rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;

        // Store trail
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 9) r.trail.shift();

        // Draw glowing rocket trail
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          const trailRatio = t / r.trail.length;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8 * trailRatio, 0, Math.PI * 2);
          ctx.fillStyle = r.color;
          ctx.globalAlpha = trailRatio * 0.85;
          ctx.fill();
        }

        // Draw bright glowing rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 12;
        ctx.globalAlpha = 1;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Explode condition
        if (r.y <= r.endY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.palette, r.isLarge);
          rockets.splice(i, 1);
        }
      }

      // 2. Update & Draw Burst Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.975;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const currentAlpha = p.flicker ? p.alpha * (0.65 + Math.random() * 0.35) : p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (0.4 + p.alpha * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Update & Draw Cascading Sparkles / Willows
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += s.gravity;
        s.vx *= 0.98;
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 6;
        ctx.globalAlpha = s.alpha * (0.7 + Math.random() * 0.3);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Update & Draw Fluttering Confetti
      for (let i = confettiList.length - 1; i >= 0; i--) {
        const c = confettiList[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += c.gravity;
        c.vx *= 0.985;
        c.rotation += c.rotSpeed;
        c.alpha -= c.decay;

        if (c.alpha <= 0) {
          confettiList.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha * 0.9;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none opacity-95"
    />
  );
}
