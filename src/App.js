// App.jsx (acts as Home page)
import React , {useState,useEffect} from "react";
import './App.css';
import { FaLaptopCode, FaPeopleGroup } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import Fade from "./Fade";
import DownloadButton from "./download";
import Navbar from "./Navbar/navbar";
import { Element } from 'react-scroll';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Footer from "./Footer/footer";
import Loading from "./loading/loading.jsx"



function App(){
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;
  return(
    <div>
        <DotLottieReact
      src="https://lottie.host/a7b76f26-649a-4309-8e80-3b0ac2c65e51/SYchMFzIGE.lottie"
      loop
      autoplay
      className="lottie-background"
    />
      <header className="hero">
        <img src="/pic.JPG" alt="Profile" className="prof-img"/>

        <h1>Hi, I'm Aneesh</h1>
        <p>Frontend Developer</p>
      </header>

      
    <Element name="about">
      <section className="about">
  <Fade> 
    
      <h2>About Me</h2>
        <p>I build modern and responsive websites using React.</p>  
  </Fade>
      </section>
    </Element>
 <Fade>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3><FaLaptopCode /> My Portfolio</h3>
          <p>This is a professionally designed page from my personal portfolio project, built using React, showcasing my skills in modern web development</p>
          <p>A simple website to showcase my work</p>
        </div>
        <div className="project-card">
          <a href="https://crowd-sourced-review-system-f.onrender.com" 
             target="_blank"
             rel="noopener noreferrer"
          > Click here </a>
          <h3><FaPeopleGroup /> Crowd Sourced Review System</h3>
          <p>A platform that collects and aggregates reviews, ratings, and feedback from users.</p>
        </div>
      </section>

</Fade> 
<Navbar/>
   <Element name="contact">
<Fade>
      <section className="contact">
        <h2>Contact Me:</h2>
        <p>Email: aneeshjustinoo7@gmail.com</p>
        <p>Phone: 7510808948</p>
      </section>
</Fade>
  </Element>
   <Element name="service">
<Fade>
      <section className="service">
        <h2>Services</h2>
        <p>End-to-end web app development from design to deployment.</p>
      </section>
</Fade>
   </Element>
      <Outlet />
<DownloadButton />
<Footer />
    </div>
  );
}
export default App;


