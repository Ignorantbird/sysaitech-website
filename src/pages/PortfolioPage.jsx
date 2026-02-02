import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const canvasRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

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

  const categories = ['All', 'AI Development', 'Marketing', '3D Work', 'Films'];

  const projects = [
    {
      category: "AI Development",
      title: "Mechanic Assist",
      description: "AI-powered assistant for automotive service centers that helps technicians find information from service manuals instantly through natural language queries.",
      tags: ["React", "FastAPI", "Pinecone", "OpenAI"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      category: "AI Development",
      title: "Custom AI Agent Platform",
      description: "Built an intelligent automation system that reduced manual processing time by 70% for a logistics company.",
      tags: ["Python", "LangChain", "Vector DB"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      category: "Marketing",
      title: "Performance Marketing Campaign",
      description: "Drove 300% ROI increase through data-driven paid advertising and conversion optimization strategies.",
      tags: ["PPC", "Analytics", "SEO"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      category: "Marketing",
      title: "Social Media Strategy",
      description: "Comprehensive social media strategy that increased engagement by 250% and follower growth by 180%.",
      tags: ["Social Media", "Content", "Strategy"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      category: "3D Work",
      title: "Product Prototype Design",
      description: "Created detailed 3D models and prototypes for a consumer electronics product launch.",
      tags: ["3D Modeling", "CAD", "Prototyping"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      category: "Films",
      title: "Brand Story Film",
      description: "Produced an AI-assisted brand story video that generated 2M+ views across social platforms.",
      tags: ["Video", "AI Film", "Storytelling"],
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero with rich animated background + 3D element */}
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
                Portfolio
              </p>
              <h1 className="font-bold text-gray-900" style={{
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                lineHeight: 1.1,
                maxWidth: '560px',
                marginBottom: '18px'
              }}>
                Our Work
              </h1>
              <p style={{
                fontSize: '16px',
                color: 'rgba(0,0,0,0.65)',
                lineHeight: 1.7,
                maxWidth: '480px'
              }}>
                From AI agents to marketing campaigns, here's what we've built.
              </p>
            </div>

            {/* Right - 3D Rotating Diamond/Octahedron */}
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
                {/* Rotating 3D Diamond */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  animation: 'rotateDiamond 20s linear infinite'
                }}>
                  <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 
                    width: '100%', 
                    height: '100%',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                  }}>
                    {/* Octahedron/Diamond shape */}
                    {/* Top pyramid */}
                    <polygon points="150,50 220,150 150,150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="rgba(0,0,0,0.02)" />
                    <polygon points="150,50 150,150 80,150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="rgba(0,0,0,0.02)" />
                    
                    {/* Bottom pyramid */}
                    <polygon points="150,250 220,150 150,150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="rgba(0,0,0,0.03)" />
                    <polygon points="150,250 150,150 80,150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="rgba(0,0,0,0.03)" />
                    
                    {/* Center lines */}
                    <line x1="150" y1="50" x2="150" y2="250" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                    <line x1="80" y1="150" x2="220" y2="150" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                    
                    {/* Inner diamond */}
                    <polygon points="150,100 190,150 150,200 110,150" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
                    
                    {/* Connecting lines to inner diamond */}
                    <line x1="150" y1="50" x2="150" y2="100" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="150" y1="200" x2="150" y2="250" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="80" y1="150" x2="110" y2="150" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="2,2" />
                    <line x1="190" y1="150" x2="220" y2="150" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="2,2" />
                    
                    {/* Corner dots */}
                    <circle cx="150" cy="50" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="220" cy="150" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="150" cy="250" r="3" fill="rgba(0,0,0,0.2)" />
                    <circle cx="80" cy="150" r="3" fill="rgba(0,0,0,0.2)" />
                    
                    {/* Center point */}
                    <circle cx="150" cy="150" r="4" fill="rgba(0,0,0,0.25)" />
                  </svg>
                </div>

                {/* Multiple floating accent shapes */}
                <div style={{
                  position: 'absolute',
                  top: '8%',
                  right: '-12%',
                  width: '55px',
                  height: '55px',
                  border: '1.5px solid rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent1 6s ease-in-out infinite',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '12%',
                  left: '-8%',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(251,146,60,0.15)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent2 8s ease-in-out infinite',
                  boxShadow: '0 4px 12px rgba(251,146,60,0.2)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '45%',
                  right: '-6%',
                  width: '28px',
                  height: '28px',
                  border: '1px solid rgba(168,85,247,0.3)',
                  borderRadius: '6px',
                  background: 'rgba(168,85,247,0.1)',
                  animation: 'floatAccent3 7s ease-in-out infinite',
                  transform: 'rotate(45deg)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '28%',
                  right: '12%',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(52,211,153,0.2)',
                  animation: 'floatAccent1 5s ease-in-out infinite reverse'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '18%',
                  left: '8%',
                  width: '18px',
                  height: '18px',
                  border: '1px solid rgba(244,114,182,0.3)',
                  borderRadius: '4px',
                  background: 'rgba(244,114,182,0.1)',
                  animation: 'floatAccent2 6s ease-in-out infinite reverse'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar — glass morphism style */}
      <div style={{
        position: 'sticky',
        top: '80px',
        zIndex: 40,
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '16px 0'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '999px',
                  border: 'none',
                  background: activeFilter === cat ? '#111' : 'rgba(0,0,0,0.05)',
                  color: activeFilter === cat ? '#fff' : 'rgba(0,0,0,0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === cat ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                }}
                onMouseEnter={e => {
                  if (activeFilter !== cat) {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.08)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeFilter !== cat) {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Project Cards Grid */}
      <section style={{ 
        background: '#fafafa',
        padding: '80px 0'
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <ProjectCard3D key={i} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.3)' }}>
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA — white background */}
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
              Want to see your project here?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.65)', lineHeight: 1.7 }}>
              Let's build something worth showing off.
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
            Start a Project
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
        
        @keyframes rotateDiamond {
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

/* 3D Floating Project Card Component */
const ProjectCard3D = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: '1000px',
        animation: `fadeIn 0.6s ease ${index * 0.1}s both`
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isHovered 
          ? '0 20px 60px rgba(0,0,0,0.15)' 
          : '0 4px 12px rgba(0,0,0,0.08)',
        transform: isHovered ? 'translateY(-12px) rotateX(2deg)' : 'translateY(0) rotateX(0deg)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        border: '1px solid rgba(0,0,0,0.06)'
      }}>
        {/* Image with Gradient Overlay */}
        <div style={{ 
          position: 'relative',
          paddingTop: '60%',
          background: project.gradient,
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            padding: '20px'
          }}>
            {project.title.split(' ')[0]}
          </div>
          
          {/* Floating Accent Shape */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            transform: isHovered ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
            transition: 'transform 0.4s ease'
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {/* Category Badge */}
          <div style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: 'rgba(0,0,0,0.05)',
            borderRadius: '999px',
            marginBottom: '12px'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(0,0,0,0.7)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {project.category}
            </span>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#111',
            marginBottom: '8px',
            lineHeight: 1.3
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '13.5px',
            color: 'rgba(0,0,0,0.7)',
            lineHeight: 1.6,
            marginBottom: '16px'
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.tags.map((tag, t) => (
              <span key={t} style={{
                fontSize: '11px',
                color: 'rgba(0,0,0,0.65)',
                padding: '4px 10px',
                background: 'rgba(0,0,0,0.04)',
                borderRadius: '6px',
                fontFamily: 'monospace'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;