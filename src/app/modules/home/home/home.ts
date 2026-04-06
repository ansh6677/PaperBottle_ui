import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private floatElements: HTMLElement[] = [];
 ngAfterViewInit(): void {
   this.floatElements = Array.from(document.querySelectorAll<HTMLElement>('[data-float]'));
    this.revealOnScroll(); // Check on load
     this.animateFloat();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.revealOnScroll();
  }

  private revealOnScroll(): void {
    const animItems = document.querySelectorAll<HTMLElement>('[data-animate]');
    const stats = document.querySelectorAll<HTMLElement>('.stat');

    const windowHeight = window.innerHeight;

    animItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        item.classList.add('visible');
      }
    });

    stats.forEach(stat => {
      if (!stat.classList.contains('counted')) {
        const rect = stat.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
          this.animateCount(stat);
          stat.classList.add('counted');
        }
      }
    });
  }

  private animateCount(el: HTMLElement): void {
    const countTo = parseInt(el.dataset['count'] || '0', 10);
    const h2 = el.querySelector('h2');
    if (!h2) return;

    const isPercent = h2.textContent?.includes('%') || false;
    let count = 0;
    const increment = Math.ceil(countTo / 120);

    const interval = setInterval(() => {
      count += increment;
      if (count >= countTo) {
        count = countTo;
        clearInterval(interval);
      }
      h2.textContent = isPercent ? `${count}%` : count.toLocaleString();
    }, 15);
  }




  // Floating animation based on scroll
  private animateFloat(): void {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      this.floatElements.forEach((el, index) => {
        const offset = Math.sin((scrollY + index * 50) * 0.002) * 8; // gentle floating
        el.style.transform = `translateY(${offset}px)`;
      });
      this.animateFloat();
    });
  }
}
