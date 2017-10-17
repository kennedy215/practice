import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineRolesAndSkills } from './definerolesandskills.component';

describe('DefineRolesAndSkillsComponent', () => {
  let component: DefineRolesAndSkillsComponent;
  let fixture: ComponentFixture<DefineRolesAndSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineRolesAndSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineRolesAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
