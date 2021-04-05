import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import './App.css'

function App() {
  return (
    <div>
    <Counter step={5}/>
    <Counter/>
    <h1>Hello World</h1>
    <Navbar/>
    <Greeter name="Prashant" age="24" sID={1}/>
    </div>
  );
}

export default App;
