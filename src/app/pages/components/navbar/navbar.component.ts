import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  @Output() widthSidebar = new EventEmitter<number>();

  constructor(private router: Router) { }


  sidebar: number = 85;

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    if (this.sidebar === 85) {
      this.sidebar = 255;
      this.widthSidebar.emit(this.sidebar);
    } else {
      this.sidebar = 85;
      this.widthSidebar.emit(this.sidebar);
    }
  }

}
