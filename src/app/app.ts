import { Component, signal } from '@angular/core';
import { Navbar } from "./core/layout/navbar/navbar";
import { Hero } from './features/hero/hero';
import { Experience } from "./features/experience/experience";
import { Skills } from "./features/skills/skills";
import { Footer } from "./core/layout/footer/footer";
import { Contact } from './features/contact/contact';
import { AnimateOnScrollDirective } from './shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Experience, Skills, Footer, Contact, AnimateOnScrollDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('Jnthnexpdev');

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add("in-view");
                    }
                })
            },
            { threshold : 0.2 }
        );

        const sections = document.querySelectorAll(".reveal");
        sections.forEach((sec) => {
            observer.observe(sec);
        });
    }
    
}