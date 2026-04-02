import Banner from '../Images/Doc2.webp'
export default function DigitBanner() {
  return (
    <section className="digit-banner " id="platform">
      <div className="digit-blob"></div>
      <div className="container-fluid">
        <div className="container px-4 px-lg-5">
          <div className="row align-items-end">
            <div className="col-md-6 digit-content reveal">
              <div className="mb-3">
                <div className="digit-logo-dots">
                  <span className="dot-c dot-o"></span>
                  <span className="dot-c dot-g"></span>
                  <span className="dot-c dot-b"></span>
                  <span className="dot-c dot-r"></span>
                  <span className="digit-logo-text ms-2">DIGIT</span>
                </div>
                <span className="digit-by">by eGov Foundation</span>
              </div>
              <p className="digit-tag">Our open source</p>
              <h2 className="digit-title">technology-for-good<br />platform</h2>
              <p className="digit-desc">
                DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors.
              </p>
              <a href="#" className="btn-explore">Explore the platform</a>
            </div>
            <div className="col-md-6 digit-img-col reveal" style={{ transitionDelay: '0.2s' }}>
              <img
                src="https://placehold.co/560x400/1a3a8f/c8d8f0?text=Platform+Visual"
                alt="DIGIT Platform"
                className="img-fluid"
                style={{ borderRadius: '12px 12px 0 0', filter: 'grayscale(60%) contrast(1.05)', mixBlendMode: 'luminosity' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
