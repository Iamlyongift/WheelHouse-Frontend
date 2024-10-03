// CustomAlert.js

import '../Css/CustomAlert.css'; // Import the CSS for styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <p>{message}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;
