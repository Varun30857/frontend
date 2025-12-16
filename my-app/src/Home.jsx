import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>
        Welcome to <span>MyShop</span>
      </h1>

      <p>Discover amazing products at unbeatable prices.</p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default Home;
