import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome 컴포넌트 가져오기
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons"; // 사용할 아이콘 가져오기

{/* 
    아이콘 : Font-awesome 이용
    출처 : https://fontawesome.com/search?q=chart&o=r&ic=free&s=solid&ip=classic
    이용 방법1 : 터미널에 패키지설치 -> npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    이용 방법2 : 컴포넌트 import -> import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    이용 방법3 : 내가 쓸 아이콘 import -> import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons";
    이용 방법4 : return() 함수 안에서 컴포넌트 추가 -> <FontAwesomeIcon icon={faHexagonNodes} size="2x" color="blue" />
  */}



function App() {

  return (
    <>
      {/* ----------------------header---------------------- */}
      <div id = 'header'>
        <div class = "hearderInner">
          <div>
            {/* <FontAwesomeIcon/> 이것은 컴포넌트 입니다. size = "nx" 속성으로 n배 키울 수 있고, color = ""로 색상 변경 가능*/}
            <FontAwesomeIcon icon={faHexagonNodes} className = 'icon'/>
          </div>
          <div className = 'pgName'>
            <a href = '#' >DNA</a>
          </div>
          <nav className = 'navBar'>
            <ul className = 'navList'>
              {/*자식 요소로 Professor와 Students가 들어가야함*/}
              
              <li className = 'navElement'>
                <a href = "#">Members</a>
              </li>
              <li className = 'navElement'>
                <a href = "#">Research</a>
              </li>
              <li className = 'navElement'>
                <a href = "#">Projects</a>
              </li>
              {/*자식 요소로 Journal papers와 conference papers와 Patents가 들어가야함*/}
              <li className = 'navElement'>
                <a href = "#">Publications</a>
              </li>
              {/*자식 요소로 News와 Photos가 들어가야함*/}
              <li className = 'navElement'>
                <a href = "#">History</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* --------------main background img ----------------*/}
      <div className="main-bg">
        <img src= '/mjuChangjo1.webp' alt="창조관 외부" />
      </div>
      

    </>
  )
}




export default App