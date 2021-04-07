import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PathistoryListComponent } from './components/pathistory-list/pathistory-list.component';
import { PathistoryDetailsComponent } from './components/pathistory-details/pathistory-details.component';
import { PathistoryAddComponent } from './components/pathistory-add/pathistory-add.component';
import { DiabetreportComponent } from './components/diabetreport/diabetreport.component';



const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patient', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailsComponent },
  { path: 'add', component: PatientAddComponent },
  { path: 'pathistory', component: PathistoryListComponent },
  { path: 'pathistory/:id', component: PathistoryDetailsComponent },
  { path: 'addpathistory/:id', component: PathistoryAddComponent },
  { path: 'report/:id', component: DiabetreportComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PathistoryListComponent,
    PathistoryDetailsComponent,
    PathistoryAddComponent,
    DiabetreportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
