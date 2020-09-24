import React from 'react'
import './homepageall.css'

function HomepageAll({title , name , src , pref}) {
    return (
        <div className = "homepage__allbooks">
            <h1>{title}</h1>
            <h3>{name}</h3>
            <img src={src}/>
            <h2> {pref}</h2>
        </div>
    )
}

export default HomepageAll
