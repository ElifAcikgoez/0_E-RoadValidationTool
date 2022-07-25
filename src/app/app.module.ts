import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { GettingstartedComponent } from './gettingstarted/gettingstarted.component';
import { RouteplaningComponent } from './routeplaning/routeplaning.component';
import { ComparisonComponent } from './comparison/comparison.component';
import {MatSelectModule} from "@angular/material/select";
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './parameters/create/create.component';
import { ReadComponent } from './parameters/read/read.component';
import { UpdateComponent } from './parameters/update/update.component';
import { DeleteComponent } from './parameters/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    GettingstartedComponent,
    RouteplaningComponent,
    ComparisonComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
