import { Container, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ParticlesBg from 'particles-bg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '88vh'
  },
  head: {
    marginBottom: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'xx-large',
    },
  }
}));

function Main({ first, last, tagline }) {
  const classes = useStyles();
  const shape = ["color", "ball", "lines", "thick", "circle", "cobweb", "polygon", "square", "tadpole", "fountain", "random", "custom"]
  const MINUTE_MS = 10 * 1000;
  const [data, setData] = useState('ball')

  useEffect(() => {
    const interval = setInterval(() => {
      setData(shape[Math.floor(Math.random() * shape.length)])
    }, [MINUTE_MS]);

    return () => clearInterval(interval);
  })

  return (
    <React.Fragment >
      <div className={classes.root}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            className={classes.head}>
            Hi!, I am {first} {last}
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            align="center">
            {tagline}
          </Typography>
        </Container>
      </div>
      <ParticlesBg type={data} bg={true} />
    </React.Fragment>
  )
}

export default Main
