import React from 'react';
// import logo from './logo.svg';
import './App.css';
//? How to import you component into your App.js
import MyNewComponent from './components/MyNewComponent';

function App() {
    return (
        <div className="App">
            {/* someText resembles what a prop should look like */}
            <MyNewComponent someText = {"Hello World"}/> 
            <MyNewComponent someText = {"I am reusing the same component"}/>
        </div>
    );
}

export default App;
