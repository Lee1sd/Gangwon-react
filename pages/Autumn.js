import React, { useState } from 'react';
import Header from '../constants/Header';
import Gangwon from '../assets/image/강원도.png';
import Autumn from '../assets/image/가을.png';
import AutumnBack from '../assets/image/A.jpg';

function AutumnPage(){
    const [selectedBox, setSelectedBox] = useState(null);
    const locationData = [
        {
          name: '춘천시',
          coords: '129,121,172,137,195,129,198,151,169,170,151,192,118,191,136,152',
          boxId: 'attractionBox-chun',
          content:(
            <div id="attractionBox-chun">
            <a href="http://www.yuklimland.com/" target="_blank">
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA0MjVfMjI0/MDAxNjUwODk4MTcxNzI1.7kChBQx99tEtyt8wobDoVmEiPGSex9w1DS5u34yv2mAg.5ISo6DfpaXmtbErWBKdeYvwnIhzbAACcaBV2eblhkysg.JPEG.blacklio/20220228_133555.jpg?type=w2" title="육림랜드" width="200"/>
            </a>
    
            <a href="http://happy-chowon.co.kr/" target="_blank">
            <img src="https://modo-phinf.pstatic.net/20180701_74/1530419433682o2aCB_JPEG/mosaIEmquR.jpeg?type=a1100" title="해피초원목장" width="200"/>
            </a>
        </div>
          )
        },
        {
          name: '철원군',
          coords: '94,51,112,53,178,58,145,68,123,71,100,100,74,94,54,78,94,78',
          boxId: 'attractionBox_cheorwon',
          content:(
            <div id="attractionBox_cheorwon">
            <a href="https://dmztown.modoo.at/">
                <img src="https://modo-phinf.pstatic.net/20240119_98/1705646739409pbg6s_JPEG/mosa0fiFTm.jpeg?type=a1100"
                    title="두루미평화마을" height="136" width="190"/></a>
    
            <a href="https://map.naver.com/p/entry/place/11626161?lng=127.473563&lat=38.1442206&placePath=%2Fphoto&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMTlfMTAz%2FMDAxNzAwMzk5NzgyOTY1.loNXH2nJCuLo3pBpJ2mo6Z0TzVynup4uPvlPs5_tdtIg.K3E17L6BUsca5dltsMq4Q4Ea8eiie1lfyignMSYSJNMg.JPEG%2F20231119_105653.jpg.jpg%3Ftype%3Dw1500_60_sharpen" 
                title="복주산자연휴양림" width="200"/></a>
        </div>
          )
        },
        {
          name: '화천군',
          coords: '123,83,104,119,131,109,169,127,173,97,174,69',
          boxId: 'attractionBox_hwachun',
          content:(
            <div id="attractionBox_hwachun">
            <a href="https://map.naver.com/p/search/%ED%99%94%EC%B2%9C%EC%88%B2%EC%86%8D%EC%95%BC%EC%98%81%EC%9E%A5/place/1245635948?lng=127.7975555&lat=38.0103067&placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=8.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjExMDhfMTkx%2FMDAxNjY3ODY5MTgzODY2.mwGPpMVPJrEG1wZO4WaRclvTPurkWyr8Xjl8Caw-DVog.a1RVujSGSMdeI6ED9OTyAKT5wTpMF3O8JJ-cdzfshG0g.JPEG%2FCCB3EF00-98E2-44A1-B87A-8423156083C7.jpeg%3Ftype%3Dw1500_60_sharpen"
                    title="화천숲속야영장" height="194" width="200"/></a>
    
             <a href="https://map.naver.com/p/entry/place/15815356?lng=127.7630057&lat=38.1242493&placePath=%2Fphoto&entry=plt&searchType=place&c=15.89,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMDdfMTYy%2FMDAxNjk2NjY2MTY0ODMw.jE4QF9wOLUTlREqdUr0RAxrD7ddlU785f9ylWxlSr7Eg.nYsx1Yu8_h_zDc2-TP8IMse56ae8td3LLZvavfYF87Eg.JPEG.bless3you%2FKakaoTalk_20231003_221113060_09.jpg" 
             title="딴산" height="195" width="195"/></a>
             
             <a href="http://cheongjeongari.kr/">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDZfODMg%2FMDAxNzE3NjcwNjAwNTk0.1wdlFo6jBwt2LSJeXmXQGSzAC4SJG0C1A-AeCfrVO_Ig.U5crARYyeFfNexpollr0N1WzjG3KrQvMOvUskBzrje4g.JPEG%2FF0C01D7D-F56B-4C33-A462-616DCC1C6D54.jpeg%3Ftype%3Dw1500_60_sharpen" 
              title="만산동 캠핑장" width="200"/></a>  
             
        </div>
    
          )
        },
        {
          name: '고성군',
          coords: '258,17,248,48,294,83,299,63,283,35',
          boxId: 'attractionBox_gosung',
          content:(
            <div id="attractionBox_gosung">
            <a href="http://www.bongsucamp.com/g5/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190913_291%2F15683522548731OUwg_JPEG%2FnmVGuKclUPef_sEB5NfiAy_T.jpg"
                    title="오토캠핑장" height="150" width="165"/></a>
    
             <a href="https://www.goseong.go.kr/tour/index.goseong?menuCd=DOM_000000201001001000">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MDRfMjE2%2FMDAxNTA0NDg2NzIzMjA5.KTmwU95NeTarTPU3QY12yIKzBuZy8uPJVp3UXP3wGE4g.nJ2sJPByB5OJ5a8p4qTBW0TzyESFE7cI454rbO9QSuAg.JPEG.opjkl489%2F7L1A9752.JPG%231200x800" 
             title="공룡박물관" width="220"/>
            </a>          
        </div>
          )
        },
        {
          name: '인제군',
          coords: '237,50,223,91,225,121,203,135,229,152,264,164,292,124,270,111,268,80',
          boxId: 'attractionBox_inje',
          content:(
            <div id="attractionBox_inje">
            <a href="https://map.naver.com/p/entry/place/13490890?lng=128.3033&lat=37.9711179&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjhfMjM5%2FMDAxNjI0ODYyMjMwNzQ3.sTwmxB7m4wiiCOrW1xhv5S7_l7qorBpFyIwTQncYwCkg.wtPzuCQpVc7KuUbeilJU9z44n9UrdWMinw89hJEuN6Ug.JPEG.hyun5486%2FDSCF3423.JPG&type=sc960_832"
                    title="내린천 사륜바이크" width="200"/></a>
    
            <a href="https://www.injefestival.kr/">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMDJfMTE4%2FMDAxNjY0NjkzNTcwMzYx.HWS1mqLdGX4q6tWyROC5g81VZPV5xot9oEOmrN0qX_sg.GUPGmCRfgMafsRvIKBB15J5MfkYn0zRuT9I3KUgYKWQg.JPEG.injegari%2F%25BB%25E7%25C1%25F8%25C0%25DA%25B7%25E1_%25B0%25A1%25C0%25BB%25B2%25C9%25C3%25E0%25C1%25A6_2%25C0%25CF%25C2%25F7_%25286%2529.JPG&type=sc960_832"
                    title="인제가을 꽃 축제" width="200"/></a>
    
             <a href="https://map.naver.com/p/entry/place/19493953?lng=128.3707879&lat=38.072985&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMDVfMjUg%2FMDAxNjk5MTg0NjI5MjI4.zMeX5qknosAtIabuUB0DrfMqH_XU2NLunNQqDVGKsgIg.Sp14jZFghVy_ZeMHtR8SttJ0R-dvhYKnCy2TsXWPqNQg.JPEG.ozjezz%2FIMG_2920.jpeg" 
              title="필례약수터" height="135" width="200"/>          
             </a>
        </div>
          )
        },
        {
          name: '양구군',
          coords: '183,55,228,59,219,79,216,118,187,117,179,75',
          boxId: 'attractionBox_yanggu',
          content:(
            <div id="attractionBox_yanggu">
            <a href="https://www.yg-eco.kr/park/park_guidance">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjlfMTY1%2FMDAxNjI0OTIyNTU0Mjg3.DMymrOFHgPrpT-IiWsWOTxyKvraWWQ1gH2lGhlgsmR8g.AsS6d7qB2gowbSX3iFmNTdhitoKMkntfSHVchgJZ_Lkg.JPEG.yanggutour%2F210607_%2528%25BE%25E7%25B1%25B8%2529DMZ%25BE%25DF%25BB%25FD%25B5%25BF%25B9%25B0%25BB%25FD%25C5%25C2%25B0%25FC_s_%252821%2529.jpg"
                   title="양구수목원" width="200"/>
            </a>
            <a href="https://map.naver.com/p/entry/place/1547804013?lng=127.9907305&lat=38.1262907&placePath=%2Fhome&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MjlfMjAy%2FMDAxNjgyNjk5NTg5OTI4.oDRIrnljuoK6SHNuShUam0UCJN6uHH70ms4AjxJK-2wg.LALo-xBLTT9wKolwNiba_qWmZcrpLJaIlO-NZBLv5xcg.JPEG.keai1016%2F9.JPG"
                    title="리아숲 자연주의스토아" width="200"/></a>
        </div>
          )
        },
        {
          name: '속초군',
          coords: '284,89,307,80,309,95,287,94,305,76,307,80',
          boxId: 'attractionBox_sockcho',
          coontent:(
            <div id="attractionBox_sockcho">
            <a href="https://sokcho-central.co.kr/">
                <img src="https://sokcho-central.co.kr/img/img_about_1.jpg"
                    title="속초 중앙시장" width="200"/>
            </a>
    
            <a href="http://terracrab.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150925_28%2F1443165817808injjE_JPEG%2F166873504236232_3.jpeg"
                    title="태라크래팜" height="120" width="200"/>
            </a>
    
            
            <a href="https://map.naver.com/p/search/%EC%98%81%EA%B8%88%EC%A0%95/place/15085338?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfNjcg%2FMDAxNTI0NjA1NzY2NDg4.AWqSV0rXrXyLZ4Na36UKGX21rPXRbDAw0iBBPsfyu_Mg.0kF9RlS3nXqtAhkJLJsyJ4pe6OOic4ca8E9sSEkS6Nkg.JPEG.sandcastle44%2FIMG_9749.JPG%235616x3744"
             title="영금정" height="120" width="170"/></a>    
    
            
        </div>
    
          )
        },
        {
          name: '양양군',
          coords: '276,105,310,98,341,140,293,149,299,124',
          boxId: 'attractionBox_yungyung',
          content:(
            <div id="attractionBox_yungyung">
        <a href="https://map.naver.com/p/search/%ED%8F%AC%EB%A7%A4%ED%98%B8/place/15163371?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://www.gangwon.to/upload/board/BDMAIN03/thumb/ff915914-9c4e-48ad-9700-2ffeab83bae8.jpg"
                title="포매호" height="135" width="200"/></a>

        <a href="https://map.naver.com/p/search/%EC%96%91%EC%96%91%20%EB%B0%B0%EB%82%9A%EC%8B%9C/place/510280002?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dpll%2526from%253DPLACE_AD%2526n_ad_group_type%253D10%2526n_query%253D%2525EC%252596%252591%2525EC%252596%252591%2525EB%2525B0%2525B0%2525EB%252582%25259A%2525EC%25258B%25259C">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTlfMjc5%2FMDAxNTg5ODgzNzMyMjY5.oIdrPuNVRd5CkPn-mT8DsTZmE5eGTP6wnsowjgTlB7Qg.1ugeEZ17iudE6tDMK7qvQimRijuTlePd2-eI48NF_9wg.JPEG.donghae499%2F5.jpg"
                title="양양 배낚시" width="200"/></a>

        <a href="https://map.naver.com/p/entry/place/13491553?lng=128.7353877&lat=38.0213447&placePath=%2Fhome&entry=plt&searchType=place&c=15.44,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MTBfMjMy%2FMDAxNzE3OTgzMjM5NTU2.gf67nkf9knetVzbToJsMZF9Oh01gKHg9DHs65yiHqwUg.6n_OJ7049bkdXTx-edbfKDEiDsWXaG82b02mTzzOLwgg.JPEG%2F1717747234614.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
            title="하조대" width="180" height="150"/></a>
    </div>

          )
        },
        {
          name: '강릉군',
          coords: '309,170,342,150,387,203,386,227,359,219,328,229,345,188',
          boxId: 'attractionBox_Gangneung',
          content:(
            <div id="attractionBox_Gangneung">
        <a href="https://map.naver.com/p/entry/place/11491009?lng=128.7870593&lat=37.7096522&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_206%2F14409922037287ujfn_JPEG%2F11491009_2.jpg"
                title="대관령자연휴양림" width="200"/>
        </a>

        <a href="https://map.naver.com/p/entry/place/13491150?lng=128.8452235&lat=37.8692569&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjdfMjI3%2FMDAxNjU4OTA2NjQxMDQ5.NfvfRQWqegK0jY0BU8-1rK7vAycupSDjyEEP0tW7CEMg.E4ScOXx0AYm7U41r72S3-GSbG6mBpbHcsy5NE7ISLzUg.JPEG.eao0926%2F1658906637566.jpg&type=sc960_832"
                title="주문진 도깨비 촬영장소" width="200"/>
        </a>

        <a href="https://map.naver.com/p/search/%EA%B0%95%EB%A6%89%20%EC%95%84%EA%B8%B0%EB%8F%99%EB%AC%BC%EB%86%8D%EC%9E%A5/place/1848252796?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200918_62%2F1600397438777wYx0J_JPEG%2FCkyjGXDGplk88e1Xx7ikD8ir.jpg"
                title="아기동물농장" height="136" width="200"/></a>

    </div>
          )
        },
        {
          name: '홍천군',
          coords: '204,149,192,169,135,206,175,224,222,200,245,206,264,187,295,190,297,158,239,177',
          boxId: 'attractionBox_hongchun',
          content:(
            <div id="attractionBox_hongchun">
        <a href="https://map.naver.com/p/entry/place/13546184?lng=128.4698695&lat=37.8315553&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMzBfMjIg%2FMDAxNjk4NjI2ODE2MTM5.-8RxVkmWLDQ8f_2Aw9BcuSIxr_jZrRQ0VusbYbggGkQg.Kv-BsAcSAk448-cQmqsjGUPvsYbxmwGn3NCzKl9UgbEg.JPEG.daichung%2F20231028_095128.jpg"
        title="은행 나무 숲" height="150" width="200"/></a>

        <a href="https://www.alpacaworld.co.kr/">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDFfMTk4%2FMDAxNzE0NDg5OTcxMzk3.TDyh238PLFmzPdKF9vCunou_7zSw57dYkcTD4L15-b8g.hN7hU4jUPpEs6Mp7XVJtTaPXEiqbamkD3Gtfa-qrvXEg.JPEG%2FP20240429_101530287_0011DBEC-B60C-4BC5-80A8-0BD6B53924EB.JPG"
        title="알파카월드" width="200"/></a>
            
        <a href="https://campweek.co.kr/detail_info_1.php?detail_id=1000319">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150503_74%2Fcamping1983_14306522779928NLdi_JPEG%2FIMG_2309.jpg&type=sc960_832"
        title="까드돈 캠핑장" height="150"  width="180"/></a>    

        
    </div>
          )
        },
        {
          name: '횡성군',
          coords: '168,243,194,217,245,213,254,234,244,263,219,283,219,247,193,237',
          boxId: 'attractionBox_Hoengseong',
          content:(
            <div id="attractionBox_Hoengseong">
        <a href="https://luge.hsg.go.kr/kor/main/index.html">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5631%2F2020%2F08%2F26%2F0000015486_003_20200826103910301.jpg&type=sc960_832"
                title="횡성루지캠핑장" height="150" width="210"/>
        </a>

        <a href="http://xn--vh3b1l64u9pb68d9xkusfbqi.kr/mall/">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MTFfMTgw%2FMDAxNjg5MDE1MTI0NTk3._KTZNRYHDCECXwGpF1CsBlxX1TmoCHozeUmUb3nu-j0g.glz9OOu3B3MKZ7pS4OM5W3EfmSX-XilU_TebnI00Xacg.JPEG.0233122%2F20230707%25A3%25DF174729.jpg"
                title="병지방오토캠핑장" height="150" width="210"/>
        </a>

        <a href="https://map.naver.com/p/search/%ED%92%8D%EC%88%98%EC%9B%90%EC%84%B1%EB%8B%B9/place/13163313?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MThfMjQ1%2FMDAxNjYzNDYxNDA0NzMx.IZvOPaIcM6oiOEUT7s5H2GeLvrqU4F6UMoIjGOK7bTog.igLYG1U85tXyTM9rBMh_DDOo8n4u_mvB4Tf3_XGGY_Ug.JPEG.jau123%2F20220917%25A3%25DF120708.jpg&type=sc960_832"
             title="풍수원성당" height="150" width="200"/>
        </a>
    </div>

          )
        },
        {
          name: '평창군',
          coords: '330,190,329,211,296,234,292,255,305,287,263,270,255,225,267,201,296,199,306,175',
          boxId: 'attractionBox_Pyeongchang',
          content:(
            <div id="attractionBox_Pyeongchang">
            <a href="https://map.naver.com/p/search/%ED%8F%89%EC%B0%BD%20%EC%A0%84%EB%82%98%EB%AC%B4%EC%88%B2/place/15787284?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjRfMjM2%2FMDAxNjM1MDQ4NjMyNDU2.qmpr2OjPYSQK5mYb4poSCXtlkKOT7zXDZbTC-qwSqB0g.dBJT09g08dRzzVOcsBfa8bubGD7eM1DMzlcCA5Mhjy4g.JPEG.gksskgkssk44%2F20211020%25A3%25DF094614.jpg&type=sc960_832"
            title="전나무숲길" height="150" width="200"/></a>
    
            <a href="https://www.yangtte.co.kr/">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230227_273%2F1677460525934zcFeg_JPEG%2FDSC04460.JPG"
            title="대관령 양떼" height="152"  width="200"/></a>
    
            <a href="https://map.naver.com/p/entry/place/495711616?lng=128.2517209&lat=37.4779298&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191115_106%2F1573794935585uGpQM_JPEG%2F9zXCUbBP1hv6cVudiMLACa_1.jpg"
            title="평창보타닉가든" width="200" height="150"/></a>   
             
             
        </div>
          )
        },
        {
          name: '정선군',
          coords: '317,235,369,240,350,275,363,309,323,303,314,288,302,259',
          boxId: 'attractionBox_jangsun',
          content:(
            <div id="attractionBox_jangsun">
            <a href="https://map.naver.com/p/entry/place/20259866?lng=128.79085&lat=37.350933&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://www.gangwon.to/upload/board/BDMAIN03/thumb/e02b02fa-d1c6-4f75-a081-3b572c11da0b.jpg"
            title="화암동굴" width="200"/>
            </a>    
    
            <a href="https://www.jsimc.or.kr/layout/basic/page/page1/page12.html">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160309_105%2F1457506743519hQ7t5_JPEG%2F176253545166818_0.jpeg"
             title="솔향캠핑장" height="120" width="200"/></a>    
    
             <a href="https://map.naver.com/p/entry/place/37932682?lng=128.7879845&lat=37.3454703&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA3MTZfMTQx%2FMDAxNTMxNzI3MTg2OTcx._hnk4MetoTz0c1AVpLboypJvkDEfv4iezdOBRAOFCdMg.tU07WA1sJ49hDyAFl5pVxH3kNlz2N86HhRc8vUZOeDEg.PNG.gogw1234%2Funtitled.png&type=sc960_832"
             title="아기동물농장" height="123" width="180"/></a>
    
        </div>
          )
        },
        {
          name: '동해시',
          coords: '398,221,386,235,379,250,406,245',
          boxId: 'attractionBox_donghea',
          content:(
            <div id="attractionBox_donghea">
            <a href="https://www.chuamautocamping.or.kr/main/main.htm">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191227_204%2F1577416091572Jm4zY_JPEG%2F5FFb8H071_Jszf9c_mqNWOka.jpg"
            title="추암오토캠핑장" width="190" height="130" /></a>  
            
            <a href="https://www.mureungvalley.or.kr/main/main.htm">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140730_169%2Flukkenkorea_1406729337986QTUNF_JPEG%2F20_bfimg01.jpg&type=sc960_832"
            title="무릉계곡힐링캠핑장" width="200"/></a>  
            
            <a href="https://www.dh.go.kr/mubu/index.do">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211111_56%2F1636612749822D0peC_JPEG%2F1636612733153.jpg"
            title="무릉유천지" width="170" height="130"/></a>    
    
            <a href="http://www.samhwasa.or.kr/intro.php">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjNfMjgg%2FMDAxNzA1OTk3NTIyNjMw.lQIPLumInOodUBgZyVgZV_4EbZyqRbOavJG9rzPeBhEg.aPXEcUOS7W9JyxfvP6s6iKkmmi3le5Zgb0pXjuFhYQ0g.JPEG.designsigi%2FKakaoTalk_20240118_202009108_14.jpg&type=sc960_832"
             title="삼화사" width="200" height="130"/></a>   
        </div>   
          )
        },
        {
          name: '원주시',
          coords: '188,250,213,261,207,283,232,299,206,297,160,323,164,27ㅇ2,181,270,182,256',
          boxId: 'attractionBox_womju',
          content:(
            <div id="attractionBox_womju">
        <a href="https://map.naver.com/p/entry/place/11491070?lng=128.032561&lat=37.251221&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191017_254%2F1571296274229l2CDR_JPEG%2FuOFtiGHee7ORP_gUKFjkNlEu.jpg"
                title="치약산자연휴양림" height="160" width="230"/>
        </a>

        <a href="https://map.naver.com/p/entry/place/1300517365?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.8985911&lat=37.4252864&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MTBfNzcg%2FMDAxNzE4MDA0MjE4MTM0.OphCVceGz3GkOvJCWBMXrB36MOaqk3FRAqPHlbtiWfYg.QKPlX55PNEOfX9Vs9AjCY9YW36ZdoBgKnpkeCf_yQiAg.JPEG%2F1718003733321.jpg"
                title="자작나무 숲" height="160" width="240"/>
        </a>

    </div>
          )
        },
        {
          name: '삼척시',
          coords: '428,350,455,307,429,267,414,246,398,255,369,257,360,269,364,288,385,272,391,286,388,306,402,315,404,333',
          boxId: 'attractionBox_Samcheok',
          content:(
            <div id="attractionBox_Samcheok">
            <a href="https://www.foresttrip.go.kr/indvz/main.do?hmpgId=0244">
             <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_136%2F1441001045496T9kWJ_JPEG%2F106757576345155_1.jpg"
             title="검봉산자연휴양림" width="170" height="116"/></a>  
    
             <a href="http://www.museum.gangwon.kr/main/main.html">
            <img src="https://www.gangwon.to/upload/board/BDMAIN03/thumb/0d3ec7a7-e0e5-4f32-9c87-46cb7650a3ed.jpg"
            title="강원종합박물관" width="200" /></a> 
    
            <a href="https://map.naver.com/p/entry/place/1201957571?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=129.2376406&lat=37.3878326&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5582%2F2021%2F03%2F31%2F0000136811_001_20210331122109221.jpg&type=sc960_832"
            title="덕봉상 해안상태탐방로" width="200" height="115"/></a>     
    
        </div>
          )
        },
        {
          name: '영월군',
          coords: '254,269,243,282,252,321,277,331,337,356,368,322,312,311,298,291,260,287',
          boxId: 'attractionBox_yong',
          content:(
            <div id="attractionBox_yong">
        <a href="https://0333721119.modoo.at/">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MjJfMTY3%2FMDAxNzEzNzY5ODgzNDg3.mz0oRkL8tj4SeYGj1HV34y4w2iVbq6cFsG8spdVtnMwg.fXfUfoANndhxamUyMeUMgzY9y2Ad4QNWf8xA-nWKqlUg.JPEG%2F12_1.jpg&type=sc960_832" 
        title="패러글라이딩" width="200"/></a> 

        <a href="https://www.yao.or.kr:451/">
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F001%2F2019%2F12%2F05%2FAKR20191205090900062_01_i_20191205135408606.jpg&type=sc960_832"
         title="별마로천문대" width="200"/></a>   
       
        <a href="https://map.naver.com/p/entry/place/85425465?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.2596989&lat=37.2976486&c=15.00,0,0,0,dh">
        <img src="https://www.gangwon.to/upload/board/BDMAIN03/thumb/a2bc7ac9-f601-4e61-879a-23372c8373f3.jpg" 
        title="요산암 돌개구멍" width="200" height="135"/></a>    

    </div>
          )
        },
        {
          name: '태백시',
          coords: '382,278,387,310,397,326,374,332,371,307,374,290',
          boxId: 'attractionBox_Taebaek',
          content:(
            <div id="attractionBox_Taebaek">
            <a href="https://map.naver.com/p/entry/place/1478496202?lng=129.0432588&lat=37.1607559&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMzBfMjQg%2FMDAxNzAxMzE5Mzk4NTE0.paQKf6K_TRFKJda6et40cF4d-Tk8zOv1Ho4p2oO92kEg.2k2edmkrJvTiC7Rgv1KnTG07rOsBURAQAtptl7N3xQwg.JPEG.nanpei0109%2FDSC04336.JPG" 
            alt="태백" width="200"/></a>
    
            <a href="https://map.naver.com/p/entry/place/37829374?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=129.0430316&lat=37.1606527&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MDJfMTQ0%2FMDAxNDk4OTg5ODY3NTcw.azNq33x8TDt-tRPqMLsrOt8Evgw0xtrm9Op25r9wfHgg.n4jFuexbM3LUcJzl0QSWye8r5to612R2N2ZQMXK85ssg.JPEG.prahapub%2FIMG_0191.JPG&type=sc960_832" 
            alt="태백" width="170" height="115"/></a>
    
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

      const AutumnCont = {
        backgroundImage: `url(${AutumnBack})`,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 99.5%',
        minHeight:'100vh'
      }
      
    return(
   
        <div style={AutumnCont}>
        <Header/>
        <a href="/" target="_blank" rel="noopener noreferrer">
       <img
          src={Autumn}
          alt="봄 이미지"
          style={{
              position: 'absolute',
              top: '18px',
              left: '47%',
              width: '5%',
              height: '75px',
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
export default AutumnPage;