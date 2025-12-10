// components/Footer.tsx
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { SECTION_IDS } from '@/components/config/constants';
import { CONTACTS, COMPANY_INFO } from '@/components/config/contacts';
import type { SocialLink } from '@/components/types';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: `#${SECTION_IDS.about}`, label: 'Sobre' },
        { href: `#${SECTION_IDS.plans}`, label: 'Planos' },
        { href: `#${SECTION_IDS.examples}`, label: 'Exemplos' },
        { href: `#${SECTION_IDS.testimonials}`, label: 'Depoimentos' },
        { href: `#${SECTION_IDS.contact}`, label: 'Contato' },
    ];

    const socialLinks: SocialLink[] = [
        { icon: Instagram, href: CONTACTS.social.instagram, label: 'Instagram' },
        { icon: Linkedin, href: CONTACTS.social.linkedin, label: 'LinkedIn' },
    ];

    return (
        <footer className="py-16 bg-card border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a
                            href="/"
                            className="flex items-center gap-2 mb-4"
                            aria-label="BORGEX - Voltar ao topo"
                        >
                            <img
                                src={COMPANY_INFO.logo}
                                alt={COMPANY_INFO.fullName}
                                className="h-8 md:h-10 w-auto"
                            />
                        </a>
                        <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                            {COMPANY_INFO.description}
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(social => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                >
                                    <social.icon size={18} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display font-semibold text-foreground mb-4">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-semibold text-foreground mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={`mailto:${CONTACTS.email}`}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={`Enviar e-mail para ${CONTACTS.email}`}
                                >
                                    <Mail size={16} aria-hidden="true" />
                                    {CONTACTS.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${CONTACTS.phone.tel}`}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    aria-label={`Ligar para ${CONTACTS.phone.display}`}
                                >
                                    <Phone size={16} aria-hidden="true" />
                                    {CONTACTS.phone.display}
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <MapPin size={16} aria-hidden="true" />
                                    {CONTACTS.location}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
