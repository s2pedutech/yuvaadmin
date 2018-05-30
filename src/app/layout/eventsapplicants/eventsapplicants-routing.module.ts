import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsapplicantsComponent } from './eventsapplicants.component';

const routes: Routes = [
    {
        path: '', component: EventsapplicantsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsapplicantsRoutingModule {
}
