import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})


export class FooterComponent {
hover = 0;


@Input() theme: 'light' | 'dark' = 'light';
}
