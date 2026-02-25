import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, FileDown, Eye } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [ TranslatePipe, LucideAngularModule ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
    readonly FileDown = FileDown;
    readonly Eye = Eye;

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
    }

    public downloadCV() : void{
        const link = document.createElement('a');
        link.href = 'cv/Jonathan_Espinosa_Frontend_Developer.pdf';
        link.download = 'Jonathan_Espinosa_Frontend_Developer.pdf';
        link.click();
    }
}