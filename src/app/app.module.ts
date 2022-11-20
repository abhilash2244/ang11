import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/conter.reducer';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { StudentsComponent } from './students/students.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ParentComponent } from './interaction/parent/parent.component';
import { ChildComponent } from './interaction/child/child.component';
import { MainComponent } from './interaction/main/main.component';
import { NgChartsModule } from 'ng2-charts';
import { HomeComponent } from './dashboard/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeListComponent,
    FormsComponent,
    StudentsComponent,
    SearchFilterPipe,
    ParentComponent,
    ChildComponent,
    MainComponent,
    HomeComponent  
    
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule,NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
