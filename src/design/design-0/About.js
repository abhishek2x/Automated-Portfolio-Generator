import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000524',
    minHeight: '100vh'
  },
  mainGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px'
    },
  },
  imageDiv: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '30px'
    },
  },
  text: {
    color: '#fff'
  }
}));

function About({
  first,
  last,
  desc,
  city,
  country,
  email,
  image,
  resume }) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Grid container>
        {image && <Grid
          item
          md={4}
          className={classes.imageDiv}
        >
          <img height='200' src={image} alt="Abhishek" />
        </Grid>}
        <Grid item md={8} className={classes.mainGrid}>
          <Grid item md={8}>
            <Typography variant="h4" className={classes.text}>
              About Me
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.text}>
              {desc}
            </Typography>
            <br />
            <br />
            <Typography variant="h4" className={classes.text}>
              Contact Details
            </Typography>
            <br />
            <Typography variant="subtitle1" className={classes.text}>
              {first}{' '}{last}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {city}, {country}
            </Typography>
            <Typography variant="subtitle1" className={classes.text}>
              {email}
            </Typography>
            <br />
            <br />
            {resume &&
              <Button
                color="secondary"
                href={resume}
                variant="contained"
                size="large"
                endIcon={<DescriptionIcon />}
                download
                target="_blank"
                >
                Resume
            </Button>}

          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
