import React, { useState } from 'react';
import Header from '../constants/Header';
import Gangwon from '../assets/image/강원도.png';
import Winter from '../assets/image/Winter.png';
import WinterBack from '../assets/image/w.jpg'

function WinterPage(){
    const [selectedBox, setSelectedBox] = useState(null); 
    const locationData = [
        {
          name: '춘천시',
          coords: '129,121,172,137,195,129,198,151,169,170,151,192,118,191,136,152',
          boxId: 'attractionBox-chun',
          content:(
            <div id="attractionBox-chun">
            
           <a href="https://map.naver.com/p/entry/place/15648643?c=15.00,0,0,0,dh">
           <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180125_89%2F1516858455575K5Pfd_JPEG%2F%25BD%25E6%25B3%25D7%25C0%25CF%2528%25C1%25A4%25BB%25E8%25B0%25A2%25C7%25FC%2529.jpg"
           title="엘리시안 강촌" width="200"/></a>
           
           <a href="https://map.naver.com/p/entry/place/13491622?lng=127.6578689&lat=37.9828382&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
           <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDlfMjY4%2FMDAxNjQxNzA4ODQzMTc4.qFmxhv3BzkkIv0dpTUf41BcdyGPiyVwghDsa3rXjx04g.jmfByxrR63GaItg1nra25nb-6fIx44onFsjKaRuxuhkg.JPEG.hong273526%2F20220108_143346.jpg&type=sc960_832"
           title="춘천호 빙어낚시터" width="200" height="190"/></a>
   
           
       </div>
            
          )
        },
        {
          name: '철원군',
          coords: '94,51,112,53,178,58,145,68,123,71,100,100,74,94,54,78,94,78',
          boxId: 'attractionBox_cheorwon',
          content:(
            
       <div id="attractionBox_cheorwon">
       
       <a href="https://map.naver.com/p/search/%EA%B3%A0%EC%84%9D%EC%A0%95%20?c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMTBfMTU4%2FMDAxNjczMzI5MzA4NzUy.uZmSxE0aQmGw3JK2uBA51uhbW9IY3aw0XaIWjEKprBsg.o-FQLNOxyK5pZ-b-hlRVNbS5K0hxW6WrbdRBfP1IpJ4g.JPEG.mixsun%2F1.JPG&type=sc960_832"
        title="고석정 꽃밭 겨울 놀이 마당" width="250" height="197"/> </a>

        <a href="https://map.naver.com/p/entry/place/1790752457?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.2691551&lat=38.2057227&c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMjJfMjky%2FMDAxNzA1ODk5OTAzMjk4.sSRv7j6NxEWCof9qQAvO0VVP5HMMp7jxwWQX9uZ9HhMg.xscoHAmqTtJ7xy2IbqXzoXOqqUTBAR-M3o1gZNNtMjkg.JPEG%2FTimePhoto_20240113_121338.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
        title="한탄강 얼음 트레킹" width="200"/>   </a> 
   </div>
          )
        },
        {
          name: '화천군',
          coords: '123,83,104,119,131,109,169,127,173,97,174,69',
          boxId: 'attractionBox_hwachun',
          content:(
            <div id="attractionBox_hwachun">
            <a href="https://www.narafestival.com/01_icenara/">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjRfNjEg%2FMDAxNzAwNzg4NTE1Mzg0.WNSMdo1zeRxh88VMoDnum5Is71IQkGY10_iLoU0NrCog.DtMFt6KrfNq2GkuEZSuxwuLgwzzClmxgR-ZBa9RbSlkg.PNG.yatourok%2Fdownload_7fEp5hz.png&type=sc960_832"
             title="화천산천어 축제" width="400"/></a>
             
        </div>
          )
        },
        {
          name: '고성군',
          coords: '258,17,248,48,294,83,299,63,283,35',
          boxId: 'attractionBox_gosung',
          content:(
            <div id="attractionBox_gosung">
            <a href="https://www.sonohotelsresorts.com/dp.front.facility.dp/dmparse.dm?upjangSid=11004">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220207_169%2F1644195097952eKjft_JPEG%2F%25BA%25AF%25C8%25AF%25B0%25A1%25B5%25E7%25BD%25BA%25C6%25C4.jpg"
             title="소노캄 델피노 오션플레이 온천" width="200" height="135"/></a> 
 
 
             <a href="https://map.naver.com/p/search/%EC%98%A4%ED%98%B8%20VR%ED%95%B4%EC%96%91%EB%AA%A8%ED%97%98%EA%B4%80/place/1920802918?c=15.00,0,0,0,dh&isCorrectAnswer=true">
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230321_38%2F16793654977754u2jn_JPEG%2F3.jpg"
              title="오호 VR해양모험관" width="200"/> </a>  
        </div>
          )
        },
        {
          name: '인제군',
          coords: '237,50,223,91,225,121,203,135,229,152,264,164,292,124,270,111,268,80',
          boxId: 'attractionBox_inje',
          content:(
            <div id="attractionBox_inje">
           <a href="https://map.naver.com/p/search/%EB%A7%A4%EB%B0%94%EC%9C%84/place/15138161?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMjBfNCAg%2FMDAxNjEzODI0MDcxNTkw.S_xEJDhM7FNztVvcej89U6tWQBzBxVacm8H7xuZlqtMg.vn22Le6gezGblyMHrTWleBKIvgAOKU1xVMm73aCHv9wg.JPEG.wooltraveler%2FIMG_2175.JPG&type=sc960_832"
            title="매바위 폭포 빙벽 등반체험" width="160" height="176"/> </a>

            <a href="https://map.naver.com/p/search/%EB%B0%A9%ED%83%9C%EC%82%B0/place/13490894?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMjlfMTAz%2FMDAxNzA2NTAwODYzOTI4.WsDUHG3QknPmFxjR3hL5xok_Vaa9BvsGd4uE4wJBrRIg.jGbwzhTn_xDnUp7ZRlBlzx8htqSooADd0MhwUW40hp0g.JPEG%2F9558DE36-FB9E-47F8-95A5-93C3BB6A5AE0.jpeg%3Ftype%3Dw1500_60_sharpen"
            title="방태산" width="160" height="180"/>   </a>
    
           
       </div>
          )
        },
        {
          name: '양구군',
          coords: '183,55,228,59,219,79,216,118,187,117,179,75',
          boxId: 'attractionBox_yanggu',
          content:(
            <div id="attractionBox_yanggu">
            <a href="https://map.naver.com/p/entry/place/1543009470?lng=128.045792&lat=38.1257231&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjBfMjgz%2FMDAxNzA1NzQzNDY1NjQ4.qh25gOk7CPxhZr9HiFF6Z4rhmeh5vMzqQuiEPAVg7Nwg.rndMxl-Xe20iKOLGJv9uSyWeMqqqzz4urasGqXscYJQg.JPEG.dusdhr87%2F1705743463634.jpg&type=sc960_832"
             title="국토정중앙면 용소빙장" width="160" height="190"/> </a>
 
             <a href="https://map.naver.com/p/entry/place/1738804671?lng=128.073998&lat=38.1899975&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                 <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjlfMjEy%2FMDAxNjc0OTE5ODg0OTg2.Mmxd3unrM6q_OB86VTEvAFgKH7epPRI-IOiELtvdwzgg.ysN6PnVX8OqtY7GEvj4dsvwp-YpIK7hgDuWyIHJrGX8g.JPEG.josocandle%2F20230123%25A3%25DF135910.jpg&type=sc960_832"
                 title="양구수목원 사계절 썰매장" width="200"/></a>
        </div>
    
          )
        },
        {
          name: '속초군',
          coords: '284,89,307,80,309,95,287,94,305,76,307,80',
          boxId: 'attractionBox_sockcho',
          content:(
            <div id="attractionBox_sockcho">
           <a href="https://map.naver.com/p/entry/place/1922053511?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.5856910&lat=38.1908249&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MTBfMTIy%2FMDAxNzE4MDAwNTQ3MzY0.O111adlEJTM_nl6KoyEvK6u8F0xUcPHQ2JkvthhBxwQg.emUOscdayeoJOvLYLsiiX50KfIilJlVndgl6tJxOBoYg.JPEG%2F20240610_150243.jpg%3Ftype%3Dw1500_60_sharpen"
            title="애니팝 안온스페이스" width="200"/> </a>

            <a href="https://map.naver.com/p/search/%EB%8C%80%ED%8F%AC%ED%95%AD%20%EC%A0%84%EB%A7%9D%EB%8C%80/place/1240132179?c=13.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDdfMTIw%2FMDAxNjU5ODQzNjI4NjM2.1nlMQhoh03TVH4kN95lMCBphGbBTddN34ewt5wgy704g.qz65KB7yYC8N8LX8L3O94QEoC8k3dc1_I7crO15A_Lkg.JPEG.wjddk6547%2FIMG_9170.jpg%234032x3024"
            title="대포항 전망대" width="200"/> </a> 
           
       </div>
          )
        },
        {
          name: '양양군',
          coords: '276,105,310,98,341,140,293,149,299,124',
          boxId: 'attractionBox_yungyung',
          content:(
            <div id="attractionBox_yungyung">
            <a href="https://map.naver.com/p/entry/place/13491692?c=13.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMTRfOTkg%2FMDAxNjk5OTU5MzQ2MjYy.VCeS8KikxPwzj4cE2-TLkT4T7ziu7wwcKCyGzJK9TiYg.DcjE78FZtNf4JedRl_q1-YqujhdkQZMjYV7AEsmpW6Ig.JPEG.uoops7%2F%25BE%25E7%25BE%25E7_%25B3%25B2%25BE%25D6%25C7%25D7-11.jpg"
             title="남애항" height="197" width="300"/> </a>
 
             <a href="https://map.naver.com/p/search/%EC%96%91%EC%96%91%20%20%EC%9D%98%EC%83%81%EB%8C%80/place/20095340?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MTJfMTI5%2FMDAxNzE4MTI0OTg2NDc1.NuoE5nEJfbRte4iJUkdIpXRN9lzUCfBwEjiZza9A_6sg.zC4alTGDXgGIgayyEr-D2SfYqMgFR7NC3DqiekolGAMg.JPEG%2F20240611_073108.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
              title="의상대" width="200"/></a>   
 
        </div>
    
          )
        },
        {
          name: '강릉군',
          coords: '309,170,342,150,387,203,386,227,359,219,328,229,345,188',
          boxId: 'attractionBox_Gangneung',
          content:(
            <div id="attractionBox_Gangneung">
           <a href="http://www.xn--ok0bo3h6vi1zj.kr/default/">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA1MDJfMTE1%2FMDAxNDkzNjk2NzM0MDE1.NZ97L_KLMbpQx-1bsmFCPuYYFUXV9QKeuDlsxeU7Tskg.qtphHsl9_lpiVsTbcdtdkc42IGQnLbJE_rmI0q4gvvgg.PNG.sygu36%2F5DM40097.png&type=sc960_832"
             title="안반데기 별" width="260"/> </a>


             <a href="http://sacheonbeach.co.kr/">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDAxMThfMjQ1%2FMDAxNTc5MzM5Nzc3OTI1.Yx0h_96TLfaGoPPBwOVh0JLe3LzBT7ENieA4z6TQWaYg.HsMeN32ji8k4deBAyPgFr-LC06xzPp8QrnJZURVxsrwg.JPEG%2FexternalFile.jpg&type=sc960_832"
             title="사천해변" width="260" height="175"/> </a>  
   
       </div>
          )
        },
        {
          name: '홍천군',
          coords: '204,149,192,169,135,206,175,224,222,200,245,206,264,187,295,190,297,158,239,177',
          boxId: 'attractionBox_hongchun',
          content:(
            <div id="attractionBox_hongchun">
           <a href="https://www.sonohotelsresorts.com/daemyung.vp.skiworld.index.ds/dmparse.dm">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230210_205%2F1675984340921X3qAT_JPEG%2F%25BC%25F6%25C1%25A4%25B5%25CA_%25BA%25F1%25B9%25DF%25B5%25F0%25C6%25C4%25C5%25A9_%25BD%25BA%25C5%25B0%25C0%25E5_202301_%25282%2529.jpg"
            title="비발디파크 스키장" width="200" height="150"/> </a> 
            
            <a href="https://map.naver.com/p/entry/place/15728443?c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTAyMDlfMjQ4%2FMDAxNTQ5Njg1NDk5NTUw.QvuJi0kGtYRV3Qkt7r3hBeQtWHPeeLSYspYv59V9Ouwg.GJ49BKGlIUdXRBDN4EcQr7ii3SjcWuiGwBIsRB853x0g.JPEG.rolomy%2FDJI_0600-2.jpg&type=sc960_832"
            title="홍천강 꽁꽁 축제" width="210" height="150"/> </a>   

            <a href="https://map.naver.com/p/entry/place/15743747?lng=127.697033&lat=37.6959326&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5019%2F2018%2F11%2F26%2F0000225385_001_20181126172604380.jpg&type=sc960_832"
            title="팔봉산" width="200" height="150"/></a>    
           
       </div>
          )
        },
        {
          name: '횡성군',
          coords: '168,243,194,217,245,213,254,234,244,263,219,283,219,247,193,237',
          boxId: 'attractionBox_Hoengseong',
          content:(
            <div id="attractionBox_Hoengseong">
           <a href="https://map.naver.com/p/search/%EC%9B%B0%EB%A6%AC%ED%9E%90%EB%A6%AC%ED%8C%8C%ED%81%AC%20%EC%8A%A4%ED%82%A4%EC%9E%A5/place/31169393?c=15.00,0,0,0,dh&isCorrectAnswer=true">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221202_20%2F16699480705835KX8a_JPEG%2FS05-WINT-010199.JPG"
            title="웰리힐리파크 스키장" width="200"/></a>

            <a href="https://map.naver.com/p/entry/place/1755720563?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.1555325&lat=37.4095688&c=15.89,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTBfMTg5%2FMDAxNzEwMDc1MjQ2NjQ5.XU13xxnASrSVua-n3FE-J1f6LdnTP781V773jmK2Pngg.3Wz7dUOVaPJ4XDr799_26zev0cTV4xLRk2yhUq6kDVog.JPEG%2FDSC02023.JPG&type=sc960_832"
            title="안흥찐빵 모락모락 찐빵 만들기 체험" width="200"/></a>    
       </div>
          )
        },
        {
          name: '평창군',
          coords: '330,190,329,211,296,234,292,255,305,287,263,270,255,225,267,201,296,199,306,175',
          boxId: 'attractionBox_Pyeongchang',
          content:(
            <div id="attractionBox_Pyeongchang">
           <a href="https://www.alpensia.com/main.do">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20171113_35%2F1510532351803XlDJ1_JPEG%2FolD2RasSQI83IWj1-gIrTjDb.jpg"
            title="알펜시아 스키점프센터" width="200"/></a>

            <a href="https://www.yongpyong.co.kr/">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240325_16%2F17113556490766JSF1_JPEG%2F%25B8%25F0%25B3%25AA%25BF%25EB%25C6%25F2_%25C0%25BA%25C7%25CF%25BC%25F62.jpg"
            title="발왕산 스카이워크" width="200"/></a>    
            
       </div>
   
          )
        },
        {
          name: '정선군',
          coords: '317,235,369,240,350,275,363,309,323,303,314,288,302,259',
          boxId: 'attractionBox_jangsun',
          content:(
           
            <div id="attractionBox_jangsun">
                <a href="https://booking.naver.com/booking/5/bizes/991225?area=pll">
                 <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjZfNzkg%2FMDAxNzA2MjMzMjQ2NzMw.cF9Kj45Co94RZeftuhzN6cko1l0UcbDfmVXgzVRieFog.LJKH7Hl1Du_z3tfLRpQeTcQEudJzT9cKw3oT1QOnKxEg.JPEG.yerini95n%2FIMG_2106.JPG&type=sc960_832"
                 title="가리왕산 케이블카" width="200"/></a>
     
                 <a href="https://map.naver.com/p/entry/place/20027215?lng=128.8442313&lat=37.470858&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                 <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMjJfNDcg%2FMDAxNzA4NTg3NzI2NzM2.-lO3eELrg-BOgvRrBTG69ESNGG3SGENnKoiTkSWaJgcg.wjYBzE-F7azcIzakTpqHbfwyBZY7pbiY6_LeYmqs0I0g.JPEG%2F1_%25288%2529.jpg&type=sc960_832"
                 title="미락숲 캠핑장" width="200"/></a>    
     
                 <a href="https://www.high1.com/ski/index.do">
                 <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20181203_16%2F15438164851249tKGy_JPEG%2F%25B3%25D7%25C0%25CC%25B9%25F6_%25C7%25CF%25C0%25CC%25BF%25F8_%25B8%25AE%25C7%25C1%25C6%25AE%25B1%25C7_06.jpg"
                 title="히이원 스키장" width="200" height="150"/></a>
    
            </div>
          )
        },
        {
          name: '동해시',
          coords: '398,221,386,235,379,250,406,245',
          boxId: 'attractionBox_donghea',
          content:(
            
       <div id="attractionBox_donghea">
       <a href="https://map.naver.com/p/entry/place/19796608?c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjdfMTkz%2FMDAxNjcyMTMyODk1OTUy.vcEP3vk0zKar-Qy1vr03CmQE4l_jUxEslPVNprrEVrQg.NhBTASaeNRDZysUw6VRo52qV6NRFCYVUhCSNlKTGHYkg.JPEG.withou122%2F5A2A5778.JPG&type=sc960_832"
        title="묵호등대" width="200"/></a> 
   </div>   
          )
        },
        {
          name: '원주시',
          coords: '188,250,213,261,207,283,232,299,206,297,160,323,164,27ㅇ2,181,270,182,256',
          boxId: 'attractionBox_womju',
          content:(
            <div id="attractionBox_womju">
            <a href="https://map.naver.com/p/entry/place/1290541044?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.8182194&lat=37.4328663&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjlfMTgy%2FMDAxNjUzNzc0OTM0ODY5.UwZtBIMIi1Xgd-0tTHvZGFjX86fYTY5L124c7wBaUusg.rctKW_mIGFo8NJNvsyMpQtePzr4hSpZqsKX3hg5Ik-0g.JPEG.ddtadh%2FDSC_4150.jpg"
             title="오크밸리천문교실" width="200"/></a>
 
             <a href="https://map.naver.com/p/entry/place/517978404?c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMTNfODYg%2FMDAxNTQyMDY2ODg3NzA1.Cqh8fxqK3Alk-j7x-36WEQ1IH_bZ9FLvtxDXsbXirzQg.TUqckzorv8BG2bi8xLqjc35T--qBaM-CctLl7ealnIYg.JPEG.themovehouse%2Fcall_%25284%2529.jpg&type=sc960_832"
             title="고니골빛축제" width="200"/></a>   
             
             <a href="https://www.resom.co.kr/forest/theme/have9.asp">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200416_139%2F15870213705869TuDv_JPEG%2Fy5YwR_Gg0TW5ciz4zPZ-E6V5.jpg"
             title="포레스트 리솜 해브나인 스파" width="200"/> </a>   
    
        </div>
          )
        },
        {
          name: '삼척시',
          coords: '428,350,455,307,429,267,414,246,398,255,369,257,360,269,364,288,385,272,391,286,388,306,402,315,404,333',
          boxId: 'attractionBox_Samcheok',
          content:(
            <div id="attractionBox_Samcheok">
            <a href="https://gagokspa.kr/">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTlfMTUx%2FMDAxNzA4MzE2NTYwMTA0.vVG5SQAWGLicAjTjMxJGHa3n5jPziaB7AjhJgO_Xhv8g.xZGibZepsP5BI3X07Xsb4AxI-qGZDYzkPymZkjQc9RMg.JPEG.ykmh_%2FIMG_6726.JPG"
             title="가곡유황온천" width="200"/></a>
 
 
             <a href="https://map.naver.com/p/entry/place/1624735912?lng=129.0487653&lat=37.1800506&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEyMTFfMTE1%2FMDAxNTQ0NTAyNzUyMzc2.SMBCxl4ocyA8247XBPQjg4E1iPp5zJKTPKn75Di6nksg.LYDRl7s-w0dNYPrG1bdonDiuXfzJ7gcVbkFTDrqCEZYg.JPEG.1014mos%2Foutput_1414657828.jpg&type=sc960_832"
             title="미인폭포" width="200"/></a>  
        </div>
          )
        },
        {
          name: '영월군',
          coords: '254,269,243,282,252,321,277,331,337,356,368,322,312,311,298,291,260,287',
          boxId: 'attractionBox_yong',
          content:(
            <div id="attractionBox_yong">
           <a href="https://map.naver.com/p/entry/place/11595392?c=15.00,0,0,0,dh&placePath=/home">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5445%2F2021%2F11%2F11%2F0000296831_001_20211111114802628.jpg&type=sc960_832"
            title="섶다리 마을" width="200"/></a>


            <a href="https://map.naver.com/p/entry/place/20259861?lng=128.4332344&lat=37.2051524&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://imgnews.pstatic.net/image/001/2022/12/16/AKR20221216039200062_01_i_P4_20221216095108415.jpg?type=w647"
            title="영월 선돌" width="230" height="155"/></a>
   
       </div>
          )
        },
        {
          name: '태백시',
          coords: '382,278,387,310,397,326,374,332,371,307,374,290',
          boxId: 'attractionBox_Taebaek',
          content:(
            <div id="attractionBox_Taebaek">
           <a href="https://map.naver.com/p/entry/place/1536206593?c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjExMjdfOTkg%2FMDAxNjY5NTA3NzczOTc2.2I8HU3xMMz8HLnJq3mIhRpd1UmoRwIsN9fxVUz3WcQQg.cDPzpEZdEZRl5VJ6xGo26DgXZ1op3snJ-tDjNMJaEJkg.JPEG%2F20221126_114852.jpg%3Ftype%3Dw1500_60_sharpen"
            title="오로라 파크" width="200"/></a>

            <a href="https://map.naver.com/p/search/%EB%8B%B9%EA%B3%A8%EA%B4%91%EC%9E%A5/place/15724917?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAyMDJfMjEg%2FMDAxNzA2ODg0MzA3MTc3.IrU3VA6m-b1F_ThS_42ANlDabznku96Cfkp825uwnR4g.jyD3Fe7ot7rxwu781EpByn3qh7FROgvHHIQTPYF6K-wg.JPEG%2F20240202_115855.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
            title="당골광장" width="200" height="260"/></a> 
            
            <a href="https://map.naver.com/p/search/%ED%95%A8%EB%B0%B1%EC%82%B0/place/11491571?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMDhfMTg5%2FMDAxNzA3MzQ0NTMzMzM1.4v-iV49tFR8L_IUTfgbc3zuxKOvlgyvQIG7fLAukY14g.rBSJZNRALbro1dAFpcgrNvos6edm9ewedxjHWxzD3Ecg.JPEG.ysr3789%2F1705914417186.jpg&type=sc960_832"
            title="함백산" width="200"/></a>    
   
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

      const WinterCont = {
        backgroundImage: `url(${WinterBack})`,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 99.5%',
        minHeight:'100vh'
      }
      
    return(
      <div style={WinterCont}>
      <Header />
      <a href="/">
        <img
          src={Winter}
          alt="winter"
          style={{
            position: 'absolute',
            top: '20px',
            left: '47%',
            width: '5%',
            height: 'auto',
            zIndex: 1,
          }}
        />
      </a>
      
        <img
          src={Gangwon}
          useMap="#location-map"
          style={{ position: 'absolute', top: '250px', left: '700px' }}
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

  
      {/* 조건부 렌더링 */}
      {selectedBox && (
        <div
          style={{
            display: 'block',
            position: 'absolute',
            top: '600px',
            left: '600px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          {locationData.find((location) => location.boxId === selectedBox)?.content}
        </div>
      )}
    </div>
    );
  }
export default WinterPage;