// components/ProcessSection.tsx
import {
    MessageSquare,
    Palette,
    LayoutGrid,
    Smartphone,
    CheckCircle,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { FeatureGrid } from "@/components/ui/feature-card";
import { SECTION_IDS } from "@/components/config/constants";

const ProcessSection = () => {
    const steps = [
        {
            icon: MessageSquare,
            title: "Briefing Rápido",
            description:
                "Entendo o objetivo do cliente e o que a landing page precisa comunicar.",
        },
        {
            icon: Palette,
            title: "Criação do Layout",
            description:
                "Desenvolvo um design moderno, alinhado à identidade visual e ao público-alvo.",
        },
        {
            icon: LayoutGrid,
            title: "Estrutura da Página",
            description:
                "Organizo as seções estrategicamente para gerar clareza e conversão.",
        },
        {
            icon: Smartphone,
            title: "Implementação Responsiva",
            description:
                "Construo a landing page com qualidade, velocidade e compatibilidade em todos os dispositivos.",
        },
        {
            icon: CheckCircle,
            title: "Ajustes e Entrega Final",
            description:
                "Faço revisões necessárias até a página estar perfeita para publicação.",
        },
    ];

    return (
        <Section
            id={SECTION_IDS.process}
            variant="secondary"
            badge="Metodologia"
            title={
                <>
                    Meu Processo de{" "}
                    <span className="text-gradient-gold">Criação</span>
                </>
            }
            description="Um método claro e eficiente para entregar landing pages profissionais e focadas em conversão."
        >
            <FeatureGrid features={steps} columns={5} showConnectors={true} />
        </Section>
    );
};

export default ProcessSection;
