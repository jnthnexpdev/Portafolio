import { inject, Injectable, signal } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
    private t = inject(TranslateService);
    public currentLanguage = signal<Lang>('es');

    constructor(){
        this.t.addLangs(['es', 'en']);

        const savedLanguage = (localStorage.getItem('lang') as Lang) || 'es';

        const langToUse = ['es', 'en'].includes(savedLanguage) ? savedLanguage : 'es';

        this.setLang(langToUse);
    }

    public setLang(lang : Lang) : void{
        this.currentLanguage.set(lang);
        this.t.use(lang);
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
    }

    public getCurrentLanguge(){
        return localStorage.getItem('lang');
    }

    instant(key : string, params ?: any){
        return this.t.instant(key, params);
    }

}