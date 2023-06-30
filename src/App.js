import './App.css';
import './hover.css';
import './mobile.css';

import cisco from './image/cisco.png';




function App() {
  
  return (
    <div className="cv-container">
      <div className="personal-info">
        <h2>Olivier Smith</h2>
        <p>Date of Birth: 16/08/2001</p>
        <p>Place of Birth: Briancon, France</p>
        <p>Languages: French/English</p>
        <p>Email: oliviersmith@sfr.fr</p>
      </div>

      <div className="education">
       <h2>Education</h2>
        <p>Lycée d'Altitude Briançon: Science in Management and Technology (A-Levels)</p>
        <p>Kingston University (2020 - 2023): BSc(Hons) Computer Science (2:2) </p>
      </div>
      
      <div className="experience">
        <h2>Mobile App development experience</h2>
        <div className="experience-images">
         
         
          <img className= "java" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"} alt="java" draggable="false"/>
          
          <img className= "flutter" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} alt="Flutter" draggable="false"/>
          
          <img className= "dart" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"} alt="dart" draggable="false" />
         
          <img className= "android" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg"} alt="android" draggable="false" />
         
        </div>
      </div>

      <div className="experience">
        <h2>Web development experience</h2>
        <div className="experience-images">
          <img className= "html" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"} alt="html" draggable="false"/>
          <img className= "css" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"} alt="css" draggable="false" />
          <img className= "javascript" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} alt="javascript" draggable="false"/>
         
         
          <img className= "react" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"} alt="react" draggable="false"/>
         
        </div>
      </div>

      <div className="experience">
        <h2> General Purpose Programming Languages </h2>
        <div className="experience-images">
          
          <img className= "java" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"} alt="java" draggable="false"/>
          <img className= "Python" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"} alt="Python" draggable="false" />

          <img className= "matlab" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"} alt="matlab" draggable="false"/>
         
        </div>
      </div>

      <div className="experience">
        <h2>Design and Prototyping Tools</h2>
        <div className="experience-images">
        <img className= "xd" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg"} alt="xd" draggable="false"/>
          <img className= "figma" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} alt="figma" draggable="false"/>
          
          
        </div>
      </div>

      <div className="experience">
        <h2> Git </h2>
        <div className="experience-images">
      
        <img className= "github" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"} alt="github" draggable="false"/>
          <img className= "gitlab" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"} alt="gitlab" draggable="false"/>
          <img className= "git" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"} alt="gitlab" draggable="false" />
         
        </div>
      </div>
      <div className="experience">
        <h2> Networking </h2>
        <div className="experience-images">
      
       
          <img className= "cisco" src={cisco} alt="cisco" draggable="false" />
         
        </div>
      </div>
      

      <div className="work-experience">
        <h2>Work Experience</h2>
        <p>Bartender/Waiter - The Grove Surbiton - Feb 2022 until present</p>
        <p>McDonald's Briancon Cook - Every holiday 2018-2022</p>
      </div>
    </div>
  );
}

export default App;
