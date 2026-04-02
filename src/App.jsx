import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Topbar  from './components/Topbar';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import StatsHero  from './components/StatsHero';
import AreasOfWork  from './components/AreasOfWork';
import DigitBanner  from './components/DigitBanner';
import LatestAtEgov from './components/LatestAtEgov';
import CtaSection from './components/CtaSection';
import Supporters from './components/Supporters';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';
import StatsSection from './components/StatsHero';

export default function App() {
  useScrollReveal();

  return (
    <>
      <div id="top"></div>
      <Topbar />
      <Navbar />
      <Hero />
      <StatsSection/>
      <AreasOfWork />
      <CtaSection />
      <DigitBanner />
      <LatestAtEgov />
      <Supporters />
      <Footer />
      <ScrollTopButton />
    </>
  );
}
