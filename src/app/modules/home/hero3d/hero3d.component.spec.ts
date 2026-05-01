import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero3dComponent } from './hero3d.component';

describe('Hero3dComponent', () => {
  let component: Hero3dComponent;
  let fixture: ComponentFixture<Hero3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hero3dComponent]
    });
    fixture = TestBed.createComponent(Hero3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
