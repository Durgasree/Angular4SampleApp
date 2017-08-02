import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJobsComponent } from './open-jobs.component';

describe('OpenJobsComponent', () => {
  let component: OpenJobsComponent;
  let fixture: ComponentFixture<OpenJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
