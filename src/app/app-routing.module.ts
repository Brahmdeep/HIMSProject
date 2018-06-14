import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SigInComponent } from './sig-in/sig-in.component';
import { MedicalStafRegComponent } from './medical-staf-reg/medical-staf-reg.component';

const routes: Routes = [
  {path:'signin',component:SigInComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:'medpathreg',component:MedicalStafRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[MedicalStafRegComponent,DepartmentListComponent,EmployeeListComponent,SigInComponent]
