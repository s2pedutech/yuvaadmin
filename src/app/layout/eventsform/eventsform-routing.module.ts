import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsformComponent } from './eventsform.component';

const routes: Routes = [
    {
        path: '', component: EventsformComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsformRoutingModule {
}
