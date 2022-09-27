import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignUpComponent } from './signin-sign-up.component';

describe('SigninSignUpComponent', () => {
  let component: SigninSignUpComponent;
  let fixture: ComponentFixture<SigninSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
