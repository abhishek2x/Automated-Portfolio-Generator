import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import EduCard from "./EduCard"
import ExpCard from "./ExpCard"

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '10%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  heading: {
    color: '#44566c',
    fontWeight: '600',
    lineHeight: '1.3',
    marginTop: '0',
    fontSize: '1.875rem',
    marginBottom: '2.5rem',
    position: 'relative',
  },
  para: {
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    color: '#5f6f81',
    fontSize: '15px',
    lineHeight: '1.5715',
    letterSpacing: '0.6px',
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
  },
  skillbox: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  skillBtn: {
    margin: 10,
  }
}));

function About({
  tagline,
  desc,
  education,
  experience,
  skill,
  achievements
}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
        <Typography
          variant="h4"
          component="h3"
          class={classes.heading}
        >
          About Me
        </Typography>
        <Typography
          variant="p"
          class={classes.para}
        >
          {desc}
        </Typography>

      </div>
      <div>
        <Typography
          variant="h4"
          component="h3"
          class={classes.heading}
        >
          Education
        </Typography>

        <Grid container spacing={3}>
          {education.map((edu, idx) =>
            <Grid item md={6} xs={12}>
              <EduCard edu={edu} />
            </Grid>
          )}
        </Grid>
      </div>
      <div>
        <Typography
          variant="h4"
          component="h3"
          class={classes.heading}
        >
          Experience
        </Typography>

        <Grid container spacing={3}>
          {experience.map((exp, idx) =>
            <Grid item md={6} xs={12}>
              <ExpCard exp={exp} />
            </Grid>
          )}
        </Grid>
      </div>
      <div>
        <Typography
          variant="h4"
          component="h3"
          class={classes.heading}
        >
          Skills
        </Typography>
        <div className={classes.skillbox}>
          {skill.map((sk, idx) => <Button className={classes.skillBtn} variant="contained">{sk}</Button>)}
        </div>
      </div>
      <div>
        <Typography
          variant="h4"
          component="h3"
          class={classes.heading}
        >
          Achievements
        </Typography>

        {achievements.map((achievement, idx) => <Typography
          variant="p"
          class={classes.para}
        >
          {idx + 1}- {achievement}
        </Typography>)}

      </div>
    </div>
  )
}

export default About
