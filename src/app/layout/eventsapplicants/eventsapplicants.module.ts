import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';


import { EventsapplicantsRoutingModule } from './eventsapplicants-routing.module';
import { EventsapplicantsComponent } from './eventsapplicants.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,EventsapplicantsRoutingModule],
    declarations: [EventsapplicantsComponent]
})
export class EventsapplicantsModule {}
