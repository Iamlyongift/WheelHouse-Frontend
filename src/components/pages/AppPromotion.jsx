import "../Css/AppPromotion.css"; 
import imageOne from "../../assets/phoneImage.png";
import imageTwo from "../../assets/download.png";
import imageThree from "../../assets/AppstoreImage.jpg";


// Ensure you have appropriate CSS styling

const AppPromotion = () => {
  return (
    <section className="img-phone">
      <div className="phone-img">
        <img src={imageOne} alt="Phone" />
      </div>

      <div className="app-side">
        <h3>Get more done with our app.</h3>
        <p>
          Unlock exclusive features: save searches, track inquiries, and more with our app. <br />
          Available on iOS and Android.
        </p>
        <div className="store">
          <div>
            <a href="#">
              <img src={imageTwo} alt="App Store" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={imageThree} alt="Google Play Store" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
