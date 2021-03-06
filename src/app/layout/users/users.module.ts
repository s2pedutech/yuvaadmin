import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';


import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [CommonModule,PageHeaderModule,UsersRoutingModule],
    declarations: [UsersComponent]
})
export class UsersModule {}
