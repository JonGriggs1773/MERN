import React, {useState} from 'react'
import axios from 'axios'


const StarWars = (props) => {
    const [searchCategory, setSearchCategory] = useState("");
    const [id, setId] = useState("");
    const [object, setObject] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${searchCategory}/${id}`)
        .then((response) => {
            setObject(response.data);
            console.log(object);
        })
        .catch(err => {
            console.log(err);
        })
        
    }



    return (
        <div>
            <h1>These are not the Droids you're looking for...</h1>
            <form onSubmit = {handleSubmit}>
                <select name = "category" id = "category" onChange = {(e) => setSearchCategory(e.target.value)} value = {searchCategory}>
                    <option value=""></option>
                    <option value = "people">People</option>
                    <option value = "planets">Planets</option>
                </select>
                <input type = "number" name = "id" id = "id" onChange = {(e) => setId(e.target.value)} value = {id}/>
                <input type="submit" value="Search" />
            </form>
            {
                searchCategory === "planets"?
                <div>
                    <h4>{object.name}</h4>
                    <h5>Climate: {object.climate}</h5>
                    <h5>Population: {object.population}</h5>
                    <h5>Gravity: {object.gravity}</h5>
                    <h5>Terrain: {object.terrain}</h5>
                </div>:
                <div>
                    <h4>{object.name}</h4>
                    <h5>Height: {object.height}</h5>
                    <h5>Mass: {object.mass}</h5>
                    <h5>Birth Year: {object.birth_year}</h5>
                    <h5>Eye Color: {object.eye_color}</h5>
                </div>
            }
        </div>
    )
}

export default StarWars

/*
1. Create state variable for 'id' and 'searchCategory'.
2. Create form with drop down menu with people and planets.
3. Create form input where user can select a people/planet 'id' (type: number)
4. Submit should insert the searchCategory and id into the api url.
5. Display info for individual planet/people with at least 4 stats/details about them
*/