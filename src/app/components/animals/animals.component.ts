import { Component ,OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { GLOBAL} from '../../services/global';
import { Animal } from '../../models/animal';

import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations : [fadeIn],
  providers : [AnimalService]
})
export class AnimalsComponent implements OnInit {
  	public title : string;
  	public animals : Animal[];
  	public url;
    


	constructor(
  		private _animalService : AnimalService,
    ){
  		this.title = 'Animales';
  		this.url = GLOBAL.url;
    }

    ngOnInit(){
		console.log('animals.components cargado !!!');
		this.getAnimals();
	}

	getAnimals(){
      this._animalService.getAnimals().subscribe(
        response =>{
            if(!response.animals){

              }else{
                this.animals = response.animals;
              }
          },
          error =>{
            console.log(<any>error);
          }
      );
    }

}
