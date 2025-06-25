import React, { useContext, useState } from 'react'
import './ServiceItem.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const ServiceItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

    return (
        <div className='service-item'>
            <div className='service-item-img-container'>
                <img className='service-item-image' src={url+"/images/"+image} alt="" />
                {/* {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="service-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                } */}
            </div>
            <div className="service-item-info">
                <div className="service-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="service-item-desc">{desc}</p>
                <p className="service-item-price">{currency}{price}</p>
                {!cartItems[id]
                    ?<Link className="favorite styled" onClick={() => addToCart(id)} type="button">Book Now</Link>
                    :<Link to='/cart' className='favorite styled' type="button">Go to cart</Link>
                    
                }
            </div>
        </div>
    )
}

export default ServiceItem
