import './App.css';
import React, {useState} from 'react';
import Form from './Form'
function App() {
  


  
  return (
    <div className="App">
      <div className="Header">
        <h1 className="title">Moties.</h1>
        <h2 className="subtitle">Dien jouw moties hier in.</h2>
      </div>
      <div className="FormContainer">
        <p>Een motie is een formeel middel waarmee een lid van een vergadering een discussiepunt voor kan leggen aan een vergadering. Hiertoe dient de motie in stemming gebracht te worden op een vergadering. Alle leden van een vergadering kunnen een motie indienen. Een bestuur zal in het algemeen geen moties indienen omdat een bestuur door middel van het amenderen van een vergaderagenda discussiepunten in stemming kan brengen.</p>
        <div className="FormHeader">
          <h3>Vul onderstaande formulier in om een motie in te dienen.</h3>
        </div>
        <Form />
        
        
      </div>
    </div>
  );
}

export default App;
