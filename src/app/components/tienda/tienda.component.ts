import { Component , OnInit } from '@angular/core';
import { trigger, state , style, transition, animate } from '@angular/core';
import { fadeIn } from '../animation';




@Component({
	selector : 'tienda',
	templateUrl : './tienda.component.html',
	styleUrls : [ './tienda.component.css' ],
	animations : [
		trigger('marcar', [
			state('inactive', style({
				border : '5px solid #ccc'
			})),
			state('active',style({
				border : '5px solid yellow',
				background : 'red',
				borderRadius : '50px',
				transform : 'scale(1.2)'
			})),
			transition('inactive => active',animate ('1s linear')),
			transition('active => inactive',animate ('1s linear'))
		]),
		fadeIn
	]
})

export class TiendaComponent implements OnInit{
	public titulo;
	public nombreDelParque : string;
	public miParque;
	public status;
	public statusBoton;

	constructor(){
		this.titulo = 'Esta es la tienda';
		this.status = 'inactive';
		this.statusBoton = 'Activar Boton';

	}

	cambiarEstado(status){
		if(status == 'inactive'){
			this.status = 'active';
			this.statusBoton = 'Desactivar Boton';
		}else{
			this.status = 'inactive';
			this.statusBoton = 'Activar Boton';
		}
	}

	ngOnInit(){
		$('#textojq').hide();
		$('#botonjq').click(function (){
				$('#textojq').slideToggle();
			});

		$("#caja").dotdotdot({});
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	verDatosParque(event){
		console.log(event);
		this.miParque = event;
	}
}
