import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FilterComponent } from './filter/filter.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule } from  '@angular/common/http';
import { AuthComponent } from './auth/auth/auth.component';
import { DatalayerService } from './datalayer.service';
import { AuthService } from './auth/auth/auth.service';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'student-list', component: StudentListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    FilterComponent,
    SampleformComponent,
    CalculatorComponent,
    AuthComponent
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   RouterModule.forRoot(appRoutes),
   
  ],
  providers: [DatalayerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
