import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';
 

import { UserformRoutingModule } from './userform-routing.module';
import { UserformComponent } from './userform.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,UserformRoutingModule,ReactiveFormsModule],
    declarations: [UserformComponent]
})
export class UserformModule {}
