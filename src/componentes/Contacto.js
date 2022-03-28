import React, { useRef } from 'react';
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles';
import { padding } from '@mui/system';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("oo0JOIsFX6Lhh_E62");







function Contacto({title, id, dark}) {
  const classes = useStyles();

  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zfikbla', 'template_contact', e.target, 'oo0JOIsFX6Lhh_E62')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };




  return (
  
    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>    
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
       
            <form ref={form} onSubmit={sendEmail}  noValidate autoComplete="off">
                <Grid className={classes.gridContainer} container spacing={2}>
                    <Grid className={classes.grid} item xs={12}>
                        <h1>Contáctame</h1>
                    </Grid>
                    <Grid className={classes.grid} item xs={12}>
                        <TextField label="Nombre"
                            variant="outlined"
                            required
                            type="text"
                            name='name' />
                    </Grid>
                    <Grid className={classes.grid} item xs={12}>
                        <TextField   label="Correo electrónico"
                            variant="outlined"
                            required
                            name='email'
                            type="email" />
                    </Grid>
                    <Grid className={classes.grid} item xs={12}>
                        <TextField className={classes.textField} label="Comentarios"
                            variant="outlined"
                            required
                            //multiline
                            name='text'
                            maxRows={3} />
                    </Grid>
                    <Grid className={classes.grid} item xs={12}>
                        <Button className={classes.button} variant="contained" type="submit" value="Send">
                            Guardar 
                        </Button>
                    </Grid>
                </Grid>
            </form>
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
  margin: "auto",

},
gridContainer:{
 
  display:"flex",
  margin: 'auto',
  maxWidth: "100vw",
  marginTop:"55px"
},
grid:{
  
  display:"flex",
  justifyContent:"center",
 
},
textField:{
  
  display:"flex",
  justifyContent:"space-between",
 
},
button:{
  background:"#4DB6AD",
  color:"rgb(255 255 255)"
}
}))
export default Contacto