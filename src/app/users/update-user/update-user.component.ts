import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() messageEvent = new EventEmitter<boolean>()
  @Output() emmiterparentCreator = new EventEmitter<boolean>()

  activated:string ='';
  userCreate:FormGroup;
  updateDataParent!:boolean;
  iUser!:IUser;

  constructor(
    private fb : FormBuilder,
    private _router: Router,
    private _us:UserService
  ) {
    this.userCreate = this.fb.group({
      id: ['' , {disabled: true},Validators.compose([
        Validators.required
      ])],
      name: ['', Validators.compose([
        Validators.required
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
    this.isActived(user.active)
    this.userCreate.patchValue({
      id: user.id,
      name: user.name,
      active: user.active,
      rol:user.rol.id
    })
  }


  updateUser() : void {
    this.iUser = this.userCreate.value
    this.iUser.rol ={
      id:this.userCreate.value.rol
    }
    this._us.updateUser(this.userCreate.value).subscribe(
      () => {
        alert("updated correctly")
        this.emmiterparentCreator.emit(this.updateDataParent = false)
      },
      (error) => {
        alert(error)
      }
    );
  }




  isActived(data:boolean):void {
    if (data){
      this.activated = "Usuario no activo";
    }{
      this.activated = "Usuario Activo";
    }
  }

}
