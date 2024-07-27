import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyResolverResolver} from "./my-resolver.resolver";
import {SecondComponent} from "./second/second.component";

const routes: Routes = [
  {
    path: 'second',
    component: SecondComponent,
    resolve: [MyResolverResolver]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
