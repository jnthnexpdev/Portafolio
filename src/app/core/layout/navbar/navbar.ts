import { Component, signal } from '@angular/core';
import { ChartNoAxesCombined, ContactRound, Phone , BriefcaseBusiness, LucideAngularModule } from 'lucide-angular';

type Language = 'es' | 'en';

@Component({
    selector: 'app-navbar',
    imports: [ 
        LucideAngularModule
    ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
    readonly ChartNoAxesCombined = ChartNoAxesCombined;
    readonly ContactRound = ContactRound;
    readonly BriefcaseBusiness = BriefcaseBusiness;
    readonly Phone = Phone;

    public language = signal<Language>('es');

    public isMenuOpen = signal(true);

    public toggleMenu() : void{
        this.isMenuOpen.update(value => !value);
        console.log('Estado del menu: ', this.isMenuOpen());
    }

    public toggleLanguage() : void{
        this.language.update(lang => (lang === 'es' ? 'en' : 'es'));
    }

}