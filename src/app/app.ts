import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layout/navbar/navbar";
import { Hero } from './features/hero/hero';
import { Experience } from "./features/experience/experience";
import { Skills } from "./features/skills/skills";
import { Footer } from "./core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Experience, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jnthnexpdev');
}
