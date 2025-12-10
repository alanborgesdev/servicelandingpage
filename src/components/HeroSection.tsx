// components/HeroSection.tsx
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTION_IDS } from '@/components/config/constants';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
    const stats = [
        { value: '50+', label: 'Projetos' },
        { value: '98%', label: 'Satisfação' },
        { value: '7 dias', label: 'Entrega' },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
                <img
                    src={heroBg}
                    alt=""
                    loading="eager"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-200" />

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-in-up">
                        <Sparkles size={16} className="text-primary" aria-hidden="true" />
                        <span className="text-sm font-medium text-primary">
                            Especialista em Landing Pages
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up animation-delay-100">
                        Criação de <span className="text-gradient-gold">Landing Pages</span>
                        <br />
                        Profissionais
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-200">
                        Transforme visitantes em clientes com páginas de alta conversão. Design
                        moderno, otimizadas para resultados e entrega rápida.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-300">
                        <Button variant="hero" size="xl" asChild>
                            <a href={`#${SECTION_IDS.contact}`}>
                                Solicitar Orçamento
                                <ArrowRight size={20} aria-hidden="true" />
                            </a>
                        </Button>
                        <Button variant="gold-outline" size="xl" asChild>
                            <a href={`#${SECTION_IDS.plans}`}>Ver Planos</a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto opacity-0 animate-fade-in-up animation-delay-400">
                        {stats.map(stat => (
                            <div key={stat.label} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
