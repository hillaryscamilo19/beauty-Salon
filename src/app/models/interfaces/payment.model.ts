import { Appointment } from './appoinment.models';

export interface Payment {
  id: number;
  appointment: Appointment;
  amount: number;
  date: Date;
  status: 'pending' | 'completed' | 'failed';
}
