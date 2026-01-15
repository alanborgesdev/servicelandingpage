import { Target, Zap, Palette, Shield, MessageCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { FeatureGrid } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/components/config/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Foco em Conversão",
      description:
        "Páginas estrategicamente projetadas para transformar visitantes em clientes.",
    },
    {
      icon: Palette,
      title: "Design Exclusivo",
      description:
        "Cada projeto é único, criado sob medida para refletir sua marca.",
    },
    {
      icon: Zap,
      title: "Entrega Ágil",
      description: "Projetos entregues dentro dos prazos definidos.",
    },
    {
      icon: Shield,
      title: "Código Otimizado",
      description:
        "Performance, SEO e responsividade garantidos em cada página.",
    },
  ];

  return (
    <Section
      id={SECTION_IDS.about}
      variant="secondary"
      badge="Sobre o Serviço"
      title={
        <>
          Por que escolher nossas{" "}
          <span className="text-gradient-gold">Landing Pages</span>?
        </>
      }
      description="Criamos páginas que não apenas impressionam visualmente, mas também entregam resultados. Cada detalhe é pensado para maximizar suas conversões."
    >
      <FeatureGrid features={features} columns={4} />

      {/* CTA APÓS BENEFÍCIOS */}
      <div className="mt-16 text-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Gostou do que viu?
        </h3>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Vamos conversar sobre sua landing page e encontrar a melhor solução
          para o seu negócio.
        </p>

        <Button variant="whatsapp" size="lg" asChild>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="gap-2"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </Section>
  );
};

export default AboutSection;
