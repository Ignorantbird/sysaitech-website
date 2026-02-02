import React, { useState, useEffect, useRef } from 'react';

const ContactPage = () => {
  const canvasRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 700;

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

          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.06 * (1 - distance / 120)})`;
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div style={{ paddingTop: '80px' }}>

      {/* Hero with RICH 3D background */}
      <section style={{ 
        background: 'linear-gradient(180deg, #fff 0%, #fafafa 100%)',
        padding: '80px 0 140px',
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

        {/* Multiple vibrant gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(251,146,60,0.25) 0%, rgba(244,114,182,0.15) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift1 12s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(59,130,246,0.15) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'meshDrift2 15s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '30%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'meshDrift3 10s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)',
          filter: 'blur(75px)',
          animation: 'meshDrift1 18s ease-in-out infinite reverse',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
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
                Contact
              </p>
              <h1 className="font-bold text-gray-900" style={{
                fontSize: 'clamp(36px, 5.5vw, 56px)',
                lineHeight: 1.1,
                marginBottom: '18px'
              }}>
                Let's Talk
              </h1>
              <p style={{
                fontSize: '16px',
                color: 'rgba(0,0,0,0.65)',
                lineHeight: 1.7,
                maxWidth: '480px'
              }}>
                Whether you need a custom AI solution, want to scale your marketing, or have a product idea you're ready to build—we're here to help.
              </p>
            </div>

            {/* Right - 3D Rotating Sphere wireframe */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '320px',
                height: '320px',
                perspective: '1200px',
                position: 'relative'
              }}>
                {/* Rotating 3D Sphere Grid */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  animation: 'rotateSphere 30s linear infinite'
                }}>
                  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 
                    width: '100%', 
                    height: '100%',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
                  }}>
                    {/* Outer sphere circles */}
                    <circle cx="160" cy="160" r="140" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" fill="none" />
                    <circle cx="160" cy="160" r="120" stroke="rgba(0,0,0,0.1)" strokeWidth="1.2" fill="none" />
                    <circle cx="160" cy="160" r="100" stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none" />
                    <circle cx="160" cy="160" r="80" stroke="rgba(0,0,0,0.06)" strokeWidth="0.8" fill="none" />
                    
                    {/* Latitude lines */}
                    <ellipse cx="160" cy="160" rx="140" ry="50" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
                    <ellipse cx="160" cy="160" rx="140" ry="90" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" fill="none" />
                    <ellipse cx="160" cy="160" rx="140" ry="120" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" fill="none" />
                    
                    {/* Longitude lines */}
                    <ellipse cx="160" cy="160" rx="50" ry="140" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none" />
                    <ellipse cx="160" cy="160" rx="90" ry="140" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" fill="none" />
                    <ellipse cx="160" cy="160" rx="120" ry="140" stroke="rgba(0,0,0,0.06)" strokeWidth="0.6" fill="none" />
                    
                    {/* Center cross */}
                    <line x1="160" y1="20" x2="160" y2="300" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="3,3" />
                    <line x1="20" y1="160" x2="300" y2="160" stroke="rgba(0,0,0,0.08)" strokeWidth="0.8" strokeDasharray="3,3" />
                    
                    {/* Corner accent dots */}
                    <circle cx="160" cy="20" r="3" fill="rgba(0,0,0,0.15)" />
                    <circle cx="300" cy="160" r="3" fill="rgba(0,0,0,0.15)" />
                    <circle cx="160" cy="300" r="3" fill="rgba(0,0,0,0.15)" />
                    <circle cx="20" cy="160" r="3" fill="rgba(0,0,0,0.15)" />
                    
                    {/* Center dot */}
                    <circle cx="160" cy="160" r="5" fill="rgba(0,0,0,0.2)" />
                  </svg>
                </div>

                {/* Multiple floating accent shapes - MORE elements */}
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  right: '-12%',
                  width: '60px',
                  height: '60px',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent1 7s ease-in-out infinite',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-10%',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgba(251,146,60,0.2)',
                  backdropFilter: 'blur(10px)',
                  animation: 'floatAccent2 9s ease-in-out infinite',
                  boxShadow: '0 4px 16px rgba(251,146,60,0.3)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-8%',
                  width: '35px',
                  height: '35px',
                  border: '1.5px solid rgba(168,85,247,0.4)',
                  borderRadius: '8px',
                  background: 'rgba(168,85,247,0.15)',
                  animation: 'floatAccent3 8s ease-in-out infinite',
                  transform: 'rotate(45deg)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '15%',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  background: 'rgba(52,211,153,0.25)',
                  animation: 'floatAccent1 6s ease-in-out infinite reverse',
                  boxShadow: '0 4px 12px rgba(52,211,153,0.3)'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  width: '20px',
                  height: '20px',
                  border: '1px solid rgba(244,114,182,0.4)',
                  borderRadius: '6px',
                  background: 'rgba(244,114,182,0.15)',
                  animation: 'floatAccent2 7s ease-in-out infinite reverse'
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '35%',
                  left: '5%',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(96,165,250,0.2)',
                  animation: 'floatAccent3 6.5s ease-in-out infinite reverse'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '35%',
                  left: '-6%',
                  width: '28px',
                  height: '28px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.8)',
                  animation: 'floatAccent1 8.5s ease-in-out infinite'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}>
              <h2 className="font-bold text-gray-900" style={{
                fontSize: '28px',
                marginBottom: '24px'
              }}>
                Send Us a Message
              </h2>

              {submitSuccess && (
                <div style={{
                  marginBottom: '24px',
                  padding: '16px',
                  background: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.2)',
                  borderRadius: '8px'
                }}>
                  <p style={{
                    color: '#059669',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}>
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#111'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#111'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#111'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label htmlFor="interest" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    What are you interested in? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#111'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                  >
                    <option value="">Select an option</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Marketing Services">Marketing Services</option>
                    <option value="Mechanic Assist">Mechanic Assist</option>
                    <option value="3D Prototyping">3D Prototyping</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: '#fff',
                      border: '1px solid rgba(0,0,0,0.15)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#111'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
                    placeholder="Describe what you're looking to build or achieve..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 28px',
                    background: '#111',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 600,
                    borderRadius: '999px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.5 : 1,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                  onMouseEnter={e => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = '#222';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#111';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Book Consultation */}
              <div style={{
                padding: '32px',
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(0,0,0,0.05)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <span style={{ fontSize: '20px' }}>📅</span>
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111',
                    marginBottom: '8px'
                  }}>
                    Prefer to Talk?
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(0,0,0,0.7)',
                    lineHeight: 1.7,
                    marginBottom: '16px'
                  }}>
                    Schedule a free 30-minute consultation to discuss your project. We'll listen to your goals and share honest feedback.
                  </p>
                  <a 
                    href="#" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 20px',
                      background: '#111',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: 600,
                      borderRadius: '999px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
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
                    Book Free Consultation
                  </a>
                </div>
              </div>

              {/* Email Direct */}
              <div style={{
                padding: '32px',
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(0,0,0,0.05)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <span style={{ fontSize: '20px' }}>✉️</span>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111',
                  marginBottom: '16px'
                }}>
                  Email Us
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)', marginBottom: '4px' }}>
                      General inquiries:
                    </p>
                    <a 
                      href="mailto:info@sysaitech.com"
                      style={{
                        fontSize: '14px',
                        color: '#111',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      info@sysaitech.com
                    </a>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)', marginBottom: '4px' }}>
                      Mechanic Assist:
                    </p>
                    <a 
                      href="mailto:mechanic-assist@sysaitech.com"
                      style={{
                        fontSize: '14px',
                        color: '#111',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      mechanic-assist@sysaitech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div style={{
                padding: '20px 24px',
                background: 'rgba(0,0,0,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>⏱️</span>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(0,0,0,0.6)',
                    fontWeight: 500
                  }}>
                    We typically respond within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        
        @keyframes rotateSphere {
          0% { transform: rotateY(0deg) rotateX(15deg) rotateZ(0deg); }
          100% { transform: rotateY(360deg) rotateX(15deg) rotateZ(360deg); }
        }
        
        @keyframes floatAccent1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(-15px, -20px) rotate(45deg) scale(1.05); }
        }
        
        @keyframes floatAccent2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.15); }
        }
        
        @keyframes floatAccent3 {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          50% { transform: translate(-10px, 15px) rotate(90deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;