import './App.css';
import pic from './images/IMG_4639.PNG';
import logo from './images/IMG_4636.PNG';
import grad from './images/IMG_1052_Original.jpg';
import fl from './images/FLIMG.png';
import bl from './images/BTCIMG.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="topContent">
          <img src={pic} alt="Myself" class="photo"></img>
          <div>
            <h5 className="Sides">Want a TL;DR?<a className="link" href="https://docs.google.com/document/d/1J-Th0_ut0363uJ6hyNGbgRN3lqRsBfk8_JGX3oymimg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> View My Resume</a></h5>
            <h1 className="Intro">Hello, <br></br>I am</h1>
            <h1 className="Intro2">Vivian!</h1>
          </div>
          <div className="circles">
            <a href="#about"><span class="circle1"><p class="About">About Me</p></span></a>
            <a href="#project" className="projLink"><span class="circle2"><p class="Projects">Projects</p></span></a>
            <span class="circle3"><p class="Work">Experience</p></span>
            <span class="circle4"><p class="Extra">Extra</p></span>

          </div>
        </div>

      </header>
      <body className="mainBody">
        <a id="about"></a>
        <div className="aboutContent">
          <p className="sec1">About Me</p>
          <p className="sec1sub">My name is Vivian Nguyen and I am a graduate from The University of Texas at Dallas with a Bachelor of Science degree in Computer Science. With my AP and dual credits from high school, I was able to graduate college 1.5 years early. Graduating early was both an exciting and nerve-wrecking experience. Exciting, because I was entering a new chapter of my life and nerve-wrecking, because that new chapter was unfamiliar. But unfamiliarity allowed for more learning and discovery and that has treated me well. In addition, I was afraid of how the "real world" was going to be like. In college, I was one of the few girls in my computer science and engineering classes, and this meant that more than likely my skills were doubted. If we had to get in pairs for an assignment, I would not get picked first. Or with group projects, the girls would be in a group together since we would be the last ones left. When I do end in a group with my male classmates, they would try to take over the work or shoot down all of my ideas. And it always concerned me how the division would be like outside of college classes. Would the workplace have more diversity? Or would the division be the same? Although this intimidated me, I have always stood my ground in showing my skills and I would never let it discourage me from continuing to learn and program. But not all of my experiences were like this, I had a handful of times where I was one of the only girls in the group and I was treated equally. And I did experience this in the internship I had after I graduated and it did ease my worries. After college, I was able to explore more aspects of computer science that were not covered or covered enough in college. There are many more to come and I look forward to new experiences every day. I hope to always keep learning and exploring all that computer science has to offer.
          <br />
          <br />
          With this website, I hope to not only showcase my skills, but also who I am. As a person, I would say my image is very "girly" but computer science and programming has such a masculine reputation, so I took it upon myself to make things here cute and colorful (like me).
           </p>

           <span class="square1"><p><b>Education:</b> The University of Texas at Dallas, B.S. in Computer Science, Magna Cum Laude</p></span>
           <span class="square2"><p><b>Skills:</b> <br/>Languages: Java, Python, C/C++, C#, JavaScript<br/>Software/Hardware: Unity, XCode, AWS, React Native/React, Github, PC Assembly, Raspberry Pi<br />Operating Systems: Windows, MacOS, iOS, Linux/Ubuntu<br/>Other: Switches and Router Configuration, Domain Server Admin </p></span>
          
          <div class="gradPic">
            <img src={grad} alt="Graduation cap" className="photo2"></img>
            <p>Photo of my decorated graduation cap</p>
          </div>
          
        </div>

        <a id="project"></a>
        <div className="projContent">
          <p className="sec2">Projects</p>
          <div class="ppt">
            <a href="https://docs.google.com/presentation/d/1Gc5mJxiIpB8yaPgE3wg3ZJMdjir_UiX-BunflmMPC6w/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img src={fl} alt="Federated Learning PPT" className="photo3"></img></a>
            <p class="sec2sub"><b>Overview:</b></p>
            <p class="caption">Click on image to view presentation</p>
            <p class="sec2sub2"><b>Key Words:</b></p>
          </div>
          <div class="game">
           <a href="https://novan01.itch.io/bushland-the-collector" target="_blank" rel="noopener noreferrer"><img src={bl} alt="Bushland the Collector start page" className="photo4"></img></a> 
           <p class="sec2gameSub"><b>Overview:</b></p>
           <p class="caption2">Click on image to view game</p>
           <p class="sec2gameSub2"><b>Key Words:</b></p>
          </div>
          <div class="cap">
            <span class="square3"><h1>Captial One: Vulnerability Warriors</h1></span>
            <p class="sec2COsub"><b>Overview:</b></p>
            <p class="sec2COsub2"><b>Key Words:</b></p>
          </div>
          <div class="vr">
            <span class="square4"><h1>VR Simulation for the Sachse Fire Department</h1></span>
            <p class="sec2VRsub"><b>Overview:</b></p>
            <p class="sec2VRsub2"><b>Key Words:</b></p>

          </div>
        
        </div>

      </body>
      <div className="nav">
          <div className="hb">
           <a href="#top"> <img src={logo} alt="Logo" className="homeButton"></img> </a>
            <p className="hbText">Home</p>
          </div>

          <div className="contactDrop">
            <h5 className="contact">Contact</h5>
            <div className="contactLinks">
              <a href="https://www.linkedin.com/in/vivian-nguyen-8ba71a19b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:viviantrbl@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </div>
          
          
        </div>
    </div>
  );
}

export default App;
