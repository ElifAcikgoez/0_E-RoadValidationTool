import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { CreateComponent } from './parameters/create/create.component';
import { UpdateComponent } from './parameters/update/update.component';
import { ReadComponent } from './parameters/read/read.component';
import { DeleteComponent } from './parameters/delete/delete.component';
import {AppComponent} from "./app.component";



const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'data/:id', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
