import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import '../Css/Faq.css'; // Include necessary CSS for styling

function FAQPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-section">
        <h2 onClick={() => toggleSection('about')}>About Cribs&Ride</h2>
        {openSection === 'about' && (
          <ul>
            <li>where is Cribs&Ride headoffice located?</li>
          </ul>
        )}
      </div>

      <div className="faq-section">
        <h2 onClick={() => toggleSection('site')}>The Site</h2>
        {openSection === 'site' && (
          <ul>
            <li>Why don't all the properties have full details and photos?</li>
            <li>Which internet browsers do you support?</li>
          </ul>
        )}
      </div>

      <div className="faq-section">
        <h2 onClick={() => toggleSection('properties')}>More Information About Properties</h2>
        {openSection === 'properties' && (
          <ul>
            <li>What should I do if I want more information about one of the properties?</li>
            <li>I asked for details on a property but haven't heard anything yet. What should I do?</li>
          </ul>
        )}
      </div>

      <div className="faq-section">
        <h2 onClick={() => toggleSection('agents')}>Estate Agents, Letting (Rental) Agents, and New Homes Developers</h2>
        {openSection === 'agents' && (
          <ul>
            
            <li>How do you get traffic to your website?</li>
            <li>How do I know when I receive a lead?</li>
            <li>How long do i have to wait to get my car shipped to my location?</li>
            <li>Is there any limit to the number of properties I can purchase?</li>
          </ul>
        )}
      </div>

      {/* Live Chat Button */}
      <a href="https://wa.me/07043707580" target="_blank" rel="noopener noreferrer">
        <div className="live-chat-button">
          <FaWhatsapp size={30} /> {/* Add a WhatsApp Icon */}
        </div>
      </a>
    </div>
  );
}

export default FAQPage;
