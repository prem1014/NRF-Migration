import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { APIService } from './_core/api-service';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
{path:'home', component:HomeComponent},
{path: 'donate', component:DonateComponent},
{path: 'dashboard', component:DashboardComponent},
{path:'',redirectTo:'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
    providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
