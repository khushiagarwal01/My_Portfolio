import React from 'react'
import './Experience.css'
import { useContext } from 'react';
import { themecontext } from '../Context';
function Experience() {
    const theme=useContext(themecontext);
  const darkmode=theme.state.darkmode;
  return (
 <div className="experience" id='Experience'>
    <div className="acheivement" >
        <div className="circle" style={{color:darkmode?'black':'',border:darkmode?'4px solid var(--orange':''}}>3+</div>
        <span className='span1'>years</span>
        <span>Experience</span>
    </div>
    <div className="acheivement">
        <div className="circle" style={{color:darkmode?'black':'',border:darkmode?'4px solid var(--orange':''}}>5+</div>
        <span className='span1'>Completed</span>
        <span>Projects</span>
    </div>
    <div className="acheivement">
        <div className="circle" style={{color:darkmode?'black':'',border:darkmode?'4px solid var(--orange':''}}>8+</div>
        
        <span className='span1'>Internship</span>
        <span>Done</span>
    </div>
 </div>
  )
}

export default Experience
