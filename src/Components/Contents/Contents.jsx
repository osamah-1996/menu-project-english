import React from 'react'

const Contents = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
            {props.children}
            </div>
        </div>
    </div>
  )
}

export default Contents