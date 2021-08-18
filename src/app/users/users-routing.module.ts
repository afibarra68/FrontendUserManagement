import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainControllerComponent} from "./main-controller/main-controller.component";

const routes: Routes = [
  {
    path: '',
    component:MainControllerComponent
  },
  {
    path: "reload",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
