import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInterviewersComponent } from './active-interviewers.component';

describe('ActiveInterviewersComponent', () => {
  let component: ActiveInterviewersComponent;
  let fixture: ComponentFixture<ActiveInterviewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveInterviewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveInterviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
