
const state = {}

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

const seedList = () => {
  let arrayCopy = {...seedData}
  console.log(arrayCopy)
 return  <option value='test'>test</option>
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <select>
          <option>--pick a model--</option>
          {seedList()}
        </select>
      </div>
    );
  }
}


//redo

const seedList = () =>{
  let temp = Object.keys(seedData).map(key=> {return [String(key),seedData[key]]})
  return temp.map(x => {return <option value={x[0]}>{`${x[0]}(${x[1].year})`}</option>})
  console.log(temp)
}
//works but kinda sketch

updateSelection = (event) => {
  let value = event.target.value
  console.log(value)
  Object.assign({this.state}{value})
  console.log(this.state)
  event.preventDefault()
}

//

addModel = (model) => {
  this.props.dispatch({
    type: 'ADD_MODEL',
    payload {
      ...state,
      action.payload
    }
  })
}

//putting it somewhere wrong but saving it for later

addModel = (event) => {
  event.preventDefault()
  let model = this.state
  let indexer = Object.keys(seedData).indexOf(model.value)
  console.log(
  let bundle = {
    manufacturer: seedData[indexer].manufacturer,
    year:seedData[indexer].year,
    origin:seedData[indexer].origin
  }
  console.log(indexer)
  store.dispatch({
    type: 'ADD_MODEL',
    payload: {id:model.value, info: bundle}
  })
  console.log(model)
