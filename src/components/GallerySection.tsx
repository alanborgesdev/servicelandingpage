// components/GallerySection.tsx
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SECTION_IDS } from '@/components/config/constants';
import type { GalleryExample } from '@/components/types';
import exampleBarber from '@/assets/example-barber.jpg';
import exampleBeauty from '@/assets/example-beauty.jpg';
import exampleDental from '@/assets/example-dental.jpg';

const GallerySection = () => {
    const examples: GalleryExample[] = [
        {
            image: exampleBarber,
            title: 'BarberPro',
            plan: 'Plano Básico',
            description: 'Barbearia moderna com estética masculina e elegante',
            style: 'dark',
        },
        {
            image: exampleBeauty,
            title: 'Brow Designer',
            plan: 'Plano Standard',
            description: 'Estúdio de beleza com design feminino e sofisticado',
            style: 'feminine',
        },
        {
            image: exampleDental,
            title: 'Clínica Estética Dental',
            plan: 'Plano Premium',
            description: 'Clínica profissional com visual premium e confiável',
            style: 'professional',
        },
    ];

    return (
        <Section
            id={SECTION_IDS.examples}
            badge="Galeria"
            title={
                <>
                    Exemplos de <span className="text-gradient-gold">Landing Pages</span>
                </>
            }
            description="Veja o estilo de cada plano e imagine como ficará o seu projeto."
        >
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {examples.map(example => (
                    <article
                        key={example.title}
                        className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
                    >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={example.image}
                                alt={`Landing page ${example.title} - ${example.description}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                                {example.plan}
                            </span>
                            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                {example.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {example.description}
                            </p>
                            <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ExternalLink size={14} aria-hidden="true" />
                                <span>Ver detalhes</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
};

export default GallerySection;
