import { useParams } from "react-router-dom";
import "../Css/BankDetails.css"
import { useState } from "react"; // For handling file state
import cars from "../../Data/Car"; // Assuming you have cars data available

const BankDetails = () => {
  const { id } = useParams(); // Get car ID from the route parameters
  const car = cars.find((car) => car.id === parseInt(id, 10)); // Find the car by ID
  const [selectedFile, setSelectedFile] = useState(null); // State to hold selected file

  if (!car) {
    return <div>Car not found</div>; // Handle case where car is not found
  }

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle the payment logic here
  const handlePayment = (carId) => {
    if (selectedFile) {
      // Implement the file upload logic here, e.g., uploading to a server or cloud
      console.log(`Uploading file for car ID: ${carId}`);
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment for {car.name}</h1>
      <p>Price: {car.price}</p>
      <p>Category: {car.Category}</p> {/* Assuming 'category' is camelCase */}
      <p>Details: {car.description}</p>
      {/* Here you can implement your payment details and form */}

      <div>
        <h2>Bank Details</h2>
        <h6>Make payment using the details below</h6>
        <p>Name: African Bank</p>
        <p>Account No: 12345678910</p>
        <p>Account Name: My Luxury Site</p>
        <input type="file" onChange={handleFileChange} /> {/* File input handler */}
      </div>
      <button onClick={() => handlePayment(car.id)}>Upload</button>
    </div>
  );
};

export default BankDetails;
