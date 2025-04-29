import { User } from './use.models';

export interface Appointment {
  client: string;
  employee: string;
  service: string;
  date: string;     // formato ISO (2025-04-29)
  time: string;     // ej: "10:00 AM"
  status?: string;
  notes?: string;
}

export interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}
