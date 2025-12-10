// pages/LandingPage/index.tsx
import { useEffect } from 'react';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { SCROLL_CONFIG } from '@/components/config/constants';
import { smoothScrollTo } from '@/lib/utils';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PlansSection from '@/components/PlansSection';
import ComparisonSection from '@/components/ComparisonSection';
import GallerySection from '@/components/GallerySection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const LandingPage = () => {
    const isHeaderScrolled = useScrollThreshold({
        threshold: SCROLL_CONFIG.headerThreshold,
        debounceMs: SCROLL_CONFIG.debounceMs,
    });

    // Configura smooth scroll para links âncora
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');

            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const id = href.slice(1);
                    if (id) {
                        smoothScrollTo(id);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <Header scrolled={isHeaderScrolled} />
            <HeroSection />
            <AboutSection />
            <PlansSection />
            <ComparisonSection />
            <GallerySection />
            <ProcessSection />
            <CTASection />
            <Footer />
        </main>
    );
};

export default LandingPage;
