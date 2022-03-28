import React from 'react';
import { orange } from '@material-ui/core/colors';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useZoomSocialLinkStyles } from '@mui-treasury/styles/socialLink/zoom';

import { makeStyles, Typography } from '@material-ui/core'

function Footer({title, id, dark}) {
  const classes = useStyles();

  return (

    <div className={`${classes.section} ${ dark && classes.sectiondark}`}>    
      <div className={classes.sectionContent} id={id}>
      <footer  id="contact">
          <div className={classes.social2}>
                <p className={classes.social}>Podes encontrarme también en</p>
                <div className={classes.social}>
                <SocialProvider   useStyles={useZoomSocialLinkStyles}>
                    <SocialLink brand={'Facebook'} href={'https://www.facebook.com/'} />
                    <SocialLink brand={'Twitter'} href={'https://twitter.com/luthosr____'} />
                    <SocialLink brand={'Instagram'} href={'https://www.instagram.com/'} />
                    <SocialLink brand={'LinkedIn'} href={'https://www.linkedin.com/in/daiana-romero/'} />
                    <SocialLink brand={'Whatsapp'} href={'https://www.whatsapp.com/?lang=en'} />
                    <SocialLink brand={'GithubCircle'} href={'https://github.com/DaianaRomero/'} />
                </SocialProvider>
                </div>

                <p className={classes.social}>&copy; 2020-2021, Romero Daiana Ayelen</p>
        </div>
</footer></div>
    </div>
  )
}



const useStyles = makeStyles((theme) => ({
  section: {
    minHeight:"50vh",
},
sectiondark: {
  background: "#333",
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
social:{
    
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"15px"
    
},
social2:{
    
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:"50px",
    fontFamily: "'Montserrat', sans-serif",
    color:"#fff"
},

}))
export default Footer