export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-wave-bg">
        {/* <svg viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#e8f8fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#b2e8ef', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path className="wave-path-1" d="M 200 0 Q 350 80 500 100 Q 650 140 800 60 L 800 600 L 200 600 Q 100 500 80 350 Q 60 180 180 60 Z" fill="url(#waveGrad)" />
          <path className="wave-path-2" d="M 280 0 Q 420 60 580 90 Q 720 130 800 70 L 800 600 L 260 600 Q 160 520 140 370 Q 120 200 240 70 Z" fill="rgba(61,189,198,0.08)" />
        </svg> */}
      </div>
      <div className="container px-4 px-lg-5">
        <div className="row align-items-center" style={{ minHeight: '72vh' }}>
          <div className="col-lg-6 col-xl-5 py-4">
            <h1 className="hero-heading anim-up" style={{ animationDelay: '0.2s' }}>
              20 years of digital transformation in public service delivery
            </h1>
            <h2 className="hero-bold anim-up" style={{ animationDelay: '0.35s', margin: '12px 0' }}>
              It's possible.
            </h2>
            <p className="hero-desc anim-up" style={{ animationDelay: '0.5s', margin: '20px 0 30px' }}>
              Catalysts. Ecosystem enablers. Problem Solvers.<br />
              At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
            </p>
            <div className="d-flex flex-wrap gap-3 anim-up" style={{ animationDelay: '0.65s' }}>
              <a href="#" className="btn-primary-eg">Our Approach</a>
              <a href="#" className="btn-outline-eg">Our Impact</a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 d-flex justify-content-end align-items-end mt-4 mt-lg-0 anim-left" style={{ animationDelay: '0.3s', paddingRight: 0 }}>
            <div className="hero-img-wrapper" style={{ maxWidth: '640px' }}>
              <img
                src="https://placehold.co/720x520/d4f1f4/1a2e5a?text=Citizens+Image"
                alt="Citizens using digital services"
                className="hero-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
