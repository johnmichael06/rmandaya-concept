import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface GridItemProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export interface CarouselItemProps {
  image: string;
  title: string;
  subtitle: string;
}

export interface WhyRoyalItemProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}