import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Update';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element = {<Main/>} path = "/home" default />
                    <Route element = {<Details/>} path = "/details/:id" />
                    <Route element = {<Update/>} path = "/update/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
