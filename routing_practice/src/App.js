import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home'
import Number from './components/Number'
import Hello from './components/Hello'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to = "/home">Home</Link>
                <Routes>
                    <Route path = "/home" element = {<Home/>}/>
                    <Route path = "/:word/:color/:background" element = {<Hello/>}/>
                    <Route path = "/:num" element = {<Number/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
    }

export default App;
