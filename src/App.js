import './App.css';
import pic from './images/IMG_4639.PNG';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <img src={pic} alt="Myself" class="photo"></img>
        <div>
          <h5 className="Sides">Want a TL;DR?<a className="link" href="https://docs.google.com/document/d/1J-Th0_ut0363uJ6hyNGbgRN3lqRsBfk8_JGX3oymimg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> View My Resume</a></h5>
          <h1 className="Intro">Hello, <br></br>I am</h1>
          <h1 className="Intro2">Vivian!</h1>
        </div>
        <div>
        
          <span class="circle1"><p class="About">About Me</p></span>
          <span class="circle2"><p class="Projects">Projects</p></span>
          <span class="circle3"><p class="Work">Experience</p></span>
          <span class="circle4"><p class="Extra">Extra</p></span>

        </div>
        
      </header>
    </div>
  );
}

export default App;
