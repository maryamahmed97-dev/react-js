import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <div className="bg-dark text-white">
        <div className=" container  d-flex p-4 ">
          <div className="row">
            <div className="col-4">
              <h2>cyber</h2>
              <p>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="col-4">
              <p>Services</p>
              <p>Bonus program</p>
              <p>Gift cards</p>
              <p>Credit and payment</p>
              <p>Service contracts</p>
              <p>Non-cash account</p>
              <p>Payment</p>
            </div>
            <div className="col-4">
              <p>Assistance to the buyer</p>
              <p>Find an order</p>
              <p>Terms of delivery</p>
              <p>Exchange and return of goods</p>
              <p>Guarantee</p>
              <p>Frequently asked questions</p>
              <p>Terms of use of the site</p>
            </div>
          </div>
        </div>
        <div className="icons container d-flex gap-3">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </>
  );
}
