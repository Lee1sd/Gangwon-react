import React, { useState } from 'react';
import '../styles/main.css'; // Adjust the import according to your file structure
import '../styles/me.css';
import MainImage from '../assets/image/main.jpg';
import Header from '../constants/Header';
import {Link } from 'react-router-dom';


const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  const carouselItems = [
    {
      src: 'http://tourdb.gwd.go.kr/img/1024/additional/2016/01/11/AM0003_I_01.JPG',
      alt: '춘천 대첩',
      link: './chuncheon',
      title: '춘천대첩',
    },
    {
      src: 'https://www.dmz.go.kr/images/link/board/thumnail/2014/201407221806018996_319x240.jpg',
      alt: '양구 펀치볼',
      link: './Yanggu',
      title: '양구 펀치볼',
    },
    {
      src: 'https://www.cwg.go.kr/DATA/tour/22/thumb/p_20210107033841890_iCUm.jpg',
      alt: '철원 백마고지',
      link: './cw',
      title: '철원 백마고지',
    },
    {
      src: 'https://tour.ihc.go.kr/upload/sensitivity/sensitivity_1_20220513_1.jpg',
      alt: '파로호 대첩',
      link: './paloho',
      title: '지역별 행사',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div>
     <Header/>

      <div className="image-container">
        <img src={MainImage} alt="Main Visual" />
      </div>

      <div className="carousel">
        <div className="carousel-header">
          <h1 className="carousel-logo">강원도 history</h1>
        </div>
        <div className="carousel-inner">
          <button className="carousel-button left" onClick={prevSlide}>&#10094;</button>
          <div className="carousel-items" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
            {carouselItems.map((item, index) => (
              <div className="carousel-item" key={index}>
              <Link to={item.link}>
                <img src={item.src} alt={item.alt} className="carousel-image" />
              </Link>
              <p className="carousel-title">{item.title}</p>
            </div>
            ))}
          </div>
          <button className="carousel-button right" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>

      <footer style={{ width: '100%', height: '100px', background: 'rgba(241, 250, 157, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }}>
        <div>
          <h5>주식회사 ccbc | 대표: 이건희 <br />
            CALL 033 - 256 - 0823 <br />
            주소: 강원도 춘천시 한림대학길 1</h5>
        </div>
      </footer>
    </div>
  );
};

export default Main;
