// 이미지가 5초마다 자동으로 슬라이드 되는 캐러셀 파트


import { useState, useEffect } from 'react';
import styles from './slide.module.css';


const Slide = () => {
// 이미지 리스트 (출처 : https://www.piclumen.com/에서 무료로 ai 임시 이미지 생성)
  const images = [
    '/sample1.png',
    '/sample3.png',
    '/sample2.png',
    '/sample4.png',
    '/sample5.png'
  ];

  // 현재 보여줄 사진의 index를 state로 만들기 위한 currentIndex(초기상태 0) 
  const [currentIndex, setCurrentIndex] = useState(0);
  // 이미지 슬라이드시 부드러운 효과를 위한 fade(초기상태 true)
  const [fade, setFade] = useState(true);

  // 1. useEffect( () => {}, [] )는 부수적인 효과를 설정할 때 사용한다.
  //    {} 안에 실행할 내용을 넣고, [] 안에 언제 실행할지를 넣는다.
  //    빈 배열을 넣으면 처음 렌더링될 때 한 번만 실행된다.
  //    clearInterval() 함수로 제동을 걸어줘야 5초마다 무한히 COUNT 되는 누수를 막을 수 있다.
  // 2. setInterval( () => {}, time ) 함수는 일정 시간마다 특정 작업을 반복해주는 함수
  // 3. prevIndex는 내가 만든 변수일 뿐이고 화살표 함수를 사용.
  //    currentIndex의 현재 값인 0이 자동으로 prevIndex에 할당되고, 
  //    (prevIndex + 1) % images.length 이 값을 5초 뒤에반환하라는 함수임
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout( () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500);

    }, 5000); 

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return(
    <>
    {/*여기서 className을 = {styles.mainBg}로 바꿔줘야 모듈 css 파일이 적용됨*/}
    <div className={styles.mainBg}>
      <img 
        src={images[currentIndex]}
        alt="슬라이드 이미지" 
        className = {fade ? styles.fadeIn : styles.fadeOut} 
        />
    </div>
    </>
  );
  

};

// slide.js 파일을 app.jsx에서 사용하기 위해 여기서 export default 사용할 변수나 함수; 를 해줘야한다.
export default Slide; 