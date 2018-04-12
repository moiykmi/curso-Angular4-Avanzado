import { Component , DoCheck, OnInit } from '@angular/core';

@Component({
  selector : 'mostrar-email',
  template : `
  		<h4>{{title}}</h4>
  		   <span *ngIf="emailContacto" ><strong>Email de contacto :</strong>{{emailContacto}}
			<button class="btn btn-outline-success my-2 my-sm-0" (click)="borrarEmail()">Eliminar email de contacto</button>
		</span>
  `
})
export class MostrarEmailComponent implements DoCheck , OnInit {
  	title = 'Mostrar Email';
  	emailContacto : string;

  	ngDoCheck(){
  		this.emailContacto = localStorage.getItem('emailContacto'); 
  	}

	ngOnInit(){
		this.emailContacto = localStorage.getItem('emailContacto'); 
		
	}

	borrarEmail(){
		localStorage.removeItem('emailContacto');
		localStorage.clear();
		this.emailContacto = null;
	}

}
