import React, { useState } from "react";
import MedicineImg from '../Images/med2.webp'
function AreasOfWork() {
  const [active, setActive] = useState("health");

 const areas = [
  {
    key: "health",
    title: "Public Health",
    leftCard: {
      num: "210+",
      sub: "cities LIVE with 10BedICU across India",
      img: MedicineImg
    },
    rightCard: {
      num: "2 Bn",
      sub: "COVID-19 vaccination certificates issued",
      img: MedicineImg
    }
  },
  {
    key: "finance",
    title: "Public Finance",
    leftCard: {
      num: "500+",
      sub: "Cities with digital financial systems",
      img: MedicineImg
    },
    rightCard: {
      num: "₹10K Cr",
      sub: "Revenue collected via digital platforms",
      img: MedicineImg
    }
  },
  {
    key: "governance",
    title: "Local Governance",
    leftCard: {
      num: "350+",
      sub: "Local bodies using e-governance",
      img: MedicineImg
    },
    rightCard: {
      num: "1.2 Cr",
      sub: "Certificates issued online annually",
      img: MedicineImg
    }
  },
  {
    key: "water",
    title: "Water & Sanitation",
    leftCard: {
      num: "180+",
      sub: "Cities with smart water management",
      img: MedicineImg
    },
    rightCard: {
      num: "90%",
      sub: "Reduction in manual monitoring effort",
      img: MedicineImg
    }
  }
];

  return (
    <section className="tabs-wrapper" id="approach">
      <div className="container px-4 px-lg-5">
        <div className="tabs-card reveal">
          <div className="row g-4 egov-text-stat align-items-start">
            <div className="col-12 col-md-5">
              <h2 className="tab-heading">
                Big problems need<br />
                <strong>bold approaches</strong>
              </h2>
              <div className="mt-3">
                {areas.map((area) => (
                  <button
                    key={area.key}
                    className={`area-btn ${active === area.key ? "active" : ""}`}
                    onClick={() => setActive(area.key)}
                  >
                    {area.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="row g-3">
                <div className="col-sm-12 col-md-6">
                  {areas.map((area) => (
                    <div
                      key={area.key}
                      className={`tab-card ${active === area.key ? "show" : ""}`}
                    >
                      <div className="stat-num">{area.leftCard.num}</div>
                      <div className="stat-sub">{area.leftCard.sub}</div>
                      <button className="read-btn">Read More</button>
                     <img
                        src={area.leftCard.img}
                        alt=""
                        className="card-illus"
                      />
                    </div>
                  ))}
                </div>
                <div className="col-sm-12 col-md-6">
                  {areas.map((area) => (
                    <div
                      key={area.key}
                      className={`tab-card tab-card-alt ${active === area.key ? "show" : ""}`}
                    >
                      <div className="stat-num">{area.rightCard.num}</div>
                      <div className="stat-sub">{area.rightCard.sub}</div>
                      <button className="read-btn">Read More</button>
                      <img
                        src={area.leftCard.img}
                        alt=""
                        className="card-illus"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AreasOfWork;