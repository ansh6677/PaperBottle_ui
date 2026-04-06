import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { MainLayout } from './main-layout/main-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Header,
    Navbar,
    Footer,
    MainLayout
  ],
  imports: [
    CommonModule,RouterModule
  ],
   exports: [MainLayout]
})
export class LayoutModule { }
