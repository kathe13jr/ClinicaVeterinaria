import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { ProductolistaComponent } from './pages/productolista/productolista.component';
import { ProductolistacardComponent } from './pages/productolistacard/productolistacard.component';
import { ListapacienteComponent } from './listapaciente/listapaciente.component';
import { AgregapacienteComponent } from './agregapaciente/agregapaciente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { TablaComponent } from './pages/tabla/tabla.component';


export const routes: Routes = [
    {path:'template',component:TemplateComponent},
    {path:'reactive',component:ReactiveComponent},
    {path:'listaproducto',component:ProductolistaComponent},
    {path:'listaproductocard',component:ProductolistacardComponent},
    {path:'listapaciente',component:ListapacienteComponent},
    {path:'addpaciente',component:AgregapacienteComponent},
    {path: 'inicio',component: InicioComponent},
    {path: 'acercade',component: AboutComponent},
    {path: 'tabla',component: TablaComponent},
   

    {path:'**',component:ListapacienteComponent},
];
