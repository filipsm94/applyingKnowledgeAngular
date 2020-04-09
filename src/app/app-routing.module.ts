import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: 'employee', loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
