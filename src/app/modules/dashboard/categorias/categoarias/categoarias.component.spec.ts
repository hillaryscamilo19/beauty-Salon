import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoariasComponent } from './categoarias.component';

describe('CategoariasComponent', () => {
  let component: CategoariasComponent;
  let fixture: ComponentFixture<CategoariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoariasComponent]
    });
    fixture = TestBed.createComponent(CategoariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
