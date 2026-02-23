import { useContext, useEffect } from "react";
import AchContext  from "../../contexts/AchContext";

import "./Info.css";

function Info() {
  const { getAch, ach, achLoading } = useContext(AchContext);

  useEffect(() => {
    getAch();
  }, []);

  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-card">
          <div className="info-media">
            <img
              src={ach.image}
              alt="Modern Electronics Store"
              className="info-img"
            />
            <div className="info-media-badge">Since 2010</div>
          </div>
          <div className="info-body">
            <span className="info-eyebrow">Why choose us</span>
            <h2 className="info-title">{ach.title}</h2>
            <p className="info-text">
              {ach.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
