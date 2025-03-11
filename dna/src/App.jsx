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



// 변수말고 const [ , ] = useState(''); 사용하는 이유 : 변수처럼 사용할 수 있으면서 값이 변경되면 자동으로 html에 렌더링 되기 때문이다.
const [mouseHover, setHover] = useState(false);


//  function setMouseOn(){
//    setHover(true);
//  }  이 코드와 같은 기능이다 하지만 react에서는 화살표 함수가 참조를 더욱 더 안정적으로 하기 때문에 화살표 함수를 더 많이 쓴다.
const setMouseOn = () => {
  setHover(true);
}
const setMouseOff = () => {
  setHover(false);
}



  return (
    <>
      {/* ----------header---------- */}
      <div id = 'header'>
        <div class = "hearderInner">
          <div>
            {/* <FontAwesomeIcon/> 이것은 컴포넌트 입니다. size = "nx" 속성으로 n배 키울 수 있고, color = ""로 색상 변경 가능*/}
            <FontAwesomeIcon icon={faHexagonNodes} className = 'icon'/>
          </div>
          <div className = 'pgName'>
            DNA
          </div>
          <nav className = 'navBar'>
            <ul className = 'navList'>
              {/*자식 요소로 Professor와 Students가 들어가야함*/}
              {/* onMouseOver = { 함수이름 }은 React 문법으로서, 마우스가 함수 요소 위로 올라가면 이벤트 발생시킴*/}
              <li className = 'navElement' onMouseOver = { setMouseOn } onMouseOut = { setMouseOff }  >Members</li>
              <li className = 'navElement'>Research</li>
              <li className = 'navElement'>Projects</li>
              {/*자식 요소로 Journal papers와 conference papers와 Patents가 들어가야함*/}
              <li className = 'navElement' onMouseOver = { setMouseOn } onMouseOut = { setMouseOff }>Publications</li>
              {/*자식 요소로 News와 Photos가 들어가야함*/}
              <li className = 'navElement' onMouseOver = { setMouseOn } onMouseOut = { setMouseOff }>History</li>
            </ul>
          </nav>
        </div>
      </div>


      {/* ------header의 자식 요소들------*/}
      <div id = 'navChild' style = {{ display : mouseHover ? 'block' : 'none'}}>
        ddddd
      </div>


      

    </>
  )
}




export default App
