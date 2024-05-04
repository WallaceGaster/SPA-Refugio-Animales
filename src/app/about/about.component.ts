import {Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, InfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  selectedRole: string | undefined; 

  @Output() roleSelected = new EventEmitter<string>();

  emitRole(role: string) {
    this.roleSelected.emit(role);
  }

}
