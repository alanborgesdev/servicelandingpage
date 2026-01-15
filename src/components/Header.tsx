// components/Header.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTION_IDS } from "@/components/config/constants";
import { COMPANY_INFO } from "@/components/config/contacts";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: `#${SECTION_IDS.about}`, label: "Sobre" },
    { href: `#${SECTION_IDS.plans}`, label: "Planos" },
    { href: `#${SECTION_IDS.models}`, label: "Modelos" },
    { href: `#${SECTION_IDS.process}`, label: "Metodologia" },
    { href: `#${SECTION_IDS.contact}`, label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Logo (esquerda) */}
        <a
          href="/"
          className="flex items-center gap-2 z-10"
          aria-label={`${COMPANY_INFO.name} - Voltar ao topo`}
        >
          <img
            src={COMPANY_INFO.logo}
            alt={COMPANY_INFO.fullName}
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* ===== Desktop Navigation (CENTRALIZADO) ===== */}
        <nav
          className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2
            items-center gap-8
          "
          aria-label="Navegação principal"
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="
                text-sm
                font-display font-semibold
                text-muted-foreground hover:text-primary
                transition-colors relative group
              "
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ===== Mobile Menu Button (direita) ===== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none z-10"
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* ===== Mobile Menu ===== */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="
              absolute top-full left-0 right-0 mt-2 md:hidden
              bg-muted
              border border-border/50
              rounded-xl shadow-2xl
              animate-in fade-in zoom-in-95 duration-300
              overflow-hidden mx-4
            "
          >
            <nav
              className="flex flex-col gap-2 p-6"
              aria-label="Navegação mobile"
            >
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-xl
                    font-display font-semibold tracking-wide
                    text-foreground hover:text-primary
                    transition-colors py-3
                    border-b border-border/20
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
