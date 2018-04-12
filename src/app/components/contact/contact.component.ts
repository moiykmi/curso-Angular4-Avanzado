import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  	title = 'Contacto';
  	emailContacto : string ;

  	ngOnInit(){
		console.log('contact.components cargado !!!');
	}

	guardarEmail(){
		//console.log(this.emailContacto);
		localStorage.setItem('emailContacto',this.emailContacto);
		
	}
}
