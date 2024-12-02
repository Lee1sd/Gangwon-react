import React from 'react';
import '../styles/Hbox.css'; // 기존 CSS 파일 가져오기
import Army2 from'../assets/image/Army2.png';

function ChuncheonBattle() {
  return (
    <div className='historyCont'>
      <header className='historyheader'>
        <a href="./">
          <img src={Army2} width="80px" alt="Army Logo" />
        </a>
        
      </header >
      <p className="font"> 춘천대첩</p>
      <hr />
      <div className="container">
        <div className="big-box east-sea-dokdo-font">
          <p className="title">전투과정</p>
          <p>
            <strong>6월 25일</strong><br />
            04:00부터 북한군은 인람리 및 지암리에 격렬한 포격을 퍼부었고 1시간에 걸친 공격준비사격이 끝나고 사정을 연신하는 듯 하더니 운집한 대군이 가랑비와 지척을 분간할 수 없는 안개 속을 뚫고 추전리-청평리-고탄리-인람리-지암리의 각 도로를 따라 노도와 같이 침공하기 시작
          </p>

          <p>
            <strong>6월 26일</strong><br />
            전날 저녁 19:00에 실시한 대대의 반격으로 북한군은 큰 손실을 입고 옥산포 일대에 집결한 것으로 보였다. 연대장 임부택 중령은 제19연대 2대대가 우두산에 도착하자, 옥산포를 장악한 북한군을 괴멸시키기로 결심했다. 그는 제1대대장 김용배 소령에게 08:00에 공격을 시작하라고 명령했으며, 측면 노출을 방지하기 위해 삼거리를 약진 한계선으로 정했다.
          </p>

          <p>
            <strong>6월 28일</strong><br />
            북한군은 08:00에 세 방면으로 침공하여 연대를 원창고개 부근에서 포위 차단하려는 의도를 보였다. 북한군은 주공을 5번 도로(춘천-홍천 간)로 집중하고, 전차 및 포병을 이용해 연대의 정면을 공격했다. 다른 두 개의 무리는 897고지를 통해 남하하고, 또 하나는 북한강을 따라 남하하여 연대 좌측중복을 공격하며 금병산으로 침투했다. 303고지로 철수 중이던 김근호 대위는 서쪽 3km 도로(46번 도로)에서 가평으로 향하는 북한군의 긴 차량 행렬을 목격했다. 이는 적 제2사단이 서울 동부를 목표로 이동 중임을 확인했다. 김종수 소령이 이끄는 제2대대는 치열한 사격전을 벌였으나 역부족이었다. 연대장 임부택 중령은 불리한 지형과 북한군의 계획을 간파하고 원창고개 선에서 방어하기로 결심했다. 각 대대는 제2, 1근무대대 순으로 진지를 점령하라는 명령을 받았다. 그러나 북한군의 압력이 예상보다 빨라 연대장은 원창선에서 물러나기로 했다. 제2대대의 엄호하에 연대주력과 제2포대는 사현으로 집결했다. 연대장은 김종수 소령에게 원창고개를 고수하며 북한군의 침공을 최대한 저지하라고 명령했다. 원창고개는 표고 600m의 요충지로, 춘천에서 정상까지 굴곡이 많아 방어에 유리한 지형이었다. 대대장은 적으로부터 완전히 포위될 위험과 극한 상황을 고려하여 피로에 병사들을 격려하며 전면 방어 태세를 갖추었다.
          </p>

          <p>
            <strong>6월 29일</strong><br />
            6월 29일, 제2대대장 김종수 소령은 주력 철수를 엄호한 후 적과의 결전을 준비했다. 대대의 병사들은 철수만 계속하던 상황에 불만이 컸다. 06:00에 북한군의 포격이 강해지며 2개 연대 규모의 병력이 접근했다. 대대장은 200m 이내로 적이 접근할 때까지 사격을 금지하고 침묵을 유지했다. 북한군이 최후저지 사격권 내에 들어오자 일제히 사격을 개시해 전장을 도륙장으로 만들었다. 11:00에 다시 1개 대대 규모의 적이 재침공을 시도했다. 이때 북한군이 백기를 흔들며 다가오자 투항하는 것으로 오해하고 사격을 중지했으나, 북한군은 갑자기 총을 꺼내 난사하며 백병전이 벌어졌다. 난전 끝에 적을 격퇴하는 데 성공했으며, 대대장은 적의 속임수에 넘어가지 말 것을 보고했다. 원창고개 전투 이후 제2대대는 질서 있게 철수하여 13:00에 사현에서 연대 주력과 합류했다. 연대장 임부택 중령은 철수 준비가 완료되자 지휘관들을 소집해 명령을 하달했다.
          </p>
        </div>

        <div className="small-container">
          <div className="small-box east-sea-dokdo-font">
            <p>
              <strong>결과 및 영향</strong><br />
              춘천 방어 후 6.25 전쟁의 흐름이 바뀌게 된다. 6월 25일 당일 날 점령되었어야 하는 춘천을 3일이 지난 6월 28일 날 점령. 3일간 버텨줬기에 한국군의 방어력 재정비 시간과 6.29일 날 수원 비행장에 도착한 맥아더가 전쟁 실황을 판단해 미군의 참전을 결정할 수 있는 시간을 확보한 춘천전투
            </p>
          </div>

          <div className="bottom-box east-sea-dokdo-font">
            <p className="title">영상으로 보는 춘천전투</p>
            <div className="embed-container">
              <iframe
                src="https://www.youtube.com/embed/FDl6czVJYhQ"
                frameBorder="0"
                allowFullScreen
                title="Chuncheon Battle Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChuncheonBattle;