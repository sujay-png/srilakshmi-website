export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'city-gate-green-view',
    title: 'City Gate Green View',
    location: 'Udupi',
    category: 'Residential',
    image: '/images/CITY-GREEN-VIEW.jpg',
  },
  {
    id: 'ashoka-paradise',
    title: 'Ashoka Paradise',
    location: 'Bejai, Mangalore',
    category: 'Apartments',
    image: '/images/ASHOKA-PARADISE.jpg',
  },
  {
    id: 'diamond-apartment',
    title: 'Diamond Apartment',
    location: 'Mangalore',
    category: 'Apartments',
    image: '/images/diamound.jpg',
  },
  {
    id: 'santosh-castle',
    title: 'Santosh Castle',
    location: 'Mangalore',
    category: 'Residential',
    image: '/images/Santosh-Castle.jpg',
  },
  {
    id: 'anantha-shayana',
    title: 'Anantha Shayana',
    location: 'Karkala',
    category: 'Residential',
    image: '/images/Anantha-Shayana.jpg',
  },
  {
    id: 'ashoka-residency',
    title: 'Ashoka Residency',
    location: 'Mangalore',
    category: 'Apartments',
    image: '/images/AshokaResidency.jpg',
  },
  {
    id: 'presidency-school',
    title: 'Presidency School',
    location: 'Mangalore',
    category: 'Educational Institutions',
    image: '/images/presidency-school-1.jpg',
  },
  {
    id: 'boys-hostel-mite',
    title: 'Boys Hostel MITE',
    location: 'Mangalore',
    category: 'Educational Institutions',
    image: '/images/Boys-Hostel-MITE.jpg',
  },
  {
    id: 'st-joseph-engineering',
    title: 'St. Joseph Engineering College',
    location: 'Mangalore',
    category: 'Educational Institutions',
    image: '/images/Stjosephengineering.jpg',
  },
  {
    id: 'sri-devi-institute',
    title: 'Sri Devi Institute of Technology',
    location: 'Kenjar, Mangalore',
    category: 'Educational Institutions',
    image: '/images/Sri-Devi-Institute-Technology.jpg',
  },
  {
    id: 'don-bosco-church',
    title: 'Don Bosco Church',
    location: 'Sirsi',
    category: 'Church',
    image: '/images/Don-Bosco-Chruch-Sirsi.jpg',
  },
  {
    id: 'infant-mary-chapel',
    title: 'Infant Mary Chapel',
    location: 'Mangalore',
    category: 'Church',
    image: '/images/Infant-Mary-Chapel.jpg',
  },
  {
    id: 'commercial-complex',
    title: 'Commercial Complex',
    location: 'Mangalore',
    category: 'Commercial Complex',
    image: '/images/commercial-Complex.png',
  }
];

export const categories = [
  'All',
  'Apartments',
  'Church',
  'Commercial Complex',
  'Educational Institutions',
  'Hospital',
  'Landscape',
  'Residential'
];
