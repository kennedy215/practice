import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToollistComponent } from './toollist.component';

describe('ToollistComponent', () => {
  let component: ToollistComponent;
  let fixture: ComponentFixture<ToollistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToollistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
