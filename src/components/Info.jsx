import React from 'react'

function Info() {
  return (
    <div id="info-div">
      <div><h1><b>I am Shankara Vara Prasad Neelapala</b></h1></div>
        <div style={{gap:'10px', display:'flex'}}>
            <a href='/shankar_resume.pdf' target="_blank">
                <button type='submit' id="button-id">Resume</button>
            </a>
            <a href='/shankar_resume.pdf' download="Shankar_resume.pdf">
                <b style={{fontSize:'20px'}}> Download Resume</b>
            </a>
        </div>
    </div>
  )
}

export default Info