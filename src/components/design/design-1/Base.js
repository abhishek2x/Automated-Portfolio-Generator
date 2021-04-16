import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import vit from "../../../static/images/vit.png"
import About from './About';
import Common from './Common';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
    marginTop: '4%',
  },
  nav: {
    width: '75%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  }
}));

function Base({ docData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <img src={vit} alt="logo" />
        <div className={classes.nav}>
          <h4>Hello</h4>
          <h4>Hello</h4>
          <h4>Hello</h4>
          <h4>Hello</h4>
          <h4>Hello</h4>
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
