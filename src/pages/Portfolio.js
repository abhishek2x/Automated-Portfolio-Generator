import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import About from '../design/design-0/About'
import EduExp from '../design/design-0/EduExp'
import Footer from '../design/design-0/Footer'
import Main from '../design/design-0/Main'
import Navbar from '../design/design-0/Navbar'
import Skills from '../design/design-0/Skills'
import Base from '../design/design-1/Base'
import { FirebaseUserDefaultData } from '../components/utils/defaultData'
import { database } from '../firebase-config'

function Portfolio() {
  const { uid, designPattern } = useParams();
  const [docData, setDocData] = useState(FirebaseUserDefaultData)

  const fetchData = useCallback(async () => {
    var docRef = database.collection("users").doc(uid);

    await docRef.get().then(function (doc) {
      if (doc.exists) {
        setDocData(doc.data())
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

  return designPattern === '0' ? (
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
  ) : (
    <>
      <Base docData={docData}/>
    </>
  )
}

export default Portfolio
