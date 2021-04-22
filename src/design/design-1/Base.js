import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import vit from "../../static/images/vit.png"
import About from './About';
import Common from './Common';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    height: '15%',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  logoBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    height: '75px',
  },
  nav: {
    width: '75%',
    backgroundColor: '#fff',
    borderTopLeftRadius: '200px',
    borderTopRightRadius: '8rem'
  },
  main: {
    height: '100%',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: '3rem 0rem 3rem 3rem',
  },
  about: {
    bottom: '0px',
    height: '100%',
    overflow: 'scroll'
  },
}));

function Base({ docData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <div className={classes.logoBox}>
          <img className={classes.logo} src={vit} alt="logo" />
        </div>
        <div className={classes.nav}>
        </div>
      </div>
      <Grid container className={classes.main} >
        <Grid item md={3} xs={3}>
          <Common
            first={docData.FirstName}
            last={docData.LastName}
            city={docData.city}
            country={docData.country}
            email={docData.email}
            resume={docData.resume}
            image={docData.image}
            links={docData.Links}
            RegistrationNumber={docData.RegistrationNumber}
          />
        </Grid>
        <Grid
          item
          md={9}
          xs={9}
          className={classes.about}>
          <About
            tagline={docData.tagline}
            desc={docData.Description}
            education={docData.Education}
            experience={docData.Experience}
            skill={docData.Skills}
            achievements={docData.Achievements}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Base
