import React from 'react'
import { Button, Container, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
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

function LoginForm({
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  setValues,
  SignInUser }) {

  const classes = useStyles();
  return (
    <Container spacing={4}>
      <Typography
        id="transition-modal-title"
        variant="h4"
        align='center'
      >
        Log in
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            marginTop: '20px'
          }}
          onClick={SignInUser}
        >
          Login
      </Button>
      </form>
    </Container>
  )
}

export default LoginForm
