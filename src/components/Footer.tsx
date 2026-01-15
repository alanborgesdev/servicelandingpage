// components/Footer.tsx
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { SECTION_IDS } from "@/components/config/constants";
import { CONTACTS, COMPANY_INFO } from "@/components/config/contacts";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: `#${SECTION_IDS.about}`, label: "Sobre" },
        { href: `#${SECTION_IDS.plans}`, label: "Planos" },
        { href: `#${SECTION_IDS.models}`, label: "Modelos" },
        { href: `#${SECTION_IDS.contact}`, label: "Contato" },
    ];

    return (
        <footer className="py-16 bg-card border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <a href="/" className="flex items-center gap-2 mb-4">
                            <img
                                src={COMPANY_INFO.logo}
                                alt={COMPANY_INFO.fullName}
                                className="h-8 md:h-10 w-auto"
                            />
                        </a>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {COMPANY_INFO.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-semibold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href={CONTACTS.email.link}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary justify-center md:justify-start"
                                >
                                    <Mail size={16} />
                                    {CONTACTS.email.address}
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://instagram.com/borgex.web"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary justify-center md:justify-start"
                                >
                                    <Instagram size={16} />
                                    @borgex.web
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`tel:${CONTACTS.phone.tel}`}
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary justify-center md:justify-start"
                                >
                                    <Phone size={16} />
                                    {CONTACTS.phone.display}
                                </a>
                            </li>

                            <li className="flex items-center gap-3 text-sm text-muted-foreground justify-center md:justify-start">
                                <MapPin size={16} />
                                {CONTACTS.location}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t text-center text-sm text-muted-foreground">
                    © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
