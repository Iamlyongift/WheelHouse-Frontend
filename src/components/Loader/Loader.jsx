import { DNA } from "react-loader-spinner";
import "../Css/Loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
