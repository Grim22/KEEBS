import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import ProductData from './ProductData'
import ProductContext from './Product-Context';
import WishItem from './Wish-Item';
import Footer from './Footer';
import { TbMoodEmpty } from 'react-icons/tb';
import Nav from './Nav';
import '../css/WishHero.css'
import carthero from '../assets/carthero.jpg'


    const Wishlist = () => {
    const {wishItems, getTotalWishList} = useContext(ProductContext)
    const totalItems = getTotalWishList()
    const navigate = useNavigate()
    return (
        <div className='favorites'>   
            <div className='carthero'>
                <img src={carthero} alt="" />
                <p className='heading'>FAVORITES</p>
            </div>
        <div className='wishItems'>
            {ProductData.map((product) => {
            if (wishItems[product.id] !== false ){
                return <WishItem data={product} />;
            }
            })}
            </div>
            {totalItems > 0 ?
            <div className='checkout'>
            <p hidden>Subtotal: ${totalItems}</p>
            <button onClick={() => navigate("/product")}>Continue Shopping</button>
            </div>
            :
            <div className='empty'>
                    <p className=''>
                        Empty
                    </p>
                    <button onClick={() => navigate("/product")}>
                        Continue Shopping
                    </button>
                </div>}
        </div>
    )
}

export default Wishlist