import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormularzComponent } from './post-formularz.component';

describe('PostFormularzComponent', () => {
  let component: PostFormularzComponent;
  let fixture: ComponentFixture<PostFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostFormularzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
