// collaborated with eric, anthony, daisy, christian, daisy, josh, viviana, richard

import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastname = "Mamma" firstName = "Joe" age ={45} hairColor = "Black"/>
      <PersonCard lastname = "Bravo" firstName = "Johnny" age ={45} hairColor = "Black"/>
      <PersonCard lastname = "Clevenger" firstName = "Kye" age ={45} hairColor = "Black"/>
      <PersonCard lastname = "Smith" firstName = "Jerry" age ={45} hairColor = "Black"/>
    </div>
  );
}

export default App;
