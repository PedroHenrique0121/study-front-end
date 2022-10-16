import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

   @Input() drawer!: MatDrawer
  constructor() { }

  // fechar(){

  //   const containderModal = document.querySelector(".containerModal");
  //   containderModal?.classList.remove("c")
  //   const backdrop= document.querySelector(".backdrop.b");
  //   backdrop?.classList.remove("b")
  //   const side = document.querySelector(".side");
  //   side?.classList.remove("s")

  // }

 

}
