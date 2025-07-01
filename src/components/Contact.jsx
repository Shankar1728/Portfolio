import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8309209715");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Details</h2>
        <table className="contact-table">
          <tbody>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:neelapalashankar876@gmail.com">neelapalashankar876@gmail.com</a>
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
    
              <td>
                <span id="phone-number">+91 8309209715</span>
                <button onClick={handleCopy} className="copy-btn">Copy</button>
                {copied && <span className="copied-text">   Copied!</span>}
              </td>
            </tr>
            <tr>
              <th>LinkedIn</th>
    
              <td>
                <a href="https://www.linkedin.com/in/shankar-neelapala-43b04628b/" target="_blank" style={{textDecoration:'none'}}>
                  https://www.linkedin.com/in/shankar-neelapala-43b04628b
                </a>
              </td>
            </tr>
            <tr>
              <th>GitHub</th>
              <td>
                <a href="https://github.com/Shankar1728" target="_blank" style={{textDecoration:'none'}}>
                  https://github.com/Shankar1728
                </a>
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>Gollagudem near Pedakapavaram, Akividu Mandal, West Godavari, Andhra Pradesh, India</td>
            </tr>
            <tr>
              <th>PinCode</th>
              <td>534235</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
