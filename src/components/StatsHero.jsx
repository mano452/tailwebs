import React from "react";

function StatsHero() {
  return (
    <section className="stats-hero">
      <div className="stats-content">
        <div className="container px-4 px-lg-5">
          <div className="row align-items-start">
            <div className="col-lg-8 col-md-7 mt-3 reveal">
              <div className="stat-big-num">1,000,000,100+</div>
            </div>

            <div
              className="col-lg-4 col-md-5 reveal"
              style={{ transitionDelay: "0.15s" }}
            >
              <p className="stat-big-desc">
                Citizens availing public services through eGov's Digital Public
                Goods (DPG)
              </p>
            </div>
          </div>

          <div
            className="row stats-row gx-5 reveal ps-0 ps-lg-5"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="col-auto mb-3">
              <div className="stat-val">1.1 Billion+</div>
              <div className="stat-lbl">Public services delivered</div>
            </div>

            <div className="col-auto mb-3">
              <div className="stat-val">50+ partners</div>
              <div className="stat-lbl">
                From technology, governments and NGOs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsHero;