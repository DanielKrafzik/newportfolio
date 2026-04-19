import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'en' | 'de' = 'en';
  currentLangIcon = '/img/toggle_en.png';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang') as 'en' | 'de' | null;

    if (savedLang) {
      this.currentLang = savedLang;
    }

    this.translate.use(this.currentLang);
    this.toggleLangIcon(this.currentLang);
  }

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
    this.toggleLangIcon(this.currentLang);

    localStorage.setItem('lang', this.currentLang);
  }

  toggleLangIcon(lang: 'en' | 'de'): void {
    this.currentLangIcon = lang === 'en' ? '/img/toggle_en.png' : '/img/toggle_de.png';
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
