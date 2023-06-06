








import {useState} from 'react'
import styles from '../css/tab.module.css'

const Tabs = (props) => {
    const [tabsList, setTabsList] = useState([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [currentTab, setCurrentTab] = useState(0)

    const handleTabs = (e) => {
        e.preventDefault();
        let newItem = {
            name,
            content
        }
        setTabsList([...tabsList, newItem]);
    }
    


    return (
        <div>
            <h1>Create Your Tabs</h1>
            <form onSubmit = {handleTabs}>
                <label style = {{padding: 20}}>
                    Name:
                    <input type = "text" onChange = {(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Content:
                    <textarea type = "text" onChange = {(e) => setContent(e.target.value)}/>
                </label>
                <input type = "submit" value = "Submit" style = {{margin:20}}/>
            </form>
            <div>
                {
                    tabsList.map((item, index) => {
                        return(<div onClick = {() => setCurrentTab(index)} style = {{cursor: 'pointer', width: 100, height: 30, margin: 5,  fontSize: 'x-large', display: 'inline-block', border: 'solid lightgray 2px'}}>{item.name}</div>)
                    }
                    )
                }
                {
                    tabsList[currentTab] ?
                    <div className = {styles.contentDiv}>{tabsList[currentTab].content}</div> :
                    null
                }
            </div>
        </div>
    )
}

export default Tabs