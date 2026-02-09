import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layout/navbar/navbar";
import { Hero } from './features/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jnthnexpdev');
}
