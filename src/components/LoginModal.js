import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Container, Typography } from '@material-ui/core';
import { auth, database, providerGoogle, providerGitHub } from '../firebase-config'
import { UserContext } from '../context/userContext';
import { FirebaseUserDefaultData } from './utils/defaultData';
import MainForm from './forms/MainForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoginModal() {
  const classes = useStyles();

  const [user, setUser] = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  // Basic Functions
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

// Authentication Functions
  const signInGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(providerGoogle)
      .then((result) => {

        var docRef = database.collection('users').doc(result.user.uid);

        docRef.get()
          .then((docSnapshot) => {
            if (!docSnapshot.exists) {
              docRef.set(FirebaseUserDefaultData)
                .then(() => {
                  console.log(result)
                  setUser(result.additionalUserInfo.profile.name)
                })
            }
          });
      })
  }

  const signInGitHub = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(providerGitHub)
      .then((result) => {

        var docRef = database.collection('users').doc(result.user.uid);

        docRef.get()
          .then((docSnapshot) => {
            if (!docSnapshot.exists) {
              docRef.set(FirebaseUserDefaultData)
                .then(() => {
                  console.log(result)
                  setUser(result.additionalUserInfo.username)
                })
            }
          });
      })
  }

  const SignInUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var userLoggedIn = userCredential.user;
        console.log("Loggedin user", userLoggedIn)
        // setUser(userCreated.displayName) -> this will be null
        setUser(userLoggedIn.email)
        alert('User Logged in')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)
      })
    setValues({
      email: '',
      password: '',
      showPassword: false,
    })
  }

  const CreateUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        var userCreated = userCredential.user;
        console.log("userCreated: ", userCreated)
        var docRef = database.collection('users').doc(userCredential.user.uid);

        docRef.get()
          .then((docSnapshot) => {
            if (!docSnapshot.exists) {
              docRef.set(FirebaseUserDefaultData)
                .then(() => {
                  console.log(userCredential, userCreated.email)
                  setUser(userCreated.email)
                  alert('User Created!')
                })
            }
          })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        alert(errorMessage)
      })
    setValues({
      email: '',
      password: '',
      showPassword: false,
    })
  }
  return (
    <div>
      <Typography
        type="button"
        onClick={handleOpen}
        variant="contained">
        Login
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container maxWidth='xs' className={classes.paper}>
            {!user ?
              (

                <MainForm
                  handleChange={handleChange}
                  handleClickShowPassword={handleClickShowPassword}
                  handleMouseDownPassword={handleMouseDownPassword}
                  signInGoogle={signInGoogle}
                  signInGitHub={signInGitHub}
                  values={values}
                  setValues={setValues}
                  CreateUser={CreateUser}
                  SignInUser={SignInUser}
                />
              ) :
              (
                <>
                  <Typography varient="h5" u>
                    Welcome, {user}
                  </Typography>
                </>
              )
            }
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
