import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormularzComponent } from './user-formularz.component';

describe('UserFormularzComponent', () => {
  let component: UserFormularzComponent;
  let fixture: ComponentFixture<UserFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormularzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
