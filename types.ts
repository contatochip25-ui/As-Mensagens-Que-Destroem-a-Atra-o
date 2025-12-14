export interface Testimonial {
  id: number;
  name: string;
  details: string;
  before: string;
  after: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BonusItem {
  title: string;
  value: string;
  description: string;
}