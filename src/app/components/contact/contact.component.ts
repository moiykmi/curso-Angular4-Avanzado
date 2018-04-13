import { Component ,OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations : [fadeIn]
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
