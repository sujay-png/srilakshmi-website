export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'residential-domestic',
    title: 'Residential and Domestic construction',
    description: 'Creating comfortable, sustainable, and beautiful homes tailored to our clients\' lifestyles.',
    image: '/images/ASHOKA-PARADISE.jpg'
  },
  {
    id: 'commercial-institutional',
    title: 'Commercial and Institutional Infrastructure',
    description: 'State-of-the-art office spaces, commercial complexes, and institutional facilities designed for the modern world.',
    image: '/images/commercial-Complex.png'
  },
  {
    id: 'industrial-civil',
    title: 'Industrial and Specialized Civil Engineering',
    description: 'Expert oversight through every phase of specialized construction, ensuring robust and durable civil infrastructure.',
    image: '/images/slider4.jpg'
  },
  {
    id: 'landscape-hardscape',
    title: 'Landscape and Hardscape solutions',
    description: 'Transforming outdoor spaces with expert landscaping and hardscaping that perfectly complement the built environment.',
    image: '/images/slider1.jpg'
  },
  {
    id: 'architecture-planning',
    title: 'Architecture design and planning',
    description: 'We integrate our deep knowledge of construction with design processes to deliver visually stunning and practically feasible structures.',
    image: '/images/srilakshmicontructionwork.png'
  },
  {
    id: 'sustainable-finishing',
    title: 'Sustainable & Finishing Solutions',
    description: 'Commitment to sustainable building practices, minimizing environmental impact while delivering premium finishing touches.',
    image: '/images/Srilakshmirainwaterharvesting.png'
  }
];
