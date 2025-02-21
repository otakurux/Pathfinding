import './Main.css';

import phone from '../assets/phone.svg';
import whatsApp from '../assets/whatsapp.svg';
import facebook from '../assets/facebook.svg';
import technicalService from '../assets/technicalService.png';
import ok from '../assets/ok.svg';
import no from '../assets/forbidden.svg';

import image01 from '../assets/image01.jpg';
import image02 from '../assets/image02.jpg';
import image03 from '../assets/image03.jpg';
import image04 from '../assets/image04.jpg';

import NavBar from './NavBar';
import Screen from './Screen';
import Information from './Information';
import Gallery from './Gallery';
import Responsabilities from './Responsabilities';
import Footer from './Footer';

function Main() {

  // NamVar
  const myApp = 'Mi Aplicación';

  // Screen 1
  const title = 'SERVICIO DE MANTENIMIENTO Y REPARACIÓN';
  const text = 'En Toyota estamos orgullosos de nuestra obligación de realizar un diseño de calidad, destreza y satisfacción del cliente. Cada concesionario toyota en este país posee las herramientas, equipo, y entrenamiento necesario para realizar el servicio y reparar su vehículo Toyota.';
  const icons = [ 
    {img:phone, url:''}, 
    {img:technicalService, url:''}, 
    {img:facebook, url:''}, 
    {img:whatsApp, url:''} 
  ]

  // Screen 2
  const title_02 = '¿Como pedir asistencia?';
  const info = [
    { subTitle:'Información necesaria', text:'En el caso de que surja algún problema, por favor esté preparado con la siguiente información:'},
    { subTitle:'Paso 1:', text:'Consulte con su concesionario Toyota, esta es la forma mas directa de resolver sus problemas.Cada distribuidor Toyota en este país es responsable al máximo de que debe suministrarle el servicio y reparaciones que usted pueda necesitar. Primero, hable con el director de servicio del concesionario o con el personal que se relacione con los clientes.Explique totalmente las condiciones. Si cree que su problema no se ha resuelto, consulte con el propietario del concesionario, que es el más interesado en su satifacción continuada y su patrocinio. Si su concesionario Toyota no está habilitado para darle solución'},
    { subTitle:'Paso 2:', text:'Contacte con su distribuidor, contacte con el Departamento de Servicio del distribuidor Toyota listado en el Registro de Garantía.'}
  ];
  const requirements = [
    'Una descripción precisa del problema incluyendo las condiciones bajo las que ocurrió.', 
    'Modelo del vehículo y año.', 
    'Número de identificación del vehículo(VIN).', 
    'Kilometraje actual.', 
    'Fecha de compra.', 
    'Concesionario de venta y servicio', 
    'Historial de servicio de su vehículo'
];
  // icons of screen 1

  // Screen 3
  const images = [
    { key: 1, src: image01, alt: 'Image 1' },
    { key: 2, src: image02, alt: 'Image 2' },
    { key: 3, src: image03, alt: 'Image 3' },
    { key: 4, src: image04, alt: 'Image 4' },
  ];

  // Screen 4
  const cardPositive = [
    { title: 'Inicio de la garantía', text: 'El periodo de garantía empieza en la fecha en que el vehículo se suministra o se pone en funcionamiento.', icon:ok },
    { title: 'Período de cobertura básica', text: 'Toyota gatantiza que reparará o reemplazará cualquier parte que Toyota suministre, que esté defectuosa en el material o en la fabricación bajo el uso normal, excepto en los ítemes listados bajo "Qué es lo que no cubre" durante un periodo de 36 meses o 100.000km, lo que acontezca primero.', icon:ok },
    { title: 'Batería', text: 'Durante los primeros 24 meses de servicio, una batería original defectuosa se reemplazará sin ningún cargo. Si la batería fallase después de 24 meses de servicio, pero antes del 37 mes de servicio, se reemplazará bajo la garantía con cargo del 50% para el cliente.', icon: ok },
    { title: 'Oxido en la superficie y daños en la pintura', text: 'El óxido en la superficie y daños en la pintura que aparecen en los paneles de la plataforma del vehículo quedan cubiertos durante 12 meses o 20.000 km, lo que acontezca primero.El óxido en la superficie y daños de pintura en otras partes que no sean los paneles de la plataforma quedan cubiertos bajo la cobertura básica.', icon:ok },
    { title: 'Remolque', text: 'Cuando su vehículo este inoperativo debido a fallos en una parte cubierta con la garantía, el servicio de remolque está cubierto hacia el concesionario autorizado mas cercano.', icon:ok },
    { title: 'Neumáticos', text: 'Los neumáticos están garantizados bajo una garantía por separado suministrada por el fabricante de neumáticos.', icon:ok },
    { title: 'Sin Cargo', text: 'Las reparaciones bajo la garantía(partes y/o trabajo) se realizarán sin cargo alguno.', icon:ok },
    { title: 'Totalmente transferible', text: 'La garantía es totalmente transferible a los propietarios subsecuentes del vehículo.', icon:ok },
    { title: 'Aplicación de la garantía', text: 'Esta garantía es válida sólo dentro del pais donde está ubicado el registro de la garantía listada del distribuidor de Toyota.', icon:ok }
  ];
  const cardNegative = [
    { title: 'Factores alejados del control del fabricante', text: '- Las reparaciones y ajustes requeridos como resultado de un mal uso, negligencia, modificación, alteración, manipulación indebida, desconexión, ajustes o reparaciones impropios, accidentes o el uso de partes/materiales no cubiertos.</br> - Corrosión de la superficie debida a piedras de grava o rayadas en la pintura.</br> - No se cubre cualquier tipo de daño o corrosión en la superficie debidos al medio ambiente, como puede ser lluvia ácida, caída de sustancias suspendidas en el aire, sal, granizo, tormentas de aire, rayos, inundaciones.', icon:no },
    { title: 'Pérdida de mantenimiento o uso de combustible, aceite o lubricantes incorrectos', text: 'Las reparaciones y ajustes causados po un mantenimiento inapropiado, pérdida del mantenimiento requerido, o el uso de otros líquidos que no sean los especificados en el manual del propietario.', icon:no },
    { title: 'El mantenimiento detallado a continuación está a expensas del propietario', text: '- El ajuste del motor, lubricación, limpieza.</br> - Reemplazo de filtros, refrigerantes, bujías, fusibles, cuchillas del lavador desgastadas, pastillas de los frenos desgastadas y forros o foros del embrague desgastados.</br> - Alineamiento de ruedas, equilibrado de ruedas, rotación de neumáticos.</br> - Inspección y ajuste de los frenos, embrague, correa de transmisión o conexión de componentes.</br> - Limpieza del sistema de combustible, sistema de refrigeración o limpieza de hollín y residuos.</br> - Otro servicio de mantenimiento habitual normalmente requerido por el uso del vehículo.', icon:no },
    { title: 'Ruido normal, vibraciones y deterioración', text: 'El ruido normal, vibraciones, desgaste, goteo o deterioración, desvanecimiento, deformación o manchas no estan cubiertos.', icon:no },
    { title: 'Kilometraje alterado', text: 'Los fallos en un vehículo cuyo kilometraje del odómetro se ha alterado o cambiado de forma que el kilometraje del vehículo no se puede leer con certeza, no están cubiertos.', icon:no },
    { title: 'Gastos adicionales', text: 'Los daños incidentales o consecuentes tales como llamadas telefónicas, pérdida de tiempo, inconveniencia o pérdida comercial no estan cubiertos.', icon:no }
  ];
  const positive = { src:ok , title: '¿Qué es lo que cubre?', cards: cardPositive };
  const negative = { src:no , title: '¿Qué es lo que no cubre?', cards: cardNegative };

  // Footer 5
  const contactUs = [
      'Dirección: Calle Falsa 123, Ciudad, País',
      'Teléfono: +123 456 7890',
      'Email: contacto@empresa.com'
    ];
  const we = {title:'Sobre nosotros', text:'Somos una empresa dedicada a brindar los mejores servicios de mantenimiento y reparación de vehículos. Nuestro compromiso es con la calidad y la satisfacción del cliente.'};
  const links = [
    {href:'', text:'Política de privacidad'},
    {href:'', text:'Términos y condiciones'},
    {href:'', text:'Preguntas frecuentes'}
  ];
  // icons of screen 1

  return (
    <div className="Main">
      <NavBar
        icons={icons}
        myApp={myApp}
      />

      <Screen
        text={text}
        title={title}
      />
  
      <Information
        title={title_02}
        info={info}
        requirements={requirements}
        icons={icons}
      />

      <Gallery
        images={images}
      />

      <Responsabilities 
        positive={positive}
        negative={negative}
      />

      <Footer
        contactUs={contactUs}
        icons={icons}
        we={we}
        links={links}
      />
    </div>
  );
}

export default Main;
