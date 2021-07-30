import './App.css';
import React, {useState, useCallback, useEffect} from 'react';
import Form from './components/Form'
import Header from './components/Header'
import MotieInfo from './components/MotieInfo';
function App() {
  
  const [toggleForm, setToggleForm] = useState(false);
  const [motieList, setMotieList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setMotieList(data)
    });
}, [])

useEffect(() => {
  fetchData()
}, [fetchData]);

  
  return (
    <div className="App">
      <Header />
      <div className="FormContainer">
        <p>Een motie is een formeel middel waarmee een lid van een vergadering een discussiepunt voor kan leggen aan een vergadering. Hiertoe dient de motie in stemming gebracht te worden op een vergadering. Alle leden van een vergadering kunnen een motie indienen. Een bestuur zal in het algemeen geen moties indienen omdat een bestuur door middel van het amenderen van een vergaderagenda discussiepunten in stemming kan brengen.</p>
        <ul>
          {motieList.map(motie => (
            <MotieInfo key={motie.id} motie={motie}/>
          ))}
        </ul>
        <button onClick={() => {setToggleForm(!toggleForm)}}>Klik hier om een motie in te dienen</button>
        {toggleForm && 
        <div>
          <div className="FormHeader">
          <h3>Vul onderstaande formulier in om een motie in te dienen.</h3>
          </div>
          <Form />
        </div> }
        
      </div>
    </div>
  );
}

export default App;
