import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home/home';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: Home }
];

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
   
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
