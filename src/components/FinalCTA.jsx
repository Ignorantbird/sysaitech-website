import React from 'react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section id="consultation" style={{ background: '#111' }}>
      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 !py-16 md:!py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          {/* Left — headline + sub */}
          <div style={{ maxWidth: '520px' }}>
            <p className="font-semibold" style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '18px'
            }}>
              Get Started
            </p>
            <h2 className="text-white font-bold" style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}>
              Ready to build something great?
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7
            }}>
              Let's discuss how we can help your business grow. No commitment, just an honest conversation.
            </p>
          </div>

          {/* Right — CTA + email */}
          <div className="items-center md:items-start" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link
              to="/contact"
              className="w-full md:w-auto justify-center"
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
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f0f0f0';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
              }}
            >
              Book Free Consultation
            </Link>
            <a
              href="mailto:info@sysaitech.com"
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                fontFamily: 'monospace'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              or email info@sysaitech.com →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent 100%)'
      }} />
    </section>
  );
};

export default FinalCTA;