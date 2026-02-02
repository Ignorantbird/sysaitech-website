import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#111' }}>
      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'rgba(255,255,255,0.08)'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ padding: '64px 24px 40px' }}>
        {/* Main grid - MOBILE OPTIMIZED */}
        <div style={{ marginBottom: '64px' }}>
          {/* Desktop: 4-column grid */}
          <div className="!hidden md:!grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2" style={{ maxWidth: '380px' }}>
              <Link to="/" style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                sysaitech
              </Link>
              <p style={{
                fontSize: '13.5px',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.7
              }}>
                We combine cutting-edge AI development with strategic marketing to help businesses innovate, grow, and stay ahead.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '20px'
              }}>
                Pages
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Services', to: '/#services' },
                  { label: 'Mechanic Assist', to: '/mechanic-assist' },
                  { label: 'Sample Work', to: '/work' },
                  { label: 'About', to: '/about' },
                  { label: 'Contact', to: '/contact' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.35)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services + Contact */}
            <div>
              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '20px'
              }}>
                Services
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  'AI Development',
                  'Marketing & Growth',
                  'Innovation & Design',
                  'AI SEO',
                  '3D Prototyping'
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to="/#services"
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.35)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Contact
              </h4>
              <a
                href="mailto:info@sysaitech.com"
                style={{
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: 'monospace'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                info@sysaitech.com
              </a>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="md:!hidden" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Brand */}
            <div>
              <Link to="/" style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                sysaitech
              </Link>
              <p style={{
                fontSize: '13.5px',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.7
              }}>
                We combine cutting-edge AI development with strategic marketing to help businesses innovate, grow, and stay ahead.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Pages
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Services', to: '/#services' },
                  { label: 'Mechanic Assist', to: '/mechanic-assist' },
                  { label: 'Sample Work', to: '/work' },
                  { label: 'About', to: '/about' },
                  { label: 'Contact', to: '/contact' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.35)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                Services
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'AI Development',
                  'Marketing & Growth',
                  'Innovation & Design',
                  'AI SEO',
                  '3D Prototyping'
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to="/#services"
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.35)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Contact
              </h4>
              <a
                href="mailto:info@sysaitech.com"
                style={{
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all'
                }}
              >
                info@sysaitech.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar - MOBILE OPTIMIZED */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }} className="md:flex-row md:justify-between md:items-center md:gap-12">
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
            textAlign: 'center'
          }} className="md:text-left">
            © 2025 sysaitech. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '24px',
            justifyContent: 'center'
          }} className="md:justify-end">
            <a
              href="#"
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.2)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.2)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;