import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarTop from '../components/NavbarTop.js'
import FooterBottom from '../components/FooterBottom.js'
import { Button, Grid, IconButton, makeStyles, Paper, TextField } from '@material-ui/core'
import { database, projectStorage } from '../firebase-config'
import { FirebaseUserDefaultData } from '../components/utils/defaultData.js'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { UidContext } from '../context/uidContext.js'
import { PhotoCamera } from '@material-ui/icons'
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginRight: 10
  },
  PaperCont: {
    marginTop: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    padding: '10px'
  },
  field: {
    marginTop: '10px'
  },
  mainBoxes: {
    justifyContent: 'center',
    padding: '20px'
  }
}));

function Profile(props) {
  const classes = useStyles();
  const { uid } = useParams();
  const [docData, setDocData] = useState(FirebaseUserDefaultData)
  const [uid2] = useContext(UidContext)

  var docRef = database.collection("users").doc(uid);

  const UpdateFireStore = () => {
    // console.log(docData)
    docRef.set(docData)
    alert('Your data is updated, your portfolio link is avaliable on homepage :)')
  }

  const fetchData = useCallback(async () => {

    await docRef.get().then(function (doc) {
      if (doc.exists) {
        setDocData(doc.data())
        console.log("All data: ", doc.data())
        // console.log("All data: ", docData)
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      alert(error)
    });
  })

  useEffect(() => {
    fetchData();
  }, []);

  const goBack = (
    <Button
      className={classes.btn}
      variant="contained"
      href='/'
    >
      Back
    </Button>
  )
  var saveButton = (<></>)

  if (uid === uid2) {
    saveButton = (
      <Button
        size="large"
        variant="contained"
        onClick={UpdateFireStore}>
        Save Data
      </Button>
    )
  } else {
    saveButton = (
      <Button
        size="large"
        variant="contained">
        You can't save someone else's data
      </Button>
    )
  }

  const BasicDetailSection = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Basic Details </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <TextField
            className={classes.field}
            label="First Name"
            variant="filled"
            value={docData.FirstName}
            onChange={(e) => setDocData({ ...docData, FirstName: e.target.value })}
          />
          <TextField
            className={classes.field}
            label="Last Name"
            variant="filled"
            value={docData.LastName}
            onChange={(e) => setDocData({ ...docData, LastName: e.target.value })}
          />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
        <TextField
            className={classes.field}
            label="City"
            variant="filled"
            value={docData.city}
            onChange={(e) => setDocData({ ...docData, city: e.target.value })}
          />
          <TextField
            className={classes.field}
            label="Country"
            variant="filled"
            value={docData.country}
            onChange={(e) => setDocData({ ...docData, country: e.target.value })}
          />
        </div>
        <div>
          <TextField
            fullWidth
            className={classes.field}
            label="Email"
            multiline
            variant="filled"
            value={docData.email}
            onChange={(e) => setDocData({ ...docData, email: e.target.value })}
          />
          <TextField
            fullWidth
            className={classes.field}
            label="Tagline"
            multiline
            variant="filled"
            value={docData.tagline}
            onChange={(e) => setDocData({ ...docData, tagline: e.target.value })}
          />
          <TextField
            fullWidth
            className={classes.field}
            label="Description"
            multiline
            variant="filled"
            value={docData.Description}
            onChange={(e) => setDocData({ ...docData, Description: e.target.value })}
          />
        </div>
      </Paper>
    </Grid>
  )

  const ExperienceSection = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Experience </h2>
        {docData.Experience.map((exp, index) =>
          <>
            {index + 1}
            <div>
              <TextField
                className={classes.field}
                label="Company"
                value={exp.Company}
                variant="filled"
                onChange={(e) => {
                  let experienceObj = docData.Experience
                  experienceObj[index].Company = e.target.value
                  setDocData(
                    {
                      ...docData, Experience: experienceObj
                    }
                  )
                }}
              />
              <TextField
                className={classes.field}
                label="Title"
                value={exp.Title}
                variant="filled"
                onChange={(e) => {
                  let experienceObj = docData.Experience
                  experienceObj[index].Title = e.target.value
                  setDocData(
                    {
                      ...docData, Experience: experienceObj
                    }
                  )
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.field}
                label="Start Date"
                value={exp.StartDate}
                variant="filled"
                onChange={(e) => {
                  let experienceObj = docData.Experience
                  experienceObj[index].StartDate = e.target.value
                  setDocData(
                    {
                      ...docData, Experience: experienceObj
                    }
                  )
                }}
              />
              <TextField
                className={classes.field}
                label="End Date"
                value={exp.EndDate}
                variant="filled"
                onChange={(e) => {
                  let experienceObj = docData.Experience
                  experienceObj[index].EndDate = e.target.value
                  setDocData(
                    {
                      ...docData, Experience: experienceObj
                    }
                  )
                }}
              />
            </div>
            <TextField
              fullWidth
              className={classes.field}
              label="Description"
              placeholder="Placeholder"
              multiline
              variant="filled"
              value={exp.Description}
              onChange={(e) => {
                let experienceObj = docData.Experience
                experienceObj[index].Description = e.target.value
                setDocData(
                  {
                    ...docData, Experience: experienceObj
                  }
                )
              }}
            />
            <br />
            <hr />
            <br />
          </>
        )}
        <div>
          <DeleteIcon
            color="secondary"
            onClick={() => {
              var ExpArr = docData.Experience
              ExpArr.pop()
              setDocData({ ...docData, Experience: ExpArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
          <AddCircleIcon
            color="secondary"
            onClick={() => {
              let ExpObj = [...docData.Experience, {
                'Company': '',
                'Description': '',
                'Title': '',
                'EndDate': '',
                'StartDate': '',
              }]
              setDocData({ ...docData, Experience: ExpObj })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
        </div>
      </Paper>
    </Grid>
  )

  const EducationSection = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Education</h2>
        {docData.Education.map((edu, index) =>
          <>
            {index + 1}
            <div>
              <TextField
                className={classes.field}
                label="School/University"
                value={edu.School}
                variant="filled"
                onChange={(e) => {
                  let educationObj = docData.Education
                  educationObj[index].School = e.target.value
                  setDocData(
                    {
                      ...docData, Education: educationObj
                    }
                  )
                }}
              />
              <TextField
                className={classes.field}
                label="Degree"
                value={edu.Degree}
                variant="filled"
                onChange={(e) => {
                  let educationObj = docData.Education
                  educationObj[index].Degree = e.target.value
                  setDocData(
                    {
                      ...docData, Education: educationObj
                    }
                  )
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.field}
                label="Field Of Study"
                value={edu.Fieldofstudy}
                variant="filled"
                onChange={(e) => {
                  let educationObj = docData.Education
                  educationObj[index].Fieldofstudy = e.target.value
                  setDocData(
                    {
                      ...docData, Education: educationObj
                    }
                  )
                }}
              />
            </div>
            <div>
              <TextField
                className={classes.field}
                label="Start Date"
                value={edu.StartDate}
                variant="filled"
                onChange={(e) => {
                  let educationObj = docData.Education
                  educationObj[index].StartDate = e.target.value
                  setDocData(
                    {
                      ...docData, Education: educationObj
                    }
                  )
                }}
              />
              <TextField
                className={classes.field}
                label="End Date"
                value={edu.EndDate}
                variant="filled"
                onChange={(e) => {
                  let educationObj = docData.Education
                  educationObj[index].EndDate = e.target.value
                  setDocData(
                    {
                      ...docData, Education: educationObj
                    }
                  )
                }}
              />
            </div>

            <TextField
              fullWidth
              className={classes.field}
              label="Description"
              placeholder="Placeholder"
              multiline
              variant="filled"
              value={edu.Description}
              onChange={(e) => {
                let educationObj = docData.Education
                educationObj[index].Description = e.target.value
                setDocData(
                  {
                    ...docData, Education: educationObj
                  }
                )
              }}
            />
            <br />
            <hr />
            <br />
          </>
        )}
        <div>
          <DeleteIcon
            color="secondary"
            onClick={() => {
              var EduArr = docData.Education
              EduArr.pop()
              setDocData({ ...docData, Education: EduArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
          <AddCircleIcon
            color="secondary"
            onClick={() => {
              let EduObj = [...docData.Education, {
                'School': '',
                'Degree': '',
                'Fieldofstudy': '',
                'StartDate': '',
                'EndDate': '',
                'Description': '',
              }]
              setDocData({ ...docData, Education: EduObj })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
        </div>
      </Paper>
    </Grid>
  )

  const AchievementsLinks = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Achievements</h2>
        {docData.Achievements.map((achievement, index) =>
          <>
            {index + 1}
            <TextField
              fullWidth
              className={classes.field}
              label="Achievement"
              variant="filled"
              value={achievement}
              onChange={(e) => {
                let achievementArr = docData.Achievements
                achievementArr[index] = e.target.value
                setDocData(
                  {
                    ...docData, Achievements: achievementArr
                  }
                )
              }}
            />
            <br />
            <hr />
          </>
        )}
        <div>
          <DeleteIcon
            color="secondary"
            onClick={() => {
              var achieveArr = docData.Achievements
              achieveArr.pop()
              setDocData({ ...docData, Achievements: achieveArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
          <AddCircleIcon
            color="secondary"
            onClick={() => {
              let achieveArr = [...docData.Achievements, '']
              setDocData({ ...docData, Achievements: achieveArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
        </div>
      </Paper>
    </Grid>
  )

  const imageChangeHandler = (e) => {
    let selected = e.target.files[0];

    const uploadImageTask = projectStorage.ref(`images/${selected.name}`).put(selected);

    uploadImageTask.on(
      "state_changed",
      snapshot => {
        //shows %age uploaded 
      },
      error => {
        console.log(error)
      },
      () => {
        projectStorage
          .ref("images")
          .child(selected.name)
          .getDownloadURL()
          .then(url => {
            // console.log(url)
            setDocData({ ...docData, image: url })
          })
      }
    )
  };


  const resumeChangeHandler = (e) => {
    let selected = e.target.files[0];

    const uploadImageTask = projectStorage.ref(`resume/${selected.name}`).put(selected);

    uploadImageTask.on(
      "state_changed",
      snapshot => {
        //shows %age uploaded 
      },
      error => {
        console.log(error)
      },
      () => {
        projectStorage
          .ref("resume")
          .child(selected.name)
          .getDownloadURL()
          .then(url => {
            // console.log(url)
            setDocData({ ...docData, resume: url })
          })
      }
    )
  };

  const Files = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Image and Resume</h2>

        <input type="file" onChange={imageChangeHandler} />
        <label htmlFor="icon-button-file">
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span">
            <PhotoCamera />
          </IconButton>
        </label>

        <br /><br />

        <input type="file" onChange={resumeChangeHandler} />
        <label htmlFor="icon-button-file">
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span">
            <DescriptionIcon />
          </IconButton>
        </label>

      </Paper>
    </Grid>
  )

  const SkillList = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Skills</h2>
        {docData.Skills.map((skill, index) =>
          <>
            {index + 1}
            <TextField
              className={classes.field}
              label="Skill"
              variant="filled"
              value={skill}
              onChange={(e) => {
                let skillArr = docData.Skills
                skillArr[index] = e.target.value
                setDocData(
                  {
                    ...docData, Skills: skillArr
                  }
                )
              }}
            />
            <br />
            <hr />
          </>
        )}
        <div>
          <DeleteIcon
            color="secondary"
            onClick={() => {
              var skillArr = docData.Skills
              skillArr.pop()
              setDocData({ ...docData, Skills: skillArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
          <AddCircleIcon
            color="secondary"
            onClick={() => {
              let skillArr = [...docData.Skills, '']
              setDocData({ ...docData, Skills: skillArr })
            }}
            style={{ fontSize: 40, margin: '15px' }}
          />
        </div>
      </Paper>
    </Grid>
  )

  const SocialLinks = (
    <Grid item md={6} xs={12}>
      <Paper className={classes.box}>
        <h2>Social Links</h2>
        <TextField
          fullWidth
          className={classes.field}
          label="LinkedIn"
          variant="filled"
          value={docData.Links.LinkedIn}
          onChange={(e) => setDocData(
            {
              ...docData, Links: {
                ...docData.Links,
                LinkedIn: e.target.value
              }
            }
          )}
        />
        <TextField
          fullWidth
          className={classes.field}
          label="Twitter"
          variant="filled"
          value={docData.Links.Twitter}
          onChange={(e) => setDocData(
            {
              ...docData, Links: {
                ...docData.Links,
                Twitter: e.target.value
              }
            }
          )}
        />
        <TextField
          fullWidth
          className={classes.field}
          label="GitHub"
          variant="filled"
          value={docData.Links.Github}
          onChange={(e) => setDocData(
            {
              ...docData, Links: {
                ...docData.Links,
                Github: e.target.value
              }
            }
          )}
        />
        <TextField
          fullWidth
          className={classes.field}
          label="Facebook"
          variant="filled"
          value={docData.Links.Facebook}
          onChange={(e) => setDocData(
            {
              ...docData, Links: {
                ...docData.Links,
                Facebook: e.target.value
              }
            }
          )}
        />
        <TextField
          fullWidth
          className={classes.field}
          label="Instagram"
          variant="filled"
          value={docData.Links.Instagram}
          onChange={(e) => setDocData(
            {
              ...docData, Links: {
                ...docData.Links,
                Instagram: e.target.value
              }
            }
          )}
        />
      </Paper>
    </Grid>
  )

  return (
    <>
      <NavbarTop goBack={goBack} switchComp={props.switchComp} />
      <Grid container style={{ justifyContent: 'center', padding: '20px' }}>

        <Grid className={classes.mainBoxes} container>
          {BasicDetailSection}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {ExperienceSection}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {EducationSection}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {AchievementsLinks}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {SkillList}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {Files}
        </Grid>

        <Grid className={classes.mainBoxes} container>
          {SocialLinks}
        </Grid>

        {saveButton}
      </Grid>

      <FooterBottom />
    </>
  )
}

export default Profile