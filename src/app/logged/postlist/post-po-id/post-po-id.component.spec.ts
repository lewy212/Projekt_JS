import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPoIdComponent } from './post-po-id.component';

describe('PostPoIdComponent', () => {
  let component: PostPoIdComponent;
  let fixture: ComponentFixture<PostPoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPoIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
