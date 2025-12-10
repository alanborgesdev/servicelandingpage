// components/PlansSection.tsx
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from '@/components/ui/card';
import { Section } from '@/components/layout/Section';
import { SECTION_IDS } from '@/components/config/constants';
import { getWhatsAppUrlForPlan } from '@/lib/whatsapp';
import type { Plan } from '@/components/types';

const PlansSection = () => {
    const plans: Plan[] = [
        {
            id: 'basic',
            name: 'Básico',
            subtitle: 'Estilo BarberPro',
            description:
                'Ideal para profissionais autônomos que buscam presença online simples e eficaz.',
            style: 'dark',
            features: [
                '3 a 5 seções',
                'Design moderno e responsivo',
                'Botão WhatsApp integrado',
                'Otimização básica SEO',
                '1 rodada de revisão',
                'Entrega em 5 dias úteis',
            ],
            audience: 'Barbeiros, Personal Trainers, Autônomos',
            highlight: false,
        },
        {
            id: 'standard',
            name: 'Standard',
            subtitle: 'Estilo Brow Designer',
            description:
                'Perfeito para pequenas empresas que precisam de mais personalização e funcionalidades.',
            style: 'feminine',
            features: [
                '6 a 8 seções',
                'Design exclusivo e personalizado',
                'Galeria de imagens/portfólio',
                'Seção de depoimentos',
                'Integração com redes sociais',
                '2 rodadas de revisão',
                'Entrega em 7 dias úteis',
            ],
            audience: 'Estúdios de beleza, Designers, Consultores',
            highlight: true,
        },
        {
            id: 'premium',
            name: 'Premium',
            subtitle: 'Estilo Clínica Dental',
            description:
                'Solução completa para empresas que exigem máxima qualidade e funcionalidades avançadas.',
            style: 'professional',
            features: [
                '10+ seções completas',
                'Design premium exclusivo',
                'Animações e micro-interações',
                'Galeria antes/depois',
                'Formulário de contato avançado',
                'Integração com Google Analytics',
                'SEO avançado',
                '3 rodadas de revisão',
                'Suporte por 30 dias',
            ],
            audience: 'Clínicas, Escritórios, Empresas',
            highlight: false,
        },
    ];

    const getCardStyle = (highlight: boolean) => {
        if (highlight) {
            return 'border-primary shadow-gold scale-105 relative z-10';
        }
        return 'border-border/50 hover:border-primary/30';
    };

    return (
        <Section
            id={SECTION_IDS.plans}
            badge="Nossos Planos"
            title={
                <>
                    Escolha o plano ideal para{' '}
                    <span className="text-gradient-gold">seu negócio</span>
                </>
            }
            description="Três opções pensadas para diferentes necessidades e orçamentos."
        >
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                {plans.map(plan => (
                    <Card
                        key={plan.id}
                        variant="plan"
                        className={`${getCardStyle(plan.highlight)} transition-all duration-500`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-xs font-semibold">
                                    <Star size={12} fill="currentColor" aria-hidden="true" />
                                    Mais Popular
                                </span>
                            </div>
                        )}

                        <CardHeader className="pb-4">
                            <div className="mb-2">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    {plan.subtitle}
                                </span>
                            </div>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription className="text-sm mt-2">
                                {plan.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <ul className="space-y-3" aria-label={`Recursos do plano ${plan.name}`}>
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check
                                                size={12}
                                                className="text-primary"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-border/50">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Público-alvo:
                                </span>
                                <p className="text-sm text-foreground mt-1">{plan.audience}</p>
                            </div>
                        </CardContent>

                        <CardFooter className="pt-4">
                            <Button
                                variant={plan.highlight ? 'hero' : 'gold-outline'}
                                className="w-full"
                                asChild
                            >
                                <a
                                    href={getWhatsAppUrlForPlan(plan.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Solicitar orçamento para plano ${plan.name}`}
                                >
                                    Solicitar Orçamento
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default PlansSection;
