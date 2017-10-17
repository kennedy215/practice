import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRedirectComponent } from './confirm-redirect.component';

describe('ConfirmRedirectComponent', () => {
  let component: ConfirmRedirectComponent;
  let fixture: ComponentFixture<ConfirmRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
