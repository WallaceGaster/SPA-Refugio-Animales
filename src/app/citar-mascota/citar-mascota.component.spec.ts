import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitarMascotaComponent } from './citar-mascota.component';

describe('CitarMascotaComponent', () => {
  let component: CitarMascotaComponent;
  let fixture: ComponentFixture<CitarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitarMascotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
