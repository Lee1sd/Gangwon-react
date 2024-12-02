import React,{useEffect} from 'react';
import Header from '../constants/Header';
import SpecialTime from './special-time';


// 메인 컨테이너 컴포넌트
const SpecialTimePage = () => {
  useEffect(() => {
  const pictures = document.querySelectorAll('.Picture');
  var previousTouch = undefined;
  
  function updateElementPosition(element, event) {
    var movementX, movementY;
  
    if (event.type === 'touchmove') {
      const touch = event.touches[0];
      movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
      movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
      previousTouch = touch;
    } else {
      movementX = event.movementX;
      movementY = event.movementY;
    }
    
    // 현재 요소의 위치를 업데이트
    const elementY = parseInt(element.style.top || 0) + movementY;
    const elementX = parseInt(element.style.left|| 0) + movementX;
  
    element.style.top = elementY + "px";
    element.style.left = elementX + "px";
  }
  
  //화면 경계를 넘지 않도록 제한
  function startDrag(element, event) {
    const updateFunction = (event) => updateElementPosition(element, event);
    const stopFunction = () => stopDrag({update: updateFunction, stop: stopFunction});
    document.addEventListener("mousemove", updateFunction);
    document.addEventListener("touchmove", updateFunction);
    document.addEventListener("mouseup", stopFunction);
    document.addEventListener("touchend", stopFunction);
  }
  
  function stopDrag(functions) {
    previousTouch = undefined;
    document.removeEventListener("mousemove", functions.update);
    document.removeEventListener("touchmove", functions.update);
    document.removeEventListener("mouseup", functions.stop);
    document.removeEventListener("touchend", functions.stop);
  }
  
  pictures.forEach(picture => {
    const range = 100;
    const randomX = Math.random() * (range * 2) - range;
    const randomY = Math.random() * (range * 2) - range;
    const randomRotate = Math.random() * (range / 2) - range / 4;
    const startFunction = (event) => startDrag(picture, event);
    picture.style.top = `${randomY}px`;
    picture.style.left = `${randomX}px`;
    picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
    picture.addEventListener("mousedown", startFunction);
    picture.addEventListener("touchstart", startFunction);
  });
}, []);

const SpecialTimeCont = {
  minHeight:'100vh',
  backgroundImage:'linear-gradient(45deg,white, pink )',
  
}
  return (
    <div style={SpecialTimeCont}>

<div className="special-time-page">
      {/* SpecialTime을 최상단에 겹치도록 표시 */}
      <div className="sp"><SpecialTime /></div>
      

      <header className="spheader">
        <Header />
      </header>
    </div>
        <div class="SpecialContainer">
       
        <div class="Picture">
          <img class="Picture-img" src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/259/dc27ee816aa81cf33936a13b6a53c811_res.jpeg" alt="" />
          <div class="Picture-note"><span>춘천_손흥민(축구선수)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202312/25/1223db43-0af3-45ff-b974-9fb728bed069.jpg" alt="" />
          <div class="Picture-note"><span>춘천_황희찬(축구선수)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="image/BBa.png" alt="" />
          <div class="Picture-note"><span>춘천_빠니보틀(여행 유튜버)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://search.pstatic.net/common?type=b&size=144&expire=1&refresh=true&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2FprofileImg%2F5c984ff9-28da-4ea8-bea5-34925a8b98e6.jpg" alt="" />
          <div class="Picture-note"><span>춘천_오마이걸 승희(가수)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2017/05/1-1.jpg" alt="" />
          <div class="Picture-note"><span>강릉_신사임당(역사인물)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://i.namu.wiki/i/FCw4yBcUynYalfHpKePPHHPKJGGREhX4zqbdYfq2fhHxNXjPhqicSqlkzEze6R2hyl-_tGeUuY9FjMj_r9VHRCq7IGXYequzV6dDHX3pe0TWf-ZojPlI-qLzwlejwe6wTTQVSCtVE3GoYrFgj1jgXg.webp" alt="" />
          <div class="Picture-note"><span>강릉_남도형(성우)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://i.namu.wiki/i/neioA9YQT97SjQI03Q9_gB3iIAa7Uv5dfSwY8ZZ7Rm3NcyyPglshGfERsOGY-D0GAd1UthmyHXLqfLIrG7eHp3uri2msIjKQi1xVGQCf5y6EDhcXHUAiWct5W3tqeOI1KZEvLf9sJYJs2uwgII2iKg.webp
          " alt="" />
          <div class="Picture-note"><span>강릉_김은숙(작가)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://i.namu.wiki/i/fx_En9l2qJ9F0uypR7Ma1zl5TubCgBZTjpja1VO71W_a7k4SsCQdbVbullaA-ans_4cBbOf8bkLgY7LyT_y57gucx0mVKlCPd7EXAC1gb5ckNjAfOsrZlFt1i8ceB8I0ICo2c7k0rp7LtyGtM32aqQ.webp" alt="" />
          <div class="Picture-note"><span>동해_말왕(유튜버)</span></div>
        </div>
        <div class="Picture">
          <img class="Picture-img" src="https://i.namu.wiki/i/OV-fe0bmH2hy-Q-kqPyHxHz1K7uX073IuNMC06XY-XlmipjgBTw8RZvnOgTQU7R1UA-7EOyI5gMOaNz3d8KMNbS7FCnIQEOe7vnerRu2_Yd0QZWa5O1bks-5_6qiszQqsSvZDFG0QTyH2W0J7uR0NA.webp" alt="" />
          <div class="Picture-note"><span>속초_BMK(가수)</span></div>
        </div>
    
        <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/DCQ2KOEYAld-BoAUspGwOGOx_qnQ3PF1Eu57MGFx_Ugeit6CZJxLfSyqwy4JfzAbKcw1kYZ_gHxSncT0QXAMRg.webp" alt="" />
            <div class="Picture-note"><span>영월_조석(만화가)</span></div>
          </div>
    
          <div class="Picture">
            <img class="Picture-img" src="https://kr-cdn.spooncast.net/profiles/b/wjKNVbfxrLvKn/e65da54f-5080-431c-a49d-0d839a9a0454.jpg" alt="" />
            <div class="Picture-note"><span>원주_뽀구미(인터넷방송)</span></div>
          </div>  
        
          <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/dVf1-6siOgM2nK_XLlUU_86ZQyyxjm1fXUTFwgornVxYrNK_eximPl3m6Q0Pq_UIymeGu_dEYtEAX2j9wSC3_MPbqcszhGXt4nkq0ld1uqS5i2CvE-pNhDkzkR_5iRMxG_4acxLm_u1pSDOnyX0t6Q.webp" alt="" />
            <div class="Picture-note"><span>인제_김국진</span></div>
          </div>
          
          <div class="Picture">
            <img class="Picture-img" src="https://flexible.img.hani.co.kr/flexible/normal/970/606/imgdb/original/2022/0423/20220423500273.jpg" alt="" />
            <div class="Picture-note"><span>정선_창모(래퍼)</span></div>
          </div>
    
    
          <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/ou63-QdYPY2GHZNSKPAOzur5qQj8gIEsODAr-wuf5TwS1RquGaRd-q96oQ_7QA_Od2wsi6c1gf3FesSLjvbhNVOH0VKzNaH84eA2UsjXhQrLrDVfqwWKl6IetoNQCXh8VjvVAzw27LwYiDIFfDJn6w.webp" alt="" />
            <div class="Picture-note"><span>정선_라미란(배우)</span></div>
          </div>
    
          <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/2P8mpwIWDM2yqOE1fu1lD5NnR0e8O1SA2QH7oHFJrAPe5qYCA-yMjjVM1u2-JI7YBtsJ6EkqREzYvfQndz2bdV4n5nnWv8Vl9YVNQc2eul0kp6bejgr5wbO2ksv9JyMzcjIikxeiUgkU2vHnLutcDA.webp" alt="" />
            <div class="Picture-note"><span>정선_원빈(배우)</span></div>
          </div>
    
          <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/Wcwq6Cv0IE2gZnpPz_wbj4ZeFQtE7DUEYXD4uiMqZpmKKO58ZQVOAQZIUea6KewoEV3ulsoE9t10IG4MVh0FqN7jhvk9rAmvvWL5aKJK2cIy6KT5pBULsR9m4LIbcy67Bp5GeKILpkK4uJcIRd4xCw.webp" alt="" />
            <div class="Picture-note"><span>태백_이재인(배우)</span></div>
          </div>
    
          <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/kS7T4ZI_h0pglirBWCXWazhYDZ_dYCwMd6-IxCBzf9oznCwtQTTlOYQfZoBoLxj9tdWhJy6oyAJyHu-G7NMzA1XAJ4NFThVwoV6UmPFTFM4xLqhZn5mqvERNRYU-rhxvyjp8oxK-RPGhY-G46iWkrQ.webp" alt="" />
            <div class="Picture-note"><span>태백_최유리(가수)</span></div>
          </div>
    
          <div class="Picture">
            <img class="Picture-img" src="https://img.seoul.co.kr//img/upload/2020/01/03/SSI_20200103143606.png" alt="" />
            <div class="Picture-note"><span>평창_홍잠언(가수)</span></div>
          </div>
    
        <div class="Picture">
          <img class="Picture-img" src="https://i.namu.wiki/i/cMYrmppDmIHkbkp9ViPOgjIrFIeGECCrbVYagHo181lr4Hf7WwmrlxnjrHgLb1g7PkdAf-afxj3eGPt1rjy_Rc__MkbYs7LRLFbFUeI0_9U1M84Bu0Xmm46_4sKRWUioDwmZdhDeHe83T3mHbnMBuw.webp" alt="" />
          <div class="Picture-note"><span>화천_노사연(배우)</span></div>
        </div>
    
        <div class="Picture">
            <img class="Picture-img" src="https://i.namu.wiki/i/IEMUiUw7FTX-3ux9iFfbl-iQWKclOoS9bTbvdd7a0gUiK0EktNH_egtzQsiypf62pc20Lbhm2oOJGQ7nQaLMKD77UGbABTAKtkShSbuK1JpdaO-u6kLRb8c83VW1fVbfhF5wgNxFwLqOKTH7kcgd0A.webp" alt="" />
            <div class="Picture-note"><span>횡성_김준경(독립운동가)</span></div>
          </div>
      </div>

    
    </div>
  );
};

export default SpecialTimePage;
