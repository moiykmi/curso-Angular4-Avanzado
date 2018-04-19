import { Component ,OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { User } from '../../models/user';
import { UserService} from '../../services/user.service';
import { GLOBAL} from '../../services/global';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations : [fadeIn],
  providers :[UserService]
})
export class KeepersComponent implements OnInit {
  public title : string;
  public keepers : User[];
  public url;


  	constructor(
  		private _userService : UserService
  	){
  		this.title = 'Cuidadores';
  		this.url = GLOBAL.url;
  	}
 	ngOnInit(){
		console.log('keepers.components cargado !!!');
		this.getKeepers();
	}

	getKeepers(){
      this._userService.getKeepers().subscribe(
        response =>{
            if(!response.keepers){

              }else{
                this.keepers = response.keepers;
              }
          },
          error =>{
            console.log(<any>error);
          }
      );
    }

}
