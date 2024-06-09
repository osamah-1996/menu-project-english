import React from 'react'

const CategoryButtons = ({FilterByCategory, ShowAll}) => {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-sm-12 text-center'>
            <button onClick={() => ShowAll('All')} className='button mx-2'>All</button>
            <button onClick={() => FilterByCategory('Breakfast')} className='button mx-2'>Breakfast</button>
            <button onClick={() => FilterByCategory('Lunch')} className='button mx-2'>Lunch</button>
            <button onClick={() => FilterByCategory('Dinner')} className='button mx-2'>Dinner</button>
            <button onClick={() => FilterByCategory('Snacks')} className='button mx-2'>Snacks</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryButtons