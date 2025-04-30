import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryService } from 'src/app/services/Category/Category.service';
import { AppointmentServiceService } from 'src/app/services/servicesAppointment/appointment-service.service';
import { AuthServiceService } from 'src/app/services/servicesAuth/auth-service.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-categoarias',
  templateUrl: './categoarias.component.html',
  styleUrls: ['./categoarias.component.css'],
})
export class CategoariasComponent {
  employees: any[] = [];
  userFullName = '';
  categoriaFlter?: any[] = [];
  categoryId!: string;
  settings!: '/settings';
  appointmentForm!: FormGroup;

  constructor(
    private servicesContrato: CategoryService,
    private fb: FormBuilder,
    private appointmentService: AppointmentServiceService,
    private authService: AuthServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUserValue;
    this.userFullName = currentUser?.name || '';
    this.appointmentForm.patchValue({ client: currentUser?.name });
    this.appointmentForm = this.fb.group({
      client: ['', Validators.required],
      employee: ['', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: [''],
    });

    this.loadEmployees();
  }

  loadEmployees() {
    this.http.get<any[]>(`${enviroment.api}api/employees`).subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.error('Error loading employees', err),
    });
  }

  bookAppointment() {
    console.log('Cita agendada:', this.appointment);
  }
  selectCategory(categoryId: string): void {
    console.log('Categoría seleccionada:', categoryId);
  }

  Getcategoria() {
    this.servicesContrato.getCategories().subscribe({
      next: (data) => {
        this.categoriaFlter = data;
      },
      error: (error) => {
        console.log('Error Carga Categoria:', error);
      },
    });
  }

  openModal(categorie: any) {
    const currentUser = this.authService.currentUserValue;

    this.appointmentForm.patchValue({
      client: currentUser?.name || currentUser?.id || '',
      service: categorie._id,
    });
  }

  submitAppointment() {
    if (this.appointmentForm.valid) {
      const appointment = this.appointmentForm.value;
      this.appointmentService.createAppointment(appointment).subscribe({
        next: () => {
          alert('¡Cita agendada con éxito!');
          document
            .querySelector('#appointmentModal .btn-close')
            ?.dispatchEvent(new Event('click')); // cierra modal
        },
        error: (err) => console.error('Error al agendar cita:', err),
      });
    }
  }
  appointment = {
    serviceId: '',
    idCategoria: '',
    price: '',
    date: '',
    time: '',
    notes: '',
  };
}
