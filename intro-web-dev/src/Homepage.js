import React from 'react'
import Menu from './menu/Menu'

function Homepage() {
  return (
    <div className='homepage'>
        <div className="homepage__menu">
            <Menu />
        </div>
        <div className="homepage__content">Content1</div>
        <div className="homepage__content">Content2</div>
        <div className="homepage__content">Content3</div>
        <div className="homepage__content">Content4</div>
    </div>
  )
}

export default Homepage