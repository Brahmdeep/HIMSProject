import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
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

const routes: Routes = [
  {path:'signin',component:SigInComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:'medpathreg',component:MedicalStafRegComponent},
  {path:'hospitalReg',component:HospitalRegComponent},
  {path:'passChange',component:PasswordChangeComponent},
  {path:'reports',component:ReportsComponent},
  {path:'Addcheckup/basicInfo',component:BasicinfoComponent},
  {path:'Addcheckup/physical', component:GPEComponent},
  {path:'Addcheckup/clinincal',component:SCEComponent},
  {path:'Addcheckup/investigations',component:IvestComponent},
  {path:'Addcheckup/final',component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[GPEComponent,SCEComponent,IvestComponent,FinalComponent,BasicinfoComponent,ReportsComponent,HospitalRegComponent,MedicalStafRegComponent,DepartmentListComponent,EmployeeListComponent,SigInComponent]
