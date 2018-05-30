import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

//import { TabsComponent } from './../bs-component/components/tabs/tabs.component';
import { BsComponentModule } from './../bs-component/bs-component.module';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, BsComponentModule],
    declarations: [TablesComponent]
})
export class TablesModule {}
