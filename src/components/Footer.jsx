import { useState } from 'react';
export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer>
      <div className="footer-main">
        <div className="container px-4 px-lg-5">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="mb-1">
                <span className="f-logo-e">e</span>
                <span className="f-logo-gov">GOV</span>
              </div>
              <span className="f-logo-sub">Foundation</span>
              <p>Catalysing digital transformation in public service delivery at speed &amp; scale.</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="X"><i className="fab fa-x-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Useful Links</h3>
              <div className="links-grid">
                <div>
                  <a href="#">Home</a>
                  <a href="#">Our Impact</a>
                  <a href="#">DIGIT Sandbox</a>
                </div>
                <div>
                  <a href="#">Our People</a>
                  <a href="#">Financials</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe Now</h3>
              <p>Receive regular updates of our monthly newsletter DOT – in your inbox.</p>
              <form className="email-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <i className="fas fa-envelope"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container px-4 px-lg-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span className="copy">©2024. eGov. All Rights Reserved.</span>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
