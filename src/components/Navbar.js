import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
    AppBar,Toolbar, ListItem,
    IconButton, ListItemText,
    Avatar, Divider, List, 
    Typography, Box, ListItemIcon, 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ava from '../images/batman.png'
import {ArrowBack, Home, Work} from '@material-ui/icons'
import Drawer from '@material-ui/core/Drawer';
// CSS
const useStyles = makeStyles(theme => ({
    menuSlider:{
        width:300,
        backgroundColor:'#511',
        height:'100%',
    },
    avatar:{
        display:"block",
        margin:'0.5rem auto',
        width:theme.spacing(10),
        height: theme.spacing(10),   
    },
    listItem:{
        color:'tan'
    }
}))
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath:'/'
    },
    {
        listIcon: <Work/>,
        listText: "Blog",
        listPath:'/blog'
    },

]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = ((slider, open)  => (event) => {
        setState({...state, [slider]:open})
    })
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSlider}>
            <Avatar className={classes.avatar} src={ava}/>
            <Divider />
            <List>
                {menuItems.map((menu,key) => {
                    return  <ListItem key={key} button component={Link} to={menu.listPath} >
                        <ListItemIcon className={classes.listItem}>
                            {menu.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={menu.listText} className={classes.listItem}/>
                    </ListItem>
                })}
                
            </List>
        </Box>
    )

    return (
        <div id='mac'>
        <Box component = 'nav'>
            <AppBar position='static' style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color:"tan"}}/>   
                    </IconButton>
                <Typography variant='h4' style={{color:"tan"}}>
                    Task
                </Typography> 
                 <Drawer anchor={"right"} open={state.right} onClose={toggleSlider("right", false)}>
                    {sideList('right')} 
                </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}

export default Navbar
