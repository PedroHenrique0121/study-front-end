import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent implements OnInit {

  @Input()
  title! : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
