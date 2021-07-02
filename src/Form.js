import React, {Component, useState} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            motieTitel: '',
            overwegende: '',
            overwegendeOpt: '',
            constaterende: '',
            constaterendeOpt: '',
            verzoekt: '',
            submit: false
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({submit: true});
    }    

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }
    changeMotieTitelHandler = (event) => {
        this.setState({motieTitel: event.target.value})
    }
    changeOverwegendeHandler = (event) => {
        this.setState({overwegende: event.target.value})
    }
    changeOverwegendeOptHandler = (event) => {
        this.setState({overwegendeOpt: event.target.value})
    }
    changeConstaterendeHandler = (event) => {
        this.setState({constaterende: event.target.value})
    }
    changeConstaterendeOptHandler = (event) => {
        this.setState({constaterendeOpt: event.target.value})
    }
    changeVerzoektHandler = (event) => {
        this.setState({verzoekt: event.target.value})
    }

      render() {
          return  (
            <form className="Form" onSubmit={this.handleSubmit}>
            {this.state.submit && <div><p>{this.state.name} heeft motie '{this.state.motieTitel}' ingediend.</p></div>}
            <div>
              <label>Naam (indiener)</label>
              <input type="text" value={this.state.name} onChange={this.changeNameHandler}></input>
            </div>
            <div>
              <label>Motie titel</label>
              <input type="text" value={this.state.motieTitel} onChange={this.changeMotieTitelHandler}></input>
            </div>
            <div>
              <label>Overwegende...</label>
              <input type="text" value={this.state.overwegende} onChange={this.changeOverwegendeHandler}></input>
            </div>
            <div>
              <label>Overwegende... (optioneel)</label>
              <input type="text" value={this.state.overwegendeOpt} onChange={this.changeOverwegendeOptHandler}></input>
            </div>
            <div>
              <label>Constaterende...</label>
              <input type="text" value={this.state.constaterende} onChange={this.changeConstaterendeHandler}></input>
            </div>
            <div>
              <label>Constaterende... (optioneel)</label>
              <input type="text" value={this.state.constaterendeOpt} onChange={this.changeConstaterendeOptHandler}></input>
            </div>
            <div>
              <label>Verzoekt...</label>
              <input type="text" value={this.state.verzoekt} onChange={this.changeVerzoektHandler}></input>
            </div>
            <input type="submit" value="Indienen" />
        </form>
          )
      }

}

export default Form;