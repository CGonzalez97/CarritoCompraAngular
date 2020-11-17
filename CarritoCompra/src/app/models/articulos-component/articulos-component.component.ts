import { Component, OnInit } from '@angular/core';
import {Articulo} from '../articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  
  listaArticulos:Articulo[] = [new Articulo('Botas nike','Hechas por niños para niños',
                                            '44',75,0, false,1),
                              new Articulo('Pulsera jipi','Drogas a parte',
                                            'Talla muslo de mosca',0.15,0.5, true,1),
                              new Articulo('Bufanda Chuck Norris','Ya no necesitas guillotina',
                                            'Se adapta.',5000,0, false,1)];

  constructor(/*listaArticulos:Articulo[]*/) {
    /*this.listaArticulos = listaArticulos;*/
  }

  ngOnInit(): void {
  }

}
