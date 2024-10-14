
import "../Css/ProcessSection.css"

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="section-title">
          <span>A Quick Guide</span>
        </h2>
        <div className="process-note">
          <i className="info-icon">ℹ</i> If you've never purchased a property with us,
         here is a quick guide
        </div>

        <div className="process-cards">
          <div className="process-card">
            <div className="step-number">01</div>
            <h3>Choose A Car</h3>
            <p>
              View our range of cars, find your perfect car and home for the coming days.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">02</div>
            <h3>Come In Contact</h3>
            <p>
              Our advisor team is ready to help you with the booking process or
              any questions.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">03</div>
            <h3>Enjoy Driving</h3>
            <p>
              Receive the key and enjoy your car. We treat all our cars with
              respect.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProcessSection;
