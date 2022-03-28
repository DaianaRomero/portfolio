import './App.css';
import {makeStyles} from "@material-ui/core";
import Navbar from './componentes/Navbar';
import Acerca from './componentes/Acerca';
import Habilidades from './componentes/Habilidades';
import Trabajo from './componentes/Trabajo';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';




function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Navbar/>
        <Acerca title="Acerca de mi" id="acerca" dark={true}/>
        <Habilidades title="Mis habilidades" id="habilidades" dark={true}/>
        <Trabajo title="Mis trabajos" id="trabajo" dark={true}/>
        <Contacto title="Contacto" id="contacto" dark={true}/>
        <Footer title="Footer" id="contacto" dark={true}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {


  }
}))


export default App;
