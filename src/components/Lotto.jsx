import React, { useState } from "react";
import "./Lotto.css";

function Lotto() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const lottoSet = new Set();
    while (lottoSet.size < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      lottoSet.add(num);
    }
    // 오름차순 정렬 후 상태 업데이트
    setNumbers([...lottoSet].sort((a, b) => a - b));
  };

  return (
    <div className="container">
      <h1>럭키 로또 추출기 🍀</h1>
      <p className="info-text">오늘의 행운 번호를 확인해보세요!</p>

      <div className="numbers-container">
        {numbers.length > 0 ? (
          numbers.map((num, index) => (
            <div key={index} className="ball">
              {num}
            </div>
          ))
        ) : (
          <p className="placeholder">버튼을 눌러 번호를 생성하세요!</p>
        )}
      </div>

      <button className="generate-btn" onClick={generateNumbers}>
        번호 추출하기 ✨
      </button>
    </div>
  );
}

export default Lotto;
