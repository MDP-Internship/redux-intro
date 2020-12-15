import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import IncreaseCounter from './components/ıncreaseCounter';
import DecreaseConuter from './components/decreaseConuter';
import IncreaseByTwoCounter from './components/ıncreaseByTwoCounter';

function App() {
  return (
   <div>
     <Counter></Counter>
     <IncreaseCounter></IncreaseCounter>
     <DecreaseConuter></DecreaseConuter>
     <IncreaseByTwoCounter></IncreaseByTwoCounter>
   </div>
  );
}

export default App;
