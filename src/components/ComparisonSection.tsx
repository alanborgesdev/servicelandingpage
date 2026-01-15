import { Check, MessageCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import type { ComparisonFeature } from "@/components/types";
import { getWhatsAppUrlForPlan } from "@/lib/whatsapp";

/**
 * Valor da célula da tabela / cards
 * Centralizado vertical e horizontalmente
 */
const ComparisonValue = ({ value }: { value: boolean | string }) => {
  return (
    <div className="flex items-center justify-center min-h-[24px]">
      {value === true && (
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <Check size={14} className="text-primary" aria-label="Incluído" />
        </div>
      )}

      {value === false && (
        <span className="text-xs text-muted-foreground italic">
          Não incluso
        </span>
      )}

      {typeof value === "string" && (
        <span className="text-sm font-medium">{value}</span>
      )}
    </div>
  );
};

const ComparisonSection = () => {
  const features: ComparisonFeature[] = [
    { name: "Número de seções", basic: "3–5", standard: "6–8", premium: "10+" },
    { name: "Personalização", basic: "Básica", standard: "Avançada", premium: "Premium" },
    { name: "SEO", basic: "Básico", standard: "Intermediário", premium: "Avançado" },
    { name: "Suporte pós-entrega", basic: "7 dias", standard: "15 dias", premium: "30 dias" },
    { name: "Botão WhatsApp", basic: true, standard: true, premium: true },
    { name: "Galeria de imagens", basic: false, standard: true, premium: true },
    { name: "Seção de depoimentos", basic: false, standard: true, premium: true },
    { name: "Galeria antes/depois", basic: false, standard: false, premium: true },
    { name: "Formulário avançado", basic: false, standard: false, premium: true },
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
      <div className="container mx-auto">

        {/* ================= MOBILE ================= */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {["Básico", "Standard", "Premium"].map((plan) => (
            <div
              key={plan}
              className={`p-6 rounded-xl border ${
                plan === "Standard"
                  ? "bg-primary/10 border-primary/30 shadow-md"
                  : "bg-card/40 border-border/50 backdrop-blur-sm"
              }`}
            >
              <h3
                className={`text-lg font-display font-bold text-center mb-6 ${
                  plan === "Standard" ? "text-primary" : ""
                }`}
              >
                {plan}
              </h3>

              <ul className="space-y-4 text-sm">
                {features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    <ComparisonValue
                      value={
                        plan === "Básico"
                          ? feature.basic
                          : plan === "Standard"
                          ? feature.standard
                          : feature.premium
                      }
                    />
                    <span className="text-muted-foreground">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-card/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left py-5 px-6 font-display font-bold">
                  Recursos
                </th>
                <th className="text-center py-5 px-6 font-display font-bold">
                  Básico
                </th>
                <th className="text-center py-5 px-6 font-display font-bold text-primary relative">
                  <div className="absolute inset-0 bg-primary/5 -z-10" />
                  Standard
                </th>
                <th className="text-center py-5 px-6 font-display font-bold">
                  Premium
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-border/50 hover:bg-muted/30 ${
                    index % 2 === 0 ? "bg-card/20" : ""
                  }`}
                >
                  <td className="py-4 px-6 text-sm font-medium">
                    {feature.name}
                  </td>

                  <td className="py-4 px-6 text-center">
                    <ComparisonValue value={feature.basic} />
                  </td>

                  <td className="py-4 px-6 text-center relative">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <ComparisonValue value={feature.standard} />
                  </td>

                  <td className="py-4 px-6 text-center">
                    <ComparisonValue value={feature.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NOTAS */}
        <p className="text-sm text-muted-foreground text-center mt-10 italic">
          * O suporte pós-entrega contempla ajustes conforme o plano contratado.
        </p>
        <p className="text-sm text-muted-foreground text-center italic">
          * Hospedagem e domínio não inclusos.
        </p>

        {/* CTA MOBILE – após comparativo */}
        <div className="md:hidden mt-12 text-center">
          <h3 className="font-display text-xl font-bold mb-3">
            Encontrou o plano ideal?
          </h3>

          <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
            Fale comigo agora e receba uma proposta personalizada para sua
            landing page.
          </p>

          <Button variant="whatsapp" size="lg" asChild>
            <a
              href={getWhatsAppUrlForPlan("Landing Page")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento pelo WhatsApp"
              className="gap-2"
            >
              <MessageCircle size={18} />
              Solicitar Orçamento
            </a>
          </Button>
        </div>

      </div>
    </Section>
  );
};

export default ComparisonSection;
