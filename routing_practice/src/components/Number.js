import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const {num} = useParams();


    return (
        <div>
            {
                isNaN(num) === true?
                <p>Your word is: {num}</p>:
                <p>Your number is: {num}</p>
            }
        </div>
    )
}

export default Number