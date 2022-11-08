import logo from './logo.svg';
import './App.css';

function App() {
  const firstName= 'Suvojit';
  const lastName= 'Acharya';
  const age=28;
  const sex ="M"
  const inputPlaceholder =' Enter Your Details'
  return (
    <div className="App">
      <h3>Full Name: {`${firstName} ${lastName}`}</h3> 
      <p> Age: {age}</p>
      <p> Sex: {sex}</p>
      <input placeholder={inputPlaceholder}/>
    </div>
  );
}

export default App;
