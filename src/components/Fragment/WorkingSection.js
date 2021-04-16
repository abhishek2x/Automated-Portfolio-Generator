import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import WorkLeft from '../utils/WorkLeft'
import WorkRight from '../utils/WorkRight'
import w1 from "../../static/images/w1.svg"
import w2 from "../../static/images/w2.svg"

const useStyles = makeStyles((theme) => ({
  bigheading: {
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'xx-large',
    },
  }
}));

function WorkingSection() {
  const classes = useStyles();

  const txt1a = "Create and Account and Setup your Profile";
  const txt2a = "You can Signup or authenticate using using email/password or Github or Gmail. Once logged in, add your details on profile.";

  const txt1b = "That's it!, your portfolio is ready.";
  const txt2b = "Once you added your details, your portfolio is ready. Feel free to share the link.";
  return (
    <Container maxWidth="lg">

      <Typography
        className={classes.bigheading}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
      >
        How it Works
      </Typography>
      <WorkLeft image={w1} text1={txt1a} text2={txt2a} />
      <WorkRight image={w2} text1={txt1b} text2={txt2b} />

    </Container>
  )
}

export default WorkingSection
