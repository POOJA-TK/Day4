import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.css'
})
export class HealthcareComponent {

}
