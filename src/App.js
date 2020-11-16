import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getCity } from './API/getWeather';
import './App.css';
import { FormAddNewCity } from './components/form/FormAddNewCity';
import { Header } from './components/header/header';
import { CardList } from './components/cardList/CardList';


class App extends React.Component {
state = {
  city: [],
  errorInput: false,
}

 addNewCityToState = async (city) => {
  let x = await getCity(city)

  if(x.cod === 200) {
    this.setState(state => ({
      city: [...state.city, x]
    }))
  } else {
    this.setState({errorInput: true})
  }
}

defaultErrorInput = () => {
  this.setState({errorInput: false})
}

deleteCityFromState = (name) => {
  this.setState(state => ({
    city: state.city.filter(city => city.name !== name)
  }))
}

componentDidMount() {
  this.addNewCityToState('Poltava')
}

  render(){
    const { city, errorInput } = this.state
    return (
      <div className="content">
        <Header />
        <FormAddNewCity defaultErrorInput={this.defaultErrorInput} errorInput={errorInput} addCity={this.addNewCityToState}/>
        <CardList cityList={city} deleteCity={this.deleteCityFromState}/>
      </div>
    )
  }
}

export default App;
