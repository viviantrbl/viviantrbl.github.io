import './App.css';
import pic from './images/IMG_4639.PNG';
import logo from './images/IMG_4636.PNG';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          <img src={pic} alt="Myself" class="photo"></img>
          <div>
            <h5 className="Sides">Want a TL;DR?<a className="link" href="https://docs.google.com/document/d/1J-Th0_ut0363uJ6hyNGbgRN3lqRsBfk8_JGX3oymimg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> View My Resume</a></h5>
            <h1 className="Intro">Hello, <br></br>I am</h1>
            <h1 className="Intro2">Vivian!</h1>
          </div>
          <div className="circles">
            <a href="#about"><span class="circle1"><p class="About">About Me</p></span></a>
        
            
            <span class="circle2"><p class="Projects">Projects</p></span>
            <span class="circle3"><p class="Work">Experience</p></span>
            <span class="circle4"><p class="Extra">Extra</p></span>

          </div>
        </div>
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
      </header>
      <body className="mainBody">
        <a id="about"></a>
        <div>
          <p className="sec1">About Me</p>
          <p className="sec1sub">Test</p>
        </div>
      </body>
      
    </div>
  );
}

export default App;
