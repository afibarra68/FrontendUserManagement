import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {UsersRoutingModule} from "./users-routing.module";
import { ViewComponent } from './view/view.component';
import { MainControllerComponent } from './main-controller/main-controller.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ViewComponent,
    MainControllerComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule

    ]
})
export class UsersModule { }
