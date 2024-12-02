import React from 'react';
import '../styles/Hbox.css'; // 기존 CSS 파일 가져오기
import Army2 from'../assets/image/Army2.png';


// 컴포넌트
const PunchbowlBattle = () => {
   
  return (
    <div className='historyCont'>
      <header className='historyheader'>
        <a href="./">
          <img src={Army2} width="80px" alt="Army Logo" />
        </a>
        
      </header >

      <p className="font">&nbsp;펀치볼지구 전투</p>
      <hr />

      <div className="container">
        <div className="big-box east-sea-dokdo-font">
          <p className="title">전투과정</p>

          <p>
            미 제1해병사단과 국군 해병 제1연대가 1951년 8월 31일부터 9월 20일까지 펀치볼(해안분지)을 공격하여 확보한 전투
          </p>

          <p>
            <strong>1951년 8월 중순</strong><br />
            미 제10군단장은 해안분지 북측 고지군에 작전통제선을 설정하고 각 사단에 공격을 명령하였다.
          </p>

          <p>
            <strong>1951년 8월 30일</strong><br />
            미 해병 제1사단이 국군 해병 제1연대와 미 제7해병연대를 전방에 배치하고 나머지 2개의 연대를 예비로 확보한 후 공격 준비 완료하였다. 당시 사단이 부여받은 공격목표는 해안분지 북쪽 일련의 횡격실 능선상의 1026, 924고지와 해안분지 북동쪽의 702, 660고지군이었다. 이 무렵 이곳에는 적도 부대 교대를 실시하여 인민군 제3군단이 제2군단 지역을 인수하였으며, 그 중 제1사단이 해안분지 북쪽 방어선에 투입되었다.
          </p>

          <p>
            <strong>1951년 8월 31일</strong><br />
            국군 제1해병연대 제3대대가 793고지에서 출발하여 월산령에서 전초중대와 합류 후 924고지 공격 개시하였다.
          </p>

          <p>
            <strong>1951년 9월 초</strong><br />
            1일 - 미 제7해병연대 제3대대가 09:00에 702고지 공격을 재개하여 702고지를 10:55에 점령하였다.<br />
            2일 - 미 제7해병연대 제3대대는 공격개시 3일만에 702고지 전방의 602고지도 점렴하므로써 사단 목표 달성하였다.<br />
            8일 - 미 해병 제1사단은 9월의 제한공격 지침에 따라 북측 간무봉에서 749고지 점령을 목표로 공격작전 재개하였다.
          </p>

          <p>
            <strong>1951년 9월 11일 부터 20일</strong><br />
            1주간의 부대 정비를 마치고 공격작전 재개, 749고지와 해안분지 5km 812고지까지 탈취하였다.
          </p>
        </div>

        <div className="small-container">
          <div className="small-box east-sea-dokdo-font">
            <p>
              <strong>결과 및 영향</strong><br />
              사단은 812고지 탈취로 작전목표를 달성하고 해안분지를 완전히 확보하게 되었으며 이때 군단으로부터 새로운 임무를 부여받자 펀치볼 작전을 종료하였다.
            </p>
          </div>

          <div className="bottom-box east-sea-dokdo-font">
            <p className="title">&nbsp;영상으로 보는 펀치볼</p>
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/KGveZncsqlU"
                frameBorder="0"
                allowFullScreen
                title="Punchbowl Battle Video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PunchbowlBattle;
