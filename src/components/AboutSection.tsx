// components/AboutSection.tsx
import { Target, Zap, Palette, Shield } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { FeatureGrid } from '@/components/ui/feature-card';
import { SECTION_IDS } from '@/components/config/constants';

const AboutSection = () => {
    const features = [
        {
            icon: Target,
            title: 'Foco em Conversão',
            description:
                'Páginas estrategicamente projetadas para transformar visitantes em clientes.',
        },
        {
            icon: Palette,
            title: 'Design Exclusivo',
            description: 'Cada projeto é único, criado sob medida para refletir sua marca.',
        },
        {
            icon: Zap,
            title: 'Entrega Rápida',
            description: 'Projetos entregues em até 7 dias, sem perder qualidade.',
        },
        {
            icon: Shield,
            title: 'Código Otimizado',
            description: 'Performance, SEO e responsividade garantidos em cada página.',
        },
    ];

    return (
        <Section
            id={SECTION_IDS.about}
            variant="secondary"
            badge="Sobre o Serviço"
            title={
                <>
                    Por que escolher nossas{' '}
                    <span className="text-gradient-gold">Landing Pages</span>?
                </>
            }
            description="Criamos páginas que não apenas impressionam visualmente, mas também entregam resultados. Cada detalhe é pensado para maximizar suas conversões."
        >
            <FeatureGrid features={features} columns={4} />
        </Section>
    );
};

export default AboutSection;
