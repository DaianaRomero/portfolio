import { AppBar, Divider, Drawer, IconButton, List,ListItem,ListItemIcon,ListItemText,makeStyles, Toolbar } from '@material-ui/core'
//import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import logo from "../img/icon.png"
import { Link, animateScroll as scroll} from "react-scroll"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import HailIcon from '@mui/icons-material/Hail';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';





const Navbar = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false);



  const links = [
    {
      id:"acerca",
      text: "Acerca de mi",
      icon:<InfoOutlinedIcon/>
      
    },
    {
      id:"habilidades",
      text: "Mis habilidades",
      icon:<EmojiObjectsOutlinedIcon className={classes.habilidadesEmoji}/>
      
    },
    {
      id:"trabajo",
      text: "Mi trabajo",
      icon:<HailIcon/>
      
    },
    {
      id:"contacto",
      text: "Contactame",
      icon:<ContactMailOutlinedIcon/>
      
    }
  
  ]





  return (
    <>
    <AppBar position='sticky' className={classes.root}>
      <Toolbar  className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        <List className={classes.menu}>
        {
          links.map( ( {id,text}, index) =>  (
            <Link 
            key={index} 
            to={id} //nos dice a que id tiene que ir
            spy={true} //nos dice que link esta activo
            activeClass="active" 
            smooth={true} //suavidad al hacer scroll
            duration={500} 
            offset={-100}//nos da px adicionales
            >
            {text} 
            </Link>
            ))
        }
        </List>
        <IconButton edge="end" className={classes.menuButton} onClick={() =>setOpen(!open)}>
        <MenuOutlinedIcon fontSize='large'/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer className={classes.drawer} anchor='right' open={open} onClose={() =>setOpen(false)}>
          <IconButton className={classes.menuButton} onClick={() =>setOpen(false)}>
             <CancelOutlinedIcon></CancelOutlinedIcon>
          </IconButton>
          <Divider/>
          {
          links.map( ( {id,text, icon}, index) =>  (
            <Link  className={classes.sideBar}
            key={index} 
            to={id} //nos dice a que id tiene que ir
            spy={true} //nos dice que link esta activo
            activeClass="active" 
            smooth={true} //suavidad al hacer scroll
            duration={500} 
            offset={-70}//nos da px adicionales
            >
            
            <ListItem component="h5" button key={text}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
            ))
        }
    </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  menu:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    },
    "& a":{
      color:"#f895ae",
      fontSize :"1.2rem",
      marginLeft: "40px"
    },
    "& a:hover" :{
      cursor:"pointer",
      color:"#F24E75",
      borderBottom: "2px solid tomato"
    }
  },
  logo: {
    height:"80px",
    "&:hover":{
      cursor:"pointer"
    }
},
menuButton:{
display: "none",
[theme.breakpoints.down("sm")]:{
  display: "block"

}
},/*
drawer:{ //verrr
  display: "none",
  [theme.breakpoints.down("sm")]:{
    display: "block"
  
  }
},*/ 
root:{
  background: "#E0F2F1",
  boxShadow:"none"

},
toolbar :{
  display: "flex",
  justifyContent:"space-around",
  alignItems: "center"
},
sideBar:{
  width:"40vw",
  [theme.breakpoints.down("xs")]:{
    width:"60vw",
  
  },
  "& h5":{
    margin: "1.5vw"    
  },
  "& h5:hover":{
    cursor:"pointer",
    color: "#B2DFDB"
  }
},
habilidadesEmoji :{
 
  "&:hover":{
    
    color:"#ffcc00"
  }

}


}))
export default Navbar