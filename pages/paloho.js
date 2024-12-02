import React from 'react';
import '../styles/Hbox.css'; // 기존 CSS 파일 가져오기
import Army2 from'../assets/image/Army2.png';

// 컴포넌트
const ParohoBattle = () => {
  return (
    <div className='historyCont'>
      <header className='historyheader'>
        <a href="./">
          <img src={Army2} width="80px" alt="Army Logo" />
        </a>
        
      </header >

      <p className="font">&nbsp;파로호 대첩</p>
      <hr />

      <div className="container">
        <div className="big-box east-sea-dokdo-font">
          <p className="title">전투과정</p>
          
          <p>
            1951년 유엔군의 제3차 반격작전 기간 중 5월 26일∼28일까지 국군 제6사단이 화천저수지 일대에서 전개한 공격 전투. 용문산 전투의 결과와 연계된 전투여서 둘을 한데 묶어서 "용문산-파로호 전투"라고 부르거나, 완전히 용문산 전투의 예하 전투로 보는 경우가 있다.
          </p>

          <p>
            <strong>1951년 3월</strong><br />
            서울 재탈환 이후 국군과 유엔군이 38도선을 중심으로 방어선을 구축하고 전투를 벌이고 있었다.
          </p>

          <p>
            <strong>1951년 4월</strong><br />
            말일부터 중공군의 대대적인 공세 시작하였고, 경기도 양평군의 용문산 일대를 국군 제6사단이 지키고 있었다. 4월 중순에 국군 제6사단은 중부전선 미 제9군단의 작전계획에 따라 김화를 목표로 진격하다가 중공군의 반격을 받게 되어 사창리 부근 명월리와 광덕리 일대에서 방어로 전환하였다. 중공군 대규모 공세 실패하며 사창리 남쪽으로 밀리며 혼란 야기되었다. 그 후 병력 수습 후 중공군 저지 실패하며 영연방 제27여단의 엄호 하에 가평으로 철수 후 재편성하였다.
          </p>

          <p>
            <strong>1951년 5월</strong><br />
            국군 제6사단은 용문산 일대에서 방어 태세를 갖추고 있었다. 중공군의 다시금 대공세 시작하며 교통의 요충지였던 용문산 일대 공격하였다. 제2연대를 주 방어선보다 훨씬 위쪽인 북한강 아래쪽으로 보내 진지 구축하였다. 5월 18일 낮 동안 중공군이 제2연대를 공격해도 제2연대가 완강하게 저항하며 진지를 고수하였다. 5월 20일 새벽 5시에 국군 제6사단의 7,19연대가 중공군 후방을 기습 공격하였다. 중공군 후퇴하기 시작하였다. 이 기회를 놓치지 않고 가평과 춘천을 거쳐 화천발전소까지 60여 km 추격하였다. 중공군이 화천호에 이르러 퇴로가 막히고 대부분 화천호에 수장되거나 포로로 잡혔다.
          </p>
        </div>

        <div className="small-container">
          <div className="small-box east-sea-dokdo-font">
            <p>
              <strong>결과 및 영향</strong><br />
              용문산 전투는 6.25전쟁을 통틀어 단일 전투로는 가장 적은 병력으로 많은 적군을 격퇴한 전투이다. 이는 6.25전쟁 사상 최고의 전과를 올인 기록적인 작전으로 평가받고 있고 미 육군사관학교 전술 교본으로 삼고 있을 정도이다. 1951년 5월 26일∼28일까지 진행된 이 전투에서 중공군은 최소한 2만 5000명 이상의 사상자를 낳았다. 이 전투 이후 화천저수지가 ‘파로호’로 불리게 되었는데, 이것은 이승만 대통령이 “오랑캐를 대파한 호수”라는 뜻으로 화천저수지를 ‘파로호’라 이름 붙혔다.
            </p>
          </div>

          <div className="bottom-box east-sea-dokdo-font">
            <p className="title">&nbsp;영상으로 보는 파로호전투</p>
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/JFkltQLdKoA"
                frameBorder="0"
                allowFullScreen
                title="Paroho Battle Video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParohoBattle;
