import { Component } from '@angular/core';
import CardServiceComponent from '@shared/components/card-service.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  navigationServices = [
    {
      title: 'Servicios',
      url: '',
    },
    {
      title: 'Nosotros',
      url: '',
    },
    {
      title: 'Noticias',
      url: '',
    },
    {
      title: 'Contacto',
      url: '',
    },
  ];
  cardPresentation =
    'Tenemos el mejor equipo interdisciplinario para prestar nuestros<br>servicios y asesorías integrales en diferentes áreas con<br />fundamento en la globalización que estamos viviendo día a día.';

  misionAndVision = [
    {
      title: 'MISIÓN',
      text: 'Prestar servicios de alta calidad y confiabilidad a nuestros<br>clientes, regidos por principios<br>éticos, respeto y eficiencia, enfocándonos en una atención<br>integral y para todos y cada<br>uno de nuestros clientes en conceptos legales, contables,<br>aduaneros y otros.',
      url: '',
    },
    {
      title: 'VISIÓN',
      text: 'Constituirnos como una compañía líder en las diferentes áreas del derecho, consultorías,<br>contabilidad, comercio exterior, ingeniería, marketing y otros; para el apoyo<br>administrativo, financiero legal y de gestión; siendo punta de lanza en asesorías y en<br>prestación de servicios, satisfaciendo así a nuestros clientes.',
      url: '',
    },
  ];
}
