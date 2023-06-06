
import './App.css';
import Header from './components/Header'
import Advertisement from './components/Advertisement'
import Main from './components/Main'
import Navigation from './components/Navigation'
import SubContents from './components/SubContents'

function App() {
    return (
        <div className="App" >
            <div className = "flex">
                <Header/>
                <div className = "nav">
                    <Navigation/>
                    <div className = "main">
                        <Main ad = {<Advertisement/>}>
                            <SubContents/>
                            <SubContents/>
                            <SubContents/>
                        </Main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
