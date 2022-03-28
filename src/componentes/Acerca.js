import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import React from 'react'
import fotoPerfil from "../img/perfil.jpg"
import TypeWriterEffect from 'react-typewriter-effect';

function Acerca({title, id, dark}) {
  const classes = useStyles();




  return (
    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>    
      <div className={classes.sectionContent} id={id}>
        
        <Typography variant='h3'>{title}</Typography>
        
        <TypeWriterEffect 
       /* textStyle={{
          textAlign:"center",
          fontFamily: "'Montserrat', sans-serif",
          /* fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}*/
        /*text="Hola! Soy Daiana Romero"
        starDelay={100}*/
        />

            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image={fotoPerfil}
              />
              <CardContent>
            
                <TextInfoContent
               useStyles={useStyles}
                  classes={classes.text}
                  overline={'Daiana A Romero'}
                  heading={'Analista de Sistemas'}
                  body={
                    'Soy una persona optimista, exigente y responsable. Mis objetivos son entablar vínculos o nuevos grupos de trabajo y poder aprender del nuevo ámbito laboral.'
                  }
                 
                />
              </CardContent>
        </Card>
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
    //marginTop:"20px",
    fontSize:"1.6rem"    
  }
},
text:{
  color: "#B0AEAE",
  fontFamily: 'Montserrat',
  
  
  "& h4" :{
    color: "#B0AEAE",
    fontFamily: "'Montserrat', sans-serif",
    
  }
},
heading:{
  fontWeight: 'bold',
  fontSize:"1.4rem",
  marginBottom:"15px"
},
body:{
  fontFamily: "'Montserrat', sans-serif",
  color:"#dark;",
  fontWeight: 'bold',
},
sectionContent : {
  maxWidth : "80vw",
  margin: "0 auto",
},
card: {
  
  minHeight: "50vh",
  display:"flex",
  margin: 'auto',
  maxWidth: "45vw",
  marginTop:"55px"
/*
  maxWidth: "40vw",
  minHeight: "50vh",
  margin: 'auto',
  borderRadius: "12",
  padding: "15px",
  marginTop:"25px",
  marginBottom:"25px"*/
},
cardMedia: {
  height:"auto",
  maxWidth:"20vw",
  objectFit:"cover"
  /*borderRadius: "6px",
  minHeight:"30vh",*/
}

}))
export default Acerca