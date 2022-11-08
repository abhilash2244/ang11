import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: '',
        component: CounterComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
