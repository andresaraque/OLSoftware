import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() width: number;

  mini: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // toggleSidebar() {
  //   if (this.mini) {
  //     console.log("opening sidebar");
  //     document.getElementById("mySidebar").style.width = "250px";
  //     document.getElementById("main").style.marginLeft = "250px";
  //     this.mini = false;
  //   } else {
  //     console.log("closing sidebar");
  //     document.getElementById("mySidebar").style.width = "85px";
  //     document.getElementById("main").style.marginLeft = "85px";
  //     this.mini = true;
  //   }
  // }

}
