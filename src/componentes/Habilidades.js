import React from 'react';
import java from "../img/java.png";
import html from "../img/html.png";
import css from "../img/css.png";
import bootstrap from "../img/bootstrap.png";
import github from "../img/github.png";
import js from "../img/js.png";
import react from "../img/react.png";
import php from "../img/php.png";
import npm from "../img/npm.png";
import sass from "../img/sass.png";
import { makeStyles, Typography } from '@material-ui/core'


const habilidades = [
  {
    src:java,
    title: "Java",
    
  },
  {
    src:html,
    title: "HTML",
    
  },
  {
    src:css,
    title: "CSS",
  },
  {
    src:bootstrap,
    title: "Bootstrap",
    
  },
  {
    src:github,
    title: "Github",
    
  },
  {
    src:js,
    title: "Javascript",
    
  },
  {
    src:react,
    title: "React",
    
  },
  {
    src:php,
    title: "PHP",
    
  },
  {
    src:npm,
    title: "npm",
    
  },
  {
    src:sass,
    title: "sass",
    
  }

]



function Habilidades({title, id, dark}) {
  const classes = useStyles();


  return (
    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>    
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <div className={classes.cardImg}>
          {
          habilidades.map( ({src,title},index) => 
          (
            <div key={index} className={classes.contenedorImg}>
              <img src={src} className={classes.img} alt={title}></img>
              <Typography variant='h4'>{title}</Typography>
            </div>
          )
          
          )
          }
        </div>
      </div>
    </div>
  )
}



const useStyles = makeStyles((theme) => ({
  section: {
    minHeight:"100vh",
},
sectiondark: {
  background: "#ffffff",
  marginTop:"15px",
  color: "#B0AEAE",
  "& h3":{
    fontSize:"1.6rem"    
  }
},
sectionContent : {
  maxWidth : "80vw",
  margin: "0 auto",
},
cardImg:{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
margin:"auto",
minHeight:"70vh",
maxWidth:"50vw"
//marginTop:"4rem"
},
contenedorImg:{
margin:"25px",
display: "flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
"& h4":{
  fontSize:"1.2rem"    
}

},
img:{
  width:"4vw",
  marginBottom:"15px",
  
  
}
}))
export default Habilidades