





import {useState} from 'react'

const Main = (props) => {
    return (
        <div style = {{height: 600, width: 697, backgroundColor: '#e06666', 
        border: 'solid black 2px', display: 'flex', alignItems: 'flex-start'}}>
            <div style = {{ display: 'flex', position: 'relative', left: 50, paddingTop: 30 }}>
                {props.children}
            </div>
            <div style = {{alignSelf: 'flex-end', position: 'relative', right: 550, paddingBottom: 20}}>
                {props.ad}
            </div>
        </div>
    )
}

export default Main