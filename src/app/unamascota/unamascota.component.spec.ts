import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnamascotaComponent } from './unamascota.component';

describe('UnamascotaComponent', () => {
  let component: UnamascotaComponent;
  let fixture: ComponentFixture<UnamascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnamascotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnamascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
