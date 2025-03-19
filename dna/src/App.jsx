import { useState, useEffect } from 'react' // state 문법 사용하기 위해 useState import 하기
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


  // 이미지 리스트 (출처 : https://www.piclumen.com/에서 무료로 ai 임시 이미지 생성)
  const images = [
    '/sample1.png',
    '/sample3.png',
    '/sample2.png',
    '/sample4.png',
    'sample5.png'
  ];

  // 현재 보여줄 사진의 index를 state로 만들기(초기상태 0) 
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. setInterval( () => {}, time ) 함수는 일정 시간마다 특정 작업을 반복해주는 함수
  // 2. prevIndex는 내가 만든 변수일 뿐이고 화살표 함수를 사용.
  //    currentIndex의 현재 값인 0이 자동으로 prevIndex에 할당되고, 
  //    (prevIndex + 1) % images.length 이 값을 5초 뒤에반환하라는 함수임
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);


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

      {/* --------------main slide img ----------------*/}
      <div className="main-bg">
        <img src={images[currentIndex]} alt="슬라이드 이미지" />
      </div>
      

    </>
  )
}




export default App