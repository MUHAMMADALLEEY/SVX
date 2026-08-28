export type NavItem = {
  label: string;
  href: string;
};

export type SockShowcaseCategory =
  | "Multipacks"
  | "Crew socks"
  | "Performance socks"
  | "Lifestyle colors"
  | "Logo / custom branding";

export type SockShowcaseImage = {
  id: string;
  title: string;
  category: SockShowcaseCategory;
  image: string;
  alt: string;
};

export type CatalogueProduct = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  meta: string;
  specs: string[];
};

export type CatalogueCategory = {
  label: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Reason = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};
