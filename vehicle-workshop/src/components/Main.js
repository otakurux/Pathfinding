import './Main.css';
import NavBar from './NavBar';
import Icon from './Icon';
import img from '../assets/phone.svg'
import Screen from './Screen';
import Information from './Information';

function Main() {

  // Screen 1
  const title = 'SERVICIO DE MANTENIMIENTO Y REPARACIÓN';
  const text = 'En Toyota estamos orgullosos de nuestra obligación de realizar un diseño de calidad, destreza y satisfacción del cliente. Cada concesionario toyota en este país posee las herramientas, equipo, y entrenamiento necesario para realizar el servicio y reparar su vehículo Toyota.';
  const icons = [ {img:img, url:''}, {img:img, url:''}, {img:img, url:''} ]
  const generateIcons = () => {
    if (!icons) return null;
    return icons.map((icon, index) => (
      <Icon key={index} img={icon.img} url={icon.url}/>
    ));
  }


  // Screen 2
  const title_02 = '¿Como pedir asistencia?';
  const info = [
    { subTitle:'Información necesaria', text:'En el caso de que surja algún problema, por favor esté preparado con la siguiente información:'},
    { subTitle:'Paso 1:', text:'Consulte con su concesionario Toyota, esta es la forma mas directa de resolver sus problemas.Cada distribuidor Toyota en este país es responsable al máximo de que debe suministrarle el servicio y reparaciones que usted pueda necesitar. Primero, hable con el director de servicio del concesionario o con el personal que se relacione con los clientes.Explique totalmente las condiciones. Si cree que su problema no se ha resuelto, consulte con el propietario del concesionario, que es el más interesado en su satifacción continuada y su patrocinio. Si su concesionario Toyota no está habilitado para darle solución'},
    { subTitle:'Paso 2:', text:'Contacte con su distribuidor, contacte con el Departamento de Servicio del distribuidor Toyota listado en el Registro de Garantía.'}
  ];
  const requirements = ['Una descripción precisa del problema incluyendo las condiciones bajo las que ocurrió.', 'Modelo del vehículo y año.', 'Número de identificación del vehículo(VIN).', 'Kilometraje actual.', 'Fecha de compra.', 'Concesionario de venta y servicio', 'Historial de servicio de su vehículo'];
  // const buttons=[
  //   { key: 1, type: 'primary', onClick: () => {}, disabled: false, style: {}, text: 'Botón 1' },
  //   { key: 2, type: 'secondary', onClick: () => {}, disabled: false, style: {}, text: 'Botón 2' },
  //   { key: 3, type: 'primary', onClick: () => {}, disabled: false, style: {}, text: 'Botón 3' },
  //   { key: 4, type: 'secondary', onClick: () => {}, disabled: false, style: {}, text: 'Botón 4' },
  //   { key: 5, type: 'primary', onClick: () => {}, disabled: false, style: {}, text: 'Botón 5' }
  // ]

  return (
    <div className="Main">
      <NavBar />
      <div class="fixed-div">
        {generateIcons()}
      </div>
      <div>
        <Screen text={text} title={title}/>
      </div>
  
      <Information
        title={title_02}
        info={info}
        requirements={requirements}
        icons={icons}
      />
    </div>
  );
}

export default Main;
