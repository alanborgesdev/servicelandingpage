// types/index.ts
import { LucideIcon } from 'lucide-react';

/**
 * Feature card types
 */
export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

/**
 * Plan types
 */
export type PlanStyle = 'dark' | 'feminine' | 'professional';
export type PlanTier = 'basic' | 'standard' | 'premium';

export interface Plan {
    id: PlanTier;
    name: string;
    subtitle: string;
    description: string;
    style: PlanStyle;
    features: string[];
    audience: string;
    highlight: boolean;
    price?: {
        amount: number;
        currency: string;
        period?: string;
    };
}

/**
 * Comparison table types
 */
export interface ComparisonFeature {
    name: string;
    basic: boolean | string;
    standard: boolean | string;
    premium: boolean | string;
}

/**
 * Gallery/Model types
 */
export interface GalleryModel {
    image: string;
    title: string;
    plan: string;
    description: string;
    style: PlanStyle;
    url?: string;
}

/**
 * Process step types
 */
export interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
}

/**
 * Testimonial types
 */
export interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar?: string;
}

/**
 * Section props types
 */
export interface SectionProps {
    id?: string;
    badge?: string;
    title: string | React.ReactNode;
    description?: string;
    variant?: 'default' | 'secondary' | 'primary';
    className?: string;
    children: React.ReactNode;
}

/**
 * Navigation item types
 */
export interface NavItem {
    href: string;
    label: string;
}

/**
 * Social link types
 */
export interface SocialLink {
    icon: LucideIcon;
    href: string;
    label: string;
}
