// components/CTASection.tsx
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTION_IDS } from '@/components/config/constants';
import { CONTACTS } from '@/components/config/contacts';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const CTASection = () => {
    return (
        <section id={SECTION_IDS.contact} className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        Vamos Começar
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Pronto para criar sua{' '}
                        <span className="text-gradient-gold">landing page</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Entre em contato agora e transforme sua presença online. Respondo em até 24
                        horas com uma proposta personalizada.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="whatsapp" size="xl" className="gap-2" asChild>
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Falar no WhatsApp"
                            >
                                <MessageCircle size={20} aria-hidden="true" />
                                Falar no WhatsApp
                            </a>
                        </Button>
                        <Button variant="gold-outline" size="xl" className="gap-2" asChild>
                            <a href={`mailto:${CONTACTS.email}`} aria-label="Enviar e-mail">
                                Enviar E-mail
                                <ArrowRight size={20} aria-hidden="true" />
                            </a>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-8">
                        Sem compromisso. Consultoria inicial gratuita.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
