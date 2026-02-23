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
          {achLoading ? (
            <div className="w-full animate-pulse flex flex-col gap-4">
              <div className="info-media">
                <div className="info-img bg-gray-200 rounded-xl" />
                <div className="info-media-badge bg-gray-200 text-transparent">
                  Loading
                </div>
              </div>
              <div className="info-body space-y-3">
                <span className="info-eyebrow block h-4 w-24 bg-gray-200 rounded" />
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-11/12 bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ) : (
            <>
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
                <p className="info-text">{ach.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Info;
