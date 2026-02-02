import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Delivered' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 3, suffix: 'x', label: 'Average ROI Increase' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '80px 0',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(0,0,0,0.08)'
      }}
    >
      <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 24px' }} className="px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  return (
    <div
      style={{
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease ${delay}ms`
      }}
    >
      <div style={{
        fontSize: 'clamp(40px, 5vw, 56px)',
        fontWeight: 700,
        color: '#111',
        lineHeight: 1,
        marginBottom: '12px',
        fontFamily: 'monospace'
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontSize: '13px',
        color: 'rgba(0,0,0,0.45)',
        letterSpacing: '0.02em',
        fontWeight: 500
      }}>
        {stat.label}
      </div>
    </div>
  );
};

export default StatsSection;