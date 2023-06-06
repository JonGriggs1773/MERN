import React, {useState} from 'react';
import '../style.css';



const Box = (props) => {

    let [box, setBox] = useState("");
    let [boxList, setBoxList] = useState([]);
    let [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let object = {
            box, 
            color
        }
        
        setBoxList([...boxList, object])
    }


    return (
        <>
            <div>
                <form onSubmit = {handleSubmit}>
                    <label style = {{padding: 20}}>Color:</label>
                    <input type = "color" onChange = {(e) => setColor(e.target.value)} style = {{margin: 20}}/>
                    <label style = {{margin: 20}}>Size:</label>
                    <input type = "number" onChange = {(e) => setBox(e.target.value)}/>
                    <input style = {{margin: 20}}type = "submit" value = "Add Box"/>
                </form>
                <div>
                    {
                        boxList.map((item) => {
                            return (<div style = {{backgroundColor: item.color, height: item.box + 'px', width: item.box + 'px', display: 'inline-block', margin: 30, border: 'solid black 2px'}}></div>)                       
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Box