import { User } from './use.models';

export interface Appointment {
  id: number;
  date: Date;
  time: string;
  client: User;
  stylist: User;
  service: Service;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}
