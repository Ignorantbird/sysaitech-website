import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/#services', isAnchor: true },
    { label: 'Sample Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Mechanic Assist', to: '/mechanic-assist' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
      WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
      borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
      boxShadow: isScrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gradient effect */}
          <Link to="/" style={{
            fontSize: '18px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #111 0%, #444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #222 0%, #555 100%)';
            e.currentTarget.style.WebkitBackgroundClip = 'text';
            e.currentTarget.style.backgroundClip = 'text';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #111 0%, #444 100%)';
            e.currentTarget.style.WebkitBackgroundClip = 'text';
            e.currentTarget.style.backgroundClip = 'text';
          }}>
            sysaitech
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center" style={{ gap: '4px' }}>
            {navLinks.map((link, index) => (
              link.isAnchor ? (
                <a
                  key={index}
                  href={link.to}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(0,0,0,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#111';
                    const underline = e.currentTarget.querySelector('.nav-underline');
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(0,0,0,0.6)';
                    const underline = e.currentTarget.querySelector('.nav-underline');
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  {link.label}
                  <span 
                    className="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: '#111',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(0,0,0,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#111';
                    const underline = e.currentTarget.querySelector('.nav-underline');
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(0,0,0,0.6)';
                    const underline = e.currentTarget.querySelector('.nav-underline');
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  {link.label}
                  <span 
                    className="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: '#111',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </Link>
              )
            ))}
          </div>

          {/* Premium CTA Button with arrow */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                background: '#111',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#222';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
                e.currentTarget.style.transform = 'scale(1.05)';
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#111';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                e.currentTarget.style.transform = 'scale(1)';
                const arrow = e.currentTarget.querySelector('.cta-arrow');
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              <span>Book Consultation</span>
              <svg 
                className="cta-arrow"
                style={{
                  width: '16px',
                  height: '16px',
                  transition: 'transform 0.3s ease'
                }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Animated hamburger menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                color: '#111',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              aria-label="Toggle menu"
            >
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <span style={{
                  display: 'block',
                  height: '2px',
                  width: '24px',
                  background: 'currentColor',
                  transform: isMobileMenuOpen ? 'rotate(45deg) translateY(0)' : 'translateY(-8px)',
                  transition: 'all 0.3s ease'
                }} />
                <span style={{
                  display: 'block',
                  height: '2px',
                  width: '24px',
                  background: 'currentColor',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transition: 'all 0.3s ease'
                }} />
                <span style={{
                  display: 'block',
                  height: '2px',
                  width: '24px',
                  background: 'currentColor',
                  transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(0)' : 'translateY(8px)',
                  transition: 'all 0.3s ease'
                }} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with smooth slide */}
        <div style={{
          maxHeight: isMobileMenuOpen ? '384px' : '0',
          opacity: isMobileMenuOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
            <div className="flex flex-col" style={{ gap: '4px' }}>
              {navLinks.map((link, index) => (
                link.isAnchor ? (
                  <a
                    key={index}
                    href={link.to}
                    style={{
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'rgba(0,0,0,0.6)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#111';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(0,0,0,0.6)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.to}
                    style={{
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: 'rgba(0,0,0,0.6)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#111';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.03)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(0,0,0,0.6)';
                      e.currentTarget.style.background = 'transparent';
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  background: '#111',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '999px',
                  textDecoration: 'none',
                  marginTop: '16px',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#222'}
                onMouseLeave={e => e.currentTarget.style.background = '#111'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;