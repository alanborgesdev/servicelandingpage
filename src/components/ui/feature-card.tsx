// components/ui/FeatureCard.tsx
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ANIMATION_CONFIG } from '@/components/config/constants';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
    variant?: 'default' | 'numbered';
    number?: number;
    className?: string;
    showConnector?: boolean;
}

/**
 * Card de feature reutilizável
 */
export const FeatureCard = ({
    icon: Icon,
    title,
    description,
    delay = 0,
    variant = 'default',
    number,
    className,
    showConnector = false,
}: FeatureCardProps) => {
    return (
        <article
            className={cn(
                'group relative p-6 rounded-xl',
                'bg-card border border-border/50',
                'hover:border-primary/30 hover:-translate-y-1 hover:shadow-gold',
                'transition-all duration-300',
                className,
            )}
            style={{ animationDelay: `${delay}ms` }}
        >
            {variant === 'numbered' && number !== undefined && (
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span
                        className="text-primary-foreground font-bold text-sm"
                        aria-label={`Passo ${number}`}
                    >
                        {number}
                    </span>
                </div>
            )}

            <div
                className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                    'bg-primary/10 group-hover:bg-primary/20',
                    'transition-colors',
                )}
                aria-hidden="true"
            >
                <Icon className="w-6 h-6 text-primary" />
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

            {/* Connector line para processo */}
            {showConnector && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
            )}
        </article>
    );
};

/**
 * Grid de features reutilizável
 */
interface FeatureGridProps {
    features: Array<{
        icon: LucideIcon;
        title: string;
        description: string;
    }>;
    columns?: 2 | 3 | 4 | 5;
    variant?: 'default' | 'numbered';
    showConnectors?: boolean;
    className?: string;
}

export const FeatureGrid = ({
    features,
    columns = 4,
    variant = 'default',
    showConnectors = false,
    className,
}: FeatureGridProps) => {
    const gridClasses = {
        2: 'sm:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'sm:grid-cols-2 lg:grid-cols-4',
        5: 'md:grid-cols-2 lg:grid-cols-5',
    };

    return (
        <div className={cn('grid gap-6', gridClasses[columns], className)}>
            {features.map((feature, index) => (
                <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={index * ANIMATION_CONFIG.cardDelayIncrement}
                    variant={variant}
                    number={variant === 'numbered' ? index + 1 : undefined}
                    showConnector={showConnectors && index < features.length - 1}
                />
            ))}
        </div>
    );
};
