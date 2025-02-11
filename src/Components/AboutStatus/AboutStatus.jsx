import React, { useEffect, useState } from "react";
import "./aboutstatus.css";
const AboutStatus = () => {
  const stats = [
    { title: "Years of Experience", number: 12 },
    { title: "Happy Clients", number: 119 },
    { title: "Projects Completed", number: 200 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].number ? count + 1 : count
        )
      );
    }, 30); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <h2 className="company-name">xxxxxxxxxxxxxxxxxx</h2>
      <div className="about-content">
        <div className="history-text">
          <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-circle">
              <h3>{counts[index]}+</h3>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStatus;
