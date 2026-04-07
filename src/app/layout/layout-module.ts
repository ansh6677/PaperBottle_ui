import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { MainLayout } from './main-layout/main-layout';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    Header,
    Navbar,
    Footer,
    MainLayout
  ],
  imports: [
    CommonModule,RouterModule,MatCardModule,
    
  ],
   exports: [MainLayout]
})
export class LayoutModule { }
