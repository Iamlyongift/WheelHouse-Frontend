import { IoCallOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import "../Css/Guarantee.css"

const Guarantee = () => {
  return (
    <section className="guarantee-container">
      <div>
        <span>
          <IoCallOutline size={50} />
        </span>
        <h4>24/7 Customer Service</h4>
        <p>We're here to help you with any questions or concerns you have</p>
      </div>
      <div>
        <span>
          <TbTruckReturn size={50} />
        </span>
        <h4>14-Day Money Back</h4>
        <p>
          if you're not satisfied with your purchase, simply return it within 14
          days for a refund
        </p>
      </div>
      <div>
        <span>
          <LuBadgeCheck size={50}/>
        </span>
        <h4>Our Guarantee</h4>
        <p>
          We stand behind our product and servics nd guarantee your satisfaction
        </p>
      </div>
      <div>
        <span>
          <LiaShippingFastSolid size={50}/>
        </span>
        <h4>Shippin Nationwide</h4>
        <p>
          We ship our products nationwie, making them accessible to Customers
          everywhere
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
