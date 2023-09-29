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
    HttpClientModule
  ],
  providers: [DatalayerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
