import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectTypeComponent } from './selectprojecttype.component';

describe('SelectProjectTypeComponent', () => {
  let component: SelectProjectTypeComponent;
  let fixture: ComponentFixture<SelectProjectTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProjectTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});