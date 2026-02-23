import { Component, inject, OnInit, signal } from '@angular/core';
import { ChartNoAxesCombined, ContactRound, Phone, Home, BriefcaseBusiness, Menu, X, LucideAngularModule } from 'lucide-angular';
import { LanguageService } from '../../services/languageService';
import { TranslatePipe } from '@ngx-translate/core';

type Language = 'es' | 'en';

@Component({
    selector: 'app-navbar',
    imports: [ 
        LucideAngularModule,
        TranslatePipe
    ],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
    readonly ChartNoAxesCombined = ChartNoAxesCombined;
    readonly ContactRound = ContactRound;
    readonly Home = Home;
    readonly BriefcaseBusiness = BriefcaseBusiness;
    readonly Phone = Phone;
    readonly Menu = Menu;
    readonly X = X;

    public languageService = inject(LanguageService);
    public currentLanguage !: Language;

    public isMenuOpen = signal(false);

    ngOnInit(): void {
        this.currentLanguage = this.languageService.currentLanguage();
    }

    public toggleMenu() : void{
        this.isMenuOpen.update(value => !value);
    }

    public toggleLanguage() : void{
        if(this.languageService.currentLanguage() === 'es'){
            this.languageService.setLang('en');
        }else{
            this.languageService.setLang('es');
        }

        this.currentLanguage = this.languageService.currentLanguage();
    }

    public scrollTo(sectionId : string) : void{
        const yOffset = -100;
        const elemet = document.getElementById(sectionId);

        if(elemet){
            const y = elemet.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top : y,
                behavior : 'smooth'
            });
        }

        if(this.isMenuOpen()){
            this.isMenuOpen.set(false);
        }
    }

}