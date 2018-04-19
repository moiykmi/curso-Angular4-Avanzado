//MODULOS
import { NgModule } from '@angular/core';
//import { RouterModule, Routes} from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//COMPONENTES
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';


import { AdminGuard } from '../services/admin.guard';
import { UserService} from '../services/user.service';

//PIPES
import { SearchPipe } from './pipes/Search.pipe';

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		HttpModule,
		AdminRoutingModule,
		BrowserAnimationsModule
	],
	declarations: [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent,
		SearchPipe
	],
	exports : [
		MainComponent,
		ListComponent,
		AddComponent,
		EditComponent
	],
	providers : [
	AdminGuard,
	UserService
	]
})

export class AdminModule{}