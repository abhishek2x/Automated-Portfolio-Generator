import { a, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '10%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  img: {
    width: '100%',
  },
  name: {
    marginTop: 20
  },
  typograph: {
    letterSpacing: '5px',
    color: '#44566C',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  icon: {
    color: '#44566C',
    margin: 'auto',
  },
  details: {
    color: '#44566C',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  data: {
    color: '#44566C',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  }
}));

function Common({
  first,
  last,
  city,
  country,
  email,
  resume,
  image,
  links,
  RegistrationNumber
}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <img
        className={classes.img}
        src={image}
        alt="myself"
      />
      <div className={classes.name}>
        <Typography
          className={classes.typograph}
          variant="h5"
          container
          color="#44566c"
        >
          {first}
        </Typography>

        <Typography
          className={classes.typograph}
          variant="h5"
          container
          color="#44566c"
          fontWeight="fontWeightBold"
        >
          <b>{last}</b>
        </Typography>
      </div>

      <div className={classes.links} >
        {links.Github && <a href={links.Github}>
          <GitHubIcon fontSize='small' className={classes.icon} />
        </a>}

        {links.Facebook && <a href={links.Facebook}>
          <FacebookIcon fontSize='small' className={classes.icon} />
        </a>}

        {links.Twitter && <a href={links.Twitter}>
          <TwitterIcon fontSize='small' className={classes.icon} />
        </a>}

        {links.Instagram && <a href={links.Instagram}>
          <InstagramIcon fontSize='small' className={classes.icon} />
        </a>}

        {links.LinkedIn && <a href={links.LinkedIn}>
          <LinkedInIcon fontSize='small' className={classes.icon} />
        </a>}
      </div>

      <div className={classes.details}>
        <div className={classes.data}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin "><g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
          <Typography
            varient="subtitle"
            style={{ marginLeft: 7 }}
            component="h1"
            color="#fff"
          >
            {city}, {country}
          </Typography>
        </div>

        <div className={classes.data}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar "><g><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></g></svg>
          <Typography
            varient="subtitle"
            style={{ marginLeft: 7 }}
            component="h1"
            color="#fff"
          >
            {RegistrationNumber}
          </Typography>
        </div>

        <div className={classes.data}>
          <Typography
            varient="subtitle"
            component="p"
            color="#fff"
            class="email"
          >
            {email}
          </Typography>
        </div>

        {resume &&
          <Button
            href={resume}
            variant="contained"
            size="large"
            endIcon={<DescriptionIcon />}
            download
            target="_blank"
            style={{
              marginTop: 20
            }}
          >
            Resume
          </Button>
        }
      </div>
    </div>
  )
}

export default Common
