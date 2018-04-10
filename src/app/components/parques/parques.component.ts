import { Component, Input, Output , EventEmitter } from '@angular/core';



@Component({
	selector : 'parques',
	templateUrl : './parques.component.html'
})

export class ParquesComponent{
	@Input() nombre: string;
	@Input('metros_cuadrados') metros: number;
	public vegetacion: string;
	public abierto : boolean;

	@Output() pasameLosDatos = 	new EventEmitter();

	constructor(){
		this.nombre = 'Parque natural para caballos';
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}

	emitirEvento(){
		this.pasameLosDatos.emit({
				'nombre' : this.nombre,
				'metros' : this.metros,
				'vegetacion' : this.vegetacion,
				'abierto' : this.abierto
			});
	}
}
