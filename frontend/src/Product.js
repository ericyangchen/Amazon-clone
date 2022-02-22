import './Product.css';
import { useStateValue } from './StateProvider';

import StarIcon from '@mui/icons-material/Star';

function Product({ id, name, price, rating, ratingCount, image }) {

  const [dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item to data layer (basket)
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        name: name,
        price: price,
        rating: rating,
        ratingCount: ratingCount,
        image: image,
      },
    });
  }

  return (
    <div className="product">
      <img className="product-image"
        src={image}
        alt="product"
      />
      <div className="product-info">
        <p className="product-info-name">
          {name}
        </p>
        <p className="product-info-price">
          ${price}
        </p>
        <p className="product-info-rating">
          {Array(rating).fill().map((value, index) => (
            <StarIcon className="product-info-rating-star" key={index} />
          ))}
          <span className="product-info-rating-count">{ratingCount}</span>
        </p>
      </div>
      <button className="product-button" onClick={addToCart}>
        Add to basket
      </button>
    </div>
  )
}

export default Product;