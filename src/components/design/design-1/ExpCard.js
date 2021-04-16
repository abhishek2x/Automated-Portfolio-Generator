import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ExpCard({ exp }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {exp.Company}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {exp.StartDate} - {exp.EndDate}
        </Typography>
        <Typography variant="body2" component="p">
          {exp.Title}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="caption" size="small">{exp.desc}</Typography>
      </CardActions>
    </Card>
  );
}
