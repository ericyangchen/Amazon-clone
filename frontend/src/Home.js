import './Home.css';

import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image"
          src="/home-image.jpg"
          alt="home-free-shipping"
        />
        <div className="home-product">
          <Product
            id={1}
            name="The shampoo poooooo pooo poooo pooo"
            price={5}
            rating={4}
            ratingCount={2760}
            image="/product-image.jpg"
          />
          <Product
            id={2}
            name="The soap poo"
            price={10.99}
            rating={5}
            ratingCount={1000}
            image="/home-image.jpg"
          />
          <Product
            id={3}
            name="The watermelon poooooo pooo poooo pooo"
            price={5}
            rating={1}
            ratingCount={1000}
            image="/product-image.jpg"
          />
          <Product
            id={4}
            name="The monkey poooooo pooo poooo pooo"
            price={5}
            rating={4}
            ratingCount={1000}
            image="/product-image.jpg"
          />
          <Product
            id={5}
            name="The airpods poooooo pooo poooo pooo"
            price={5}
            rating={4}
            ratingCount={1000}
            image="/product-image.jpg"
          />
          <Product
            id={6}
            name="The macbooks poooooo pooo poooo pooo"
            price={5}
            rating={4}
            ratingCount={1000}
            image="/product-image.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;