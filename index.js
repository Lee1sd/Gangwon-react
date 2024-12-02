import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from '../src/pages/main';
import CW from '../src/pages/cw';
import reportWebVitals from './reportWebVitals';
import Chunchenon from '../src/pages/chuncheon';
import Yanggu from '../src/pages/Yanggu';
import Paloho from '../src/pages/paloho';
import SpecialTime from '../src/pages/special';
import Spring from './pages/Spring';
import Summer from './pages/Summer';
import Autumn from './pages/Autumn';
import Winter from './pages/Winter';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cw" element={<CW />} />
      <Route path='/chuncheon' element={< Chunchenon/>}/>
      <Route path='/paloho' element={< Paloho/>}/>
      <Route path='/Yanggu' element={< Yanggu/>}/>
      <Route path='/special' element={<SpecialTime/>}></Route>
      <Route path='/Spring' element={<Spring/>}></Route>
      <Route path='/Summer' element={<Summer/>}></Route>
      <Route path='/Autumn' element={<Autumn/>}></Route>
      <Route path='/Winter' element={<Winter/>}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
