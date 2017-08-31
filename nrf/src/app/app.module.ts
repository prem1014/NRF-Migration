import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';

const appRoutes: Routes = [
{path:'home', component:HomeComponent},
{path: 'donate', component:DonateComponent},
{path:'',redirectTo:'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
