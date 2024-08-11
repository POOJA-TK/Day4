import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './mobility.component.html',
  styleUrl: './mobility.component.css'
})
export class MobilityComponent {

}
