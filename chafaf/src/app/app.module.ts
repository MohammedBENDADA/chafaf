import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepensesComponent } from './home/depenses/depenses.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Graphe2Component } from './home/graphe2/graphe2.component';

import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { DonsComponent } from './home/dons/dons.component';
import { UpdateComponent } from './home/depenses/update/update.component';
import { ToastrModule } from 'ngx-toastr';
import { CreatComponent } from './home/depenses/creat/creat.component';
import { UpdateDonsComponent } from './home/dons/update-dons/update-dons.component';
import { CreatDonsComponent } from './home/dons/creat-dons/creat-dons.component';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";

export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DonsComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    DepensesComponent,
    CreatComponent,
    Graphe2Component,
    RegisterComponent,
    ProfilComponent,
    UpdateComponent,
    UpdateDonsComponent,
    CreatDonsComponent


  ],
  imports: [

    HttpClientModule,

    ToastrModule.forRoot(),

    BrowserModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes),

    BrowserAnimationsModule,
    NgbPaginationModule,
    FormsModule,
    NgbModule,
    NgApexchartsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"],
        disallowedRoutes: ["localhost:5000/api/Auth"],
        // whitelistedDomains: ["localhost:5000"],
        // blacklistedRoutes: ["localhost:5000/api/Auth"],
      },
    }),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
