import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layoute',
  templateUrl: './layoute.component.html',
  styleUrls: ['./layoute.component.css']
})
export class LayouteComponent implements OnInit {
  showFiller = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  constructor() { }

  ngOnInit(): void {
  }
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  // toogleSide() {

  //   const container = document.querySelector(".containerModal")
  //   container?.classList.toggle("c")

  //   const sidebar = document.querySelector(".side")
  //   sidebar?.classList.toggle("s")

  //   const back = document.querySelector(".backdrop")
  //   back?.classList.toggle("b")
  
  //   // const mat = new MatDialogConfig();
  //   // mat.disableClose= true;
  //   // this.dialog.open(DialogComponent,mat)
  // }
  
}
