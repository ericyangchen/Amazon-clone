import './Checkout.css';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

import CurrencyFormat from 'react-currency-format';

import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-top">
        <img
          className="checkout-ad"
          src="/checkout-ad.jpg"
          alt="checkout-ad"
        />
      </div>
      <div className="checkout-left">
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">Your Shopping Cart</h2>
          <p className="checkout-price">Price</p>
          <hr className="checkout-hr" />
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              price={item.price}
              rating={item.rating}
              ratingCount={item.ratingCount}
              image={item.image}
            />
          ))}
          <div className="checkout-subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p className="checkout-subtotal-title">
                    Subtotal (<span>{cart?.length}</span> items): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;