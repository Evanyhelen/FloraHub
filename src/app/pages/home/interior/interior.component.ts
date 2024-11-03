import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interior',
  standalone: true,
  imports: [],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.scss'
})
export class InteriorComponent {
  @Input() src: string = '';
  @Input() title: string = 'Plant Name';
  @Input() description: string = 'Zamioculca, whose only species is Zamioculca zamiifolia, is a tro…';
  @Input() price: string = '$0';
}
