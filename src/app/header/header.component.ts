import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'EN' | 'DE' = 'EN';
  currentLangIcon = '/img/toggle_en.png';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'EN' ? 'DE' : 'EN';
    if (this.currentLang === 'EN') {
      this.currentLangIcon = '/img/toggle_de.png';
    } else {
      this.currentLangIcon = '/img/toggle_en.png';
    }
  }
}
