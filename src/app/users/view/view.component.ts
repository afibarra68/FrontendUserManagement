import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IUser} from "../../../share/models/IUser";
import {UserService} from "../user.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() detailUser!: IUser;

  @Output() messageEvent = new EventEmitter<boolean>()
  @Output() emmiterparentCreator = new EventEmitter<boolean>()

  edit:boolean = false;
  detailOnUpdate! :IUser;
  comunicator!:boolean ;
  showViewCreate!:boolean;

  constructor(  private _us:UserService) {  }

  ngOnInit(): void {

  }

  updateItem():void {
    this.edit = true
  }

  deleteItem(id: any) {
    this._us.deleteUser(id).subscribe(e =>{
      console.log(e)
      this.messageEvent.emit(this.comunicator = true)
      this.emmiterparentCreator.emit(this.showViewCreate = false)
    })

  }
}
