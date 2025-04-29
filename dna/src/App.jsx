import React from 'react';
import { useState, useEffect, useRef } from 'react' // state 문법 사용하기 위해 useState import 하기
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome 컴포넌트 가져오기
import { faHexagonNodes, faLocationDot, faEnvelopeOpenText, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons"; // DAN, 위치, 이메일, 전화 아이콘
import Slide from './slide.jsx'; // slide 컴포넌트, export한 함수 이름을 slide.js 파일로부터 import 해온다.
import Wave from './wave.jsx'; // textWave 컴포넌트 import
import {Routes, Route, Link, Navigate, Outlet, useLocation} from 'react-router-dom';
import Members from './pages/members/Members.jsx'; // Members 페이지 컴포넌트 사용을 위한 import
import Professor from './pages/members/Professor/Professor.jsx';
import PhD from './pages/members/PhD/PhD.jsx';
import MS from'./pages/members/MS/MS.jsx';
import Interns from './pages/members/Interns/Interns.jsx';
import Alumni from './pages/members/Alumni/Alumni.jsx';
import Lenis from '@studio-freight/lenis' // 홈페이지 스크롤 부드럽게 해주는 라이브러리


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
          src="https://naver.me/F74UPBVn"
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
  const locateRef = useRef(null);
  const emailRef = useRef(null);
  const callRef = useRef(null);

  const [locateVisible, setLocateVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [callVisible, setCallVisible] = useState(false);

  const location = useLocation(); 

  // 롫업 애니메이션
  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.8 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    setLocateVisible(false);
    setEmailVisible(false);
    setCallVisible(false);

    createObserver(locateRef, setLocateVisible);
    createObserver(emailRef, setEmailVisible);
    createObserver(callRef, setCallVisible);
  }, [location.pathname]); 


  // 부드럽게 스크롤 기능
  useEffect(() => {
    const lenis = new Lenis({
      // duration이 클수록 부드럽고 느리게 전환됨 
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return ( //app() 함수 return 시작
    <>
      {/* ----------------------header---------------------- */}
      <div id = 'header'>
        <div className = "headerInner">
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
                  Welcome to <span>DAN</span> Lab.
                </p>
                <Wave />{/* text wave effect */}

              </div>
            </div>
          </div>

          <div className="contact-wrap">
            <img src="./contactBg5.png" alt="contactUs 배경이미지"/>
            <div className="contact-box">

              <div className='contact-bg'>
                <div className="contact-title">
                  <h1>CONTACT <span>US</span></h1>
                </div>

                <div className={`contact-locate fade-in ${locateVisible ? 'visible' : ''}`} ref={locateRef}>
                  <div className="contact-locate-icon">
                    <FontAwesomeIcon icon={faLocationDot} className = 'ct-icon'/>
                  </div>
                  <div className="contact-locate-text">
                    <h2>Location:</h2>
                    <p>Natural Science Campus: 116 Myongji-ro, Cheoin-gu, Yongin-si, Gyeonggi-do, 17058, South Korea <br></br>Room 5543, Engineering Building 5 </p>
                  </div>
                </div>

                <div className={`contact-email fade-in ${emailVisible ? 'visible' : ''}`} ref={emailRef}>
                  <div className="contact-email-icon">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className = 'ct-icon'/>
                  </div>
                  <div className="contact-email-text">
                    <h2>Email:</h2>
                    <p>danlab5502@gmail.com</p>
                  </div>
                </div>

                <div className={`contact-call fade-in ${callVisible ? 'visible' : ''}`} ref={callRef}>
                  <div className="contact-call-icon">
                  <FontAwesomeIcon icon={faMobileScreenButton} className = 'ct-icon'/>
                  </div>
                  <div className="contact-call-text">
                    <h2>Call:</h2>
                    <p>031-330-6766</p>
                  </div>
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
        <Route path = "/Members" element = { <Members/> }>
          {/* index element = Navigate to = "" 를 이용해서 기본경로를 설정가능 */}
          {/*이중 route에서는 경로 슬래쉬가 빠짐*/}
          <Route index element={<Navigate to="Professor" replace />} /> 
          <Route path = "Professor" element = {<Professor/>}></Route>
          <Route path = "PhD" element = {<PhD/>}></Route>
          <Route path = "MS" element = {<MS/>}></Route>
          <Route path = "Interns" element = {<Interns/>}></Route>
          <Route path = "Alumni" element = {<Alumni/>}></Route>
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