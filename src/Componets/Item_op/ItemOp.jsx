import React from 'react'
import './ItemOp.css'
import { Link } from 'react-router-dom'

export const ItemOp = (props) => {
  return (
    <div className='itemOp'>
        <Link style={{textDecoration:'none'}} to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <div className="description-cont">
          <div className="title">
            {props.title}
          </div>
          <div className="name">
            {props.author}
          </div>
          <div className="price">
            {props.price} Shilling
          </div>
        </div>
        <button>Add To Cart</button>
    </div>
  )
}
