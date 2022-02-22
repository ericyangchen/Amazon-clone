import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

import StarIcon from '@mui/icons-material/Star';

function CheckoutProduct({ id, name, price, rating, ratingCount, image }) {
  const [dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove from cart in data layer
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }

  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutProduct-image"
          src={image}
          alt="checkout-product"
        />
        <div className="checkoutProduct-info">
          <p className="checkoutProduct-name">
            {name}
          </p>
          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(rating).fill().map((value, index) => (
              <StarIcon className="checkoutProduct-rating-star" key={index} />
            ))}
            <span className="checkoutProduct-rating-count">{ratingCount}</span>
          </div>
          <button className="checkoutProduct-remove-btn" onClick={removeFromCart}>Remove from cart</button>
        </div>
      </div>
      <hr className="checkoutProduct-line-break" />
    </>
  )
}

export default CheckoutProduct;