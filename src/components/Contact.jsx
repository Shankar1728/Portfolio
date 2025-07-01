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
              <td>Email</td>
              <td>:</td>
              <td>
                <a href="mailto:neelapalashankar876@gmail.com">neelapalashankar876@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>:</td>
              <td>
                <span id="phone-number">+91 8309209715</span>
                <button onClick={handleCopy} className="copy-btn">Copy</button>
                {copied && <span className="copied-text">   Copied!</span>}
              </td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>:</td>
              <td>
                <a href="https://www.linkedin.com/in/shankar-neelapala-43b04628b/" target="_blank">
                  https://www.linkedin.com/in/shankar-neelapala-43b04628b/
                </a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>:</td>
              <td>
                <a href="https://github.com/Shankar1728" target="_blank">
                  https://github.com/Shankar1728
                </a>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>:</td>
              <td>Gollagudem near Pedakapavaram, Akividu Mandal, West Godavari, Andhra Pradesh, India</td>
            </tr>
            <tr>
              <td>PinCode</td>
              <td>:</td>
              <td>534235</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
