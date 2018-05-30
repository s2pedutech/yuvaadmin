import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule' },
            { path: 'internship', loadChildren: './internship/internship.module#InternshipModule' },
            { path: 'workshops', loadChildren: './workshops/workshops.module#WorkshopsModule' },
            { path: 'userform', loadChildren: './userform/userform.module#UserformModule' },
            { path: 'eventsform', loadChildren: './eventsform/eventsform.module#EventsformModule' },
            { path: 'eventsapplicants', loadChildren: './eventsapplicants/eventsapplicants.module#EventsapplicantsModule' }

            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
