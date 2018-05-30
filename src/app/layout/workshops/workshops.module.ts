import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';


import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,WorkshopsRoutingModule],
    declarations: [WorkshopsComponent]
})
export class WorkshopsModule {}
