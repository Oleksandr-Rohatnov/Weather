import React from 'react'
import { Card } from '../card/Card'
import './CardList.scss'

export const CardList = ({ cityList, deleteCity }) => (
  <div className="cardList">
    {cityList.map((city, i) => <Card key={i} deleteCity={deleteCity} cityState={city}/>)}
  </div>
)
