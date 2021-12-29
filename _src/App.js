import sample from './img/1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Sample</h2>
      <img src={sample} alt="sample" />
    </div>
  );
}

export default App;
