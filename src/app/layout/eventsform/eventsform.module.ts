import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';


import { EventsformRoutingModule } from './eventsform-routing.module';
import { EventsformComponent } from './eventsform.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,EventsformRoutingModule,ReactiveFormsModule],
    declarations: [EventsformComponent]
})
export class EventsformModule {}
