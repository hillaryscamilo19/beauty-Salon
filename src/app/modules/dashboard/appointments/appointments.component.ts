import { Component } from '@angular/core';
import { AppointmentServiceService } from '../../../services/servicesAppointment/appointment-service.service';
import { Appointment } from 'src/app/models/interfaces/appoinment.models';
import { Stylist, StylistService } from 'src/app/services/stylisservices/Stylist.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  selectedDate: Date = new Date();
  morningSlots: string[] = ['9:00', '10:00', '11:00'];
  afternoonSlots: string[] = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00'];
  stylists: Stylist[] = [];
  selectedService: string = 'Hair Spa';
  servicePrice: number = 40;

  constructor(private stylistService: StylistService) {}

  ngOnInit() {
    this.loadStylists();
  }

  private loadStylists() {
    this.stylistService.getTopStylists().subscribe(
      stylists => this.stylists = stylists
    );
  }

  selectDate(date: Date) {
    this.selectedDate = date;
  }

  bookAppointment() {
    // Implementar lógica de reserva
    console.log('Appointment booked');
  }

}
