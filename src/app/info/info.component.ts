import { Component, Input } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

   @Input() selectedRole: string | undefined;

  constructor() { }

}
