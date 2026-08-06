import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export type Area = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export type Differencial = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Badge = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
  span?: "tall" | "wide" | "normal";
};

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
};
