import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    user: '',
    pass: ''
  }
  loading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.user.user === '' || this.user.pass === '') {
      alert('Debe rellenar un usuario y contraseña (cualquier cosa)');
    } else {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/users']);
      }, 3000);
    }
  }

}
