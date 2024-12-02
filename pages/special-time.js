import React from "react";
import '../styles/specialtime.css';
import { useNavigate } from "react-router-dom";

const SpecialTime = () => {
    const navigate = useNavigate(); // 네비게이션 훅 생성

    // 클릭 이벤트 핸들러
    const goToMain = () => {
        navigate('/'); // 메인 페이지로 이동
    };

    return(
        <div className="special-time-container">
        <div className="special-time">
            <h1 onClick={goToMain}>
                <span>S</span>
                <span>p</span>
                <span>e</span>
                <span>c</span>
                <span>i</span>
                <span>a</span>
                <span>l</span>
                <span>t</span>
                <span>i</span>
                <span>m</span>
                <span>e</span>
            </h1>
        </div>
     </div>
    );
}

export default SpecialTime;