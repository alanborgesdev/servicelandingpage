// components/GallerySection.tsx
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SECTION_IDS } from '@/components/config/constants';
import type { GalleryModel } from '@/components/types';
import modelBarber from '@/assets/model-barber.webp';
import modelBeauty from '@/assets/model-beauty.webp';
import modelDental from '@/assets/model-dental.webp';

const GallerySection = () => {
    const models: GalleryModel[] = [
        {
            image: modelBarber,
            title: 'BarberPro',
            plan: 'Plano Básico',
            description: 'Barbearia moderna com estética masculina e elegante',
            style: 'dark',
            url: 'https://model-barbershop.vercel.app/',
        },
        {
            image: modelBeauty,
            title: 'Brow Designer',
            plan: 'Plano Standard',
            description: 'Estúdio de beleza com design feminino e sofisticado',
            style: 'feminine',
            url: 'https://model-brow-designer.vercel.app/',
        },
        {
            image: modelDental,
            title: 'Clínica Estética Dental',
            plan: 'Plano Premium',
            description: 'Clínica profissional com visual premium e confiável',
            style: 'professional',
            url: 'https://model-cosmetic-dentistry.vercel.app/',
        },
    ];

    return (
        <Section
            id={SECTION_IDS.models}
            badge="Galeria"
            title={
                <>
                    Modelos de <span className="text-gradient-gold">Landing Pages</span>
                </>
            }
            description="Veja o estilo de cada plano e imagine como ficará o seu projeto."
        >
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {models.map(model => (
                    <article
                        key={model.title}
                        className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold"
                    >
                        {/* Image */}
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={model.image}
                                alt={`Landing page ${model.title} - ${model.description}`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-background text-xs font-semibold mb-3">
                                {model.plan}
                            </span>
                            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                                {model.title}
                            </h3>
                            <p className="text-sm text-foreground mb-4">{model.description}</p>

                            {/* O bloco "Ver detalhes" agora é um link <a> */}
                            <a
                                href={model.url} // <--- ALTERAÇÃO AQUI: Usando a URL do objeto
                                target="_blank" // Opcional: abre em nova aba/janela
                                rel="noopener noreferrer" // Boa prática para segurança com target="_blank"
                                className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ExternalLink size={14} aria-hidden="true" />
                                <span>Ver detalhes</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
};

export default GallerySection;
