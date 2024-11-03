import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exterior',
  standalone: true,
  imports: [],
  templateUrl: './exterior.component.html',
  styleUrl: './exterior.component.scss'
})
export class ExteriorComponent {
  @Input() src: string = '';
  @Input() title: string = 'Plant Name';
  @Input() description: string = 'Zamioculca, whose only species is Zamioculca zamiifolia, is a tro…';
  @Input() price: string = '$0';
}
