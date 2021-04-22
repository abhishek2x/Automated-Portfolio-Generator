import React from 'react'
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
  },
}));


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Developed with ❤️ by {' '}
      <Link color="inherit" href="https://portfolio.abhisheksrivastava.me">
        Abhishek Srivastava
      </Link>
    </Typography>
  );
}

function FooterBottom() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Your Portfolio reflects your brand!
    </Typography>
      <Copyright />
    </footer>
  )
}

export default FooterBottom
