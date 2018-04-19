import { Component , DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GLOBAL} from '../../../services/global';
import { Animal } from '../../../models/animal';

import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';


@Component({
  selector: 'admin-edit',
  templateUrl: '../add/add.component.html',
  providers : [UserService,AnimalService,UploadService]
})
export class EditComponent{
 public title : string;
  	public animal : Animal;
  	public identity;
  	public token;
  	public url : string;
  	public status;
  	public is_edit;


  	constructor(
  		private _route : ActivatedRoute,
  		private _router : Router,
  		private _userService : UserService,
  		private _animalService : AnimalService,
  		private _uploadService : UploadService
  	){
  		this.title = 'Editar';
  		this.is_edit= true;
  		this.animal = new Animal ('','','',2017,'','');
  		this.identity = this._userService.getIdentity();
  		this.token = this._userService.getToken();
  		this.url = GLOBAL.url;
  	}
  	
  	ngOnInit(){
  		console.log( 'componente ha sido cargado !!!');
  		this.getAnimal();
  	}

  	onSubmit(){
  		//console.log(this.animal);

  		var id = this.animal._id;

  		this._animalService.editAnimal(this.token, id, this.animal).subscribe(
  			response =>{
  				console.log(1);
  				console.log(response);
  					if(!response.animal){
  						console.log(2);
  						this.status = 'error';
  					}else{
  						console.log(3);
  						this.status = 'success';
  						this.animal = response.animal;

  						//subir imagen del animal
  						if(!this.filesToUpload){
  							console.log(4);
  							this._router.navigate(['/animal',this.animal._id]);
  						}else{
  							console.log(5);
  							this._uploadService.makeFileRequest(this.url+'/upload-image-animal/'+this.animal._id,[],this.filesToUpload,this.token,'image')
							   .then((result : any)=>{
                  console.log(6);
								  this.animal.image = result.image;
								  console.log(this.animal);
								  this._router.navigate(['/animal',this.animal._id]);
							});
  						}
             
  					}
  				},
  				error =>{
  					console.log(8);
  					var errorMessage = <any> error;
  					if(errorMessage !=null){
  						this.status = 'error';
  					}
  				}
  		);
  	}


	public filesToUpload: Array <File>;

	fileChangeEvent(fileInput : any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
		//console.log(this.filesToUpload);
	}

	getAnimal(){

      this._route.params.forEach((params : Params) =>{
          let id= params['id'];
      
    		this._animalService.getAnimal(id).subscribe(
    			response =>{
            //console.log(response);
    					if(!response.animal){
                  this._router.navigate(['/home']);
    						}else{
    							this.animal = response.animal;
    						}
    				},
    				error =>{
    					console.log(<any>error);
              this._router.navigate(['/home']);
    				}
    		);

      });
  	}

}
