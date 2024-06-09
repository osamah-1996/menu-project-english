import React from 'react'
import image from '../Assetes/breakfast/breakfast1.jpg'

const MenuList = ({data}) => {
  return (
    <div className='container pt-5'>
      <div className='row'>
          {data.length >= 1 ? (data.map((item, index, array) => {
            return(
              <div className='col-sm-12 pt-4' key={index} >
                <div className="card d-flex flex-row" >
                    <img src={item.image} className="img-item" alt="opps something went wrong" draggable = "false"/>
                    <div className="card-body">
                      <div className='d-flex flex-row justify-content-between'>
                          <h5 className="card-title item-title">{item.title}</h5>
                          <p className='item-price'>{item.price}</p>
                      </div>
                      <p className="item-description">{item.description}</p>
                    </div>
                </div>
          </div>
            )
          })) :<h2>No Menu Avalible Right Now</h2>
          
        
          }
      </div>
    </div>
  )
}

export default MenuList