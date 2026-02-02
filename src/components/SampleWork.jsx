import React, { useState } from 'react';

const ProjectRow = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="!py-6 md:!py-8"
      style={{
        padding: '24px 0',
        cursor: 'pointer',
        background: hovered ? 'rgba(0,0,0,0.015)' : 'transparent',
        transition: 'background 0.2s ease'
      }}
    >
      {/* Desktop layout */}
      <div className="hidden md:flex items-baseline">
        {/* Number */}
        <div style={{ width: '72px', flexShrink: 0 }}>
          <span className="font-mono" style={{
            fontSize: '13px',
            color: 'rgba(0,0,0,0.4)',
            letterSpacing: '0.05em'
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Category */}
        <div style={{ width: '160px', flexShrink: 0 }}>
          <span className="font-mono" style={{
            fontSize: '12px',
            color: 'rgba(0,0,0,0.65)'
          }}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <div style={{ flex: 1, paddingRight: '40px' }}>
          <h3 className="font-bold text-gray-900" style={{
            fontSize: 'clamp(20px, 2.5vw, 24px)',
            lineHeight: 1.3,
            marginBottom: '6px'
          }}>
            {project.title}
            <span style={{
              display: 'inline-block',
              marginLeft: '10px',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
              transition: 'all 0.25s ease',
              fontSize: '20px',
              color: 'rgba(0,0,0,0.3)'
            }}>
              →
            </span>
          </h3>
          <p style={{
            fontSize: '13.5px',
            color: 'rgba(0,0,0,0.65)',
            lineHeight: 1.6
          }}>
            {project.description}
          </p>
        </div>

        {/* Tags — right aligned */}
        <div style={{ flexShrink: 0, textAlign: 'right' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
            {project.tags.map((tag, i) => (
              <span key={i} className="font-mono" style={{
                fontSize: '12px',
                color: hovered ? 'rgba(0,0,0,0.65)' : 'rgba(0,0,0,0.18)',
                transition: 'color 0.25s ease'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
          <span className="font-mono" style={{
            fontSize: '12px',
            color: 'rgba(0,0,0,0.25)',
            flexShrink: 0
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono" style={{
            fontSize: '11px',
            color: 'rgba(0,0,0,0.3)'
          }}>
            {project.category}
          </span>
        </div>
        <h3 className="font-bold text-gray-900" style={{
          fontSize: '19px',
          lineHeight: 1.3,
          marginBottom: '8px'
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '13.5px',
          color: 'rgba(0,0,0,0.65)',
          lineHeight: 1.6,
          marginBottom: '12px'
        }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: '11.5px',
              color: 'rgba(0,0,0,0.65)',
              padding: '3px 9px',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '4px',
              fontFamily: 'monospace'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SampleWork = () => {
  const projects = [
    {
      category: "AI Development",
      title: "Custom AI Agent Platform",
      description: "Built an intelligent automation system that reduced manual processing time by 70% for a lead generation company.",
      tags: ["AI", "Automation", "Python"]
    },
    {
      category: "Marketing",
      title: "Performance Marketing Campaign",
      description: "Drove 300% ROI increase through data-driven paid advertising and conversion optimization strategies.",
      tags: ["PPC", "Analytics", "SEO"]
    },
    {
      category: "Product Design",
      title: "SaaS Dashboard Redesign",
      description: "Reimagined user experience for B2B software, improving user engagement by 45% and reducing churn.",
      tags: ["UI/UX", "React", "Design"]
    }
  ];

  return (
    <section id="work" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle floating gradient orb */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Top edge */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.4) 80%, transparent 100%)',
        position: 'relative',
        zIndex: 1
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 !py-16 md:!py-24" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }} className="md:!mb-16">
          <p className="font-semibold" style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.65)',
            marginBottom: '18px'
          }}>
            Our Work
          </p>
          <h2 className="font-bold text-gray-900" style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            lineHeight: 1.15,
            maxWidth: '480px'
          }}>
            See what we've built
          </h2>
        </div>

        {/* Project Rows */}
        <div>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div style={{ height: '1px', background: 'rgba(0,0,0,0.4)' }} />
              <ProjectRow project={project} index={index} />
            </React.Fragment>
          ))}
          <div style={{ height: '1px', background: 'rgba(0,0,0,0.4)' }} />
        </div>

        {/* View Full Portfolio link */}
        <div style={{ paddingTop: '48px' }}>
          <a
            href="/work"
            style={{
              color: 'rgba(0,0,0,0.65)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(0,0,0,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.3)'}
          >
            View full portfolio <span style={{ fontSize: '15px' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SampleWork;