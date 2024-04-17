import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="col">
            <h4>Contact</h4>
            <p><strong>Address: </strong>UCU Mukono, Buguju/Congolese area(Orange appertment)</p>
            <p><strong>Phone: </strong>+256 706-48 5052</p>
            <p><strong>Hours: </strong>10:00 - 18:00, mon - sat</p>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Conctact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
        <div className="copyright">
            <p>© 2024, Designer by Benedict</p>
        </div>
    </div>
  )
}
