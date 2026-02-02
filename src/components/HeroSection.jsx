import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', backgroundColor: '#f5f5f7' }}>
      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <style>{`
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 80px 80px;
          background-position: center center;
          pointer-events: none;
          z-index: 1;
        }
        .hero-crosshair {
          position: absolute;
          width: 12px;
          height: 12px;
          pointer-events: none;
          z-index: 2;
        }
        .hero-crosshair::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0,0,0,0.15);
          transform: translateY(-50%);
        }
        .hero-crosshair::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0,0,0,0.15);
          transform: translateX(-50%);
        }
        @keyframes meshDrift1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }
        @keyframes meshDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, 15px); }
        }
        @keyframes meshDrift3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 20px); }
        }
        .mesh-1 { animation: meshDrift1 9s ease-in-out infinite; }
        .mesh-2 { animation: meshDrift2 11s ease-in-out infinite; }
        .mesh-3 { animation: meshDrift3 7s ease-in-out infinite; }
        .mesh-4 { animation: meshDrift1 13s ease-in-out infinite reverse; }
        @keyframes rotateCube {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }
        .cube-container {
          animation: rotateCube 20s linear infinite;
          transform-style: preserve-3d;
        }
        .mesh-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, #f5f5f7 0%, transparent 25%, transparent 75%, #f5f5f7 100%);
          z-index: 3;
          pointer-events: none;
        }
        .mesh-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #f5f5f7 0%, transparent 15%, transparent 85%, #f5f5f7 100%);
          z-index: 3;
          pointer-events: none;
        }
      `}</style>

      {/* Grid */}
      <div className="hero-grid" />

      {/* Crosshairs */}
      <div className="hero-crosshair" style={{ top: '12%', left: '15%' }} />
      <div className="hero-crosshair" style={{ top: '12%', right: '15%' }} />
      <div className="hero-crosshair" style={{ bottom: '18%', left: '15%' }} />
      <div className="hero-crosshair" style={{ bottom: '18%', right: '15%' }} />

      {/* Gradient mesh — lower half */}
      <div className="mesh-container" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <div className="mesh-1" style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '550px', height: '550px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,146,60,0.55) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
        <div className="mesh-2" style={{
          position: 'absolute', bottom: '5%', left: '30%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244,114,182,0.45) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
        <div className="mesh-3" style={{
          position: 'absolute', bottom: '-8%', right: '-8%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.5) 0%, transparent 70%)',
          filter: 'blur(45px)'
        }} />
        <div className="mesh-4" style={{
          position: 'absolute', bottom: '10%', right: '25%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%)',
          filter: 'blur(35px)'
        }} />
      </div>

      {/* 3D wireframe hexagon — lower center */}
      <div style={{
        position: 'absolute', bottom: '8%', left: '50%',
        transform: 'translateX(-50%)', zIndex: 2,
        width: '220px', height: '220px', perspective: '800px'
      }}>
        <div className="cube-container" style={{ width: '100%', height: '100%' }}>
          <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <polygon points="110,10 205,60 205,160 110,210 15,160 15,60" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
            <polygon points="110,45 175,82 175,138 110,175 45,138 45,82" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8" fill="none" />
            <line x1="110" y1="10" x2="110" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="205" y1="60" x2="175" y2="82" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="205" y1="160" x2="175" y2="138" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="110" y1="210" x2="110" y2="175" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="15" y1="160" x2="45" y2="138" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="15" y1="60" x2="45" y2="82" stroke="rgba(0,0,0,0.1)" strokeWidth="0.6" />
            <line x1="110" y1="45" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <line x1="175" y1="82" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <line x1="175" y1="138" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <line x1="110" y1="175" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <line x1="45" y1="138" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <line x1="45" y1="82" x2="110" y2="110" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
            <circle cx="110" cy="110" r="2.5" fill="rgba(0,0,0,0.2)" />
          </svg>
        </div>
      </div>

      {/* Content — original sysaitech copy, untouched */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '0 24px' }}>
        <div style={{ maxWidth: '860px', textAlign: 'center', marginTop: '-60px' }}>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Custom AI Solutions & Growth Marketing for Forward-Thinking Businesses
          </h1>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 max-w-3xl mx-auto">
            We combine cutting-edge AI development with strategic marketing to help businesses innovate, grow, and stay ahead
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Book Free Consultation
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 text-sm font-semibold rounded-full border border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-200 w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;