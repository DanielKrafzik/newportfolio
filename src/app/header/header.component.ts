import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  setLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
    // Optional: Hier könntest du auch Angular i18n oder ngx-translate integrieren
    console.log('Language switched to', lang);
  }
}
