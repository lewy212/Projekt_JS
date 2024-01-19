import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePoIdComponent } from './user-profile-po-id.component';

describe('UserProfilePoIdComponent', () => {
  let component: UserProfilePoIdComponent;
  let fixture: ComponentFixture<UserProfilePoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfilePoIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfilePoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
