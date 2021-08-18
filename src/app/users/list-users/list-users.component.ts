import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../../../share/models/IUser";
import {Router} from "@angular/router";

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

  constructor(
    private _us: UserService,
  ) { }


  ngOnInit(): void {
    this.queryUsers()
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
  }

  vewUser(u:IUser):void {
    this.fastView = true;
    this.userTemp = u;
  }

  redirectToNewForm(showDiff : boolean) : void{
    this.showDiff = showDiff


  }

}
