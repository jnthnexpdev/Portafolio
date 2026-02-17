import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layout/navbar/navbar";
import { Hero } from './features/hero/hero';
import { Experience } from "./features/experience/experience";
import { Skills } from "./features/skills/skills";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Experience, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jnthnexpdev');
}
