// CtaSection.jsx
import { useState } from "react";

export default function CtaSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlay = (index) => {
    setActiveVideo(index);
  };

  return (
    <section className="sustain-section " >
      <div className="container px-4 px-lg-5">
        
        <h2 className="reveal">
          20 years of reimagining for citizens and <br />
          <strong>sustaining change</strong>
        </h2>

        <p
          className="sustain-desc reveal"
          style={{ transitionDelay: "0.1s" }}
        >
          Technology is powerful, but is only one piece of the puzzle, when it
          comes to enhancing the quality of life for every citizen. To have
          sustainable impact at scale, the collective energy of local networks
          to solve local problems needs to be tapped into. Our partners &amp;
          networks bring this collective energy to life.
        </p>

        <div
          className="video-row reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          {/* Card 1 */}
          <div className="video-card" onClick={() => handlePlay(1)}>
            <div className="card-photo">
              <svg viewBox="0 0 310 200">
                <rect width="310" height="200" fill="#c0c8d0" />
                <ellipse cx="220" cy="80" rx="60" ry="66" fill="#8a959f" />
                <path
                  d="M110,200 Q110,126 220,112 Q330,126 330,200 Z"
                  fill="#8a959f"
                />
              </svg>
            </div>

            <div className="card-label">
              <span className="label-text">
                Leveraging technology for sustainable development
              </span>
            </div>

            <button className="play-btn">
              <svg viewBox="0 0 24 24">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </button>

            {activeVideo === 1 && (
              <div className="video-overlay">
                <p>Playing Video 1...</p>
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className="video-card" onClick={() => handlePlay(2)}>
            <div className="card-photo">
              <svg viewBox="0 0 310 200">
                <rect width="310" height="200" fill="#b4bcc4" />
                <ellipse cx="215" cy="76" rx="56" ry="62" fill="#7e8a94" />
                <path
                  d="M115,200 Q115,124 215,110 Q315,124 315,200 Z"
                  fill="#7e8a94"
                />
              </svg>
            </div>

            <div className="card-label">
              <span className="label-text">
                Digitising civic services for better life
              </span>
            </div>

            <button className="play-btn">
              <svg viewBox="0 0 24 24">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </button>

            {activeVideo === 2 && (
              <div className="video-overlay">
                <p>Playing Video 2...</p>
              </div>
            )}
          </div>
        </div>

        <div className="abt-btn reveal" style={{ transitionDelay: "0.3s" }}>
          <button className="about-btn">About Us</button>
        </div>
      </div>
    </section>
  );
}