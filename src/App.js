import { useState } from 'react';
import './App.css';
import Direction from './components/Direction';
import MyLocation from './components/MyLocation';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const displayDirection = (event) => {
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;
    console.log(start, end);
    setDestination(end);
    setOrigin(start);
  }
  return (
    <div className="App">
      <form onSubmit={displayDirection}>
        <input type="text" name="origin" id="" required/>
        <br />
        <input type="text" name="destination" id="" required/>
        <br />
        <input type="submit" value="Show direction" />
      </form>
      <Direction origin={origin} destination={destination}></Direction>
      {/* <MyLocation></MyLocation> */}
    </div>
  );
}

export default App;
