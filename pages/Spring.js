import React, { useState } from 'react';
import Header from '../constants/Header';
import Gangwon from '../assets/image/강원도.png';
import Spring from '../assets/image/Spring.png';


function SpringPage() {
  const [selectedBox, setSelectedBox] = useState(null); // selectedBox 상태 추가

  const locationData = [
    { name: '춘천시', coords: '129,121,172,137,195,129,198,151,169,170,151,192,118,191,136,152', boxId: 'attractionBox-chun', 
       content: (
        <div>
             <a href="http://epchun.kr/"><img src="http://epchun.kr/img/main/mainImg1.png" title="이디오피아" width="250"/></a>
        <a href="https://www.instagram.com/jadegardenkorea/?hl=ko">
        <img src="https://www.gangwon.to/upload/board/BDMAIN03/thumb/50b18166-f949-4160-9786-fd22ec7140ab.jpg"
                title="제이드가든" width="200"/></a>

        <a href="https://map.naver.com/p/entry/place/21693772?c=15.00,0,0,0,dh&placePath=/home">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDhfMTky%2FMDAxNzE3ODM4NTg3MTI2.KDxzN3ydbNMW1k9phiWqgvpl8GzI_J42wN0dq8EIVFwg.WjJH3lrBYh_Zepe4FVfc61r5QfLm8hi6BOJHOcZSnWsg.JPEG%2FE4A98BD2-B851-46D9-A253-21F095DAA17B.jpeg%3Ftype%3Dw1500_60_sharpen"
                title="하중도 생태공원" width="200"/></a>
        <a href="https://thefriends.co.kr/24">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MTBfMTM2%2FMDAxNzE3OTkzNzM2OTc1.B22jheJg7jsEuQDPT_WKiszSjknjgG34-MZgqD2hU_Eg.d81SMkNnE4m63qEK6-AWGA3EW1AIxJU4Rh7fRp5MyOAg.JPEG%2F20240610_125145.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                title="플레이정글" width="170"/></a>
        </div>
       )    
    },
    { name: '철원군', coords: '94,51,112,53,178,58,145,68,123,71,100,100,74,94,54,78,94,78', boxId: 'attractionBox_cheorwon',
      content: (
        <div>
          <a href="https://www.cwg.go.kr/tour/selectTourCntntsWebView.do?tourNo=386&key=1479&ctgry=12">
            <img src="https://lh3.googleusercontent.com/p/AF1QipMVeEZelUQsyTDOO-hm2Ct1u2K61U6NM05FQDA0=s680-w680-h510"
                 title="철원평화전망대" width="200" />
          </a>
          <a href="https://www.cwg.go.kr/tour/selectTourCntntsWebView.do?tourNo=384&key=1479&ctgry=12">
            <img src="http://www.rafting114.co.kr/new2017/images/main/img1_3.gif" title="노동당사" width="200" />
          </a>
        </div>
      )
    },
    { name: '화천군', coords: '123,83,104,119,131,109,169,127,173,97,174,69', boxId: 'attractionBox_hwachun',
        content:(
            <div id="attractionBox_hwachun"  >
        <a href="https://map.naver.com/p/search/%EC%95%84%EB%A5%BC%ED%85%8C%EB%A7%88%EC%88%98%EB%AA%A9%EC%9B%90/place/85795977?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MTFfMjAz%2FMDAxNTk0NDMwODYwMjE3._4ayQCLkVIHkDyAwLPcUREc3dlW2gzzS9hsq7gjmke8g.5NJAQPgqbrHBNumiOPrwMyaG8ffWkGBfPkxMOkYL31cg.JPEG.jhj8637%2FDSC03793.jpg&type=a340"
                title="아를테마수목원" width="300"/></a>
    </div>
        )
     },
    { name: '고성군', coords: '258,17,248,48,294,83,299,63,283,35', boxId: 'attractionBox_gosung',
        content:(
            <div id="attractionBox_gosung">
        <a href="https://map.naver.com/p/entry/place/1733536811?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.5136672&lat=38.3440382&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjlfMTEw%2FMDAxNjcyMjgyNTgyODM0.S5Jn7Mn_1iw32xHFh_aIch62qIbA3aaOfIra7tLYzw8g.NYXhBjNHZVZ8RgHl55kgwnPbTH4Mj-yma8QuaWZP3mUg.JPEG%2F20221228_135041.jpg%3Ftype%3Dw1500_60_sharpen"
                title="송지호밀리터리 체험장" width="300"/></a>
    </div>
        )
     },
    { name: '인제군', coords: '237,50,223,91,225,121,203,135,229,152,264,164,292,124,270,111,268,80', boxId: 'attractionBox_inje',
        content:(
            <div id="attractionBox_inje">
        <a href="https://map.naver.com/p/entry/place/32876222?lng=128.1678328&lat=38.0605052&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A6743359FD71601E"
                title="인제 나르샤파크" width="200"/></a>

        <a href="https://www.speedium.co.kr/">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200425_203%2F1587793206950DdUJF_JPEG%2Fu-4m9p_jJNrFiWpZ_xaISjdc.jpg"
                title="인제 스피디움" width="200"/></a>

    </div>
        )
     },
    { name: '양구군', coords: '183,55,228,59,219,79,216,118,187,117,179,75', boxId: 'attractionBox_yanggu',
        content:(
            <div id="attractionBox_yanggu">
        <a href="https://map.naver.com/p/entry/place/1428180242?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.0691744&lat=38.1385294&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230220_91%2F1676884037446KCLvv_JPEG%2F20230220_091926.jpg "
            title="광치계곡무장애나눔길" width="200"/>
        </a>
        <a href="https://map.naver.com/p/entry/place/453305511?c=15.00,0,0,0,dh&placePath=/home">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMTRfOTYg%2FMDAxNzEwMzgxODI0MTk0.jZelNDV5QCq55xPKxS52T5CAqOXqCAjlgA2sh8MU-Wcg.x8rCfiuKE46vLsFhdSmIHoOho5W4tEzuiyT4J_0b7WQg.JPEG%2F051A7616.jpg"
                title="청춘양구농촌체험캠프" width="200" height="150"/></a>
    </div>
        )
     },
    { name: '속초군', coords: '284,89,307,80,309,95,287,94,305,76,307,80', boxId: 'attractionBox_sockcho',
        content:(
            <div id="attractionBox_sockcho">
        <a href="https://map.naver.com/p/search/%EB%B0%94%EB%8B%A4%EC%A0%95%EC%9B%90/place/1404347219?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230214_172%2F1676359827926z8QWe_JPEG%2F1.jpg"
                title="바다정원" width="200"/>
        </a>

        <a href="https://home-ticket.co.kr/aliveheart/">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDVfMTEx%2FMDAxNzE3NTY4Mzg3MTIz.2PFEXK_M4K_7OsLYJ65DldYEX0CxgUBmCvNSo_PAqoAg.wv1HRzE16n5YJ6uH9y1BqtxNW1Aln9e5EbwEDC7mkXwg.JPEG%2F20240120%25A3%25DF151314.jpg"
                title="얼라이브하트" height="120" width="200"/>
        </a>
    </div>
        )
     },
    { name: '양양군', coords: '276,105,310,98,341,140,293,149,299,124', boxId: 'attractionBox_yungyung',
        content:(
            <div id="attractionBox_yungyung">
            <a href="https://map.naver.com/p/search/%EC%96%91%EC%96%91%20%EC%98%A4%EC%83%89%20%EC%95%BD%EC%88%98/place/19493967?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.74,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MjZfMjgy%2FMDAxNzE2NjU2MDUxNTIw.9_sQjCbNVez5zycQp1bch5dveWFjpjhjMt98Ro965cIg.w5I6RDAC_mbfvzJWmAVS8Z9xomvFXEhlgTX5xh0t37Mg.JPEG%2F20210814_124120.jpg"
                    title="양양 오색 약수" width="200"/></a>
    
            <a href="https://map.naver.com/p/search/%EC%96%91%EC%96%91%20%EB%B0%B0%EB%82%9A%EC%8B%9C/place/510280002?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dpll%2526from%253DPLACE_AD%2526n_ad_group_type%253D10%2526n_query%253D%2525EC%252596%252591%2525EC%252596%252591%2525EB%2525B0%2525B0%2525EB%252582%25259A%2525EC%25258B%25259C">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTFfMjQz%2FMDAxNTg5MTk1OTk4ODU1.3HGRQqk31yCuTaMZy56rlDh_OMQEqzBnO1ChzvJroZUg.5REUHJaHi9GX6-jF3pmAsUAS2nUiKSowwXoHDC_DmlUg.JPEG.donghae499%2F1.jpg"
                    title="양양 배낚시" width="200"/></a>
    
            <a href="https://map.naver.com/p/entry/place/19581933?lng=128.4652408&lat=38.1190361&placePath=%2Fphoto&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170921_289%2F1505967961343J1Ttm_JPEG%2FIEO3AcgsvvGTw7AttvwLy1Id.jpg"
                    title="대청봉" width="190" height="200"/></a>
        </div>
        )
     },
    { name: '강릉군', coords: '309,170,342,150,387,203,386,227,359,219,328,229,345,188', boxId: 'attractionBox_Gangneung',
        content:(
            <div id="attractionBox_Gangneung">
            <a href="https://kr.artemuseum.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240502_67%2F1714640360768hLldc_JPEG%2F22%2527arteMIV%25B0%25AD%25B8%25AAII07ST_017-SP_%2528flower%252Cwide%252C%25C3%25D6%25C8%25AB%25B1%25E2%25C0%25FC%25BC%25D2%25C1%25A4%2529_%25BE%25C6%25B8%25A3%25B6%25BC%25B9%25C2%25C1%25F6%25BE%25F6%252C%25B0%25AD%25B8%25AA_1r_re.jpg"
                    title="아르떼뮤지엄" width="300"/>
            </a>
    
            <a href="https://www.instagram.com/g_gallerybobs/">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MTlfMjkw%2FMDAxNjg0NDY1MDU0MDE2.CrJxS6Qrt1ZGwFA8ysIVLNvHsAfH6Ev9lXIKgZNlo5Eg.CLjI6KBTHZj18DMLpTu1yM09i1RN5o5pHitL38jjHVYg.JPEG.yunhoyam%2F20230325%25A3%25DF143413.jpg&type=sc960_832"
                    title="갤러리밥스" width="200"/>
            </a>
    
            <a href="http://aranaby.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230116_32%2F16738562352338dAXg_JPEG%2Fbanner_x.jpg"
                    title="아라나비 바다하늘자전거" width="200"/></a>
    
        </div>
        )
     },
    { name: '홍천', coords: '204,149,192,169,135,206,175,224,222,200,245,206,264,187,295,190,297,158,239,177', boxId: 'attractionBox_hongchun',
        content:(
            <div id="attractionBox_hongchun">
            <a href="https://hyvaapj.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20240524_108%2F1716512312941CtKAl_JPEG%2Fbanner_x.jpg"
                    title="휘바핀란드" width="200"/>
            </a>
    
            <a href="https://www.hongcheon.go.kr/mugunghwa/index.php">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MTNfMjY5%2FMDAxNzE1NTI4MTgyNzUx.Ry35aQXLWaHQtLqoL8zx-95UooFjh9deNsG4qc2wBiIg._MB45oS1CSdS2CrT3BhDf49lwDK9CC8kFMu2nEoCBlQg.JPEG%2F20240512_101617.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                    title="무궁화 수목원" height="190" width="200"/></a>
    
            <a href="https://map.naver.com/p/entry/place/13491546?lng=128.1603021&lat=37.8321333&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131008_52%2Fcagycagy_1381236077997vtskb_JPEG%2FDSC_4277.JPG%23601x900"
                    title="가령폭포" height="180" width="180"/></a>
        </div>
        )
     },
    { name: '횡성', coords: '168,243,194,217,245,213,254,234,244,263,219,283,219,247,193,237', boxId: 'attractionBox_Hoengseong',
        content:(
            <div id="attractionBox_Hoengseong">
        <a href="https://www.instagram.com/norang_cafe/">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjRfMjQ3%2FMDAxNzA2MTA2MzQ1Njc1.8_uCieAtnDlr3XwFvtQmgrhMIHqzK4pXh5HV00dPkiAg.mqGLLARFXy5mGcdkgPTBHKi5BFrUu4Atku47xa0cVgMg.JPEG.noah1210%2F20240121%25A3%25DF142443.jpg"
                title="노랑공장" height="195" width="210"/>
        </a>

        <a href="https://map.naver.com/p/entry/place/1289867491?lng=128.1554189&lat=37.417283&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230606_179%2F1686013580367Ikco4_JPEG%2F20230605_163850.jpg"
                title="이가본때" height="200"/>
        </a>

        <a href="https://map.naver.com/p/search/%EC%B2%AD%ED%83%9C%EC%82%B0%EC%9E%90%EC%97%B0%ED%9C%B4%EC%96%91%EB%A6%BC/place/11555542?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210713_200%2F1626181307026EH5Cs_JPEG%2FdwxyZ_EeNB94jmE69fHc8VEJ.jpg"
                title="둔내자연휴양림" height="200"/>
        </a>
    </div>
        )
     },
    { name: '평창군', coords: '330,190,329,211,296,234,292,255,305,287,263,270,255,225,267,201,296,199,306,175', boxId: 'attractionBox_Pyeongchang',
        content:(
            <div id="attractionBox_Pyeongchang">
            <a href="http://www.animalfarming.co.kr/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMjBfMjA4%2FMDAxNzAwNDQzOTg2MTM2.aVpC9wv26Iq5j904u91VSKgX6t5o7qXa0ILUMsGgecQg.yIL5WFQN5QMvuzK_EXymIhy1XDQQnm_OmCP2omFRr48g.JPEG%2F20231119_162339.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                    title="숲속에 동물농장" width="180" height="160"/>
            </a>
    
            <a href="http://www.hyoseok.net/">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTRfMjgx%2FMDAxNjk0Njc0NjMxMzE5.90xgfyC0djzYGfVbU84-sfbHGWSg9W36J_xzJodcIaYg.V0P5_vCfC7Vy7rIcfxmJqCsiEFmpCYjk-tpNL802Mc8g.JPEG.yyyy5428%2F%25C8%25BF%25BC%25AE%25B9%25AE%25C8%25AD%25C1%25A6-6.jpg"
                    title="효석달빛언덕" height="160" width="200"/>
            </a>
    
            <a href="https://blog.naver.com/colorpotato">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200517_81%2F15896447411076bIdj_JPEG%2FYQSYR8NjWqrm_gtJQjA1q-wc.jpg"
                    title="바람마을 치즈체험장" width="200"/>
            </a>
        </div>
    
        )
     },
    { name: '정선군', coords: '317,235,369,240,350,275,363,309,323,303,314,288,302,259', boxId: 'attractionBox_jangsun',
        content:(
            <div id="attractionBox_jangsun">
            <a href="https://www.ariihills.co.kr/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzA4MjdfMTQ2%2FMDAxNjkzMTA3MTM3ODMx.2LuFYs90I-vw50xKPF0a9aUkSgB0udEh20Cz3mOiGfwg.eUMeNtdiHYLg5lm6rHnHbODB_l3Tcn-18C_JgGTEiV0g.JPEG%2F1693107080596.jpg%3Ftype%3Dw1500_60_sharpen"
                    title="스카이워크 짚와이어" height="170" width="190"/></a>
        
    
            <a href="https://www.jsimc.or.kr/layout/basic/page/page1/page05.html">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MDdfOTQg%2FMDAxNTU5ODkzNDM4NTIz.f_V8z0wX2Ka2iUvAaPNNQ8iw7b99Htmbug6RlkatUtwg.A3CK9FIHLdj-7U11fkGogKeeAJWwkzzTV1Nbs9R9uuIg.JPEG.joara127%2F%25C1%25A4%25BC%25B1%25B3%25EE%25B0%25C5%25B8%25AE_%25C8%25AD%25BE%25CF%25C4%25AB%25C6%25AE%25C3%25BC%25C7%25E8%25C0%25E509.jpg%231600x901"
                    title="화암카트체험장" height="170" width="200"/></a>
        
    
            <a href="https://www.romyziangarden.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230602_232%2F1685685371117XnKuW_JPEG%2F2.jpg"
                    title="로지미안" height="170" width="200"/>
            </a>
        </div>
        )
     },
    { name: '동해시', coords: '398,221,386,235,379,250,406,245', boxId: 'attractionBox_donghea',
        content:(
            <div id="attractionBox_Taebaek">
        <a href="https://map.naver.com/p/entry/place/1536710863?lng=128.9638974&lat=37.2155351&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTZfNTQg%2FMDAxNjkyMTk2ODU5NDM5.YgZMYamC_jzr3ZO4gouCZHc8g0M7-s0JVXj2YkhyBVYg.szoF2Y0b-h-nMbZq4nB84HlfQIgBABRPGswemYAcg3wg.JPEG.dlwm08%2FIMG_7331-Pano.jpg"
                title="매봉산 바람의 언덕" height="130" width="200"/>
        </a>

        <a href="https://map.naver.com/p/search/%ED%83%9C%EB%B0%B1%20%EA%B5%AC%EC%99%80%EC%9A%B0%EB%A7%88%EC%9D%84%20%EA%B3%A0%EC%9B%90%EC%9E%90%EC%83%9D%EC%8B%9D%EB%AC%BC%EC%9B%90%20%ED%95%B4%EB%B0%94%EB%9D%BC%EA%B8%B0/place/406079531?c=15.00,0,0,0,dh&placePath=/photo">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MDZfMTIw%2FMDAxNjkxMzA5ODI1Mjgy.ZVLpiUrV97W9bGmVKOmSXMQrR5Sk1Y2_RGHbCX1QD8og.XpYDKvpXFA8tnWckoRpoSAXz0cx1bDo4DhuDOTThWa0g.JPEG.rokaf5233%2F%25C5%25C2%25B9%25E9_%25B1%25B8%25BF%25CD%25BF%25EC21.jpg"
                title="고원자생식물원" height="130" width="190"/>
        </a>

        <a href="https://map.naver.com/p/entry/place/13289605?lng=128.9909865&lat=37.173079&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTBfMTkz%2FMDAxNzE1Mjg0NDI0ODI4.CBPrxGtBQ9OkozhyRlyYIZ1XjETuz0Nv-7cETT5XvqUg.hzsJPsEI9YWemeQVrt3UDpCfVS_ZRKpsbmvZJHckh3Mg.JPEG%2FP1237226.JPG"
                title="황지연못" height="130" width="200"/>
        </a>

    </div>
        )
     },
     { name: '원주시', coords: '188,250,213,261,207,283,232,299,206,297,160,323,164,272,181,270,182,256', boxId: 'attractionBox_womju',
        content: (
          <div id="attractionBox_womju">
            <a href="https://map.naver.com/p/entry/place/15659469?c=15.00,0,0,0,dh&placePath=/home">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTdfNDYg%2FMDAxNTA1NjQ0MTI5MTk2.rkRvwahJ2QRa9oKTUlD4nxMJxJe41qRWPiApHo4QXe4g.RgxAb0MXlmHs4AL1rBSzNUXnth4XoUgaKc1Mcx-FVwIg.JPEG.chanjoojeon%2F20170913_131254.jpg%23900x675"
                   title="장미공원" height="186" width="200" />
            </a>
      
            <a href="https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=2602974">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDlfMzMg%2FMDAxNzE1MjU1NjI4MjI4.DxHl9qx8Zv03WzDAApNQC4CtWsSoYUzbMjIzoHkgaWYg.6C2jueoAkB8gR9jLSd_a_h35c1BDeNS-NujeURWJf2og.PNG%2Fimage.png&type=sc960_832"
                   title="양수골꽃양귀비축제" width="200" />
            </a>
      
            <a href="https://map.naver.com/p/entry/place/13163306?lng=128.087775&lat=37.2124929&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
              <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_232%2F1441000590901Knl3I_JPEG%2F116253484331068_0.jpg"
                   title="용소막성당" height="190" />
            </a>
          </div>
        )
      },
      
    { name: '삼척시', coords: '428,350,455,307,429,267,414,246,398,255,369,257,360,269,364,288,385,272,391,286,388,306,402,315,404,333', boxId: 'attractionBox_Samcheok',
        content:(
            <div id="attractionBox_Samcheok">
           
            <a href="https://map.naver.com/p/entry/place/13491053?lng=129.2305168&lat=37.0765888&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA0MjhfMjUy%2FMDAxNzE0MzEzNzQxMTQ4.JurrocZtlH7RYRM5pCscll0WnC6nV_HoZIzOqTRzZQAg.ajKVtLuK0OAbHoCH6_sPRSbTBkfEUFN4lEPkynSoSEog.JPEG%2F20240406_150232.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                    title="응봉산" height="156" width="160"/>
            </a>
    
            <a href="https://map.naver.com/p/entry/place/1786153608?lng=129.1092398&lat=37.2596876&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAyMTVfMTEy%2FMDAxNTUwMTk1MDMxNTkx.aodYNse77ZCnHnCXirQTtg2RSBN8rMAA9Vo3tEMO_-cg.AGfCQOfp7AZFJWvC66Jz3oC5MXbK3aLF3jE80uR5JBcg.JPEG.samcheokcityhall%2FKakaoTalk_20190211_150634953.jpg%23960x720"
                    title="무건리 이끼폭포" height="160" width="150"/>
            </a>
    
            <a href="https://map.naver.com/p/entry/place/13491473?lng=129.3172194&lat=37.2880371&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA0MTVfNjcg%2FMDAxNzEzMTgxNDE3NjU4.UabJG1b3yy6aHGDhvCWt2somVauqOr7yrJzWJo_z6q4g.FBefdBYiYw4jruChJlNWxny2wJNyjG5QzbBXsz09XGAg.JPEG%2F20240414_134812.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                    title="장호항" height="150" width="150"/>
            </a>
    
            <a href="https://www.choochoopark.com/">
                <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzExMDJfNzEg%2FMDAxNjk4OTE0NjY2NzA0.TFBhCYRPpLW-1Py-mdyYfBkHOdxtIV4VPIMjhQIV_xMg.VOCTMtHObImpGtSEh7IADc1r2F_Ud2A_Uy5k6HVU7XUg.JPEG%2F1698709418112.jpg%3Ftype%3Dw1500_60_sharpen"
                   title="하이원 추추파크" width="170"/>
            </a>
        </div>
    
        )
     },
    { name: '영월군', coords: '254,269,243,282,252,321,277,331,337,356,368,322,312,311,298,291,260,287', boxId: 'attractionBox_yong',
        content:(
            <div id="attractionBox_yong">
        <a href="https://map.naver.com/p/entry/place/1370700346?lng=128.4017886&lat=37.1745684&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fnaverbooking-phinf.pstatic.net%2F20210818_212%2F1629262980004FLI6O_JPEG%2Fimage.jpg"
                title="펫힐링달빛동물원" width="195" height="200"/></a>

        <a href="https://map.naver.com/p/entry/place/11663857?lng=128.4444&lat=37.1756595&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDNfNzQg%2FMDAxNzE3MzkzODA2NzI5.9PqCGeZYrbSQ3NeU2kq_AYff3NXVhYgm3N-2mD-U37Ig.OhB-4TH35yFcpLW5NfI_od9h16K_KWs5B5gHfK1wHDgg.JPEG%2F20240602_113928.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                title="청령포" height="200" width="200"/>
        </a>

        <a href="https://www.museumhaslla.com/ypark_main#ypark1">
            <img src="https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA2MDdfNzAg%2FMDAxNzE3NzUxMjM2MjU3.uMyqBIuWvvN7-TVlUV2pI9gmGG4g3B2VsN43kN2YF3sg.6LgF-2L72ZsIWLMsJFpmF7bsbUvabGqzBURMGBignGkg.JPEG%2F20240607_102202.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
                title="젊은 달 와이파크" height="195" width="200"/>
        </a>

        <a href="https://map.naver.com/p/search/%EC%98%81%EC%9B%94%20%EC%97%B0%EB%8B%B9%EC%9B%90/place/1001060790?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">
            <img src="https://imgnews.pstatic.net/image/014/2022/03/08/0004799750_001_20220308095204097.jpg?type=w647"
                title="연당원" height="195" hwidth="210"/></a>

    </div>
        )
     },
    { name: '태백시', coords: '382,278,387,310,397,326,374,332,371,307,374,290', boxId: 'attractionBox_Taebaek',
        content:(
            <div id="attractionBox_Taebaek">
            <a href="https://map.naver.com/p/entry/place/1536710863?lng=128.9638974&lat=37.2155351&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTZfNTQg%2FMDAxNjkyMTk2ODU5NDM5.YgZMYamC_jzr3ZO4gouCZHc8g0M7-s0JVXj2YkhyBVYg.szoF2Y0b-h-nMbZq4nB84HlfQIgBABRPGswemYAcg3wg.JPEG.dlwm08%2FIMG_7331-Pano.jpg"
                    title="매봉산 바람의 언덕" height="130" width="200"/>
            </a>
    
            <a href="https://map.naver.com/p/search/%ED%83%9C%EB%B0%B1%20%EA%B5%AC%EC%99%80%EC%9A%B0%EB%A7%88%EC%9D%84%20%EA%B3%A0%EC%9B%90%EC%9E%90%EC%83%9D%EC%8B%9D%EB%AC%BC%EC%9B%90%20%ED%95%B4%EB%B0%94%EB%9D%BC%EA%B8%B0/place/406079531?c=15.00,0,0,0,dh&placePath=/photo">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MDZfMTIw%2FMDAxNjkxMzA5ODI1Mjgy.ZVLpiUrV97W9bGmVKOmSXMQrR5Sk1Y2_RGHbCX1QD8og.XpYDKvpXFA8tnWckoRpoSAXz0cx1bDo4DhuDOTThWa0g.JPEG.rokaf5233%2F%25C5%25C2%25B9%25E9_%25B1%25B8%25BF%25CD%25BF%25EC21.jpg"
                    title="고원자생식물원" height="130" width="190"/>
            </a>
    
            <a href="https://map.naver.com/p/entry/place/13289605?lng=128.9909865&lat=37.173079&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTBfMTkz%2FMDAxNzE1Mjg0NDI0ODI4.CBPrxGtBQ9OkozhyRlyYIZ1XjETuz0Nv-7cETT5XvqUg.hzsJPsEI9YWemeQVrt3UDpCfVS_ZRKpsbmvZJHckh3Mg.JPEG%2FP1237226.JPG"
                    title="황지연못" height="130" width="200"/>
            </a>
    
        </div>
        )
     }
  ];

  const handleClick = (name, boxId) => {
    if (selectedBox === boxId) {
      setSelectedBox(null);
    } else {
      setSelectedBox(boxId);
    }
  };

  const Springcont = {
    backgroundColor: 'antiquewhite',
    minHeight: '100vh',
  }

  return (
    <div style={Springcont}>
      <Header/>
      <a href="/" >
     <img
        src={Spring}
        alt="봄 이미지"
        style={{
            position: 'absolute',
            top: 0,
            left: '47%',
            width: '5%',
            height: 'auto',
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

export default SpringPage;
