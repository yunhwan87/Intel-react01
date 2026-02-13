import React from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  const students = [
    { id: 1, name: "김철수", score: 85 },
    { id: 2, name: "이영희", score: 92 },
    { id: 3, name: "박민수", score: 78 },
    { id: 4, name: "정수진", score: 95 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>👨‍🎓 학생 명단</h2>
      {students.map((item) => (
        <StudentCard key={item.id} student={item} />
      ))}
    </div>
  );
}

export default StudentList;
