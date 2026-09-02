export interface Client {
  id: string;
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { id: 'new-india', name: 'New India Constructions, Mangalore', logo: '/images/newindia-constructions.png' },
  { id: 'sri-devi', name: 'Sri Devi Education Trust, Mangalore', logo: '/images/srideviinstutekenjar.jpg' },
  { id: 'st-aloysius', name: 'Karnataka Jesuit Society (St. Aloysius) Mangalore', logo: '/images/saeclogo.gif' },
  { id: 'raja-laxmi', name: 'Raja Laxmi Education Trust, Mangalore', logo: '/images/Rajalakshmi.png' },
  { id: 'charishma', name: 'Charishma Builders, Bombay', logo: '/images/charishma.png' },
  { id: 'prasad-netralaya', name: 'Prasad Netralaya', logo: '/images/Prasad-Netralaya-logo.jpg' },
  { id: 'mohthishams', name: 'Mohthishams Complexes Pvt Ltd, Mangalore', logo: '/images/mcpl-logo-new.png' },
  { id: 'inland', name: 'Inland Infrastructure Pvt Ltd., Mangalore', logo: '/images/inland-builders-mangalore.jpg' },
  { id: 'landlinks', name: 'Landlinks Housing Development Corporation, Mangalore', logo: '/images/landlinks.png' },
  { id: 'city-developers', name: 'City Developers, Udupi', logo: '/images/citydevelopers.jpg' }
];
