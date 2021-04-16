import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cont: {
    marginTop: '100px'
  },
  img: {
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '200px'
    },
  },
  para1: {
    overflowWrap: 'break-word',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'x-large',
    },
  },
  para2: {
    overflowWrap: 'break-word',
    marginBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'large',
    },
  }
}));

function WorkLeft({ text1, text2, image }) {
  const classes = useStyles();

  return (
    <Container
      container
      maxWidth="lg"
      className={classes.cont}
    >

      <Grid container>
        <Grid container item md={5} justify="center">
          <img className={classes.img} src={image} alt="working" />
        </Grid>

        <Grid item md={2}>
          {/* Intentionally Empty */}
        </Grid>

        <Grid container item md={5} justify="center">
          <Typography
            component="h3"
            variant="h4"
            color="textPrimary"
            className={classes.para1}
            gutterBottom
          >
            {text1}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.para2}
          >
            {text2}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkLeft
