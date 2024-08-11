import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent {

}
