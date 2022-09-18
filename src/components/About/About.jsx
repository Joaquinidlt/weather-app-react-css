
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './About.css'
import {RiDirectionLine} from 'react-icons/ri';

export default function About(){
    return(  
        <>  
            <div className = 'containerA'>
                <span className = 'text'><RiDirectionLine/> Folow me on <a href = 'https://github.com/Joaquinidlt' target = '_blank' rel = 'noopener noreferrer' className = 'link'>
                        GitHub <i className="fab fa-github"></i></a>   
                </span>    
                <span className = 'text'><RiDirectionLine/> Folow me on <a href = 'https://www.linkedin.com/in/joaquin-de-la-torre-developer/' target = '_blank' rel = 'noopener noreferrer' className = 'link'> 
                    LinkedIn <i className = "fab fa-linkedin-in"></i></a>  
                </span>
                <p className = 'text'><RiDirectionLine/><a href = 'https://edgarmontenegro123.github.io/MyCurriculumVitae/' 
                                                        target = '_blank' rel = 'noopener noreferrer' className = 'link'> Curriculum Vitae</a>
                </p>
            </div>
        </>
    )
}