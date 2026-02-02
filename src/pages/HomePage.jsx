import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MechanicAssist from '../components/MechanicAssist';
import WhySysAITech from '../components/WhySysAITech';
import StatsSection from '../components/StatsSection';
import SampleWork from '../components/SampleWork';
import FinalCTA from '../components/FinalCTA';
import ScrollToTop from '../components/Scrolltotop';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <MechanicAssist />
      <WhySysAITech />
      <StatsSection />
      <SampleWork />
      <FinalCTA />
      <ScrollToTop />
    </>
  );
};

export default HomePage;