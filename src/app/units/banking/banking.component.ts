import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.css'
})
export class BankingComponent {

}
