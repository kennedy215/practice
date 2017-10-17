import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosttomarketplaceComponent } from './posttomarketplace.component';

describe('PosttomarketplaceComponent', () => {
  let component: PosttomarketplaceComponent;
  let fixture: ComponentFixture<PosttomarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosttomarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosttomarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
