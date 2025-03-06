export interface User {
  id: number;
  name: string;
  email: string;
  token?: string;
  role: 'client' | 'stylist' | 'admin';
  photoUrl?: string;
  phone?: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  imageUrl: string;
}

export interface Salon {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}
