import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    backgroundColor: '#fff',
    // minHeight: '80vh'
  },
  contentGrid: {
    marginTop: '50px',
    marginBottom: '50px',
    padding: '30px'
  },
  headGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    padding: '30px'
  },
  headTitle: {
    color: '#000524',
    letterSpacing: '2px',
    textDecoration: 'underline #000524'
  },
  desc: {
    color: '#838C95',
    marginTop: '20px'
  },
  schoolName: {
    color: '#000'
  }
}));

function EduExp({ education, experience }) {
  const classes = useStyles();

  const EducationComp = education.map((item) =>
    <>
      <Typography variant="h5" className={classes.schoolName} id="education">
        <b>{item.School}</b>
      </Typography>
      <Typography variant="subtitle1" className={classes.schoolName}>
        <i>{item.Degree} - {item.Fieldofstudy}  *   ({item.StartDate} - {item.EndDate})</i>
      </Typography>
      <Typography variant="subtitle1" className={classes.desc}>
        {item.Description}
      </Typography>
      <br />
    </>
  )
  const ExperienceComp = experience.map((item) =>
    <>
      <Typography variant="h5" className={classes.schoolName} id="experience">
        <b>{item.Company}</b>
      </Typography>
      <Typography variant="subtitle1" className={classes.schoolName}>
        <i>{item.Title}  *   ({item.StartDate} - {item.EndDate})</i>
      </Typography>
      <Typography variant="subtitle1" className={classes.desc}>
        {item.Description}
      </Typography>
      <br />
    </>
  )

  return (
    <>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item md={4} className={classes.headGrid}>
            <Typography variant="h5" className={classes.headTitle}>
              EDUCATION
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.contentGrid}>

            {EducationComp}

          </Grid>
        </Grid>
      </Paper>


      <Paper className={classes.root}>
        <Grid container>
          <Grid item md={4} className={classes.headGrid}>
            <Typography variant="h5" className={classes.headTitle}>
              EXPERIENCE
          </Typography>
          </Grid>
          <Grid item md={6} className={classes.contentGrid}>
            {ExperienceComp}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default EduExp
