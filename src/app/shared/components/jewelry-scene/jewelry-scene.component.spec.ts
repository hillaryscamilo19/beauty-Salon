import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelrySceneComponent } from './jewelry-scene.component';

describe('JewelrySceneComponent', () => {
  let component: JewelrySceneComponent;
  let fixture: ComponentFixture<JewelrySceneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelrySceneComponent]
    });
    fixture = TestBed.createComponent(JewelrySceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
