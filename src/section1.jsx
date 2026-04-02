import img from "./assets/images/phone.png";
import image from "./assets/images/Delivery.png";
import image1 from "./assets/images/stock.png";
import image2 from "./assets/images/Guaranteed.png";
export default function Sectionone() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={img} alt="phone" className="img-fluid" />
        </div>
        <div className="col-6">
          <h2>Apple iPhone 14 Pro Max</h2>
          <h3>
            $1399 <span>$1499</span>
          </h3>
          <p>
            Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
            work without rechargingthroughout the day. Incredible photosas in
            weak, yesand in bright lightusing the new systemwith two cameras
          </p>
          <div className="btn-container">
            <button type="button" class="btn btn-light">
              Add To Wishlist
            </button>
            <button type="button" class="btn btn-dark">
              Add To Cart
            </button>
          </div>
          <div className="col-12 d-flex gap-3 ">
            <div className="col-4 d-flex gap-2">
              <img src={image} alt="delivery" className="img-fluid" />
              <p>Free Delivery 1-2 day </p>
            </div>
            <div className="col-4 d-flex gap-2">
              <img src={image1} alt="delivery" className="img-fluid" />
              <p>In Stock Today </p>
            </div>
            <div className="col-4 d-flex gap-2">
              <img src={image2} alt="delivery" className="img-fluid" />
              <p>Guaranteed 1 year </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
