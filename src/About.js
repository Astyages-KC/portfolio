import React from 'react'

export default function About() {
    return(
        <div className='home'>
            <div className='imgDiv'>
                <img src='https://cdn.discordapp.com/attachments/632280517013930044/646137622149726208/myface.jpg' alt='myprofile' />
            </div>
            <div className='aboutDiv'>
                <p>I like puters!!!</p>
            </div>
            <div className='homeInfo'>
                <p>Phone: (801) 502-1108</p>
                <p>Email: <a className='email' href="mailto:naeaman@gmail.com">naeaman@gmail.com</a></p>
                <a href="https://www.linkedin.com/in/kevin-clark-118060120/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Astyages-KC" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}