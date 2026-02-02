import React from 'react';

const WhySysAITech = () => {
  const reasons = [
    {
      number: "01",
      title: "Technical Excellence That Delivers",
      description: "We build AI solutions that actually work in production, not just demos. Our team has shipped real products, managed complex systems, and solved technical challenges across industries—from automation to data-driven decision making."
    },
    {
      number: "02",
      title: "Business-First Approach",
      description: "Technology is only valuable when it solves real problems. We start with your business goals, then build solutions that deliver measurable results—whether that's revenue growth, cost reduction, or competitive advantage."
    },
    {
      number: "03",
      title: "End-to-End Execution",
      description: "From initial concept to deployment and beyond, we handle the entire journey. No hand-offs, no gaps. We're building our own products alongside client work, so we know what it takes to ship."
    }
  ];

  return (
    <section id="why-us" style={{ background: '#111', position: 'relative', overflow: 'hidden' }}>
      {/* Background diagonal grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.6,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Gradient orb */}
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

      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)',
        position: 'relative',
        zIndex: 1
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 !py-16 md:!py-24" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }} className="md:!mb-20">
          <p className="font-semibold" style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '18px'
          }}>
            Why Work With Us
          </p>
          <h2 className="text-white font-bold" style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            lineHeight: 1.15,
            maxWidth: '480px'
          }}>
            Three reasons teams choose sysaitech
          </h2>
        </div>

        {/* Desktop: 3 columns with vertical dividers */}
        <div className="hidden md:grid md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                paddingRight: index < reasons.length - 1 ? '48px' : '0',
                paddingLeft: index > 0 ? '48px' : '0',
                borderRight: index < reasons.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none'
              }}
            >
              {/* Large number — watermark style */}
              <div className="font-mono font-bold" style={{
                fontSize: '72px',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.06)',
                marginBottom: '32px',
                letterSpacing: '-0.02em'
              }}>
                {reason.number}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold" style={{
                fontSize: '18px',
                lineHeight: 1.35,
                marginBottom: '16px'
              }}>
                {reason.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.38)',
                lineHeight: 1.75
              }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked with horizontal dividers */}
        <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              style={{
                paddingTop: index > 0 ? '40px' : '0',
                paddingBottom: index < reasons.length - 1 ? '40px' : '0',
                borderBottom: index < reasons.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none'
              }}
            >
              {/* Number + Title row */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
                <span className="font-mono font-bold" style={{
                  fontSize: '24px',
                  color: 'rgba(255,255,255,0.15)',
                  flexShrink: 0
                }}>
                  {reason.number}
                </span>
                <h3 className="text-white font-bold" style={{
                  fontSize: '18px',
                  lineHeight: 1.3
                }}>
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.38)',
                lineHeight: 1.75,
                paddingLeft: '40px'
              }}>
                {reason.description}
              </p>
            </div>
          ))}
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

export default WhySysAITech;