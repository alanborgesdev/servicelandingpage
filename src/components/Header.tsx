// components/Header.tsx
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SECTION_IDS } from '@/components/config/constants';
import { COMPANY_INFO } from '@/components/config/contacts';

interface HeaderProps {
    scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
    const navItems = [
        { href: `#${SECTION_IDS.about}`, label: 'Sobre' },
        { href: `#${SECTION_IDS.plans}`, label: 'Planos' },
        { href: `#${SECTION_IDS.examples}`, label: 'Exemplos' },
        { href: `#${SECTION_IDS.process}`, label: 'Metodologia' },
        { href: `#${SECTION_IDS.contact}`, label: 'Contato' },
        // { href: `#${SECTION_IDS.testimonials}`, label: 'Depoimentos' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-background/95 backdrop-blur-md shadow-elegant py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center gap-2"
                    aria-label={`${COMPANY_INFO.name} - Voltar ao topo`}
                >
                    <img
                        src={COMPANY_INFO.logo}
                        alt={COMPANY_INFO.fullName}
                        className="h-12 md:h-14 w-auto"
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
                    {navItems.map(item => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <Button variant="gold" size="sm" className="gap-2" asChild>
                    <a href={`#${SECTION_IDS.contact}`}>
                        <MessageCircle size={16} aria-hidden="true" />
                        <span className="hidden sm:inline">Solicitar Orçamento</span>
                        <span className="sm:hidden">Orçamento</span>
                    </a>
                </Button>
            </div>
        </header>
    );
};

export default Header;
