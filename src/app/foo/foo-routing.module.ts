import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./foo/foo.component').then(m => m.FooComponent)
  },
  {
    path: 'bar/something',
    loadComponent: () => import('./foo-bar-somthing/foo-bar-somthing.component').then(m => m.FooBarSomthingComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooRoutingModule { }
