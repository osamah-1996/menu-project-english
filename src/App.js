import React, { useState } from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Contents from './Components/Contents/Contents'
import SectionHeader from './Components/Contents/SectionHeader'
import CategoryButtons from './Components/CategoryButtons'
import MenuList from './Components/MenuList'
import { items } from './Components/data'
const App = () => {
  const [data, setData] = useState(items)

  //Filter by Category
  const FilterByCategory = (cat) =>{
    const newArray = items.filter((item, index, array) => item.category === cat)
    setData(newArray)
  }
  //Show all Menu Items
  const ShowAll = (catt) => {
    setData(items)
  }
  //Fillter By Search
  const FillterByTitle = (word) => {
    if (word !== "" && word !== null) {
      const newArray = items.filter((item) => item.title === word);
      setData(newArray);
    } else {
      setData(items);
    }
  };
  return (
    <div className='color-body font'>
        <Header FillterByTitle = {FillterByTitle}/>
        <Contents>
          <SectionHeader />
          <CategoryButtons  FilterByCategory = {FilterByCategory} ShowAll = {ShowAll}/>
          <MenuList data = {data}/>
        </Contents>
    </div>
  )
}

export default App