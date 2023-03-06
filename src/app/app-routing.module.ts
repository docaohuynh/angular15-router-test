import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'outlet-one',
    loadChildren: () => import('./outlet-one/outlet-one.module').then(m => m.OutletOneModule),
    outlet: 'info'
  },
  {
    path: 'outlet-two',
    loadChildren: () => import('./outlet-two/outlet-two.module').then(m => m.OutletTwoModule),
    outlet: 'info'
  },
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.module').then(m => m.FooModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
