export interface Listing {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  category: 'cars' | 'properties';
  contact: string;
}

export const carsListings: Listing[] = [
  {
    id: '1',
    title: '2023 Tesla Model 3',
    price: '$45,000',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 123-4567'
  },
  {
    id: '2',
    title: '2022 BMW M3',
    price: '$65,000',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 234-5678'
  },
  {
    id: '3',
    title: '2021 Mercedes-Benz C-Class',
    price: '$38,500',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 345-6789'
  },
  {
    id: '4',
    title: '2023 Ford Mustang GT',
    price: '$42,000',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 456-7890'
  },
  {
    id: '5',
    title: '2022 Audi A4',
    price: '$41,200',
    location: 'Seattle, WA',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 567-8901'
  },
  {
    id: '6',
    title: '2023 Honda Civic',
    price: '$28,500',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    category: 'cars',
    contact: '+1 (555) 678-9012'
  }
];

export const propertiesListings: Listing[] = [
  {
    id: '7',
    title: 'Modern Downtown Apartment',
    price: '$450,000',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 789-0123'
  },
  {
    id: '8',
    title: 'Luxury Beachfront Villa',
    price: '$1,250,000',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 890-1234'
  },
  {
    id: '9',
    title: 'Cozy Suburban House',
    price: '$325,000',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 901-2345'
  },
  {
    id: '10',
    title: 'Penthouse with City View',
    price: '$2,100,000',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 012-3456'
  },
  {
    id: '11',
    title: 'Rustic Country Home',
    price: '$275,000',
    location: 'Portland, OR',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 123-4567'
  },
  {
    id: '12',
    title: 'Contemporary Loft',
    price: '$580,000',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    category: 'properties',
    contact: '+1 (555) 234-5678'
  }
];
