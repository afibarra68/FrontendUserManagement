import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../../../share/models/IUser";


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users : IUser[] = [];
  pageSize = 20;
  pageNumber = 0;
  _fUserByName?:any;
  userTemp?: IUser;
  listUsers:boolean=false;
  showDiff: boolean = false;
  fastView:boolean = false;
  comunicator?:boolean;

  constructor(
    private _us: UserService,
  ) { }


  ngOnInit(): void {
    this.queryUsers()
  }

  receiveMessage($event:any):void{
    this.comunicator = $event;
    if (this.comunicator){
      this.queryUsers()
    }
  }

  public queryUsers():void{
    this._us.queryUser({
      'pageSize': this.pageSize,
      'pageNumber': this.pageNumber
    }).subscribe((res: any)=> {
      this.users  =  res.content
    })
  }

  searchUser():void{
    console.log(this._fUserByName)



    this._us.queryAllUsers({
      'username': this._fUserByName,
      'pageSize': this.pageSize,
      'pageNumber': this.pageNumber
    }).subscribe((res: any)=> {
      this.users  =  res.content
      console.log(this.users)
    })
  }

  clearInfo():void  {
    this._fUserByName='';
    this.queryUsers()
  }

  vewUser(u:IUser):void {
    this.fastView = true;
    this.userTemp = u;
    this.showDiff = false;
  }

  redirectToNewForm(showDiff : boolean) : void{
    this.showDiff = showDiff
    this.fastView = false;
  }

  connectorForHideCreator($event: boolean) {
    this.showDiff = $event
    this.fastView = $event;
  }
}
