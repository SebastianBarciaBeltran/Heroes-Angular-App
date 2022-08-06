import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListadoHeroesComponent,
  ],
  imports: [CommonModule],
})
export class HeroesModule {}
