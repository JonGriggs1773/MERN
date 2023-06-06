// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="App">
            <PersonCard person = {['Doe', 'Jane', 45, 'Black']}/>
            <PersonCard person = {['Smith', 'John', 88, 'Brown']}/>
            <PersonCard person = {['Fillmore', 'Millard', 50, 'Brown']}/>
            <PersonCard person = {['Smith', 'Maria', 62, 'Brown']}/>
        </div>
    );
}

export default App;
