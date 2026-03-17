import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProjectsComponent } from './projects/projects.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, StartScreenComponent, AboutMeComponent, SkillsetComponent, ProjectsComponent, ColleaguesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  @ViewChild('cursor') cursor!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursorEl = this.cursor.nativeElement;

    cursorEl.style.left = event.clientX + 'px';
    cursorEl.style.top = event.clientY + 'px';
  }

  @HostListener('document:mouseover', ['$event'])
  onMouseOver(event: any) {
    const cursorEl = this.cursor.nativeElement;

    if (event.target.closest('a, button')) {
      cursorEl.style.transform = 'translate(-50%, -50%) scale(2)';
      cursorEl.style.backgroundColor = 'rgba(0, 255, 204, 0.6)';
    } else {
      cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorEl.style.backgroundColor = 'transparent';
    }
  }
}
