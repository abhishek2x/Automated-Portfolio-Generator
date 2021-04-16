import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import About from '../components/Portfolio/About'
import EduExp from '../components/Portfolio/EduExp'
import Footer from '../components/Portfolio/Footer'
import Main from '../components/Portfolio/Main'
import Navbar from '../components/Portfolio/Navbar'
import Skills from '../components/Portfolio/Skills'
import { FirebaseUserDefaultData } from '../components/utils/defaultData'
import { database } from '../firebase-config'

function Portfolio() {
  const { uid } = useParams();
  const [docData, setDocData] = useState(FirebaseUserDefaultData)

  const fetchData = useCallback(async() => {
    var docRef = database.collection("users").doc(uid);

    await docRef.get().then(function (doc) {
      if (doc.exists) {
        setDocData(doc.data())
        // console.log("All data: ", doc.data())
        // console.log("All data: ", docData)
        // console.log("Image: ", docData.image)
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

  return (
    <>
      <Navbar />
      <Main
        first={docData.FirstName}
        last={docData.LastName}
        tagline={docData.tagline}
      />
      <About
        first={docData.FirstName}
        last={docData.LastName}
        desc={docData.Description}
        city={docData.city}
        country={docData.country}
        email={docData.email}
        image={docData.image}
        resume={docData.resume}
      />
      <EduExp
        education={docData.Education}
        experience={docData.Experience}
      />
      <Skills
        skill={docData.Skills}
        achievements={docData.Achievements}
      />
      <Footer
        links={docData.Links}
      />
    </>
  )
}

export default Portfolio
