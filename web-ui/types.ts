
export type Tab = 'Events' | 'Locations' | 'Menu' | 'Sub' | 'Profile';

export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  isTonight?: boolean;
  isLive?: boolean;
  isSellingFast?: boolean;
  description?: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  image: string;
  status?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'Food' | 'Drinks';
}
