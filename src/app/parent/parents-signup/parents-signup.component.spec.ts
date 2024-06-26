import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsSignupComponent } from './parents-signup.component';

describe('ParentsSignupComponent', () => {
  let component: ParentsSignupComponent;
  let fixture: ComponentFixture<ParentsSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentsSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
