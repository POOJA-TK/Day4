import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-aerospace',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './aerospace.component.html',
  styleUrl: './aerospace.component.css'
})
export class AerospaceComponent {

}
