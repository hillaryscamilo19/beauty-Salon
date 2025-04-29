import { Component } from '@angular/core';
import { AppointmentServiceService } from '../../../services/servicesAppointment/appointment-service.service';
import { Appointment } from 'src/app/models/interfaces/appoinment.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentServiceService
  ) {
    this.appointmentForm = this.fb.group({
      client: ['', Validators.required],
      employee: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  submitAppointment() {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = this.appointmentForm.value;
      this.appointmentService.createAppointment(appointment).subscribe({
        next: () => alert('Appointment booked successfully!'),
        error: (err) => console.error('Error:', err)
      });
    }
  }
}
