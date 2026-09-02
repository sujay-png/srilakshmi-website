export interface Testimonial {
  id: string;
  name: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'City Developers',
    company: 'Udupi',
    quote: 'The Best Team I have ever worked with. Their dedication and commitment to quality are unmatched in the industry.'
  },
  {
    id: 't2',
    name: 'Raghu',
    company: 'Udupi',
    quote: 'Excellent execution of our project from start to finish. Highly professional and always on time.'
  },
  {
    id: 't3',
    name: 'Engineering consultants',
    company: 'ACE Technocrats Pvt Ltd',
    quote: 'A reliable partner for all civil engineering needs. Their technical expertise is truly commendable.'
  },
  {
    id: 't4',
    name: 'Prasanna K R',
    company: 'Ocean Pearl, Bejai Kapikad',
    quote: 'Outstanding work quality and exceptional project management skills. Delivered exactly what was promised.'
  }
];
