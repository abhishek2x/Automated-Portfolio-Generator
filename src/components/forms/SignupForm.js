import React from 'react'
import { Button, Container, FormControlLabel, IconButton, InputAdornment, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    height: 30,
    width: 30,
    margin: 10
  },
  TextFieldMani: {
    marginTop: '10px',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around'
  },
}));

function SignupForm({
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  CreateUser,
  handleRadio }) {

  const classes = useStyles();
  return (
    <Container spacing={4}>
      <Typography
        id="transition-modal-title"
        variant="h4"
        align='center'
      >
        Sign Up
      </Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.TextFieldMani}
          fullWidth
          id="outlined-basic"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange('email')}
          variant="outlined"
          InputProps={{
            endAdornment: <PersonIcon />
          }}

        />
        <TextField
          className={classes.TextFieldMani}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }}
        />

        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue={values.isDeveloper}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FormControlLabel
            checked={!values.isDeveloper}
            onChange={handleRadio}
            control={<Radio color="primary" />}
            label="Recruiter"
          />
          <FormControlLabel
            checked={values.isDeveloper}
            onChange={handleRadio}
            control={<Radio color="primary" />}
            label="Developer"
          />
        </RadioGroup>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: '20px'
          }}
          onClick={CreateUser}
        >
          Sign up
      </Button>

      </form>
    </Container>
  )
}

export default SignupForm
