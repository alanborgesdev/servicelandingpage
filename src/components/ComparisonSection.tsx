// components/ComparisonSection.tsx
import { Check, X } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SECTION_IDS } from '@/components/config/constants';
import type { ComparisonFeature } from '@/components/types';

/**
 * Renderiza valor da célula de comparação
 */
const ComparisonValue = ({ value }: { value: boolean | string }) => {
    if (value === true) {
        return (
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Check size={14} className="text-primary" aria-label="Incluído" />
            </div>
        );
    }
    if (value === false) {
        return (
            <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mx-auto">
                <X size={14} className="text-muted-foreground" aria-label="Não incluído" />
            </div>
        );
    }
    return <span className="text-sm text-foreground">{value}</span>;
};

const ComparisonSection = () => {
    const features: ComparisonFeature[] = [
        { name: 'Número de seções', basic: '3-5', standard: '6-8', premium: '10+' },
        { name: 'Design responsivo', basic: true, standard: true, premium: true },
        {
            name: 'Personalização',
            basic: 'Básica',
            standard: 'Avançada',
            premium: 'Premium',
        },
        { name: 'Botão WhatsApp', basic: true, standard: true, premium: true },
        { name: 'Galeria de imagens', basic: false, standard: true, premium: true },
        {
            name: 'Seção de depoimentos',
            basic: false,
            standard: true,
            premium: true,
        },
        {
            name: 'Animações e efeitos',
            basic: false,
            standard: 'Básicas',
            premium: 'Avançadas',
        },
        {
            name: 'Galeria antes/depois',
            basic: false,
            standard: false,
            premium: true,
        },
        {
            name: 'Formulário avançado',
            basic: false,
            standard: false,
            premium: true,
        },
        { name: 'Google Analytics', basic: false, standard: false, premium: true },
        {
            name: 'SEO',
            basic: 'Básico',
            standard: 'Intermediário',
            premium: 'Avançado',
        },
        { name: 'Rodadas de revisão', basic: '1', standard: '2', premium: '3' },
        {
            name: 'Suporte pós-entrega',
            basic: '7 dias',
            standard: '15 dias',
            premium: '30 dias',
        },
    ];

    return (
        <Section
            variant="secondary"
            badge="Comparativo"
            title={
                <>
                    Compare os <span className="text-gradient-gold">planos</span>
                </>
            }
            description="Veja em detalhes o que cada plano oferece."
        >
            <div className="overflow-x-auto">
                <table
                    className="w-full min-w-[600px]"
                    role="table"
                    aria-label="Comparação de planos"
                >
                    <thead>
                        <tr className="border-b border-border">
                            <th
                                className="text-left py-4 px-4 font-display font-semibold text-foreground"
                                scope="col"
                            >
                                Recursos
                            </th>
                            <th
                                className="text-center py-4 px-4 font-display font-semibold text-foreground"
                                scope="col"
                            >
                                Básico
                            </th>
                            <th
                                className="text-center py-4 px-4 font-display font-semibold text-primary relative"
                                scope="col"
                            >
                                <div className="absolute inset-0 bg-primary/5 -z-10" />
                                Standard
                            </th>
                            <th
                                className="text-center py-4 px-4 font-display font-semibold text-foreground"
                                scope="col"
                            >
                                Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr
                                key={feature.name}
                                className={`border-b border-border/50 ${
                                    index % 2 === 0 ? 'bg-card/30' : ''
                                }`}
                            >
                                <td className="py-4 px-4 text-sm text-muted-foreground" scope="row">
                                    {feature.name}
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <ComparisonValue value={feature.basic} />
                                </td>
                                <td className="py-4 px-4 text-center relative">
                                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                                    <ComparisonValue value={feature.standard} />
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <ComparisonValue value={feature.premium} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    );
};

export default ComparisonSection;
