import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LucideAngularModule } from 'lucide-angular';
import { Phone, MapPinned, Mail, AtSignIcon, Building, User, MessagesSquare, Smartphone, FileText } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-contact',
  imports: [ TranslatePipe, LucideAngularModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    readonly Phone = Phone;
    readonly Mail = Mail;
    readonly MapPinned = MapPinned;
    readonly Building  = Building;
    readonly User = User;
    readonly Smartphone = Smartphone;
    readonly FileText = FileText;
    readonly AtSignIcon = AtSignIcon;
    readonly MessagesSquare = MessagesSquare;

    public downloadCV() : void{
        const link = document.createElement('a');
        link.href = 'cv/Jonathan_Espinosa_Frontend_Developer.pdf';
        link.download = 'Jonathan_Espinosa_Frontend_Developer.pdf';
        link.click();
    }
}