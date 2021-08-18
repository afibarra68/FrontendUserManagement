import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../../share/models/IUser";
import {UserService} from "../user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  comunicator:boolean = false;
  showViewCreate?:boolean;

  @Output() messageEvent = new EventEmitter<boolean>()
  @Output() emmiterparentCreator = new EventEmitter<boolean>()

  activated:string ='';
  userCreate:FormGroup;
  iUser!:IUser;

  constructor(
    private fb : FormBuilder,
    private _router: Router,
    private _us:UserService,

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


  }

  newUser():void{
    this.iUser = this.userCreate.value
    // @ts-ignore
    this.iUser.rol = {
      id : this.userCreate.value.rol
    }
    this._us.saveUser(this.iUser).subscribe(

      () => {
        alert("se Ha creado correctamente")
        this.messageEvent.emit(this.comunicator = true)
        this.emmiterparentCreator.emit(this.showViewCreate = false)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
