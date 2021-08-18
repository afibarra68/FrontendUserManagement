import { Component, OnInit, Input } from '@angular/core';
import {IUser} from "../../../share/models/IUser";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() detailUser!: IUser;

  edit:boolean = false;
  detailOnUpdate! :IUser;

  constructor(  ) {  }

  ngOnInit(): void {

  }


  updateItem():void {
    this.edit = true
  }
}
