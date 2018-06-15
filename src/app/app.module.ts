import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigInComponent } from './sig-in/sig-in.component';
import { MedicalStafRegComponent } from './medical-staf-reg/medical-staf-reg.component';
import { HospitalRegComponent } from './hospital-reg/hospital-reg.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ReportsComponent } from './reports/reports.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { GPEComponent } from './gpe/gpe.component';
import { SCEComponent } from './sce/sce.component';
import { IvestComponent } from './ivest/ivest.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SigInComponent,
    MedicalStafRegComponent,
    HospitalRegComponent,
    PasswordChangeComponent,
    ReportsComponent,
    BasicinfoComponent,
    GPEComponent,
    SCEComponent,
    IvestComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
