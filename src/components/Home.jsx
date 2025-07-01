
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Info from './Info';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
function Home() {
    const [component,setComponent] = useState(<Info/>);
  return (
    <div>
      <div id="link-div">
        <Link to="/" id="h" className="link-cls" onClick={(e)=>{e.preventDefault();setComponent(<Info/>)}}>Home</Link>
        <Link to="/about" id="h" className="link-cls" onClick={(e)=>{e.preventDefault();setComponent(<About/>)}}>About me</Link>
        <Link to="/projects" id="h" className="link-cls" onClick={(e)=>{e.preventDefault();setComponent(<Projects/>)}}>Projects</Link>
        <Link to="/contact" id="h" className="link-cls" onClick={(e)=>{e.preventDefault();setComponent(<Contact/>)}}>Contact</Link>
      </div>
      <div>
        {component}
      </div>
    </div>
  )
}

export default Home
