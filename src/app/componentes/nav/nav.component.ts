import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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
