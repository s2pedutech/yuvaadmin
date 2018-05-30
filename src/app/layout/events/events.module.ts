import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';


import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,EventsRoutingModule],
    declarations: [EventsComponent]
})
export class EventsModule {}
