import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarActualComponent } from './donar-actual.component';

describe('DonarActualComponent', () => {
  let component: DonarActualComponent;
  let fixture: ComponentFixture<DonarActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonarActualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonarActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
