import React from "react";
import "./StudentLis.css";

function StudentCard({ student }) {
  if (!student) return null;

  const { name, score } = student;

  return (
    <div className="student-card">
      <div className="student-info">이름 : {name}</div>
      <div className="student-info">
        점수 : {score}
        {score >= 90 && <span className="excellent-badge">🏆 우수</span>}
      </div>
    </div>
  );
}

export default StudentCard;
