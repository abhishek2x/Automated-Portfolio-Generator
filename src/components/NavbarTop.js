import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../context/userContext';
import LoginModal from './LoginModal';
import CssBaseline from '@material-ui/core/CssBaseline';
import { auth } from '../firebase-config'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(3),
  },
  navBox: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}));

function NavbarTop({ goBack, switchComp }) {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext)

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null)
        alert("User Logged Out")
      })
      .catch((error) => alert(error.message))
  }

  return (
    <>
      <CssBaseline />
      <AppBar color="secondary" position="relative">
        <Toolbar className={classes.navBox}>
          <DeveloperModeIcon
            fontSize="large"
            className={classes.icon} />

          {switchComp}
          <Typography variant="h6" color="inherit">
            {goBack}
            {!user ?
              (
                <LoginModal />
              ) :
              (
                <Button
                  onClick={signOut}
                  variant="contained"
                >
                  Logout
                </Button>
              )
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarTop
