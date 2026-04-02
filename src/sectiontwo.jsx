import img from "./assets/images/oppo.png";
import image from "./assets/images/phone.png";
import img1 from "./assets/images/apple.png";
import img2 from "./assets/images/apple.png";

export default function Sectiontwo() {
  return (
    <>
      <h1>Related Products</h1>
      <div className="container text-center">
        <div className="row d-flex px-3">
          <div className="card col-3">
            <img src={img} class="card-img-top" />
            <div className="card-body text-start">
              <h5 class="card-title">Apple iPhone 14 Pro 512GB Gold (MQ233)</h5>
              <p class="card-text">$1437</p>
              <button href="#" className="btn btn-dark text-white">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card col-3">
            <img src={image} className="card-img-top" />
            <div class="card-body text-start">
              <h5 className="card-title">
                Apple iPhone 11 128GB White (MQ233)
              </h5>
              <p class="card-text">$510</p>
              <button href="#" className="btn btn-dark text-white">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card col-3">
            <img src={img1} class="card-img-top" />
            <div className="card-body text-start">
              <h5 classNmae="card-title">
                Apple iPhone 11 128GB White (MQ233)
              </h5>
              <p class="card-text">$550</p>
              <button href="#" className="btn btn-dark text-white">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="card col-3">
            <img src={img2} class="card-img-top" />
            <div className="card-body text-start">
              <h5 className="card-title">
                Apple iPhone 11 128GB White (MQ233)
              </h5>
              <p className="card-text">$550</p>
              <button href="#" className="btn btn-dark text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
