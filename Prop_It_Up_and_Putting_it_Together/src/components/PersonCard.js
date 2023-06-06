import React, {useState} from 'react'


const PersonCard = (props) => {
        const [lastName, firstName, age, hairColor] = props.person;
        const [personAge, setPersonAge] = useState(age);
        
        const increaseAge = () => {
            setPersonAge(personAge + 1);
        }

        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {personAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = {() => increaseAge()}>Increase Age</button>
            </div>
        )
    
}

export default PersonCard