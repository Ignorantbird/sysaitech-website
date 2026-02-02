import React from 'react';

const MechanicAssist = () => {
  return (
    <section id="mechanic-assist" style={{ background: '#fff' }}>
      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.1) 80%, transparent 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 !py-16 md:!py-24">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — Content */}
          <div>
            {/* Label */}
            <p className="font-mono" style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.65)',
              marginBottom: '24px'
            }}>
              Our Product
            </p>

            {/* Title */}
            <h2 className="font-bold text-gray-900" style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              lineHeight: 1.1,
              marginBottom: '12px'
            }}>
              Mechanic Assist
            </h2>

            {/* Tagline */}
            <p style={{
              fontSize: '16px',
              color: 'rgba(0,0,0,0.65)',
              marginBottom: '28px',
              fontWeight: 500
            }}>
              AI-powered assistant for automotive service centers
            </p>

            {/* Description */}
            <p style={{
              fontSize: '15px',
              color: 'rgba(0,0,0,0.7)',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '440px'
            }}>
              Mechanic Assist helps technicians find information from service manuals instantly using natural language queries—cutting diagnostic time and improving service efficiency. We practice what we preach. Building our own product means we understand exactly what it takes to turn an idea into reality.
            </p>

            {/* Key points — left-border style */}
            <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                "Ask questions naturally, get instant answers",
                "Works with existing service manuals",
                "Built for dealerships and service centers"
              ].map((point, i) => (
                <div key={i} style={{
                  borderLeft: '2px solid rgba(0,0,0,0.12)',
                  paddingLeft: '16px'
                }}>
                  <p className="font-mono" style={{
                    fontSize: '13px',
                    color: 'rgba(0,0,0,0.55)'
                  }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs — pill style matching hero */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 24px',
                  background: '#111',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease, box-shadow 0.2s ease',
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
                Request Demo
              </a>
              <a
                href="/mechanic-assist"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 24px',
                  background: '#fff',
                  color: '#111',
                  fontSize: '13px',
                  fontWeight: 600,
                  borderRadius: '999px',
                  border: '1px solid rgba(0,0,0,0.2)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.65)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right — 3D Floating Chat Mockup */}
          <div className="hidden md:block" style={{ 
            position: 'relative',
            perspective: '1200px'
          }}>
            <div style={{
              transform: 'rotateY(-5deg) rotateX(3deg)',
              transition: 'transform 0.3s ease',
              animation: 'floatCard 6s ease-in-out infinite',
              transformStyle: 'preserve-3d'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '440px',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                background: '#fff',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)'
              }}>
                {/* Window chrome */}
                <div style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0,0,0,0.02)'
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34d399' }} />
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)', fontWeight: 500 }}>
                      Mechanic Assist
                    </span>
                  </div>
                </div>

                {/* Chat body */}
                <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* User message */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{
                      background: '#111',
                      color: '#fff',
                      padding: '10px 14px',
                      borderRadius: '10px 10px 4px 10px',
                      maxWidth: '80%'
                    }}>
                      <p style={{ fontSize: '13px', lineHeight: 1.5 }}>
                        How do I replace the brake pads on a 2020 Honda Accord?
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      background: 'rgba(0,0,0,0.04)',
                      color: '#222',
                      padding: '12px 14px',
                      borderRadius: '10px 10px 10px 4px',
                      maxWidth: '90%'
                    }}>
                      <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '10px' }}>
                        Here's the procedure for replacing brake pads on a 2020 Honda Accord:
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {[
                          "Lift vehicle and remove wheel",
                          "Remove caliper bolts (17mm)",
                          "Replace pads and compress caliper",
                          "Torque: 80 lb-ft"
                        ].map((step, i) => (
                          <p key={i} className="font-mono" style={{ fontSize: '12px', color: 'rgba(0,0,0,0.7)' }}>
                            {`${i + 1}.`} {step}
                          </p>
                        ))}
                      </div>
                      {/* Source ref */}
                      <p style={{
                        fontSize: '11px',
                        color: 'rgba(0,0,0,0.3)',
                        marginTop: '10px',
                        borderTop: '1px solid rgba(0,0,0,0.08)',
                        paddingTop: '8px'
                      }}>
                        Source: 2020 Honda Accord Service Manual, p.14-23
                      </p>
                    </div>
                  </div>

                  {/* Input */}
                  <div style={{
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '4px'
                  }}>
                    <span style={{ fontSize: '13px', color: 'rgba(0,0,0,0.3)' }}>
                      Ask anything about your vehicles...
                    </span>
                    <div style={{ marginLeft: 'auto' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden" style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(168,85,247,0.05) 100%)',
          borderRadius: '16px',
          padding: '32px 24px',
          border: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '16px'
          }}>
            🔍
          </div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#111',
            marginBottom: '12px'
          }}>
            Ask. Get Answers. Fast.
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'rgba(0,0,0,0.6)',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}>
            Natural language search through all your service manuals
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(22,163,74,0.1)',
            borderRadius: '999px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#16a34a'
            }} />
            <span style={{
              fontSize: '13px',
              color: '#16a34a',
              fontWeight: 600
            }}>
              Answer in 2 seconds ⚡
            </span>
          </div>
        </div>
        </div>
      </div>

      <style>{`
        @keyframes floatCard {
          0%, 100% { 
            transform: rotateY(-5deg) rotateX(3deg) translateY(0); 
          }
          50% { 
            transform: rotateY(-5deg) rotateX(3deg) translateY(-12px); 
          }
        }
      `}</style>
    </section>
  );
};

export default MechanicAssist;