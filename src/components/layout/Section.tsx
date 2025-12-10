// components/layout/Section.tsx
import { cn } from '@/lib/utils';
import type { SectionProps } from '@/components/types';

/**
 * Componente de seção reutilizável
 */
export const Section = ({
    id,
    badge,
    title,
    description,
    variant = 'default',
    children,
    className,
}: SectionProps) => {
    const variantClasses = {
        default: 'bg-background',
        secondary: 'bg-secondary/30',
        primary: 'bg-primary/5',
    };

    return (
        <section
            id={id}
            className={cn('py-24', variantClasses[variant], className)}
            aria-labelledby={id ? `${id}-heading` : undefined}
        >
            <div className="container mx-auto px-6">
                {(badge || title || description) && (
                    <SectionHeader
                        id={id ? `${id}-heading` : undefined}
                        badge={badge}
                        title={title}
                        description={description}
                    />
                )}
                {children}
            </div>
        </section>
    );
};

/**
 * Header de seção reutilizável
 */
interface SectionHeaderProps {
    id?: string;
    badge?: string;
    title: string | React.ReactNode;
    description?: string;
}

export const SectionHeader = ({ id, badge, title, description }: SectionHeaderProps) => (
    <div className="max-w-3xl mx-auto text-center mb-16">
        {badge && (
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                {badge}
            </span>
        )}
        <h2
            id={id}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
        >
            {title}
        </h2>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
);
