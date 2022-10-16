import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layoute',
  templateUrl: './layoute.component.html',
  styleUrls: ['./layoute.component.css']
})
export class LayouteComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleSide() {

    const container = document.querySelector(".containerModal")
    container?.classList.toggle("c")

    const sidebar = document.querySelector(".side")
    sidebar?.classList.toggle("s")

    const back = document.querySelector(".backdrop")
    back?.classList.toggle("b")
    

   

    
    // const mat = new MatDialogConfig();
    // mat.disableClose= true;
    // this.dialog.open(DialogComponent,mat)
  }
  
}
