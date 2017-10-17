import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineProjectIdeaComponent } from './defineprojectidea.component';

describe('DefineProjectIdeaComponent', () => {
  let component: DefineProjectIdeaComponent;
  let fixture: ComponentFixture<DefineProjectIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineProjectIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineProjectIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
