import { Component, OnInit } from '@angular/core';

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
    this.listAll.push(this.task);
    this.task = '';
  }

}
