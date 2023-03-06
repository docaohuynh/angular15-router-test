import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-outlet-two',
  imports: [RouterModule],
  templateUrl: './outlet-two.component.html',
  styleUrls: ['./outlet-two.component.scss']
})
export class OutletTwoComponent {
  constructor(private router: Router) { }
  gotoFoo(): void {
    this.router.navigate(['/foo', { outlets: { info: null } }]);
  }
}
