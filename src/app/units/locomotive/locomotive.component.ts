import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-locomotive',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './locomotive.component.html',
  styleUrl: './locomotive.component.css'
})
export class LocomotiveComponent {

}
