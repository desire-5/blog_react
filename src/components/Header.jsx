import React from 'react'
import {Typography, Grid, Box, Avatar} from '@material-ui/core'
import ava from '../images/batman.png'
import Typed from "react-typed"
import {makeStyles} from '@material-ui/core/styles'
import Particles from "react-tsparticles";


// CSS 
const useStyles = makeStyles(theme => ({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin: theme.spacing(15)
    },
    title:{
        color: 'tan',
        fontWeight:'bold'
    },
    subtitle:{
        color:"tan",
        marginBottom:'2rem'
    },
    typedContainer: {
        position:"fixed",
        // top:"50%",
        // left:"50%",
        width:"100vw",
        height:"100vw",
        textAlign:'center',
        // transform:'translate(-50%, -50%)',
        zIndex:1
    }
}))
const Header = () => {
    const classes = useStyles()
    return (
        <Box id="mac" className={classes.typedContainer}>
            
            <Grid container justify="center">
                <Avatar src={ava} className={classes.avatar}/>
            </Grid>
            <Typography variant="h3" className={classes.title}>
                <Typed strings={['Vasyl Vasylkiv']} typeSpeed={60} />     
            </Typography> 
            <br/>
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={['Web Development', 'React', 'Redux']} loop typeSpeed={40} backSpeed={50}/>     
            </Typography> 
            <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
        </Box>
    )
}

export default Header
