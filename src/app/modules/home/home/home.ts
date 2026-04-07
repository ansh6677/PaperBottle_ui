import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {
  products = [
  'assets/pic2.png',
  'assets/pic3.png',
  'assets/pic4.png',
  'assets/pic2.png'
];

cities = [
  { name: 'Mumbai', desc: 'Retail and business delivery' },
  { name: 'Delhi', desc: 'Corporate supply chain' },
  { name: 'Bangalore', desc: 'Startup ecosystem' },
  { name: 'Kolkata', desc: 'Expanding green impact' }
];





  

}
