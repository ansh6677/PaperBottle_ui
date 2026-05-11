import { ChangeDetectorRef, Component, NgZone, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  loading = false;

livePledgeCount = 128400;
pledgeForm!: FormGroup;

  constructor(private cdr: ChangeDetectorRef,
    private zone: NgZone,
    private fb: FormBuilder
  ) {
      this.pledgeForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  pledgeType: ['', Validators.required]
});
  }
bottlesPerMonth = 50;

get co2Saved(): number {
  return Number((this.bottlesPerMonth * 0.09).toFixed(1));
}

  highlights = [
    { value: '65%', label: 'lower plastic dependency' },
    { value: '24h', label: 'sample response window' },
    { value: 'B2B', label: 'custom branding support' },
  ];

  products = [
    {
      image: 'assets/pic2.jpeg',
      title: 'Signature Mineral Bottle',
      tag: 'Best Seller',
      description: 'Clean silhouette with a premium matte finish for modern wellness brands.',
    },
    {
      image: 'assets/pic3.jpeg',
      title: 'Retail Display Edition',
      tag: 'Shelf Ready',
      description: 'Designed to stand out in cafés, boutiques, and curated eco product displays.',
    },
    {
      image: 'assets/pic4.jpeg',
      title: 'Event & Hospitality Pack',
      tag: 'Custom Branding',
      description: 'A polished bottle concept for launches, gifting, and sustainable guest experiences.',
    },
    {
      image: 'assets/pic2.jpeg',
      title: 'Minimal Luxe Series',
      tag: 'Trending Look',
      description: 'Elegant and brand-forward packaging that pairs sustainability with visual appeal.',
    },
  ];

  features = [
    {
      icon: 'fa-solid fa-droplet-slash',
      title: 'Leak-conscious build',
      description: 'Engineered for dependable handling while preserving the product’s elevated look.',
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Premium brand presence',
      description: 'A refined design language that feels right at home on stylish retail shelves.',
    },
    {
      icon: 'fa-solid fa-seedling',
      title: 'Eco-forward identity',
      description: 'Supports cleaner brand storytelling with a lower-impact packaging impression.',
    },
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Fast business support',
      description: 'Built for collaborations, sampling, and agile bulk conversations with growing brands.',
    },
  ];

  stats = [
    { value: '10K+', label: 'bottles supplied' },
    { value: '5K+', label: 'happy customers reached' },
    { value: '100%', label: 'design-led eco mindset' },
    { value: '4+', label: 'major cities served' },
  ];

  //liveBottleCount = 12847600;

materials = [
  { icon: 'fa-solid fa-recycle', name: 'Recycled' },
  { icon: 'fa-solid fa-leaf', name: 'Plant Fiber' },
  { icon: 'fa-solid fa-droplet', name: 'Water Coating' }
];

liveBottleCount = signal(12847600);
targetBottleCount = 12850000;

intervalId: any;

ngOnInit() {
  this.startLiveCounter();
}

startLiveCounter() {
  this.intervalId = setInterval(() => {
    this.liveBottleCount.update(current => {
      const increment = Math.floor(Math.random() * 2) + 1;
      const nextValue = current + increment;

      if (nextValue >= this.targetBottleCount) {
        clearInterval(this.intervalId);
        return this.targetBottleCount;
      }

      return nextValue;
    });
  }, 100);
}
  // cities = [
    // { name: 'Mumbai', desc: 'Retail launches, hospitality counters, and premium consumer experiences.' },
    // { name: 'Delhi', desc: 'Corporate gifting and large-format sustainable packaging conversations.' },
    // { name: 'Bangalore', desc: 'Startup-friendly branding, wellness products, and modern café concepts.' },
    // { name: 'Kolkata', desc: 'Expanding partnerships focused on thoughtful, greener packaging choices.' },
  // ];

  impactCards = [
  {
    icon: '🌊',
    title: 'Ocean Pollution',
    description: '8 million tons of plastic enter oceans annually, threatening marine species.',
    progress: 15,
     speed: 3
  },
  {
    icon: '🦌',
    title: 'Wildlife Threat',
    description: 'Millions of animals die yearly from plastic ingestion and entanglement.',
    progress: 40,
     speed: 3
  },
  {
    icon: '💧',
    title: 'Water Contamination',
    description: 'Microplastics found in 90% of bottled water.',
    progress: 25,
     speed: 4
  }
];

alternatives = [
  {
    icon: '🏺',
    title: 'Clay (Matka)',
    description: 'Naturally cools water & eco-friendly',
    points: [
      'Zero waste lifecycle',
      'Supports local artisans'
    ]
  },
  {
    icon: '🍶',
    title: 'Glass Bottles',
    description: 'Premium & reusable option',
    points: [
      '100% recyclable',
      'No microplastics'
    ]
  },
   {
    icon: '🍶',
    title: 'Glass Bottles',
    description: 'Premium & reusable option',
    points: [
      '100% recyclable',
      'No microplastics'
    ]
  }
];

asiaCountries = [
  { name: 'India', icon: 'flag-icon-in' },
  { name: 'Japan', icon: 'flag-icon-jp' },
  { name: 'Thailand', icon: 'flag-icon-th' },
  { name: 'Singapore', icon: 'flag-icon-sg' }
];

asiaPlasticAvoided = 50000;
asiaCO2Saved = 4500;

asiaCountryCount() {
  return this.asiaCountries.length;
}

submitPledge() {

  if (this.pledgeForm.invalid) {
    return;
  }

  this.loading = true;

  const payload = {
    ...this.pledgeForm.value,
    createdAt: new Date()
  };

  console.log(payload);

  setTimeout(() => {

    this.livePledgeCount++;

    this.loading = false;

    this.pledgeForm.reset();

  }, 1500);
}

goToPledge() {
  const section = document.getElementById('pledge-section');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
