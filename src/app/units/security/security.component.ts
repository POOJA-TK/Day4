import { Component } from '@angular/core';
import { ServicesComponent } from "../../pages/services/services.component";
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [ServicesComponent,RouterLink,CardComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {

}
