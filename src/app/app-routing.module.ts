import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CounterComponent } from './counter/counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsComponent } from './forms/forms.component';
import { MainComponent } from './interaction/main/main.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LoginComponent } from './login/login.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { StudentsComponent } from './students/students.component';

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
        path: 'lifeCycleHooks',
        component: LifeCycleHooksComponent
      },
      {
        path: 'rxjs',
        component: RxjsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'student',
        component: StudentsComponent
      },
      {
        path: 'interactions',
        component: MainComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
