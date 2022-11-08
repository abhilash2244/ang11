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
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeListComponent  
    
  ],
  imports: [
    BrowserModule,StoreModule.forRoot({counter: counterReducer}),
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
