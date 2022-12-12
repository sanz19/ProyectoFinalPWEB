import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostslistComponent } from './postslist.component';

describe('PostslistComponent', () => {
  let component: PostslistComponent;
  let fixture: ComponentFixture<PostslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
