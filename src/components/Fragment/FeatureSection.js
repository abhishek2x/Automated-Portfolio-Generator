import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import WorkLeft from '../utils/WorkLeft'
import WorkRight from '../utils/WorkRight'
import f1 from "../../static/images/f1.svg"
import f2 from "../../static/images/f2.svg"
import f3 from "../../static/images/f3.svg"


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

  const txt1a = "Easy Authentication";
  const txt2a = "Apart from manual authentication, we have provided direct authentication with gmail and google.";

  const txt1b = "Great Tool for Personal Branding";
  const txt2b = "Portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview — they allow you to show and not just tell. During a job search, the portfolio showcases your work to potential employers. It presents evidence of your relevant skills and abilities.";

  const txt1c = "Reflect what you are";
  const txt2c = "Portfolios provide documented evidence of teaching from a variety of sources—not just student ratings—and provide context for that evidence. The process of selecting and organizing material for a portfolio can help one reflect on and improve one's teaching.";
  return (
    <Container maxWidth="lg" id="working">

      <Typography
        className={classes.bigheading}
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary">
        What We Offer
      </Typography>

      <WorkLeft image={f1} text1={txt1b} text2={txt2b} />
      <WorkRight image={f2} text1={txt1a} text2={txt2a} />
      <WorkLeft image={f3} text1={txt1c} text2={txt2c} />

    </Container>
  )
}

export default WorkingSection
