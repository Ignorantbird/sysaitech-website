import React, { useState } from 'react';

const ServiceRow = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px 0',
        cursor: 'pointer',
        background: hovered ? 'rgba(255,255,255,0.02)' : 'transparent',
        transition: 'background 0.2s ease'
      }}
    >
      {/* Desktop: number | title+desc | offerings */}
      <div className="hidden md:flex items-start">
        {/* Number */}
        <div style={{ width: '100px', flexShrink: 0 }}>
          <span className="font-mono" style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.05em'
          }}>
            {service.number}
          </span>
        </div>

        {/* Title + Description */}
        <div style={{ flex: 1, maxWidth: '400px', paddingRight: '40px' }}>
          <h3 className="text-white font-bold" style={{
            fontSize: 'clamp(22px, 3vw, 26px)',
            lineHeight: 1.25,
            marginBottom: '10px'
          }}>
            {service.title}
            <span style={{
              display: 'inline-block',
              marginLeft: '10px',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'all 0.25s ease',
              fontSize: '20px',
              color: 'rgba(255,255,255,0.45)'
            }}>
              →
            </span>
          </h3>
          <p style={{
            color: 'rgba(255,255,255,0.38)',
            fontSize: '14px',
            lineHeight: 1.7
          }}>
            {service.description}
          </p>
        </div>

        {/* Offerings — right */}
        <div style={{ marginLeft: 'auto', flexShrink: 0, textAlign: 'right' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', alignItems: 'flex-end' }}>
            {service.offerings.map((item, i) => (
              <span key={i} className="font-mono" style={{
                color: hovered ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.18)',
                fontSize: '12.5px',
                transition: 'color 0.25s ease'
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '10px' }}>
          <span className="font-mono" style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
            flexShrink: 0
          }}>
            {service.number}
          </span>
          <h3 className="text-white font-bold" style={{
            fontSize: '20px',
            lineHeight: 1.3
          }}>
            {service.title}
          </h3>
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.38)',
          fontSize: '14px',
          lineHeight: 1.7,
          marginBottom: '16px'
        }}>
          {service.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {service.offerings.map((item, i) => (
            <span key={i} style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '12px',
              padding: '4px 10px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '4px',
              fontFamily: 'monospace'
            }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "AI & Technology",
      description: "Build intelligent solutions that automate workflows, enhance decision-making, and transform how your business operates. From custom AI agents to full-stack development, we turn complex problems into elegant technical solutions.",
      offerings: ["AI Agents", "AI Web Development", "AI App Development"]
    },
    {
      number: "02",
      title: "Marketing & Growth",
      description: "Drive measurable results with data-driven marketing strategies powered by AI. We help you reach the right audience, optimize campaigns in real-time, and build sustainable growth engines for your business.",
      offerings: ["AI SEO", "Performance Marketing", "Social Media Marketing", "Content Creation", "Email Marketing"]
    },
    {
      number: "03",
      title: "Innovation & Design",
      description: "Transform ideas into reality with cutting-edge creative solutions. From 3D prototyping to AI-powered filmmaking, we help you visualize, test, and launch innovations that set you apart.",
      offerings: ["3D Prototyping", "AI Filmmaking", "AI 3D Modeling", "Video Marketing"]
    }
  ];

  return (
    <section id="services" style={{ background: '#111', position: 'relative', overflow: 'hidden' }}>
      {/* Background grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Gradient orb */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-8%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)',
        position: 'relative',
        zIndex: 1
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ padding: '64px 0 56px' }} className="md:pt-80px">
          <p className="text-white font-semibold" style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: 0.4,
            marginBottom: '18px'
          }}>
            What We Do
          </p>
          <h2 className="text-white font-bold" style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            lineHeight: 1.15,
            maxWidth: '520px'
          }}>
            Comprehensive solutions that bridge technology and business growth
          </h2>
        </div>

        {/* Service Rows */}
        <div>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <ServiceRow service={service} />
            </React.Fragment>
          ))}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        {/* Bottom link */}
        <div style={{ padding: '40px 0 72px' }}>
          <a
            href="/contact"
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            Get in touch <span style={{ fontSize: '15px' }}>→</span>
          </a>
        </div>
      </div>

      {/* Bottom edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)',
        position: 'relative',
        zIndex: 1
      }} />
    </section>
  );
};

export default ServicesSection;