import React from 'react';
import { useState, useEffect } from 'react' // state 문법 사용하기 위해 useState import 하기
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome 컴포넌트 가져오기
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons"; // DAN 아이콘 가져오기
import { faLocationDot, faEnvelopeOpenText, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons"; // 위치, 이메일, 전화 아이콘
import Slide from './slide.jsx'; // slide 컴포넌트, export한 함수 이름을 slide.js 파일로부터 import 해온다.
import Wave from './wave.jsx'; // textWave 컴포넌트 import
import {Routes, Route, Link} from 'react-router-dom';

{/* 
    아이콘 : Font-awesome 이용
    출처 : https://fontawesome.com/search?q=chart&o=r&ic=free&s=solid&ip=classic
    이용 방법1 : 터미널에 패키지설치 -> npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    이용 방법2 : 컴포넌트 import -> import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    이용 방법3 : 내가 쓸 아이콘 import -> import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
    이용 방법4 : return() 함수 안에서 컴포넌트 추가 -> <FontAwesomeIcon icon={faHexagonNodes} size="2x" color="blue" />
  */}

  
  const NaverMapIframe = () => { // 명지대학교 용인캠퍼스 5공학관 위치 지도 
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://map.naver.com/v5/entry/place/19283275?c=14141503.7854272,4511767.4172622,15,0,0,0,dh&"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen
        ></iframe>
      </div>
    );
  };


function App() {
  return (
    <>
      {/* ----------------------header---------------------- */}
      <div id = 'header'>
        <div className = "hearderInner">
          <div>
            {/* <FontAwesomeIcon/> 이것은 컴포넌트 입니다. size = "nx" 속성으로 n배 키울 수 있고, color = ""로 색상 변경 가능*/}
            <FontAwesomeIcon icon={faHexagonNodes} className = 'icon'/>
          </div>
          <div className = 'pgName'>
            <Link to = "/"><a href = '#' >DAN</a></Link>
          </div>
          <nav className = 'navBar'>
            <ul className = 'navList'>
              {/*자식 요소로 Professor와 Students가 들어가야함*/}
              <Link to = "/Members">
                <li className = 'navElement'><a href = "#">Members</a></li>
              </Link>
              <Link to = "/Research">
                <li className = 'navElement'><a href = "#">Research</a></li>
              </Link>
              <Link to = "/Projects">
                <li className = 'navElement'><a href = "#">Projects</a></li>
              </Link>
              {/*자식 요소로 Journal papers와 conference papers와 Patents가 들어가야함*/}
              <Link to = "/Publications">
                <li className = 'navElement'><a href = "#">Publications</a></li>
              </Link>
              {/*자식 요소로 News와 Photos가 들어가야함*/}
              <Link to = "/History">
                <li className = 'navElement'><a href = "#">History</a></li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {/*------------------------Routes 관리 시작---------------------- */}
      <Routes>
          {/*----------------------- Main Page Route Start ---------------------- */}
        <Route path = "/" element = {
        <>
         
          <Slide />{/* main slide img */}

          <div className="main-typo-wrap">{/* main typo */}
            <div className = "main-typo">
              <h2 className = "mju-typo1">명지대학교</h2>
              <h1 className = "mju-typo2">데이터분석 및 네트워킹 연구실</h1>
            </div>
            <h3 className="mju-typo3">Data Analysis and Networking Lab. @ Myongji University</h3>
          </div>

          <div className ='introduce-wrap'> {/* introduce */}  
            <div className="introduce-box">
              <div className="introduce">
                <img src="./mjuLogo.svg" alt="명지대 로고" className='mjuLogo'/>
              </div>
              <div className="introduce-text">
                <p className="introduce-text1">
                  Welcome to DAN Lab.
                </p>
                <Wave />{/* text wave effect */}

              </div>
            </div>
          </div>

          <div className="contact-wrap">{/* contact us */}
            <div className="contact-box">

              <div className="contact-title">
                <h1>CONTACT US</h1>
              </div>

              <div className="contact-locate">
                <div className="contact-locate-icon">
                  <FontAwesomeIcon icon={faLocationDot} className = 'ct-icon'/>
                </div>
                <div className="contact-locate-text">
                  <h2>Location:</h2>
                  <p>Natural Science Campus: 116 Myongji-ro, Cheoin-gu, Yongin-si, Gyeonggi-do, 17058, South Korea</p>
                </div>
              </div>

              <div className="contact-email">
                <div className="contact-email-icon">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} className = 'ct-icon'/>
                </div>
                <div className="contact-email-text">
                  <h2>Email:</h2>
                  <p>danlab5502@gmail.com</p>
                </div>
              </div>

              <div className="contact-call">
                <div className="contact-call-icon">
                 <FontAwesomeIcon icon={faMobileScreenButton} className = 'ct-icon'/>
                </div>
                <div className="contact-call-text">
                  <h2>Call:</h2>
                  <p>031-330-6766</p>
                </div>
              </div>
                
              <div className="contact-map">
                <NaverMapIframe/> {/* 명지대 5공학관 지도 컴포넌트 */}
              </div>

            </div>
          </div>
        </>
        }>
        </Route>
        {/*----------------------- Main Page Route End ---------------------- */}


        {/*--------------------- Members Page Route Start ------------------- */}
        <Route path = "/Members" element = { <div> Mebers 아직 구현 안 했음 </div>}>
        
        </Route>
         {/*--------------------- Members Page Route End -------------------- */}


        {/*--------------------- Research Page Route Start ------------------ */}
        <Route path = "/Research" element = { <div> Research 아직 구현 안 했음 </div>}>
        
        </Route>
         {/*--------------------- Research Page Route End ------------------- */}


        {/*--------------------- Projects Page Route Start ------------------ */}
        <Route path = "/Projects" element = { <div> Projects 아직 구현 안 했음 </div>}>
        
        </Route>
         {/*--------------------- Projects Page Route End ------------------- */}


        {/*------------------- Publications Page Route Start ---------------- */}
        <Route path = "/Publications" element = { <div> Publications 아직 구현 안 했음 </div>}>
        
        </Route>
         {/*------------------- Publications Page Route End ----------------- */}


        {/*------------------- History Page Route Start ---------------- */}
        <Route path = "/History" element = { <div> History 아직 구현 안 했음 </div>}>
        
        </Route>
         {/*------------------- History Page Route End ----------------- */}
      </Routes>
    

    </>
  )
}




export default App