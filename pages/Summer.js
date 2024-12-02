import React, { useState } from 'react';
import Header from '../constants/Header';
import Gangwon from '../assets/image/강원도.png';
import Summer from '../assets/image/여름.png';
import BackgroundImage from '../assets/image/001.png';


function SummerPage(){
    const [selectedBox, setSelectedBox] = useState(null); // selectedBox 상태 추가
    const locationData = [
        {
          name: '춘천시',
          coords: '129,121,172,137,195,129,198,151,169,170,151,192,118,191,136,152',
          boxId: 'attractionBox-chun',
          content:(
            <div id="attractionBox-chun">
      
     <a href="https://beaversdock.com/">
     <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230621_126%2F16873189652856G3Rz_JPEG%2FHOO_0679_final.jpg"
     title="비버네 선착장 수상레저" height="" width="200"/> </a>

     <a href="https://map.naver.com/p/entry/place/20388583?lng=127.6860217&lat=37.8553055&placePath=%2Finformation&entry=plt&searchType=place&c=15.00,0,0,0,dh">
     <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171114_11%2F1510623655891AexTW_JPEG%2FxkBPrL3SjqdCWt-_1RHvmXFA.jpg"
     title="물레길 카누" height="150" width="200"/></a>   

     
 </div>
          )
        },
        {
          name: '철원군',
          coords: '94,51,112,53,178,58,145,68,123,71,100,100,74,94,54,78,94,78',
          boxId: 'attractionBox_cheorwon',
          content: (
            <div id="attractionBox_cheorwon">
     
     <a href="https://map.naver.com/p/entry/place/13491673?lng=127.32767&lat=38.140247&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDJfMjAg%2FMDAxNzE3MzAwNTIxODkx.6Fn9Vhz88V-5qOOCyzv0j8Sbg48d6MtqBtkGGqkWIPcg.EVgYqbX2BGPc0aplz3jyCJz3xGfc0xAAiS4Fmx1q9bQg.PNG%2F%25C3%2583%25C2%25AC%25C3%2582%25C2%2582%25C3%2582%25C2%25BC%25C3%2583%25C2%25AB%25C3%2582%25C2%25B6%25C3%2582%25C2%2580%25C3%2583%25C2%25AC%25C3%2582%25C2%2597%25C3%2582%25C2%25B0%25C3%2583%25C2%25AD%25C3%2582%25C2%258F%25C3%2582%25C2%25AD%25C3%2583%25C2%25AD%25C3%2582%25C2%258F%25C3%2582%25C2%25AC-29.png%3Ftype%3Dw1500_60_sharpen"
      title="삼부연 폭포" width="200" height="160"/> </a>

      <a href="http://www.summer-story.kr/">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5072%2F2008%2F07%2F07%2Fnews1215414584_117360_2_m.jpg&type=sc960_832"
      title="한탄강래프팅" width="200" height="160"/> </a>
      
      <a href="https://map.naver.com/p/entry/place/11831286?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.2983319&lat=38.1507687&c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_282%2F1441049464714pwySg_JPEG%2F11831286_5.jpg"
      title="카트조이" height="160" width="200"/> </a>
 </div>
          )
        },
        {
          name: '화천군',
          coords: '123,83,104,119,131,109,169,127,173,97,174,69',
          boxId: 'attractionBox_hwachun',
          content:(
            <div id="attractionBox_hwachun">
     <a href="https://map.naver.com/p/entry/place/13491383?lng=127.5167188&lat=38.0175121&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_07_30%2F5f36da68-f0fb-11eb-9b63-505dacfba98a_01.jpg"
      title="삼일계곡" width="200" height="150"/> </a>

      <a href="http://www.tomatofestival.co.kr/">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F262%2F2017%2F09%2F03%2F0000010654_001_20170903090154606.jpg&type=sc960_832"
      title="토마토축제" width="200" height="150"/> </a>
      
 </div>
          )
        },
        {
          name: '고성군',
          coords: '258,17,248,48,294,83,299,63,283,35',
          boxId: 'attractionBox_gosung',
          content:(
            <div id="attractionBox_gosung">
     <a href="https://surfground.modoo.at/">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20121218_296%2Fsunnysan2_13557952912094hbe2_JPEG%2F1.JPG&type=a340"
      title="서프그라운드" height="180" width="140"/></a>

      <a href="https://map.naver.com/p/search/%EA%B3%A0%EC%84%B1%20%EB%B0%B0%EB%82%9A%EC%8B%9C/place/1133094428?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MjVfMTkg%2FMDAxNjk1NjM5MTM5ODI5.uWH2za1Sr5c5cqRw1s0BFikjBdh1s9QMKenXi9LwalMg.L6HEc7K3FdnkbV0z62K6I7A1E4e9BsopY2kWra7ege4g.JPEG.hyunysmim%2F20230915%25A3%25DF115544.jpg&type=sc960_832"
        title="청해호 배낚시 체험" width="200" height="178"/></a>

      <a href="https://map.naver.com/p/entry/place/11622368?lng=128.154344&lat=34.908774&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDJfOTQg%2FMDAxNzE3MzA0NzUwNjkw.z6uAnR8qBP4SfTu2qCWy0FOkneyne9XERE59MftcYvsg.2X-_QWAiclrYfuakS2-eSt1Q1k0fVS3nBLc5iLTIWD0g.JPEG%2F20240602_131328.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
      title="상족암국립공원" width="200" height="180"/></a>    
 </div>
          )
        },
        {
          name: '인제군',
          coords: '237,50,223,91,225,121,203,135,229,152,264,164,292,124,270,111,268,80',
          boxId: 'attractionBox_inje',
          content:(
            <div id="attractionBox_inje">
    <a href="https://map.naver.com/p/entry/place/13491173?lng=128.3420581&lat=38.1255116&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDVfOTIg%2FMDAxNTkzOTMxMjE0NDcy.jbob7dhocpkF9YUnBDlADapNcut6Xq-sERxLuuKXPAMg.MRFlljBZDhYh8_zgDUcZZ7bu1NgVoQd-tDfPoED45TEg.JPEG.gn3369%2F2020_07_02_%25B4%25EB%25BD%25C2%25C6%25F8%25C6%25F7_10.JPG&type=sc960_832"
        title="대승폭포" alt="인제" width="200"/></a>

    <a href="https://map.naver.com/p/entry/place/13491210?lng=128.4300487&lat=38.144344&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjExMjVfNjAg%2FMDAxNDgwMDE5MjQ4MTE4.0RQY-doRIWZWcF8prpU4xNbTdZGCbTSB96zQ-eEhat8g.LCYRdEGUs9Shnj6B9S2ehgSANdUzApO49mgYHFfZmAcg.JPEG.seoldj%2FDSCN4370.jpg%23900x600"
    title="가야동계곡"  alt="인제" width="200"/></a>

    <a href="https://map.naver.com/p/entry/place/1448428198?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.2391479&lat=38.0103938&c=15.00,0,0,0,dh">
    <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220523_114%2F1653284328466MSqn9_JPEG%2F%25B3%25BB%25B8%25B0%25C3%25B5%25B7%25A1%25C7%25C1%25C6%25C3%25BB%25E7%25C1%25F8_%252818%2529.JPG"
    title="예스레포츠" alt="인제" width="200"/></a>
    
    <a href="https://map.naver.com/p/entry/place/13491954?lng=128.4068176&lat=37.9613951&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160716_190%2Fzecasys_1468636296358koQWq_JPEG%2FIMGP7557.JPG%233264x4928" 
    title="인제 아침가리계곡" alt="인제" height="140" width="130"/></a>

</div>
          )
        },
        {
          name: '양구군',
          coords: '183,55,228,59,219,79,216,118,187,117,179,75',
          boxId: 'attractionBox_yanggu',
          content:(
            <div id="attractionBox_yanggu">
            <a href="https://map.naver.com/p/entry/place/30831230?lng=127.9830111&lat=38.1039626&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2023_07_02_245%2Fcc3657b4-18d8-11ee-81e8-80615f0bcf0c_01.jpg"
            title="양구레포츠공원" alt="양구" height="180" width="170"/> </a>
       
            <a href="https://www.ygtour.kr/Home/H20000/H20200/placeDetail?place_no=8&viewType=gallery&viewClass=tour&curationGroup=2&page=1&pageSize=12&order_column=1&place_class=P001">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA5MjlfMTg0%2FMDAxNjk1OTkyMzk0Njgx.w8xMHiwRxrO7lsmylhRmRauDp5lP8k2BCQwhiBANqgMg.DvMkdult8ojGDUVdBZltgQDca3BuN5rOtFzBd8NoflQg.JPEG%2F20230929_213922.jpg%3Ftype%3Dw1500_60_sharpen"
            title="국토중앙천문대" width="150" height="180"/>  </a>
        </div>
          )
        },
        {
          name: '속초군',
          coords: '284,89,307,80,309,95,287,94,305,76,307,80',
          boxId: 'attractionBox_sockcho',
          content:(
            <div id="attractionBox_sockcho">
            <a href="https://map.naver.com/p/search/%EC%86%8D%EC%B4%88%20%EB%82%9A%EC%8B%9C%EC%B2%B4%ED%97%98/place/1645326957?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MTlfMTc4%2FMDAxNzE2MTA3NDA4MjAw.qznrd_AXNpBD4LbrC31__8PNjFNx5ckt0GCrwHXSShMg.xJsmcdj2bd6a9MXZDySiFZ-FFZ5AeGaLSK3nymHi-Ccg.JPEG%2F7684EA0B-8848-4C25-AFC0-E8FD34E69EB2.jpeg%3Ftype%3Dw1500_60_sharpen"
             title="장사항 바다낚시체험"  width="200"/> </a>
       
             <a href="https://www.sokcho.go.kr/ct/tour">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDhfNjMg%2FMDAxNzE3ODQ0MDU1MTkz.o7y3DqYSjbkWtJjSS6Mcxj_sUmZ5fNt-QHAWGIkH96Ig.bQx0iv250hYvBMemhj5MVPt4ZkavOmX_hMOhUaxFwa4g.JPEG%2F20240607_085831.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
             title="속초 해수욕장" width="200" height="190"/>  </a>
            
        </div>
          )
        },
        {
          name: '양양군',
          coords: '276,105,310,98,341,140,293,149,299,124',
          boxId: 'attractionBox_yungyung',
          content:(
            <div id="attractionBox_yungyung">
            <a href="https://map.naver.com/p/entry/place/13491798?lng=128.65255&lat=37.9470678&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDdfMTYy%2FMDAxNjg2MDY0NzA2NjE5.EsAjJ1pUzyim6QMVh-abesfyadRKrg4xYw405w28O8Ug.X-5fy35kuzb1-y7LGZWPW60h4llxA8FhQXm55xaeucIg.JPEG.two-now%2FIMG_2268.jpg%23900x1200"
             title="어성전계곡" height="250" width="200"/> </a>
       
             <a href="https://map.naver.com/p/entry/place/13491722?lng=128.7626566&lat=37.9689372&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA0MDZfNzgg%2FMDAxNzEyNDA5NzEwNDU3.hyV6C3HcyMWN77c14y-hycY3XrHlRIIXxKphvK6bCjsg.RdxDbG6Ct7WF82GIwIpaIkJRgV5TmU-wkJduxQ-h6lwg.JPEG%2F20240406_134729.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
             title="인구해수욕장" width="200"/>  </a>
       
             <a href="https://map.naver.com/p/entry/place/13474425?lng=128.6665957&lat=38.0879645&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
               <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MjBfMjkz%2FMDAxNzE2MTUyMDkwNTE4.Fy7e8j7ZdZjPVhahpI2-YJhMhnu6q8CbPHqApZO6fKIg.wAbfuyMPKsbDJzt8QEVRKHlGfYs7RCkjZmDHpHbIbJwg.JPEG%2F1716021178326.jpg%3Ftype%3Dw1500_60_sharpen"
               title="양양 오션플레이" width="200" height="240"/></a>
        </div>
          )
        },
        {
          name: '강릉군',
          coords: '309,170,342,150,387,203,386,227,359,219,328,229,345,188',
          boxId: 'attractionBox_Gangneung',
          content:(
            <div id="attractionBox_Gangneung">
            <a href="https://map.naver.com/p/search/%EA%B0%95%EB%A6%89%20%EC%95%88%EB%AA%A9%ED%95%B4%EB%B3%80/place/13491906?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190130_26%2F1548818549792K262M_JPEG%2FyOtLXHFaaCdCC6c9frIgwJTB.jpeg.jpg"
             title="안목해변" height="175" width="190"/> </a>
       
             <a href="https://map.naver.com/p/search/%ED%95%98%EC%8A%AC%EB%9D%BC%EC%95%84%ED%8A%B8%EC%9B%94%EB%93%9C/place/11626644?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240111_294%2F1704943915724LyLCk_JPEG%2F%25B5%25BF%25B1%25D7%25B6%25F3%25B9%25CC_%25C6%25F7%25C5%25E4%25C1%25B8%2528%25B0%25A1%25B7%25CE%2529.jpg"
             title="하슬라아트월드" width="230" height="170"/></a>   
        </div>
          )
        },
        {
          name: '홍천군',
          coords: '204,149,192,169,135,206,175,224,222,200,245,206,264,187,295,190,297,158,239,177',
          boxId: 'attractionBox_hongchun',
          content:(
            <div id="attractionBox_hongchun">
     <a href="https://www.sonohotelsresorts.com/oceanworld/">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20230413_265%2F1681366533145QogUB_JPEG%2F%25C0%25CD%25BD%25BA%25C6%25AE%25B8%25B2%25B8%25AE%25B9%25F6.jpg"
      title="오션월드" width="200"/>  </a> 

      <a href="https://map.naver.com/p/search/%ED%99%8D%EC%B2%9C%EB%A7%88%EA%B3%A1%EC%9C%A0%EC%9B%90%EC%A7%80/place/13476479?c=15.00,0,0,0,dh&isCorrectAnswer=true">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MDNfMjY4%2FMDAxNjkzNjcxNDQ3MTY4.ocDBuQ7F32h013nVJH5TEnrTam2KVmfpOEmCRD6Xpmgg.VnmAs-x0TsXvFMTfUQMbfbArFxOk1I4Z39mDUexdUNAg.JPEG.yl1303%2FIMG_4807.jpg"
      title="마곡유원지" width="160" height="170"/></a>
      
      <a href="https://map.naver.com/p/search/%EC%9A%A9%EC%86%8C%EA%B3%84%EA%B3%A1/place/13490897?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDhfMTc5%2FMDAxNzE3ODUxODUwMDc3.LYggSC_iY7M8v_Yna6nYkpHAm6BDerJ0RWNfmUmVUbcg.LvrefTw1Bb7KEZ_4OeElrobQ5cy01JWle42UEtFg9s0g.JPEG%2F20240608%25A3%25DF130742.jpg"
      title="용소계곡" width="170" height="170"/></a>  
 </div>
          )
        },
        {
          name: '횡성군',
          coords: '168,243,194,217,245,213,254,234,244,263,219,283,219,247,193,237',
          boxId: 'attractionBox_Hoengseong',
          content:(
            <div id="attractionBox_Hoengseong">
     <a href="https://map.naver.com/p/entry/place/15760648?c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA4MjVfMTI4%2FMDAxNjkyOTE4MjkzOTg3.PiIja6AhJwX4U-7t_7dj0pGUbGWkJ067-2pGelrCzYIg.v3glf25k7O7YmlWRJHxP2PnKwj7FYGRFEUqgu2L-hJcg.JPEG%2F6BC82D69-5669-4F61-A01C-5A9D38571265.jpeg%3Ftype%3Dw1500_60_sharpen"
      title="병지방계곡" width="180" height="198" /></a>
      
      <a href="https://map.naver.com/p/search/%EC%8B%9C%EA%B3%A8%ED%8E%B8%EC%A7%80/place/1240298506?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210718_66%2F162661633792834Unx_JPEG%2F136LEaD8iVRp39Fvl8dOg0Er.jpg"
      title="시골편지(카페)" width="200" height="200"/>  </a>

 </div>
          )
        },
        {
          name: '평창군',
          coords: '330,190,329,211,296,234,292,255,305,287,263,270,255,225,267,201,296,199,306,175',
          boxId: 'attractionBox_Pyeongchang',
          content:(
            <div id="attractionBox_Pyeongchang">
     <a href="https://www.alpensia.com/ocean/main.do">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180508_170%2F1525754951189QyiKs_JPEG%2F%25A1%25C03.JPG"
      title="알펜시아리조트오션700워터파크" width="200"/></a>

      <a href="https://map.naver.com/p/search/%ED%86%A0%EB%81%BC%EC%9D%98%20%EC%88%B2/place/1052309494?c=15.00,0,0,0,dh&isCorrectAnswer=true">
    <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231014_65%2F1697286711531153Jl_JPEG%2FKakaoTalk_20231014_144555269_01.jpg"
    title="토끼의 숲" width="160" height="150"/></a>

    <a href="https://www.museumdeepdive.co.kr/#sec8">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240531_171%2F1717119529679m6QiB_JPEG%2FDSC07237.JPG"
      title="뮤지엄 딥다이브" width="200" height="150"/> </a> 
      
 </div>

          )
        },
        {
          name: '정선군',
          coords: '317,235,369,240,350,275,363,309,323,303,314,288,302,259',
          boxId: 'attractionBox_jangsun',
          content:(
            <div id="attractionBox_jangsun">
     <a href="https://map.naver.com/p/search/%ED%95%98%EC%9D%B4%EC%9B%90%20%EC%9B%8C%ED%84%B0%EC%9B%94%EB%93%9C/place/1426859628?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDlfMjUy%2FMDAxNzE3ODkwMjkxOTA3.yBXZZuQxe2apAM9mJTF0M3dKnuTKm46sgeenvUIlpgEg.44uD5Vvj5VZUrjk8FOOwC-nAJHwfQ5HqRLrtsA10gIMg.JPEG%2F8A5708BE-2D53-4C25-AE35-957866D5A32E.jpeg%3Ftype%3Dw1500_60_sharpen"
      title="하이원 워터월드" width="200"/></a>

      <a href="https://map.naver.com/p/search/%EB%B0%B1%EC%84%9D%ED%8F%AD%ED%8F%AC/place/15800451?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
       <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MDVfMzgg%2FMDAxNzE0ODg5NzgzMTI3.FfUZqQIfg09eEqDCzIPI89HcKwQQLHVmhBcqS1iI18Ag.3WqjSpZBJCkH0qcLWganlKG9i47BtChLCo1vT7P8mSAg.JPEG%2F8181B9AA-C8CC-44B3-989A-41C5FC3262EA.jpeg%3Ftype%3Dw1500_60_sharpen"
       title="백석폭포" width="200"/> </a>

 </div>
          )
        },
        {
          name: '동해시',
          coords: '398,221,386,235,379,250,406,245',
          boxId: 'attractionBox_donghea',
          content:(
            <div id="attractionBox_donghea">
            <a href="https://map.naver.com/p/entry/place/11491695?c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDJfNzIg%2FMDAxNzE3MzI1NDQ4MzYz.PzlOKiOULTOaJk5mzbE6iZ60FMbu4vhjRgaTa4z7hDog.9DaYRfDOobSMEKFaPA-ZQvcJjhtLxInBEvkO4tlckXUg.JPEG%2Fbeauty_20240602125450.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
              title="망상해수욕장" width="200"/> </a>
       
              <a href="https://www.dhsisul.org/pages/sub.htm?nav_code=new1701823163&mv_data=aWR4PTEmdHlwZT10b3Vy||">
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDVfNDMg%2FMDAxNzE3NTg5ODY1NTUx.CMfYwCY63J8tjsw9dkRFY8-X7jFMU_MoLqEUm2ruVMEg.rHAi0vv2bDw86r4WtskMZw77UoeIyfVQbkZ1hwfnPdUg.JPEG%2FCF6832DB-36A4-4832-8428-514C3286CCEA.jpeg%3Ftype%3Dw1500_60_sharpen"
              title="천곡황금박쥐동굴" width="200"/> </a>
       
        </div>   
          )
        },
        {
          name: '원주시',
          coords: '188,250,213,261,207,283,232,299,206,297,160,323,164,27ㅇ2,181,270,182,256',
          boxId: 'attractionBox_womju',
          content:(
            <div id="attractionBox_womju">
     <a href="https://map.naver.com/p/search/%EC%9B%90%EC%A3%BC%20%EC%98%A4%ED%81%AC%EB%B0%B8%EB%A6%AC%20%EC%88%98%EC%98%81%EC%9E%A5/place/1286043724?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190401_184%2F1554091421469LlWg2_JPEG%2F%25BD%25BA%25C5%25B0%25BE%25DF%25BF%25DC%25BC%25F6%25BF%25B5%25C0%25E501.jpg"
      title="오크밸리 힐스 빌리지 수영장" width="200"/></a>

      <a href="https://map.naver.com/p/entry/place/33704418?c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210412_51%2F1618183813408ACKkD_JPEG%2F2Jf7ZRpkKQCoZd9TwWX3T5wG.jpg"
      title="원주 키즈캠핑장" width="200" height="130"/></a>

      <a href="https://map.naver.com/p/entry/place/15683013?c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA4MjFfMTAw%2FMDAxNjkyNTc5MjQyNjYz.t7FNirmQP8-ih14JgLLj_8ztSbkoItNchr778C4jYPEg.04aC_TP8-adg6R0xEQ2EU3KF_o2paC2je3-oTx078eAg.JPEG%2F20230820_143306.jpg%3Ftype%3Dw1500_60_sharpen"
      title="용수골 계곡" width="170" height="130"/></a>  

 </div>
        )
        },
        {
          name: '삼척시',
          coords: '428,350,455,307,429,267,414,246,398,255,369,257,360,269,364,288,385,272,391,286,388,306,402,315,404,333',
          boxId: 'attractionBox_Samcheok',
          content:(
<div id="attractionBox_Samcheok">
     <a href="https://map.naver.com/p/entry/place/13477285?c=15.00,0,0,0,dh">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMjlfMTIy%2FMDAxNjk4NTc0MjkwMzY3.9s1SYpCAwpIFQMTb4DG_vze1tntedYl4ilszUKhqKBgg._3gTHW9hAeKaJ_fJhAT5Z8yGLwZE99v07lnomDZNYV8g.JPEG.kgyu1020%2F8.JPG"
      alt="환선굴" width="200"/></a>

      <a href="https://map.naver.com/p/search/%EB%A7%B9%EB%B0%A9%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5/place/13490997?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
       <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjdfMjgz%2FMDAxNzE0MTg4MDg1MjMy.AQ6-pDVuFv3oQrKCHxxbfMMRbLuNqh8o4zektmoAyFEg.4rW__5O_l8FvKHyUPNfM-lOVuxaSVa4L5mYLhPrScYMg.JPEG%2F0V3A1300.JPG"
       title="맹방해수욕장" width="200"/></a>

 </div>
          )
        },
        {
          name: '영월군',
          coords: '254,269,243,282,252,321,277,331,337,356,368,322,312,311,298,291,260,287',
          boxId: 'attractionBox_yong',
          content:(
            <div id="attractionBox_yong">
            <a href="https://riverbugging.modoo.at/">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_168%2F1440991392902X3FPW_JPEG%2F126657456175711_8.jpg"
             title="리버버깅" width="200" height="160"/></a>
       
             <a href="https://map.naver.com/p/search/%ED%95%9C%EB%B0%98%EB%8F%84%EC%A0%84%EA%B8%B0%EC%B9%B4%ED%8A%B8%EC%B2%B4%ED%97%98%EC%9E%A5/place/1521819604?c=15.00,0,0,0,dh&isCorrectAnswer=true">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDZfMjQ0%2FMDAxNjg4NjA0NjIxMDE2.Sn_Nre3ltOgc9mMjUxGSpf9uZL1-NVyXXY2ZlRQL1f0g.8O8yl2cz4OjMkQYBU0iSEJ9r3iWaxas5MZN8OxvrWC8g.JPEG.lbmoon68%2FDSC03567.jpg"
              title="한반도전기카트체험장" width="150" height="160"/> </a>
       
              <a href="https://map.naver.com/p/search/%EA%B3%A0%EC%94%A8%EA%B5%B4/place/32644867?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDlfODUg%2FMDAxNzE3OTIxMzYzMzE1.jY3d68WTelTnj4sGun-2dFu5g2PAs1jZAHy1QRo1urcg.W8VGy55WeldzfGBcQct-c8aHVUqVzXyvSW299DjbmpIg.JPEG%2F20240606%25A3%25DF102928.jpg"
              title="고씨굴" width="200"/> </a>
       
        </div>
          )
        },
        {
          name: '태백시',
          coords: '382,278,387,310,397,326,374,332,371,307,374,290',
          boxId: 'attractionBox_Taebaek',
          content:(
            <div id="attractionBox_Taebaek">
     <a href="https://map.naver.com/p/search/%EC%9A%A9%EC%97%B0%EB%8F%99%EA%B5%B4/place/11491284?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
      <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDJfMTA1%2FMDAxNzE3MzM2NDkwNTk4.DLQtbIZzsg71hKKDMXa3-N-eaAFbTilQeXLx6ko3dMQg.7keXcVVlNncqCUn8CLZgULgftvLScwZ99n-JXN1Sbxwg.JPEG%2F8A7B91A2-1911-4C6B-82C6-CE2329BFB851.jpeg%3Ftype%3Dw1500_60_sharpen"
      title="용연동굴" width="200"/></a>

      <a href="https://map.naver.com/p/search/%EB%B9%84%EC%99%80%EC%95%BC%ED%8F%AD%ED%8F%AC/place/15723619?c=15.00,0,0,0,dh&isCorrectAnswer=true">
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTdfMjcg%2FMDAxNjQyNDI0MjQwMjk4.3wXUIBycOZzglKUpGtcDmzTnqEINUYRnQBjYzx3AfLIg.HK2cn9BobJMUACdD1Kew6Gw8jmu2Lh-xzRxqQCKYSMog.JPEG.igk071%2F2020%25B3%25E27%25BF%25F9_%25BA%25F1%25BF%25CD%25BE%25DF%25C6%25F8%25C6%25F7.jpg%23960x1280"
      title="비와야 폭포" width="200" height="245"/></a>
      
      <a href="https://map.naver.com/p/search/%EA%B2%80%EB%A3%A1%EC%86%8C/place/19777544?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
       <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MTdfMjQ0%2FMDAxNzE1OTQyMjUyMTEz.bA4OFeCF9fM2LwPnhIehOpDy8NgO6JujvPY8RG4AqXkg.Z9ARbaexJPFLktzyCuKi8RHRuGouS0X07_nHRCl0cVUg.JPEG%2F20240517_125746.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
       title="검룡소" width="200"/> </a>

 </div>
          )
        },
      ];

      const handleClick = (name, boxId) => {
        if (selectedBox === boxId) {
          setSelectedBox(null);
        } else {
          setSelectedBox(boxId);
        }
      };

      const SummerCont = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 99.5%',
        minHeight:'100vh'
      }
      
    return(
   
        <div style={SummerCont}>
         <Header customClass="summer-header" />
        <a href="/" >
       <img
          src={Summer}
          alt="봄 이미지"
          style={{
              position: 'absolute',
              top: '30px',
              left: '47%',
              width: '5%',
              height: '60px',
              zIndex: 1,
            }}
          />
          </a>
  
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={Gangwon}
            useMap="#location-map"
            style={{ position: 'absolute', top: '120px', left: '700px' }}
            alt="강원도"
          />
          <map name="location-map">
            {locationData.map((location, index) => (
              <area
                key={index}
                shape="poly"
                coords={location.coords}
                alt={location.name}
                title={location.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(location.name, location.boxId);
                }}
              />
            ))}
          </map>
        </div>
  
        {/* 조건부 렌더링을 통해 클릭된 박스를 보여줍니다 */}
        {selectedBox && (
          <div style={{ display: 'block', position: 'absolute', top: '600px', left: '600px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
            {locationData.find(location => location.boxId === selectedBox)?.content}
          </div>
        )}
      </div>
    );
  }
export default SummerPage;