import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import Counter from './Counter';
import MoodToggler from './MoodToggler';
import Cart from './Cart';
import './App.css'

const items = [
  { id: 1, name: 'Taco Shells', price: 3.25, qty: 2 },
  { id: 2, name: 'Pinto Beans', price: 2.00, qty: 2 },
  { id: 3, name: 'TSour Cream', price: 3.50, qty: 2 },
]


function App() {
  return (
    <div>
    <Cart items={items}/>
    <MoodToggler step={5}/>
    <Counter/>
    <h1>Hello World</h1>
    <Navbar/>
    <Greeter name="Prashant" age="24" sID={1}/>
    </div>
  );
}

export default App;
