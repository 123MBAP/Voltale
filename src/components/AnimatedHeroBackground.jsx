import { useEffect, useRef } from 'react';

export default function AnimatedHeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse tracking for interactive 3D rotation tilt
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = ((clientX / width) - 0.5) * 0.8;
      mouse.targetY = ((clientY / height) - 0.5) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // ─── 3D PROJECTION UTILITY ───
    const fov = 650;
    const project = (x, y, z, rotX, rotY, rotZ, centerOffsetY = 0) => {
      // Rotate Y (yaw)
      let x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
      let z1 = x * Math.sin(rotY) + z * Math.cos(rotY);

      // Rotate X (pitch)
      let y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
      let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

      // Rotate Z (roll)
      let x3 = x1 * Math.cos(rotZ) - y2 * Math.sin(rotZ);
      let y3 = x1 * Math.sin(rotZ) + y2 * Math.cos(rotZ);

      // Camera distance offset
      const camDist = 600;
      const totalZ = z2 + camDist;

      if (totalZ <= 10) return null;

      const scale = fov / totalZ;
      // Position model towards the right on wide screens to leave left area clean for text
      const centerX = width >= 1024 ? width * 0.66 : width * 0.5;
      return {
        x: centerX + x3 * scale,
        y: height / 2 + (y3 + centerOffsetY) * scale,
        z: totalZ,
        scale,
      };
    };

    // ─── FLOATING PARTICLES (STREAMING UPWARD) ───
    const particleCount = 70;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 700,
        y: Math.random() * 300 - 50,
        z: (Math.random() - 0.5) * 700,
        vy: 0.35 + Math.random() * 0.65,
        size: 0.8 + Math.random() * 1.4,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let time = 0;

    // ─── MAIN ANIMATION LOOP ───
    const render = () => {
      time += 0.016;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width >= 1024 ? width * 0.66 : width * 0.5;

      // Voltale dark brand background gradient (ink / neutral dark)
      const bgGrad = ctx.createRadialGradient(
        centerX,
        height * 0.55,
        40,
        centerX,
        height * 0.55,
        width * 0.75
      );
      bgGrad.addColorStop(0, '#1a1a18');
      bgGrad.addColorStop(0.45, '#111111');
      bgGrad.addColorStop(1, '#0b0b0a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ─── 1. CYBERNETIC RADAR / HOLOGRAPHIC BASE PLATFORM (MONOCHROME/SILVER) ───
      const basePitch = 0.88 + mouse.y * 0.3;
      const baseYaw = time * 0.15 + mouse.x * 0.5;
      const platformCenterY = 160;

      // Draw concentric radar circles
      const radarRadii = [340, 290, 230, 170, 110, 60];
      radarRadii.forEach((rad, idx) => {
        const segments = 48;
        ctx.beginPath();
        let firstPt = null;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2 + (idx % 2 === 0 ? time * 0.08 : -time * 0.05);
          const px = Math.cos(angle) * rad;
          const pz = Math.sin(angle) * rad;
          const pt = project(px, platformCenterY, pz, basePitch, baseYaw, 0);
          if (pt) {
            if (!firstPt) {
              firstPt = pt;
              ctx.moveTo(pt.x, pt.y);
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
        }
        ctx.strokeStyle = idx === 0 ? 'rgba(255, 255, 255, 0.35)' : idx === 2 ? 'rgba(248, 248, 246, 0.22)' : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = idx === 0 ? 1.5 : 1;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = idx === 0 ? 10 : 3;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Rotating Radar sweep line
      const sweepAngle = time * 1.4;
      const sweepEnd = project(
        Math.cos(sweepAngle) * 340,
        platformCenterY,
        Math.sin(sweepAngle) * 340,
        basePitch,
        baseYaw,
        0
      );
      const sweepCenter = project(0, platformCenterY, 0, basePitch, baseYaw, 0);
      if (sweepCenter && sweepEnd) {
        ctx.beginPath();
        ctx.moveTo(sweepCenter.x, sweepCenter.y);
        ctx.lineTo(sweepEnd.x, sweepEnd.y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1.6;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Radial coordinate grid spokes
      for (let i = 0; i < 16; i++) {
        const spokeAngle = (i / 16) * Math.PI * 2;
        const p1 = project(Math.cos(spokeAngle) * 60, platformCenterY, Math.sin(spokeAngle) * 60, basePitch, baseYaw, 0);
        const p2 = project(Math.cos(spokeAngle) * 340, platformCenterY, Math.sin(spokeAngle) * 340, basePitch, baseYaw, 0);
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = i % 4 === 0 ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.06)';
          ctx.lineWidth = i % 4 === 0 ? 1 : 0.6;
          ctx.stroke();
        }
      }

      // Base coordinate tick marks / dots
      for (let i = 0; i < 24; i++) {
        const tickAngle = (i / 24) * Math.PI * 2 + time * 0.02;
        const pt = project(Math.cos(tickAngle) * 290, platformCenterY, Math.sin(tickAngle) * 290, basePitch, baseYaw, 0);
        if (pt) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
          ctx.fill();
        }
      }

      // ─── 2. FLOATING PARTICLES (STREAMING UPWARD) ───
      particles.forEach((p) => {
        p.y -= p.vy;
        if (p.y < -220) {
          p.y = platformCenterY;
          p.x = (Math.random() - 0.5) * 500;
          p.z = (Math.random() - 0.5) * 500;
        }

        const proj = project(p.x, p.y, p.z, basePitch, baseYaw, 0);
        if (proj) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.75})`;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // ─── 3. 3D ASSEMBLE / DISASSEMBLE HOLOGRAPHIC DRONE ───
      // Cycle: 0 -> 1 (Disassembling exploded view), 1 -> 0 (Assembling together)
      const cyclePeriod = 9;
      const cycleProgress = (time % cyclePeriod) / cyclePeriod;
      
      let explodeFactor;
      if (cycleProgress < 0.4) {
        // Exploding out
        const tNorm = cycleProgress / 0.4;
        explodeFactor = 0.5 - 0.5 * Math.cos(tNorm * Math.PI);
      } else if (cycleProgress < 0.55) {
        // Holding exploded blueprint view
        explodeFactor = 1;
      } else if (cycleProgress < 0.9) {
        // Assembling back together
        const tNorm = (cycleProgress - 0.55) / 0.35;
        explodeFactor = 0.5 + 0.5 * Math.cos(tNorm * Math.PI);
      } else {
        // Holding assembled hovering view
        explodeFactor = 0;
      }

      // Hover bobbing motion
      const hoverY = Math.sin(time * 2) * 12 - 20;
      const dronePitch = mouse.y * 0.4 + Math.sin(time * 1.2) * 0.05 + 0.28;
      const droneYaw = time * 0.45 + mouse.x * 0.6;
      const droneRoll = Math.sin(time * 1.5) * 0.04;

      // Holographic draw line helper
      const drawHoloLine = (p1, p2, color = 'rgba(255, 255, 255, 0.75)', width = 1.4, glow = 8) => {
        if (!p1 || !p2) return;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        if (glow > 0) {
          ctx.shadowColor = color;
          ctx.shadowBlur = glow;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      };

      // Holographic Polygon wireframe helper
      const drawWireframePoly = (vertices, color = 'rgba(255, 255, 255, 0.75)', strokeWidth = 1.2, glow = 6, fill = 'rgba(255, 255, 255, 0.04)') => {
        const projected = vertices.map((v) => project(v.x, v.y + hoverY, v.z, dronePitch, droneYaw, droneRoll));
        if (projected.some((p) => !p)) return;

        ctx.beginPath();
        ctx.moveTo(projected[0].x, projected[0].y);
        for (let i = 1; i < projected.length; i++) {
          ctx.lineTo(projected[i].x, projected[i].y);
        }
        ctx.closePath();

        if (fill) {
          ctx.fillStyle = fill;
          ctx.fill();
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        if (glow > 0) {
          ctx.shadowColor = color;
          ctx.shadowBlur = glow;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      };

      // ─── A. FUSELAGE / CORE CHASSIS ───
      const canopyOffsetY = -explodeFactor * 55;
      const podOffsetY = explodeFactor * 45;

      // 1. Central Core Body (Carbon chassis box)
      const fw = 42; // half-width
      const fl = 65; // half-length
      const fh = 16; // half-height

      const coreVertices = [
        { x: -fw * 0.7, y: -fh, z: -fl },
        { x: fw * 0.7, y: -fh, z: -fl },
        { x: fw, y: -fh * 0.4, z: fl * 0.5 },
        { x: fw * 0.5, y: -fh * 0.4, z: fl },
        { x: -fw * 0.5, y: -fh * 0.4, z: fl },
        { x: -fw, y: -fh * 0.4, z: fl * 0.5 },
      ];
      drawWireframePoly(coreVertices, 'rgba(255, 255, 255, 0.85)', 1.5, 10, 'rgba(255, 255, 255, 0.06)');

      const coreBottomVertices = [
        { x: -fw * 0.6, y: fh, z: -fl * 0.9 },
        { x: fw * 0.6, y: fh, z: -fl * 0.9 },
        { x: fw * 0.8, y: fh * 0.6, z: fl * 0.4 },
        { x: fw * 0.4, y: fh * 0.6, z: fl * 0.9 },
        { x: -fw * 0.4, y: fh * 0.6, z: fl * 0.9 },
        { x: -fw * 0.8, y: fh * 0.6, z: fl * 0.4 },
      ];
      drawWireframePoly(coreBottomVertices, 'rgba(248, 248, 246, 0.65)', 1.2, 6, 'rgba(255, 255, 255, 0.03)');

      // Connect top and bottom chassis vertices
      for (let i = 0; i < coreVertices.length; i++) {
        const p1 = project(coreVertices[i].x, coreVertices[i].y + hoverY, coreVertices[i].z, dronePitch, droneYaw, droneRoll);
        const p2 = project(coreBottomVertices[i].x, coreBottomVertices[i].y + hoverY, coreBottomVertices[i].z, dronePitch, droneYaw, droneRoll);
        drawHoloLine(p1, p2, 'rgba(255, 255, 255, 0.55)', 1.2, 5);
      }

      // 2. Exploding Upper Canopy
      const canopyVerts = [
        { x: 0, y: -fh - 14 + canopyOffsetY, z: 10 },
        { x: -fw * 0.5, y: -fh - 4 + canopyOffsetY, z: -fl * 0.7 },
        { x: fw * 0.5, y: -fh - 4 + canopyOffsetY, z: -fl * 0.7 },
        { x: fw * 0.6, y: -fh - 4 + canopyOffsetY, z: fl * 0.4 },
        { x: 0, y: -fh - 8 + canopyOffsetY, z: fl * 0.8 },
        { x: -fw * 0.6, y: -fh - 4 + canopyOffsetY, z: fl * 0.4 },
      ];
      drawWireframePoly(canopyVerts, 'rgba(255, 255, 255, 0.95)', 1.6, 12, 'rgba(255, 255, 255, 0.08)');

      // Assembling Guide Trajectory Beams (laser tether during explosion)
      if (explodeFactor > 0.05) {
        const apexPt = project(0, -fh - 14 + canopyOffsetY, 10 + hoverY, dronePitch, droneYaw, droneRoll);
        const coreBasePt = project(0, -fh + hoverY, 10, dronePitch, droneYaw, droneRoll);
        drawHoloLine(apexPt, coreBasePt, `rgba(255, 255, 255, ${explodeFactor * 0.6})`, 1, 6);
      }

      // 3. Exploding Gimbal Camera / Sensor Pod
      const gimbalVerts = [
        { x: -14, y: fh + 8 + podOffsetY, z: fl * 0.35 },
        { x: 14, y: fh + 8 + podOffsetY, z: fl * 0.35 },
        { x: 14, y: fh + 24 + podOffsetY, z: fl * 0.65 },
        { x: -14, y: fh + 24 + podOffsetY, z: fl * 0.65 },
      ];
      drawWireframePoly(gimbalVerts, 'rgba(248, 248, 246, 0.85)', 1.4, 8, 'rgba(255, 255, 255, 0.08)');

      // Glowing Camera Eye Lens
      const lensPt = project(0, fh + 16 + podOffsetY + hoverY, fl * 0.65, dronePitch, droneYaw, droneRoll);
      if (lensPt) {
        ctx.beginPath();
        ctx.arc(lensPt.x, lensPt.y, 4.5 * lensPt.scale, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowColor = 'rgba(255, 255, 255, 1)';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ─── B. 4 QUADCOPTER ROTOR ARMS & MOTOR PODS ───
      const armLength = 160;
      const armAngles = [
        Math.PI * 0.25,  // Front Right
        Math.PI * 0.75,  // Front Left
        Math.PI * 1.25,  // Rear Left
        Math.PI * 1.75,  // Rear Right
      ];

      armAngles.forEach((angle, idx) => {
        // Explosion displacement vector for each arm
        const explodeDist = explodeFactor * 75;
        const explodeUp = -explodeFactor * 25;
        const ex = Math.cos(angle) * explodeDist;
        const ez = Math.sin(angle) * explodeDist;
        const ey = explodeUp;

        // Arm root on chassis
        const rootX = Math.cos(angle) * (fw * 0.75);
        const rootZ = Math.sin(angle) * (fl * 0.6);
        const rootY = 0;

        // Arm end at motor pod
        const endX = Math.cos(angle) * armLength + ex;
        const endZ = Math.sin(angle) * (armLength * 1.05) + ez;
        const endY = -12 + ey;

        const pRoot = project(rootX, rootY + hoverY, rootZ, dronePitch, droneYaw, droneRoll);
        const pEnd = project(endX, endY + hoverY, endZ, dronePitch, droneYaw, droneRoll);

        // Dual Carbon Spar Arm Beam
        const pRootUpper = project(rootX, rootY - 6 + hoverY, rootZ, dronePitch, droneYaw, droneRoll);
        const pEndUpper = project(endX, endY - 6 + hoverY, endZ, dronePitch, droneYaw, droneRoll);
        drawHoloLine(pRoot, pEnd, 'rgba(255, 255, 255, 0.8)', 1.6, 8);
        drawHoloLine(pRootUpper, pEndUpper, 'rgba(248, 248, 246, 0.5)', 1, 4);

        // Disassembly laser tether between chassis and exploded arm
        if (explodeFactor > 0.05) {
          const origEnd = project(Math.cos(angle) * armLength, -12 + hoverY, Math.sin(angle) * (armLength * 1.05), dronePitch, droneYaw, droneRoll);
          drawHoloLine(pEnd, origEnd, `rgba(255, 255, 255, ${explodeFactor * 0.5})`, 0.8, 5);
        }

        // Motor Pod Cylinder
        const motorRadius = 14;
        const motorHeight = 18;
        const motorSegs = 12;

        // Motor Top Ring
        ctx.beginPath();
        let firstMotorPt = null;
        for (let m = 0; m <= motorSegs; m++) {
          const mAng = (m / motorSegs) * Math.PI * 2;
          const mx = endX + Math.cos(mAng) * motorRadius;
          const mz = endZ + Math.sin(mAng) * motorRadius;
          const mPt = project(mx, endY - motorHeight * 0.5 + hoverY, mz, dronePitch, droneYaw, droneRoll);
          if (mPt) {
            if (!firstMotorPt) {
              firstMotorPt = mPt;
              ctx.moveTo(mPt.x, mPt.y);
            } else {
              ctx.lineTo(mPt.x, mPt.y);
            }
          }
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Motor Bottom Ring & Landing Standoff Strut
        const strutBottom = project(endX, endY + 45 + hoverY, endZ, dronePitch, droneYaw, droneRoll);
        drawHoloLine(pEnd, strutBottom, 'rgba(248, 248, 246, 0.75)', 1.5, 6);

        // Landing footpad
        if (strutBottom) {
          ctx.beginPath();
          ctx.arc(strutBottom.x, strutBottom.y, 3 * strutBottom.scale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.fill();
        }

        // 3. Fast Spinning 3D Propeller Blades
        const bladeRadius = 68;
        const bladeSpinSpeed = 22;
        const rotorAngle = time * bladeSpinSpeed * (idx % 2 === 0 ? 1 : -1) + idx * (Math.PI / 2);
        const propHeight = endY - motorHeight * 0.6 - (explodeFactor * 30);

        const b1x = endX + Math.cos(rotorAngle) * bladeRadius;
        const b1z = endZ + Math.sin(rotorAngle) * bladeRadius;
        const b2x = endX + Math.cos(rotorAngle + Math.PI) * bladeRadius;
        const b2z = endZ + Math.sin(rotorAngle + Math.PI) * bladeRadius;

        const pHub = project(endX, propHeight + hoverY, endZ, dronePitch, droneYaw, droneRoll);
        const pB1 = project(b1x, propHeight + hoverY, b1z, dronePitch, droneYaw, droneRoll);
        const pB2 = project(b2x, propHeight + hoverY, b2z, dronePitch, droneYaw, droneRoll);

        // Draw Propeller disc blur & blade outlines
        if (pHub && pB1 && pB2) {
          // Spinning motion blur disc
          ctx.beginPath();
          ctx.ellipse(
            pHub.x,
            pHub.y,
            bladeRadius * pHub.scale * 1.05,
            bladeRadius * pHub.scale * 0.38,
            droneYaw,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Blades
          drawHoloLine(pHub, pB1, 'rgba(255, 255, 255, 0.85)', 2.2, 10);
          drawHoloLine(pHub, pB2, 'rgba(255, 255, 255, 0.85)', 2.2, 10);

          // Blade tip glowing aerodynamic markers
          ctx.beginPath();
          ctx.arc(pB1.x, pB1.y, 2.5 * pB1.scale, 0, Math.PI * 2);
          ctx.arc(pB2.x, pB2.y, 2.5 * pB2.scale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.shadowColor = 'rgba(255, 255, 255, 1)';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Motor Hub Cap
        if (pHub) {
          ctx.beginPath();
          ctx.arc(pHub.x, pHub.y, 3.5 * pHub.scale, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.shadowColor = 'rgba(255, 255, 255, 1)';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // ─── 4. HUD TELEMETRY OVERLAYS & STATUS (MONOCHROME) ───
      const statusPt = project(0, hoverY - 90, 0, dronePitch, droneYaw, droneRoll);
      if (statusPt) {
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.textAlign = 'center';
        const modeText = explodeFactor > 0.6 ? 'SCHEMATIC // EXPLODED_VIEW' : explodeFactor > 0.1 ? 'DIAGNOSTICS // CALIBRATING' : 'DRONE_CORE // ACTIVE_FLIGHT';
        ctx.fillText(modeText, statusPt.x, statusPt.y);

        // Progress bar for assemble / disassemble phase
        const barWidth = 100;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.strokeRect(statusPt.x - barWidth / 2, statusPt.y + 6, barWidth, 3);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(statusPt.x - barWidth / 2, statusPt.y + 6, barWidth * (1 - explodeFactor), 3);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink pointer-events-none select-none">
      {/* 3D Holographic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Cyber Grid Texture Overlay in Neutral White */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Scanline overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.05) 2px, rgba(255, 255, 255, 0.05) 4px)',
        }}
      />

      {/* Edge Vignette gradients matching Voltale's dark ink palette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink via-ink/75 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink via-ink/75 to-transparent pointer-events-none" />
    </div>
  );
}