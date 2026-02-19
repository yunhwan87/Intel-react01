import React, { useState } from "react";
import "./UpDown.css";

function UpDown() {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [count, setCount] = useState(0); // 횟수 추적을 위한 상태 추가
  const [answer] = useState(Math.floor(Math.random() * 100) + 1);

  const handleAction = () => {
    const userNum = parseInt(inputValue);
    if (isNaN(userNum)) return;

    // 제출 시마다 횟수 증가 로직
    const nextCount = count + 1;
    setCount(nextCount);

    if (userNum === answer) {
      setResultMessage(`정답입니다! 🎉 총 ${nextCount}회만에 맞추셨습니다.`);
    } else if (userNum > answer) {
      setResultMessage("DOWN!");
    } else {
      setResultMessage("UP!");
    }
  };

  return (
    <div className="container">
      {" "}
      {/* CSS의 .container와 일치시킴 */}
      <h1>업앤다운 게임</h1>
      <div className="todo-form">
        {" "}
        {/* CSS의 .todo-form과 일치시킴 */}
        <input
          type="number"
          placeholder="숫자 입력"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAction}>제출</button>
      </div>
      {/* 결과 메시지 출력 부분 */}
      <div className="todo-list">
        <div className="todo-item">
          <span>{resultMessage || "1~100 사이의 숫자를 입력하세요."}</span>
        </div>
        {/* 기존 구조를 유지하며 시도 횟수 표시줄만 추가 */}
        {count > 0 && (
          <div className="todo-item">
            <span style={{ color: "#666", fontSize: "14px" }}>
              현재 시도 횟수: {count}회
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpDown;
