import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nulla? Beatae laudantium unde cum animi, voluptatum repudiandae sint eaque impedit porro nam iure accusantium, labore veniam at ipsum sequi quasi non a asperiores alias minima! Doloribus corrupti laborum sunt amet, necessitatibus expedita suscipit repudiandae odio itaque dolor, fugit esse accusamus?
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
        <Typography 
         variant="p"
         class={classes.para}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nulla? Beatae laudantium unde cum animi, voluptatum repudiandae sint eaque impedit porro nam iure accusantium, labore veniam at ipsum sequi quasi non a asperiores alias minima! Doloribus corrupti laborum sunt amet, necessitatibus expedita suscipit repudiandae odio itaque dolor, fugit esse accusamus?
        </Typography>
        
      </div>
      <div>
        <Typography 
         variant="h4"
         component="h3"
         class={classes.heading}
        >
          Experience
        </Typography>
        <Typography 
         variant="p"
         class={classes.para}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nulla? Beatae laudantium unde cum animi, voluptatum repudiandae sint eaque impedit porro nam iure accusantium, labore veniam at ipsum sequi quasi non a asperiores alias minima! Doloribus corrupti laborum sunt amet, necessitatibus expedita suscipit repudiandae odio itaque dolor, fugit esse accusamus?
        </Typography>
        
      </div>
      <div>
        <Typography 
         variant="h4"
         component="h3"
         class={classes.heading}
        >
          Skills
        </Typography>
        <Typography 
         variant="p"
         class={classes.para}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nulla? Beatae laudantium unde cum animi, voluptatum repudiandae sint eaque impedit porro nam iure accusantium, labore veniam at ipsum sequi quasi non a asperiores alias minima! Doloribus corrupti laborum sunt amet, necessitatibus expedita suscipit repudiandae odio itaque dolor, fugit esse accusamus?
        </Typography>
        
      </div>
      <div>
        <Typography 
         variant="h4"
         component="h3"
         class={classes.heading}
        >
          Achievements
        </Typography>
        <Typography 
         variant="p"
         class={classes.para}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nulla? Beatae laudantium unde cum animi, voluptatum repudiandae sint eaque impedit porro nam iure accusantium, labore veniam at ipsum sequi quasi non a asperiores alias minima! Doloribus corrupti laborum sunt amet, necessitatibus expedita suscipit repudiandae odio itaque dolor, fugit esse accusamus?
        </Typography>
        
      </div>
    </div>
  )
}

export default About
