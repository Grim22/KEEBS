import React, {useContext} from 'react'
import ProductContext from './Product-Context'
import '../css/WishItem.css'

    const WishItem = (props) => {
    const{id, name, model, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartAmount, addToWishList,cartAmount} = useContext(ProductContext)
    return ( 
        <div className='cartItem'>
            <img src={image} />
            <div className='description'>
                <p>{name}</p>
            </div>
            <div className='btns'>
                <button className='add-to-cart' onClick={()=> addToCart(id)}>Add to Cart{cartAmount > 0 &&<>({cartAmount})</>}
                </button>
                <button className="removeWishlist" onClick={()=>addToWishList(id)}>Remove
                </button>
            </div>
        </div>
    )
}

export default WishItem