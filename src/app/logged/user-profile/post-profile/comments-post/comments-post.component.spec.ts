import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsPostComponent } from './comments-post.component';

describe('CommentsPostComponent', () => {
  let component: CommentsPostComponent;
  let fixture: ComponentFixture<CommentsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
