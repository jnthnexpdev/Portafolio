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
}