import { makeStyles, Paper, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000524',
    minHeight: '80vh',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contentGrid: {
    marginTop: '50px',
    marginBottom: '50px',
    // display: 'flex',
    // justifyContent: 'center',
  },
  buttonBox: {
    marginTop: '50px',
    marginBottom: '50px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  headTitle: {
    margin: '30px',
    letterSpacing: '2px',
    color: '#fff',
    buttonBoxDecoration: 'underline #0000524',
  },
  btnText: {
    margin: '5px',
    letterSpacing: '2px'
  }
}));

function Skills({ skill, achievements }) {
  const classes = useStyles();

  const SkillComp = skill.map((s) =>
    <Button variant="contained" color="default" spacing={3} className={classes.buttonBox}>
      <b className={classes.btnText}>{s}</b>
    </Button>
  )

  const AchievementComp = achievements.map((line, idx) =>
    <div style={{ marginLeft: '40px' }}>
      <Typography variant="p" style={{ color: '#bbbbbb', marginTop: '15px' }}>
        {idx + 1} {' - '} {line}
      </Typography>
      <br />
      <br />
    </div>
  )

  return (
    <Paper className={classes.root}>
      <Container className={classes.contentGrid} id="achievement">
        <Button size="large" className={classes.headTitle} startIcon={<CodeIcon />}>
          ACHIEVEMENTS
        </Button>
        <div>
          {AchievementComp}
        </div>
      </Container>

      <Container className={classes.contentGrid} id="skill">
        <Button size="large" className={classes.headTitle} startIcon={<CodeIcon />}>
          SKILLS
        </Button>
        <div className={classes.buttonDiv}>
          {SkillComp}
        </div>
      </Container>
    </Paper>
  )
}

export default Skills
