import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  const [{ cart }] = useStateValue();


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal-title">
              Subtotal (<span>{cart?.length}</span> items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal-checkout-btn">
        Proceed to checkout
      </button>
    </div>
  )
}

export default Subtotal;