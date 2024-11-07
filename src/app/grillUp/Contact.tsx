import Link from "next/link"; // Importing Link from Next.js

export default function Contact() {
  return (
    <>
      <div id="Contact" className="contact-section">
        <h2 className="contact-heading">
          Contact Us
        </h2>
        <div className="container">
          {/* Map Section */}
          <div className="map-section">
            <iframe
              width="100%"
              height="500"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.380799686143!2d67.02340577563552!3d24.85084057793563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Sindh!5e0!3m2!1sen!2s!4v1729784555606!5m2!1sen!2s"
              className="map-iframe"
            />
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <p className="form-description">
              <span className="highlight-text">𝕲𝖗𝖎𝖑𝖑𝖀𝖕!</span> <br /> For Order Now ⬇
            </p>
            <div className="form-inputs">
              <label htmlFor="Name" className="input-label">Name</label>
              <input type="text" id="Name" name="Name" className="input-field" />
              
              <label htmlFor="Number" className="input-label">Number</label>
              <input type="number" id="Number" name="Number" className="input-field" />

              <label htmlFor="OrderName" className="input-label">Order Name</label>
              <input type="text" id="OrderName" name="OrderName" className="input-field" />

              <label htmlFor="Address" className="input-label">Address</label>
              <input type="text" id="Address" name="Address" className="input-field" />
            </div>

            <div className="form-inputs">
              <label htmlFor="message" className="input-label">Any Requirements for Your Order</label>
              <textarea id="message" name="message" className="textarea-field"></textarea>
            </div>

            {/* Button for sending the order */}
            <Link href="order">
              <div className="submit-button-container">
                <button className="submit-button">Send Order</button>
              </div>
            </Link>
            <p className="footer-text">Thank You So Much</p>
          </div>
        </div>
      </div>
    </>
  );
}
