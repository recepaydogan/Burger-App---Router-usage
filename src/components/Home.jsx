import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className="main-page">
      <div className="order">
        <Link to="/menu">
          <button>Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
