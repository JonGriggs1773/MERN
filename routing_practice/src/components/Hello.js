import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {word, color, background} = useParams();
    console.log(color, background)
    return (
        <div>
            <h3 style = {{color: color, backgroundColor: background}}>Your word is: {word}</h3>
        </div>
    )
}

export default Hello