import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-outlet-one',
  templateUrl: './outlet-one.component.html',
  styleUrls: ['./outlet-one.component.scss']
})
export class OutletOneComponent {
  constructor(private router: Router) { }
  gotoFoo(): void {
    this.router.navigate(['/foo', { outlets: { info: null } }]);
  }
}
