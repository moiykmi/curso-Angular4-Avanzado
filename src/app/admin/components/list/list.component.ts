import { Component , DoCheck , OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params} from '@angular/router';

import { GLOBAL} from '../../../services/global';
import { Animal } from '../../../models/animal';

import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

import { fadeLateral } from '../../animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers : [AnimalService],
  animations : [fadeLateral]
})
export class ListComponent{
  	public title : string;
  	public animals : Animal[];
    public token;
    public busqueda;
    public resultadoBusqueda;

  	constructor(
  		private _route : ActivatedRoute,
  		private _router : Router,
  		private _animalService : AnimalService,
      private _userService : UserService
  	){
  		this.title = 'Listado de animales';
      this.token = this._userService.getToken();
  	}
  	

  	ngOnInit(){
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

    deleteAnimal(id){
      this._animalService.deleteAnimal(this.token, id).subscribe(
        response =>{
            if(!response.animal){
              alert('Error en el servidor');
            }else{
              this.getAnimals();
            }
          },
          error =>{
            alert('Error en el servidor');
          }
      );
    }

    
}
