import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ExperienceCard } from "./experience-card/experience-card";
import { ExperienceModel } from '../../core/models/experience.model';


@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit{
    private translate = inject(TranslateService);
    public experiences: ExperienceModel[] = [];

    ngOnInit(): void {
        this.translate.onLangChange.subscribe(() => {
            this.loadExperience();
            console.log(this.experiences);
        });
    }

    private loadExperience(): void {
        this.translate
        .get('experience.items')
        .subscribe((items: ExperienceModel[]) => {
            this.experiences = items;
        });
    }
}