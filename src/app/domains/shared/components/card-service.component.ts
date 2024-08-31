import { Component } from '@angular/core';

@Component({
  selector: 'app-card-service',
  standalone: true,
  imports: [],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css',
})
export default class CardServiceComponent {
  servicesPortfolio = [
    {
      title: 'ASESORÍAS JURÍDICAS',
      colorTitle: 'text-white',
      colorCard: 'bg-teal',
      url: '',
    },
    {
      title: 'SERVICIO CONSULTORÍA',
      colorTitle: 'text-dark-gray',
      colorCard: 'bg-gray',
      url: '',
    },
    {
      title: 'ASESORÍAS COMERCIO<br>INTERNACIONAL C.I',
      colorTitle: 'text-white',
      colorCard: 'bg-teal',
      url: '',
    },
    {
      title: 'LICITACIONES PÚBLICAS<br>Y PRIVADAS',
      colorTitle: 'text-dark-gray',
      colorCard: 'bg-gray',
      url: '',
    },
    //SECOND PART
    {
      title: 'ASESORÍA ADUANERA, COMERCIO<br>EXTERIOR Y ZONA FRANCA',
      colorTitle: 'text-dark-gray',
      colorCard: 'bg-gray',
      url: '',
    },
    {
      title: 'CREACIÓN DE SOCIEDADES<br>REORGANIZACIÓN EMPRESARIAL',
      colorTitle: 'text-white',
      colorCard: 'bg-teal',
      url: '',
    },
    {
      title: 'BROCKERS ENLACES<br>COMERCIALES',
      colorTitle: 'text-dark-gray',
      colorCard: 'bg-gray',
      url: '',
    },
    {
      title: 'POLITICAS DE GRUPO<br>EMPRESARIAL SHADDAI',
      colorTitle: 'text-white',
      colorCard: 'bg-teal',
      url: '',
    },



  ];
}
