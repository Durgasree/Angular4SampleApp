import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInterviewersComponent } from './pending-interviewers.component';

describe('PendingInterviewersComponent', () => {
  let component: PendingInterviewersComponent;
  let fixture: ComponentFixture<PendingInterviewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInterviewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInterviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
