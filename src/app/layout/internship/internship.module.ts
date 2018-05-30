import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';


import { InternshipRoutingModule } from './internship-routing.module';
import { InternshipComponent } from './internship.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,InternshipRoutingModule],
    declarations: [InternshipComponent]
})
export class InternshipModule {}
