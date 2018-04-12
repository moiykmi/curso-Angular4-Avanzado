//Importar modulos necesarios para crear modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//importar componentes
import { GuardarEmailComponent} from './components/guardar-email/guardar-email.component';
import { MostrarEmailComponent} from './components/mostrar-email/mostrar-email.component';
import { MainEmailComponent} from './components/main-email/main-email.component';

//Decorador ngModule para cargar los componentes y la configuracion del modulo
@NgModule({
	imports:[CommonModule,FormsModule,HttpModule],
	declarations: [
		GuardarEmailComponent,
		MostrarEmailComponent,
		MainEmailComponent
	],
	exports : [MainEmailComponent]
})

export class ModuloEmailModule{}