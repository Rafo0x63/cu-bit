import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen: boolean = false;
  isScrolled: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    if (window.innerWidth > 768) {
      this.isScrolled = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.innerWidth <= 768) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
