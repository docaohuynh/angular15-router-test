import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-outlet-two',
  imports: [RouterModule],
  template: `<p>outlet-two works!</p>
  <a [routerLink]="['/', 'foo', { outlets: { info:null } }]">Goto Foo component </a>
  <br />
  <a [routerLink]="['/','foo', { info: null }]">Goto Foo component </a>
  <br />
  <button (click)="gotoFoo()">goto Foo component</button>
  <br />
  <a [relativeTo]="route.parent" [routerLink]="['/', 'foo', {outlets: {'info': null}}]">Goto ActivatedRoute component </a>
  <br />
  <a [relativeTo]="route.parent" [routerLink]="['/', 'foo', {info: null}]">Goto Foo ActivatedRoute component </a>
  <br />`,
  styleUrls: ['./outlet-two.component.scss']
})
export class OutletTwoComponent {
  constructor(private router: Router, public route: ActivatedRoute) { }
  gotoFoo(): void {
    this.router.navigate(['/', 'foo', { outlets: { info: null } }]);
  }
}
