import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsapplicantsComponent } from './eventsapplicants.component';

describe('EventsapplicantsComponent', () => {
  let component: EventsapplicantsComponent;
  let fixture: ComponentFixture<EventsapplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsapplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
