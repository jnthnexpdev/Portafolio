import { Component, inject, Input } from '@angular/core';
import { ExperienceModel } from '../../../core/models/experience.model';
import { LucideAngularModule, Gitlab, Eye  } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { Dialog } from '@angular/cdk/dialog';
import { ProjectDialog } from '../../../shared/components/project-dialog/project-dialog';

@Component({
  selector: 'app-experience-card',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
    readonly Gitlab  = Gitlab;
    readonly Eye  = Eye;
    public path : string = '/projects/';

    public dialog = inject(Dialog);

    @Input({ required: true })
    experience!: ExperienceModel;

    public openDetails(experience : ExperienceModel) : void{
        this.dialog.open(ProjectDialog, {
            data : experience,
        });
    }

}