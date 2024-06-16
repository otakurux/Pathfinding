import './Main.css';
import NavBar from './NavBar';
import Icon from './Icon';
import img from '../assets/phone.svg'
import Screen_01 from './Screen_01';
import Screen_02 from './Screen_02';

function Main() {

  const text = 'En Toyota estamos orgullosos de nuestra obligación de realizar un diseño de calidad, destreza y satisfacción del cliente. Cada concesionario toyota en este país posee las herramientas, equipo, y entrenamiento necesario para realizar el servicio y reparar su vehículo Toyota.';
  const title = 'SERVICIO DE MANTENIMIENTO Y REPARACIÓN';

  return (
    <div className="Main">
      <NavBar />
      <div class="fixed-div">
        <Icon img={img}/>
      </div>
      <Screen_01 text={text} title={title}/>
      <Screen_02 text={text} title={title}/>
    </div>
  );
}

export default Main;
