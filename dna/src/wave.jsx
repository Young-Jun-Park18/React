import styles from './wave.module.css';
import { useEffect, useRef } from 'react';

const Wave = () => {

  /* 
    리액트에서 Hook(훅)은 기능을 재사용할 수 있게 해주는 함수이다.
    1. useRef(): DOM 요소나 값을 기억하고 싶을 때 사용하는 훅
    2. useState(): 상태를 저장하고 업데이트하는 데 쓰는 훅
    3. useEffect(): 컴포넌트가 화면에 렌더링된 뒤에 어떤 작업을 할 때 쓰는 훅
  */
  const textRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver() = 브라우저에서 제공하는 API -> 스크롤을 할 때, 특정 요소가 화면에 나타나면 이벤트를 발생시키는 함수
    const observer = new IntersectionObserver(
      // [entry] = 배열 구조 분해 할당 : IntersectionObserver 콜백 함수에서 들어오는 인자를 배열로 받겠다는 의미.
      ([entry]) => {
        // 만약 화면에 요소가 보인다면,
        if (entry.isIntersecting) {
          // 애니메이션 시작
          textRef.current.classList.add(styles.animate);
        }
      },
      {
        threshold: 1, // 100% 이상 보일 때 애니메이션 시작
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);


  useEffect(() => {
  
    const observer = new IntersectionObserver(([entry]) => {if (entry.isIntersecting) {textRef.current.classList.add(styles.animate);}},{ threshold: 1 } );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <p ref={textRef} className={styles.introducetext2}>
      We are looking for motivated{" "}
      <span>p</span><span>o</span><span>s</span><span>t</span>
      <span>d</span><span>o</span><span>c</span><span>t</span>
      <span>o</span><span>r</span><span>a</span><span>l</span>{" "}
      <span>s</span><span>c</span><span>h</span><span>o</span>
      <span>l</span><span>r</span><span>s</span>{" "}
      <span>a</span><span>n</span><span>d</span>{" "}
      <span>g</span><span>r</span><span>a</span><span>d</span>
      <span>u</span><span>a</span><span>t</span><span>e</span>{" "}
      <span>s</span><span>t</span><span>u</span><span>d</span>
      <span>e</span><span>n</span><span>t</span><span>s</span>{" "}
      with backgrounds in electrical engineering, wireless communications,{" "}
      AL/ML analysis, and other related fields. Undergraduates are also{" "}
      welcome to apply to gain research experience. Please send your{" "}
      <span>C</span><span>V</span>{" "}and{" "}
      <span>a</span><span>c</span><span>a</span><span>d</span>
      <span>e</span><span>m</span><span>i</span><span>c</span>{" "}
      <span>t</span><span>r</span><span>a</span><span>n</span>
      <span>s</span><span>c</span><span>r</span><span>i</span>
      <span>p</span><span>t</span><span>s</span>{" "}
      to{" "}
      <span>h</span><span>h</span><span>p</span><span>a</span>
      <span>r</span><span>k</span><span>@</span><br></br><span>m</span>
      <span>j</span><span>u</span><span>.</span><span>a</span>
      <span>c</span><span>.</span><span>k</span><span>r</span>
    </p>
  );
};

export default Wave;
