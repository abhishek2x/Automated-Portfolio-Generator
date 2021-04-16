import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  items: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 'initial',
    fontWeight: 'bold',
    // marginRight: '30px',
    letterSpacing: '2px',
    color: '#888484',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'smaller',
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={{ background: 'transparent', boxShadow: 'none' }}
        primary
      >
        <Toolbar className={classes.items}>
          <Button variant="overline" className={classes.title} href="#about">
            About
          </Button>
          <Button variant="overline" className={classes.title} href="#education" >
            Education
          </Button>
          <Button variant="overline" className={classes.title} href="#experience" >
            Experience
          </Button>
          <Button variant="overline" className={classes.title} href="#skill" >
            Skills
          </Button>
          <Button variant="overline" className={classes.title} href="#achievement" >
            Achievements
          </Button>
          <Button variant="overline" className={classes.title} href="#contact" >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
