import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, StartScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
