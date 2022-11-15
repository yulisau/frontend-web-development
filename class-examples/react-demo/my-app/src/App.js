import './App.css';
import Clock from './Clock.js'; 
import Welcome from './Welcome.js';
import List from './List.js'; 

function App() {
  return (
    <div>
    <Clock date={new Date()} />
    <Welcome name="peter" />
    <Welcome /> 
    <List />
    </div>
  );
}

export default App;
