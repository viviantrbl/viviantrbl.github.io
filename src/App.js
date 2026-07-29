import './App.css';
import pic from './images/IMG_4639.PNG';
import logo from './images/IMG_4636.PNG';
import grad from './images/IMG_1052_Original.jpg';
import fl from './images/FLIMG.png';
import bl from './images/BTCIMG.png';
import * as Constants from './text/constants.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="topContent">
          <img src={pic} alt="Myself" class="photo"></img>
          <div>
            <h1 className="Intro">Hello, <br></br>I am</h1>
            <h1 className="Intro2">Vivian!</h1>
          </div>
          <div className="circles">
            <a href="#about"><span class="circle1"><p class="About">About Me</p></span></a>
            <a href="#project" className="projLink"><span class="circle2"><p class="Jewelry">Jewelry</p></span></a>
            <span class="circle3"><p class="Paintings">Paintings</p></span>
            <span class="circle4"><p class="Extra">Extras</p></span>

          </div>
        </div>

      </header>
      <body className="mainBody">
        <a id="about"></a>
        <div className="aboutContent">
          <p className="sec1">About Me</p>
          <p className="sec1sub">
            {Constants.ABOUT_ME_TEXT1}
            <br></br>
            <br></br>
            {Constants.ABOUT_ME_TEXT2}
            <br></br>
            <br></br>
            {Constants.ABOUT_ME_TEXT3}
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
              <a href="https://www.instagram.com/viviantrbl/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="mailto:viviantrbl@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </div>
          
          
        </div>
    </div>
  );
}

export default App;
