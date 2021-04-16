import React, { useState } from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';
import BottomLinks from './BottomLinks';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
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

function MainForm({
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword,
  signInGoogle,
  signInGitHub,
  values,
  setValues,
  CreateUser,
  SignInUser }) {


  const classes = useStyles();
  const [tab, setTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={tab}
          onChange={handleTabChange}
          aria-label="simple tabs example"
        >
          <Tab label="Log in" />
          <Tab label="Sign up" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <LoginForm
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          values={values}
          setValues={setValues}
          SignInUser={SignInUser}
        />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <SignupForm
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          values={values}
          setValues={setValues}
          CreateUser={CreateUser}
        />
      </TabPanel>
      <br />
      <hr />

      <BottomLinks
        handleChange={handleChange}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        signInGoogle={signInGoogle}
        signInGitHub={signInGitHub}
        values={values}
        setValues={setValues}
      />

    </Container>
  )
}

export default MainForm
