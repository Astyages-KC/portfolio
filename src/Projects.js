import React, { useEffect } from 'react'

export default function Projects() {
    useEffect(() => {
        const frames = window.frames;
        for (let i = 0; i < frames.length; i++) { 
          const sounds = frames[i].document.getElementsByTagName('audio');
          for(let j = 0; j<sounds.length; j++){
            sounds[j].pause();
          }
        }
    }, [])
    return(
        <div className='projects'>
            <div className='projectHeader'>
                <h1>
                    Web Development
                </h1>
            </div>
            <div className='note'>
                <p>Please note that slow loading time is due to how herokuapp handles images, and not the code itself.</p>
                <p>Content inside an iframe loses its responsiveness, but the websites themselves are responsive, thank you.</p>
            </div>
            <div className='project1'>
                <a href="https://clarkrealestate.herokuapp.com/" target="_blank" rel="noopener noreferrer">Clark Real Estate</a>
                <p>Professional website for Clark Real Estate (Currenly under rebuild)<br/>Built With: React, Axios CRUD, MongoDB, Express, HTML, CSS, Node.js</p>
                <a href="https://clarkrealestate.herokuapp.com/" target="_blank" rel="noopener noreferrer"><iframe title='Clark Real Estate' src="https://clarkrealestate.herokuapp.com/" alt="project1"/></a>
            </div>
            <div className='project2'>
                <a href="https://urban-funicular.herokuapp.com/" target="_blank" rel="noopener noreferrer">Used Book Store</a>
                <p>Full stack group project using CRUD method to track book inventory<br/>Built With: React, Axios, MongoDB, Mongoose, CSS, Node.js</p>
                <a href="https://urban-funicular.herokuapp.com/" target="_blank" rel="noopener noreferrer"><iframe title='Plot Chaser' src="https://urban-funicular.herokuapp.com/" alt="project2"/></a>
            </div>
            <div className='project3'>
                <a href="http://kevinclarkdnd.surge.sh/home" target="_blank" rel="noopener noreferrer">Dungeons and Dragons Character Builder</a>
                <p>Front end project using 2 API’s<br/>Built with React, JavaScript, HTML, CSS, Express, MongoDB, and Node.js.</p>
                <a href="http://kevinclarkdnd.surge.sh/home" target="_blank" rel="noopener noreferrer"><iframe title='Clue Murder Mystery' src="http://kevinclarkdnd.surge.sh/home" alt="project3"/></a>
            </div>
            <div className='project4'>
                <a href="http://project-hangman.surge.sh/" target="_blank" rel="noopener noreferrer">Various Projects</a>
                <p>Built With Vanilla: HTML, CSS and Javascript</p>
                <a href="http://jax-hp-react-app.surge.sh/" target="_blank" rel="noopener noreferrer"><iframe className='hpIframe' title='Vanilla Project' src="http://project-hangman.surge.sh/" alt="project4"/></a>

                <a href="http://project-hangman.surge.sh/" target="_blank" rel="noopener noreferrer"></a>
                <a href="http://jax-hp-react-app.surge.sh/" target="_blank" rel="noopener noreferrer"><iframe className='hpIframe' title='Vanilla Project' src="http://project-hangman.surge.sh/" alt="project4"/></a>

            </div>
        </div>
    )
}