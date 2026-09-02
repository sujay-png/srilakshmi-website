export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'architecture-design',
    title: 'Architecture and Design',
    description: 'We integrate our deep knowledge of construction with design processes to deliver visually stunning and practically feasible structures.',
    image: '/images/srilakshmicontructionwork.png'
  },
  {
    id: 'planning',
    title: 'Planning',
    description: 'Comprehensive planning strategies that address budget, schedule, and logistical challenges before they arise.',
    image: '/images/slider1.jpg'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Expert oversight through every phase of construction, ensuring projects are delivered on time, within budget, and to the highest standards of quality.',
    image: '/images/slider4.jpg'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Buildings',
    description: 'Constructing modern healthcare facilities that prioritize patient care, safety, and advanced medical infrastructure.',
    image: '/images/slider3.jpg'
  },
  {
    id: 'educational',
    title: 'Educational Buildings',
    description: 'Building inspiring learning environments from schools to major university campuses.',
    image: '/images/Sri-Devi-Institute-Technology.jpg'
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'State-of-the-art office spaces and commercial complexes designed for the modern workforce.',
    image: '/images/commercial-Complex.png'
  },
  {
    id: 'residential',
    title: 'Residential Buildings',
    description: 'Creating comfortable, sustainable, and beautiful homes tailored to our clients\' lifestyles.',
    image: '/images/ASHOKA-PARADISE.jpg'
  },
  {
    id: 'government-religious',
    title: 'Government / Religious Buildings',
    description: 'Expertise in constructing monumental and significant structures for communities and organizations.',
    image: '/images/Don-Bosco-Chruch-Sirsi.jpg'
  },
  {
    id: 'green-construction',
    title: 'Green Construction',
    description: 'Commitment to sustainable building practices, minimizing environmental impact while maximizing energy efficiency.',
    image: '/images/Srilakshmirainwaterharvesting.png'
  }
];
