import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import '../styles/Header.css'; // 필요한 경우 스타일을 위한 CSS 파일을 추가하세요

const Header = ({customClass}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case'/special':
        return 'rgba(236, 184, 199)';
      case '/summer':
        return 'rgb(190, 207, 223)'; // 여름 색
      case '/Autumn':
        return 'rgb(199, 177, 153)'; // 가을 색
      case '/winter':
        return 'rgb(205, 221, 247)'; // 겨울 색
        
      default:
        return 'rgba(241, 250, 157, 0.8)'; // 기본 색
    }
  };


  return (
    <header
      style={{
        backgroundColor: getBackgroundColor()
      }}
    >
      <div
        className="menu-icon"
        onClick={toggleMenu}
        style={{
          transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {isMenuOpen ? '✕' : '☰'}
      </div>
      {isMenuOpen && (
        <div className="menu-items" id="menuItems">
          <Link to="/Spring">봄</Link>
          <Link to="/summer">여름</Link>
          <Link to="/Autumn">가을</Link>
          <Link to="/winter">겨울</Link>
          <Link to="/special">🎉특별전🎉</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
