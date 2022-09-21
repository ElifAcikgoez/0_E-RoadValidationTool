import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { UpdateComponent } from './parameters/update/update.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { DeleteComponent } from './parameters/delete/delete.component';
import {AppComponent} from "./app.component";



const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'create', component: GettingstartedComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'data/:id', component: UpdateComponent },
  { path: 'read', component: ComparisonComponent },
  { path: 'read/:id', component: ComparisonComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
