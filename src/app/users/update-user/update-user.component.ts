import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../share/models/IUser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @Input() dataIUser!: IUser;
  activated:string ='';
  userCreate:FormGroup;

  constructor(
    private fb : FormBuilder,
    private _router: Router,
    private _us:UserService
  ) {
    this.userCreate = this.fb.group({
      id: [''],
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(40)
      ])],
      active: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(60)
      ])],
      rol: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFormUser(this.dataIUser)
  }


  loadFormUser(user: IUser):void{

    this.userCreate.patchValue({
      id: user.id,
      name: user.name,
      active: user.active,
      rol:user.rol.rol
    })
  }


  isActived(data:boolean):void {
    if (data){
      this.activated = "Usuario no activo";
    }{
      this.activated = "Usuario Activo";

    }
  }

}
