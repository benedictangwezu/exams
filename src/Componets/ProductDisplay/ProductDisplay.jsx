import React, { useContext } from 'react'
import './ProductDisplay.css'
import { BooksContext } from '../../Context/BooksContext';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(BooksContext) 
  return (
    <div className='productDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-img">
                <img className="productDisplay--main" src={product.image} alt="" />
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.title}</h1>
            <div className="productDisplay-right-prices">
                <div className="productDisplay-right-price-new">{product.price} Ugx</div>
                <div className="productDisplay-right-price-old">{product.author}</div>
            </div>
            <div className="productDisplay-right-description">
            Our Food is usually of plant, animal, or fungal origin and contains essential nutrients such as 
            <br/>carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism 
            <br/>and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}
