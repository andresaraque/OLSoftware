import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cerrarModal() {
    console.log('cerrar');
  }

  // postUser() {
  //   if (this.showModal === 'none') {
  //     this.showModal = 'block'
  //   }
  // }

}
