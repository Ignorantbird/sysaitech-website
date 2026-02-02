import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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

  const team = [
    {
      name: "Sarmistha Debnath",
      role: "Co-Founder & CTO",
      bio: "Leads AI automation and technical architecture at sysaitech. Expertise in building intelligent systems using Python, machine learning, and natural language processing. From developing AI voice agents to implementing enterprise CRM automation, focused on delivering solutions that eliminate manual workflows and accelerate business growth.",
      image: "/team-photos/sarmistha.jpg",
      layout: "left"
    },
    {
      name: "Yashdeep Bali",
      role: "Co-Founder & Chief Growth Officer",
      bio: "Drives business development and strategic growth at sysaitech, bringing over 22 years of experience in advertising and marketing across telecom, technology, consumer electronics, automobiles, fast food, and gaming. Focused on helping companies leverage AI and strategic marketing to achieve measurable outcomes and competitive advantage.",
      image: "/team-photos/yashdeep.jpg",
      layout: "right"
    },
    {
      name: "Sutapa Saha",
      role: "Co-Founder & Head of Business Development",
      bio: "Drives business development and strategic partnerships at sysaitech, bringing expertise in sales, client relations, and operations management. Background in corporate sales across fintech and creative industries. Focused on building lasting client relationships and identifying growth opportunities that align technology solutions with real business needs.",
      image: "/team-photos/sutapa.jpg",
      layout: "left"
    }
  ];

  const values = [
    { 
      title: "Technical Excellence", 
      description: "We're engineers first. Every solution we build is grounded in solid technical fundamentals and best practices.",
      icon: "⚡"
    },
    { 
      title: "Client-First", 
      description: "Your success is our success. We measure ourselves by the results we deliver, not the hours we bill.",
      icon: "🎯"
    },
    { 
      title: "Honest Communication", 
      description: "No jargon. No overpromising. We tell you what's possible, what's not, and what it will take to get there.",
      icon: "💬"
    },
    { 
      title: "Execution Over Ideas", 
      description: "Ideas are easy. Shipping products is hard. We're builders who get things done.",
      icon: "🚀"
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero with rich animated background */}
      <section style={{ 
        background: 'linear-gradient(180deg, #fff 0%, #fafafa 100%)',
        padding: '80px 0 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
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

        {/* Gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift1 12s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-8%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'meshDrift2 15s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-5%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'meshDrift3 10s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'meshDrift1 18s ease-in-out infinite reverse',
          pointerEvents: 'none',
          zIndex: 2
        }} />

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
            <div>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.65)',
                fontWeight: 600,
                marginBottom: '18px'
              }}>
                About
              </p>
              <h1 className="font-bold text-gray-900" style={{
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                lineHeight: 1.1,
                maxWidth: '560px',
                marginBottom: '18px'
              }}>
                About sysaitech
              </h1>
              <p style={{
                fontSize: '16px',
                color: 'rgba(0,0,0,0.65)',
                lineHeight: 1.7,
                maxWidth: '480px'
              }}>
                Building AI solutions that drive real business outcomes
              </p>
            </div>

            {/* 3D Rotating Cube */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '280px',
                height: '280px',
                perspective: '1000px',
                position: 'relative'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  animation: 'rotateCube 25s linear infinite'
                }}>
                  <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 
                    width: '100%', 
                    height: '100%',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                  }}>
                    <rect x="40" y="40" width="200" height="200" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="none" rx="4" />
                    <rect x="80" y="80" width="120" height="120" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" fill="none" rx="3" />
                    <line x1="40" y1="40" x2="80" y2="80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                    <line x1="240" y1="40" x2="200" y2="80" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                    <line x1="240" y1="240" x2="200" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                    <line x1="40" y1="240" x2="80" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                    <line x1="140" y1="80" x2="140" y2="200" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
                    <line x1="80" y1="140" x2="200" y2="140" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" />
                    <circle cx="40" cy="40" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="240" cy="40" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="240" cy="240" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="40" cy="240" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="140" cy="140" r="4" fill="rgba(0,0,0,0.25)" />
                    <line x1="80" y1="80" x2="140" y2="140" stroke="rgba(0,0,0,0.06)" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="200" y1="80" x2="140" y2="140" stroke="rgba(0,0,0,0.06)" strokeWidth="0.8" strokeDasharray="2,2" />
                  </svg>
                </div>

                {/* Floating accent shapes */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-15%',
                  width: '50px',
                  height: '50px',
                  border: '1.5px solid rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent1 6s ease-in-out infinite',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '-10%',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  background: 'rgba(251,146,60,0.15)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent2 8s ease-in-out infinite',
                  boxShadow: '0 4px 12px rgba(251,146,60,0.2)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '40%',
                  right: '-8%',
                  width: '25px',
                  height: '25px',
                  border: '1px solid rgba(168,85,247,0.3)',
                  borderRadius: '6px',
                  background: 'rgba(168,85,247,0.1)',
                  animation: 'floatAccent3 7s ease-in-out infinite',
                  transform: 'rotate(45deg)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '10%',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(52,211,153,0.2)',
                  animation: 'floatAccent1 5s ease-in-out infinite reverse'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edge */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)' }} />

      {/* Story section */}
      <section style={{ 
        background: '#111', 
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                fontWeight: 600,
                marginBottom: '24px'
              }}>
                Our Story
              </p>
              <h2 className="font-bold" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                lineHeight: 1.15,
                color: '#fff',
                maxWidth: '420px'
              }}>
                We build what we believe in — and we ship it.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                sysaitech was founded with a simple belief: AI and intelligent technology should drive real business outcomes, not just impressive demos.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                We're a team of engineers, marketers, and business strategists who got tired of seeing companies invest in technology that doesn't move the needle. So we built sysaitech to bridge that gap — combining deep technical expertise with a laser focus on growth and results.
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                We don't just consult. We build. Mechanic Assist, our AI product for automotive service centers, is proof that we practice what we preach.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '80px' }} className="grid md:grid-cols-2 gap-6">
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px'
            }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Mission
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Help forward-thinking businesses innovate and scale through custom AI solutions and strategic growth marketing.
              </p>
            </div>
            <div style={{
              padding: '32px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px'
            }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Approach
              </p>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Technology without strategy is just expensive toys. Strategy without execution is just talk. We do both — and we do them well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section - NEW LARGE PHOTO LAYOUT */}
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
            The Team
          </p>

          {team.map((member, i) => (
            <TeamMemberLarge key={i} member={member} index={i} />
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)' }} />

      {/* Values section */}
      <section style={{ 
        background: '#111', 
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            fontWeight: 600,
            marginBottom: '56px'
          }}>
            What We Stand For
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ValueCard key={i} value={value} />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)' }} />

      {/* CTA section */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '32px'
        }}>
          <div>
            <h2 className="font-bold text-gray-900" style={{ 
              fontSize: 'clamp(28px, 4vw, 40px)', 
              lineHeight: 1.2, 
              marginBottom: '12px'
            }}>
              Want to work with us?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.7 }}>
              Let's discuss how we can help your business grow.
            </p>
          </div>
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
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              flexShrink: 0
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#222';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#111';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            }}
          >
            Get In Touch
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
        
        @keyframes rotateCube {
          0% { transform: rotateY(0deg) rotateX(15deg); }
          100% { transform: rotateY(360deg) rotateX(15deg); }
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
      `}</style>
    </div>
  );
};

/* LARGE TEAM MEMBER COMPONENT - Magazine-style layout */
const TeamMemberLarge = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        marginBottom: index < 2 ? '80px' : '0',
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: isHovered 
          ? '0 12px 40px rgba(0,0,0,0.12)' 
          : '0 4px 12px rgba(0,0,0,0.06)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className={`grid md:grid-cols-2 ${member.layout === 'right' ? 'md:grid-flow-dense' : ''}`}>
        
        {/* Photo Column */}
        <div 
          className={member.layout === 'right' ? 'md:col-start-2' : ''} 
          style={{ 
            position: 'relative', 
            overflow: 'hidden',
            minHeight: '400px'
          }}
        >
          <img 
            src={member.image} 
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              minHeight: '500px',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          {/* Gradient overlay for visual cohesion */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: member.layout === 'left' 
              ? 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 100%)' 
              : 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.02) 100%)'
          }} />
        </div>

        {/* Bio Column */}
        <div style={{
          padding: '60px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h3 style={{ 
            fontSize: '28px', 
            fontWeight: 700, 
            color: '#111', 
            marginBottom: '8px',
            lineHeight: 1.2
          }}>
            {member.name}
          </h3>
          
          <p style={{
            fontSize: '13px',
            color: 'rgba(0,0,0,0.65)',
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}>
            {member.role}
          </p>

          <p style={{ 
            fontSize: '15px', 
            color: 'rgba(0,0,0,0.7)', 
            lineHeight: 1.8
          }}>
            {member.bio}
          </p>
        </div>

      </div>
    </div>
  );
};

const ValueCard = ({ value }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '32px 24px',
        background: isHovered ? 'rgba(255,255,255,0.05)' : 'transparent',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        fontSize: '32px',
        marginBottom: '16px'
      }}>
        {value.icon}
      </div>
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: 700, 
        color: '#fff', 
        marginBottom: '12px' 
      }}>
        {value.title}
      </h3>
      <p style={{ 
        fontSize: '13.5px', 
        color: 'rgba(255,255,255,0.35)', 
        lineHeight: 1.7 
      }}>
        {value.description}
      </p>
    </div>
  );
};

export default AboutPage;