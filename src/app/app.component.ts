import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { IntroSectionComponent } from './intro-section/intro-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, IntroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resume';
}
