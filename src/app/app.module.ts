import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing , appRoutingProviders } from './app.routing';
import { EditorModule } from '@tinymce/tinymce-angular';

//importar nuestro nuevo modulo
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';


//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keepers/keepers.component';




@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EditorModule,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent] //El componente inicial
})
export class AppModule { }
