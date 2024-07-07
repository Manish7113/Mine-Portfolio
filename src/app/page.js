'use client'
import { useEffect, useState } from "react";
import About from "./@core/component/about";
import Contact from "./@core/component/contact";
import Experience from "./@core/component/experience";
import Footer from "./@core/component/footer";
import Navbar from "./@core/component/navbar";
import Project from "./@core/component/project";
import Skill from "./@core/component/skills";
import Bio from "./@core/component/bio";
import ProgressBar from "react-scroll-progress-bar";
import AlertDialogSlide from "./@core/component/example";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)

  }, [])
  return (

    <>

      {isLoading ? <p>It is loading</p> : <> <Navbar></Navbar>
        <ProgressBar height="6" bgcolor="#ff084a" duration="0.2" />
        
        <About></About>
        <Bio></Bio>
        <Skill></Skill>
        {/* <Project></Project> */}
        <Experience></Experience>

        <Contact></Contact>
        <Footer></Footer></>}



    </>
  );
}
