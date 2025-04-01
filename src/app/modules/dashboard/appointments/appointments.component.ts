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
  selectedDate: Date = new Date()
  currentMonth = "April"
  selectedTimeSlot: string | null = null
  selectedStylist: Stylist | null = null

  days = [
    { dayName: "Mo", date: 10 },
    { dayName: "Tue", date: 11 },
    { dayName: "Wed", date: 12 },
    { dayName: "Th", date: 13 },
    { dayName: "Fri", date: 14 },
    { dayName: "Sa", date: 15 },
    { dayName: "Su", date: 16 },
  ]

  morningSlots: string[] = ["9:00", "10:00", "11:00"]
  afternoonSlots: string[] = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"]
  stylists: Stylist[] = []
  selectedService = "Hair Spa"
  servicePrice = 40

  constructor(private stylistService: StylistService) {
    // Inicializar la fecha seleccionada al día 12 (como en la imagen)
    this.selectedDate = new Date()
    this.selectedDate.setDate(12)
  }

  ngOnInit() {
    this.loadStylists()
  }

  private loadStylists() {
    this.stylistService.getTopStylists().subscribe((stylists) => (this.stylists = stylists))
  }

  previousMonth() {
    // Lógica para cambiar al mes anterior
    console.log("Previous month")
  }

  nextMonth() {
    // Lógica para cambiar al mes siguiente
    console.log("Next month")
  }

  selectDate(date: number) {
    const newDate = new Date(this.selectedDate)
    newDate.setDate(date)
    this.selectedDate = newDate
  }

  selectTimeSlot(slot: string) {
    this.selectedTimeSlot = slot
  }

  selectStylist(stylist: Stylist) {
    this.selectedStylist = stylist
  }

  bookAppointment() {
    // Implementar lógica de reserva
    console.log("Appointment booked", {
      date: this.selectedDate,
      time: this.selectedTimeSlot,
      stylist: this.selectedStylist,
      service: this.selectedService,
      price: this.servicePrice,
    })
  }
}
