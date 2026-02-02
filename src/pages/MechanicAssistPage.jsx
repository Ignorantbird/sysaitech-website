import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MechanicAssistPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 600;

    // Particle system
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
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

          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.06 * (1 - distance / 100)})`;
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
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const problems = [
    { number: '01', title: 'Time Wasted Searching', description: 'Technicians spend up to 30% of their time searching through service manuals instead of actually fixing vehicles.' },
    { number: '02', title: 'Complex Documentation', description: 'Hundreds of pages make it difficult to find specific procedures, torque specifications, or diagnostic steps quickly.' },
    { number: '03', title: 'Training Challenges', description: 'Training new mechanics takes longer when they have to learn how to navigate extensive technical documentation.' }
  ];

  const steps = [
    { number: '01', title: 'Upload Your Manuals', description: 'Add your existing service manuals, technical bulletins, and documentation. Works with PDFs and standard formats.' },
    { number: '02', title: 'AI Processes Everything', description: 'Our AI reads, understands, and indexes your documentation — learning the technical language specific to automotive service.' },
    { number: '03', title: 'Ask Questions Naturally', description: 'Technicians type or speak questions in plain language. Get instant, accurate answers with source references.' }
  ];

  const features = [
    { title: 'Natural Language Queries', description: 'No complex search syntax. Just ask questions the way you\'d ask a senior technician.' },
    { title: 'Fast & Accurate', description: 'Get answers in seconds with source references so you can verify the information.' },
    { title: 'Works With Your Manuals', description: 'Use your existing documentation — no need to change formats or systems.' },
    { title: 'Reduces Training Time', description: 'New technicians can find information independently without interrupting senior staff.' },
    { title: 'Multi-Manual Search', description: 'Search across all your service manuals at once — no more guessing which manual has the answer.' },
    { title: 'Source References', description: 'Every answer includes references to the source material for verification and compliance.' }
  ];

  const audiences = [
    { title: 'Car Dealerships', description: 'Improve service department efficiency and reduce diagnostic time across all brands you service.' },
    { title: 'Independent Service Centers', description: 'Compete with dealerships by providing faster, more accurate service without hiring additional staff.' },
    { title: 'Auto Repair Shops', description: 'Handle more vehicles per day by eliminating time wasted on manual searches.' },
    { title: 'Training Centers', description: 'Help students learn faster with instant access to technical information during hands-on training.' }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero with rich animated background + 3D gear */}
      <section style={{ 
        background: 'linear-gradient(180deg, #fff 0%, #fafafa 100%)',
        padding: '80px 0 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated particle canvas */}
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

        {/* Multiple gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift1 12s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-8%',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'meshDrift2 15s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-5%',
          right: '15%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)',
          filter: 'blur(65px)',
          animation: 'meshDrift3 10s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.65)',
                fontWeight: 600,
                marginBottom: '18px'
              }}>
                Our Product
              </p>
              <h1 className="font-bold text-gray-900" style={{
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                lineHeight: 1.1,
                maxWidth: '560px',
                marginBottom: '18px'
              }}>
                Mechanic Assist
              </h1>
              <p style={{
                fontSize: '18px',
                color: 'rgba(0,0,0,0.7)',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                AI That Understands Your Service Manuals
              </p>
              <p style={{
                fontSize: '15px',
                color: 'rgba(0,0,0,0.65)',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '32px'
              }}>
                Stop wasting hours searching through technical documentation. Mechanic Assist uses AI to help automotive technicians find the information they need instantly.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 28px',
                  background: '#111',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#222'}
                onMouseLeave={e => e.currentTarget.style.background = '#111'}
              >
                Request a Demo
              </Link>
            </div>

            {/* Right - 3D Rotating Gear/Cog */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '300px',
                height: '300px',
                perspective: '1000px',
                position: 'relative'
              }}>
                {/* Rotating 3D Gear */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  animation: 'rotateGear 25s linear infinite'
                }}>
                  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 
                    width: '100%', 
                    height: '100%',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                  }}>
                    {/* Outer gear teeth - 8 teeth */}
                    <path d="M150,30 L160,50 L140,50 Z M250,85 L260,105 L240,105 Z M270,150 L290,160 L290,140 Z M250,215 L260,195 L240,195 Z M150,270 L160,250 L140,250 Z M50,215 L60,195 L40,195 Z M30,150 L10,140 L10,160 Z M50,85 L60,105 L40,105 Z" 
                      fill="rgba(0,0,0,0.08)" 
                      stroke="rgba(0,0,0,0.12)" 
                      strokeWidth="1"
                    />
                    
                    {/* Main gear circle */}
                    <circle cx="150" cy="150" r="100" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" />
                    <circle cx="150" cy="150" r="90" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" fill="rgba(0,0,0,0.02)" />
                    
                    {/* Inner circles */}
                    <circle cx="150" cy="150" r="70" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
                    <circle cx="150" cy="150" r="50" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" fill="none" />
                    <circle cx="150" cy="150" r="30" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" fill="rgba(0,0,0,0.03)" />
                    
                    {/* Spokes */}
                    <line x1="150" y1="50" x2="150" y2="250" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <line x1="50" y1="150" x2="250" y2="150" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <line x1="85" y1="85" x2="215" y2="215" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <line x1="215" y1="85" x2="85" y2="215" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    
                    {/* Center hub */}
                    <circle cx="150" cy="150" r="15" fill="rgba(0,0,0,0.15)" />
                    <circle cx="150" cy="150" r="5" fill="rgba(0,0,0,0.25)" />
                    
                    {/* Bolt holes on gear */}
                    <circle cx="150" cy="70" r="4" fill="rgba(0,0,0,0.12)" />
                    <circle cx="230" cy="150" r="4" fill="rgba(0,0,0,0.12)" />
                    <circle cx="150" cy="230" r="4" fill="rgba(0,0,0,0.12)" />
                    <circle cx="70" cy="150" r="4" fill="rgba(0,0,0,0.12)" />
                  </svg>
                </div>

                {/* Floating accent shapes - tools theme */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  right: '-12%',
                  width: '50px',
                  height: '50px',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent1 6s ease-in-out infinite',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  🔧
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '-10%',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgba(59,130,246,0.15)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent2 8s ease-in-out infinite',
                  boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  ⚙️
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: '45%',
                  right: '-8%',
                  width: '38px',
                  height: '38px',
                  border: '1.5px solid rgba(168,85,247,0.3)',
                  borderRadius: '8px',
                  background: 'rgba(168,85,247,0.1)',
                  animation: 'floatAccent3 7s ease-in-out infinite',
                  transform: 'rotate(45deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  <span style={{ transform: 'rotate(-45deg)' }}>🛠️</span>
                </div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '28%',
                  right: '12%',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(52,211,153,0.2)',
                  animation: 'floatAccent1 5s ease-in-out infinite reverse'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '18%',
                  left: '8%',
                  width: '32px',
                  height: '32px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.8)',
                  animation: 'floatAccent2 6s ease-in-out infinite reverse',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px'
                }}>
                  🔩
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Visual Comparison - NEW SECTION */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* LEFT: The Old Way - Struggling */}
            <div style={{
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              borderRadius: '16px',
              padding: '48px 40px',
              border: '1px solid rgba(220,38,38,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(220,38,38,0.1)',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#991b1b',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                The Old Way
              </div>

              {/* Illustration: Pile of manuals */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '32px',
                marginTop: '24px'
              }}>
                {/* Stack of manuals illustration */}
                <div style={{ position: 'relative', width: '200px', height: '180px' }}>
                  {/* Manual 1 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '10px',
                    width: '140px',
                    height: '40px',
                    background: '#dc2626',
                    borderRadius: '4px',
                    border: '2px solid #991b1b',
                    transform: 'rotate(-5deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#fff',
                    fontWeight: 600
                  }}>
                    MANUAL
                  </div>
                  {/* Manual 2 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '35px',
                    left: '20px',
                    width: '140px',
                    height: '40px',
                    background: '#dc2626',
                    borderRadius: '4px',
                    border: '2px solid #991b1b',
                    transform: 'rotate(3deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#fff',
                    fontWeight: 600
                  }}>
                    MANUAL
                  </div>
                  {/* Manual 3 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '70px',
                    left: '15px',
                    width: '140px',
                    height: '40px',
                    background: '#dc2626',
                    borderRadius: '4px',
                    border: '2px solid #991b1b',
                    transform: 'rotate(-2deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#fff',
                    fontWeight: 600
                  }}>
                    MANUAL
                  </div>
                  {/* Manual 4 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '105px',
                    left: '25px',
                    width: '140px',
                    height: '40px',
                    background: '#dc2626',
                    borderRadius: '4px',
                    border: '2px solid #991b1b',
                    transform: 'rotate(4deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#fff',
                    fontWeight: 600
                  }}>
                    MANUAL
                  </div>
                  {/* Frustrated emoji on top */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '20px',
                    fontSize: '48px',
                    animation: 'shake 2s ease-in-out infinite'
                  }}>
                    😫
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#991b1b',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Hours of Manual Searching
              </h3>
              <ul style={{
                fontSize: '14px',
                color: '#7f1d1d',
                lineHeight: 1.8,
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>❌</span>
                  <span>Flipping through hundreds of pages</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>❌</span>
                  <span>30% of time wasted searching</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>❌</span>
                  <span>Frustrated technicians</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>❌</span>
                  <span>Delays and inefficiency</span>
                </li>
              </ul>
            </div>

            {/* RIGHT: The New Way - AI Powered */}
            <div style={{
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              borderRadius: '16px',
              padding: '48px 40px',
              border: '1px solid rgba(22,163,74,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(22,163,74,0.15)',
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#15803d',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                With Mechanic Assist
              </div>

              {/* Illustration: Clean AI interface */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '32px',
                marginTop: '24px'
              }}>
                {/* Clean search interface */}
                <div style={{
                  width: '220px',
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(22,163,74,0.2)'
                }}>
                  {/* Search icon */}
                  <div style={{
                    fontSize: '48px',
                    textAlign: 'center',
                    marginBottom: '16px'
                  }}>
                    🔍
                  </div>
                  {/* Fake input */}
                  <div style={{
                    background: '#f5f5f5',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    fontSize: '11px',
                    color: '#666',
                    marginBottom: '12px',
                    fontFamily: 'monospace'
                  }}>
                    Torque spec for...
                  </div>
                  {/* Instant result indicator */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#16a34a',
                      animation: 'pulse 2s ease-in-out infinite'
                    }} />
                    <span style={{
                      fontSize: '10px',
                      color: '#16a34a',
                      fontWeight: 600
                    }}>
                      Answer in 2 seconds
                    </span>
                  </div>
                </div>
                {/* Happy emoji */}
                <div style={{
                  fontSize: '48px',
                  marginTop: '16px'
                }}>
                  😊
                </div>
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#15803d',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Instant AI-Powered Answers
              </h3>
              <ul style={{
                fontSize: '14px',
                color: '#166534',
                lineHeight: 1.8,
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>✅</span>
                  <span>Ask questions in plain language</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>✅</span>
                  <span>Get answers in seconds</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>✅</span>
                  <span>Happy, productive technicians</span>
                </li>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span>✅</span>
                  <span>70% faster diagnosis</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Edge */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)' }} />

      {/* Problem — dark numbered rows */}
      <section style={{ background: '#111', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontWeight: 600,
            marginBottom: '56px'
          }}>
            The Problem
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {problems.map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr 1fr',
                gap: '40px',
                padding: '32px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                borderBottom: i === problems.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                alignItems: 'start'
              }} className="grid-cols-1 md:grid-cols-[48px_1fr_1fr]">
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', paddingTop: '2px' }}>
                  {item.number}
                </span>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#fff' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — white, 3 steps */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.65)',
            fontWeight: 600,
            marginBottom: '56px'
          }}>
            How It Works
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} style={{ position: 'relative', paddingTop: '40px' }}>
                {/* Watermark number */}
                <span style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  fontSize: '64px',
                  fontWeight: 700,
                  color: 'rgba(0,0,0,0.05)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  fontFamily: 'monospace'
                }}>
                  {step.number}
                </span>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Example query callout */}
          <div style={{
            marginTop: '64px',
            padding: '28px 32px',
            background: '#111',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 600,
              flexShrink: 0
            }}>
              Example
            </span>
            <span style={{
              fontSize: '16px',
              color: '#fff',
              fontFamily: 'monospace',
              fontWeight: 500
            }}>
              "What's the torque spec for the oil drain plug on a 2022 Tata Nexon?"
            </span>
          </div>
        </div>
      </section>

      {/* Features — dark, 2-col row list */}
      <section style={{ background: '#111', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontWeight: 600,
            marginBottom: '56px'
          }}>
            What Makes It Different
          </p>

          <div className="grid md:grid-cols-2 gap-0">
            {features.map((feature, i) => (
              <div key={i} style={{
                padding: '28px 0',
                paddingRight: i % 2 === 0 ? '48px' : '0',
                paddingLeft: i % 2 === 1 ? '48px' : '0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                borderLeft: i % 2 === 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                borderBottom: i >= features.length - 2 ? '1px solid rgba(255,255,255,0.07)' : 'none'
              }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For — white, 4 horizontal rows */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.65)',
            fontWeight: 600,
            marginBottom: '56px'
          }}>
            Built For
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {audiences.map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '48px',
                padding: '28px 0',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderBottom: i === audiences.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                alignItems: 'start'
              }} className="grid-cols-1 md:grid-cols-2">
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#111' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot CTA — dark */}
      <section style={{ background: '#111', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              Pilot Program
            </p>
            <h2 className="font-bold" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.2,
              color: '#fff',
              marginBottom: '12px'
            }}>
              Join our pilot program
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '440px' }}>
              Get early access to Mechanic Assist and help shape the future of the product. Special pilot pricing: ₹60–70k.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 28px',
              background: '#fff',
              color: '#111',
              fontSize: '13px',
              fontWeight: 600,
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              flexShrink: 0
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e8e8e8'}
            onMouseLeave={e => e.currentTarget.style.background = '#fff'}
          >
            Apply for Pilot
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes meshDrift1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -30px); }
        }
        
        @keyframes meshDrift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, 35px); }
        }
        
        @keyframes meshDrift3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 25px); }
        }
        
        @keyframes rotateGear {
          0% { transform: rotateZ(0deg) rotateX(15deg); }
          100% { transform: rotateZ(360deg) rotateX(15deg); }
        }
        
        @keyframes floatAccent1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -20px) rotate(45deg); }
        }
        
        @keyframes floatAccent2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.1); }
        }
        
        @keyframes floatAccent3 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(-10px, 15px) rotate(90deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default MechanicAssistPage;