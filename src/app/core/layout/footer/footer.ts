import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule } from 'lucide-angular';
import { Phone, MapPinned, Mail, Building } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-footer',
  imports: [ TranslatePipe, LucideAngularModule ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
    readonly Phone = Phone;
    readonly Mail = Mail;
    readonly MapPinned = MapPinned;
    readonly Building  = Building;
}