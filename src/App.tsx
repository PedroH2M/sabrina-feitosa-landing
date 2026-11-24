import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';
import { SERVICES, type CaseStudy } from './data/sabrinaData';
import { Navbar } from './components/editorial/Navbar';
import { HeroSection } from './components/editorial/HeroSection';
import { AboutSection } from './components/editorial/AboutSection';
import { ServicesSection } from './components/editorial/ServicesSection';
import { PortfolioSection } from './components/editorial/PortfolioSection';
import { CaseModal } from './components/editorial/CaseModal';
import { ProcessAndTestimonialsSection } from './components/editorial/ProcessAndTestimonialsSection';
import { FaqSection } from './components/editorial/FaqSection';
import { ContactSection } from './components/editorial/ContactSection';
import { Footer } from './components/editorial/Footer';

export function App() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    SERVICES[0].title,
  ]);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    if (selectedCase) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [selectedCase]);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle) ? prev : [...prev, serviceTitle]
    );
  };

  const handleToggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((item) => item !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FAF5EC] text-[#361F13]">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection onSelectService={handleSelectService} />
          <PortfolioSection onSelectCase={setSelectedCase} />
          <ProcessAndTestimonialsSection />
          <FaqSection />
          <ContactSection
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
          />
        </main>
        <Footer />
        <CaseModal caseItem={selectedCase} onClose={() => setSelectedCase(null)} />
      </div>
    </MotionConfig>
  );
}

export default App;
