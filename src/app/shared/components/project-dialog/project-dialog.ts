import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule, Gitlab, Minimize2, IdCardLanyard, X, CalendarRange, Github } from 'lucide-angular';

@Component({
  selector: 'app-project-dialog',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.css',
})
export class ProjectDialog{
    readonly Minimize2 = Minimize2;
    readonly Gitlab = Gitlab;
    readonly Github = Github;
    readonly X = X;
    readonly CalendarRange = CalendarRange;
    readonly IdCardLanyard = IdCardLanyard;

    public router = inject(Router);
    public data = inject(DIALOG_DATA);
    public dialogRef = inject(DialogRef);

    public path : string = '/projects/';

    public closeDialog() : void{
        this.dialogRef.close();
    }

    public redirectToRepository(url : string) : void{
        window.open(url, '_blank', 'noopener, noreferrer');
    }
}