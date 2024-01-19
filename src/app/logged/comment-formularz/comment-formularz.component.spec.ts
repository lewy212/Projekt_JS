import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormularzComponent } from './comment-formularz.component';

describe('CommentFormularzComponent', () => {
  let component: CommentFormularzComponent;
  let fixture: ComponentFixture<CommentFormularzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentFormularzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
