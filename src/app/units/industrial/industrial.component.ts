import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-industrial',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './industrial.component.html',
  styleUrl: './industrial.component.css'
})
export class IndustrialComponent {

}
