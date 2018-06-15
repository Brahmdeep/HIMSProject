import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigInComponent } from './sig-in/sig-in.component';
import { MedicalStafRegComponent } from './medical-staf-reg/medical-staf-reg.component';
import { HospitalRegComponent } from './hospital-reg/hospital-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SigInComponent,
    MedicalStafRegComponent,
    HospitalRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
