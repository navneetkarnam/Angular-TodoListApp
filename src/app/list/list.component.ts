import { Component, OnInit } from '@angular/core';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listAll: string[] = [];
  task: string;
  constructor() { }
  add(): void {
    if(isNullOrUndefined(this.task)){
      alert('Enter a task!');
    }
    else {
      this.listAll.push(this.task);
      this.task = null;
    }
  }



}
