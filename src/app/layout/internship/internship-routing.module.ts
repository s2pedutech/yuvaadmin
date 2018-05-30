import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipComponent } from './internship.component';

const routes: Routes = [
    {
        path: '', component: InternshipComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InternshipRoutingModule {
}
