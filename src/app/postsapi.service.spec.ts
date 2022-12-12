import { TestBed } from '@angular/core/testing';

import { PostsapiService } from './postsapi.service';

describe('PostsapiService', () => {
  let service: PostsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
