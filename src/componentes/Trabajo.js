import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useZoomSocialLinkStyles } from '@mui-treasury/styles/socialLink/zoom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-scroll';
import foto1 from "../img/1.png"
import foto2 from "../img/2.png"
import foto3 from "../img/3.png"
import foto4 from "../img/4.png"
import foto5 from "../img/5.png"
import foto6 from "../img/6.png"
import foto7 from "../img/7.png"
import foto8 from "../img/7.png"



function Trabajo({title, id, dark}) {
  const classes = useStyles();
  const data = [
    {
      title:"Pokeapi",
      text: "Página web que muestra todos los pokemons y sus caracteristicas. Las técnologías utilizadas fueron HTML, CSS, Javascript, y pokeapi",
      image: foto1,
      linkWeb:'https://daianaromero.github.io/pokedex-js/',
      linkGithub:'https://github.com/DaianaRomero/pokedex-js'
      
    },
    {
      title:"Página Chanel",
      text: "Proyecto realizado en el primer cuatrimestre de la carrera con las tecnologías de HTML y CSS",
      image: foto2,
      linkWeb:'https://daianaromero.github.io/pagina-chanel/',
      linkGithub:'https://github.com/DaianaRomero/pagina-chanel'

      
    },
    {
      title:"Web Tolkien",
      text: "Pagina web  basada en el escritor J.R.R. Tolkien hecha con HTML y CSS",
      image: foto3,
      linkWeb:'https://daianaromero.github.io/JRRTolkien/',
      linkGithub:'https://github.com/DaianaRomero/JRRTolkien'
    },
    {
      title:"Lista de tareas",
      text: "Página web para ordenar las tareas del día.",
      image: foto4,
      linkWeb:'https://daianaromero.github.io/ListaDeTareas/',
      linkGithub:'https://github.com/DaianaRomero/ListaDeTareas'

      
    },
    {
      title:"Web Clima",
      text: "Web del clima hecha con Javascript y el uso de WebApi",
      image: foto5,
      linkWeb:'https://daianaromero.github.io/WebDeClima/',
      linkGithub:'https://github.com/DaianaRomero/WebDeClima'
      
    },
    {
      title:"Mi primer cv",
      text: "Curriculum vitae hecho en mi primer cuatrimestre con las herramientas HTML y CSS",
      image: foto6,
      linkWeb:'https://daianaromero.github.io/proyectos-iniciales/',
      linkGithub:'https://github.com/DaianaRomero/proyectos-iniciales'
      
    },
    {
      title:"acerca",
      text: "" ,
      image: foto6,
      linkGithub:'',
      linkWeb:''
      
    },
  
    {
      title:"acerca",
      text: "",
      image: foto6,
      linkWeb:'',
      linkGithub:'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'

      
    },
    {
      title:"Pokeapi React",
      text: "Pokeapi en react con uso de hooks",
      image: foto7,
      linkGithub:'https://github.com/DaianaRomero/pokedex-react',
      linkWeb:'https://daianaromero.github.io/pokedex-react/'

      
    },
   
  
  
  ]

  return (

    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>    
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>


<Grid container className={classes.grid}>

{
  data.map(({title,image,linkGithub,linkWeb, text},index) => (
    <Grid className={classes.grid2} item key={index} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
                  <CardMedia  className={classes.cardMedia}image={image}>
                  </CardMedia>
                  <CardContent className={classes.CardContent}>
                    
                    <div className={classes.social}>
                
                <Typography
                      className={classes.textTittle}
                      variant={'h6'}
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <div >

                    <a href={linkGithub}><img className={classes.iconos} src="https://img.icons8.com/ios-glyphs/30/7986cb/github.png"/></a>
                   <a href={linkWeb}><img className={classes.iconos} src="https://img.icons8.com/material-sharp/24/7986cb/link--v2.png"/></a>
                    
                   </div>
                </div>
                    
                    <Typography className={classes.text} variant={'caption'}>{text}</Typography>
                  </CardContent>
              </Card>
        </Grid>
  ))
}


</Grid>



      




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
social :{
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
},
grid:{
  //marginTop:"30px",
  margin:" auto"
  
},
iconos:{
 margin:"0 5px"
},
grid2:{
  
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
},
card: {
      maxWidth:280,
      width:260,
      margin: ' 20px auto',
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      borderRadius: 0,
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
          },
      '& button': {
        marginLeft: 0,
      },
      '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      },
},
cardMedia: {
        paddingTop: '55%',
        backgroundPosition:"top"
},

      
CardContent: {
        textAlign: 'left',
        height:130,
 },
 textTittle: {
          color: "#333",
          fontWeight: 'bolder',
          fontFamily: "'Montserrat', sans-serif",

        },
text : {
          fontWeight: 900,
          lineHeight: 1.3,
          fontFamily: "'Montserrat', sans-serif",
        },

    


}))


export default Trabajo