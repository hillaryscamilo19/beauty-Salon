import { User } from './use.models';

export interface Appointment {
  id?: string
  userId: string
  specialistId: string
  serviceId: string
  date: string
  time: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  price: number
  serviceName?: string
  specialistName?: string
}

export interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
}
