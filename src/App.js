import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter'

function App() {
  return (
    <div>
    <h1>Hello World</h1>
    <Navbar/>
    <Greeter name="Prashant" age="24" sID={1}/>
    </div>
  );
}

export default App;
