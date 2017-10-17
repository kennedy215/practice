import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineIdeaParameterComponent } from './defineideaparameter.component';

describe('DefineIdeaParameterComponent', () => {
  let component: DefineIdeaParameterComponent;
  let fixture: ComponentFixture<DefineIdeaParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineIdeaParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineIdeaParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
