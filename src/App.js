import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import store from './store.js'

const seedData = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

//---------Step One---------------
const seedList = () =>{
  let temp = Object.keys(seedData).map(key=> {return [String(key),seedData[key]]})
  return temp.map(x => {return <option value={x[0]} key={x[0]}>{`${x[0]}(${x[1].year})`}</option>})
}

//---------Step Two---------------
class App extends Component {
  constructor(props){
    super(props);
    this.state={value:""};
  }

  updateSelection = (event) => {
    event.preventDefault()
    let model = event.target.value
    let state = this.state
    this.setState((state)=>({value:model}))
    console.log(state)

  }
//---------Step Three---------------
  addModel = (event) => {
    event.preventDefault()
    let model = this.state
    let indexer = Object.keys(seedData).indexOf(model.value)
    let bundler = Object.values(seedData)
    console.log(bundler)
    let bundle = bundler[indexer]
    console.log(bundle)
    store.dispatch({
      type: 'ADD_MODEL',
      payload: {id:model.value, info: bundle}
    })
//sends action to reducer.js not sure if this is allowed
  }

  render() {
    return (
      <div className="App">
        <select onChange={this.updateSelection}>
          <option value="">--pick a model--</option>
          {seedList()}
        </select>
        <button onClick={this.addModel}>Add</button>
      </div>
    );
  }
}


export default App;
