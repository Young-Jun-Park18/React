import styles from './research.module.css';
import { Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Research(){

    // 경로가 바뀔 때마다 key를 변경해서 컴포넌트 재렌더링 유도
    const [animationKey, setAnimationKey] = useState(0);
    useEffect(() => {
      setAnimationKey(prev => prev + 1);
      // 만약 location.pathname = /Members/Professor 인데 이게 바뀌면 useEffect가 실행됨
    }, [location.pathname]);
  

  return(
    <>
      <div className={styles.researchBg}></div>
      <h2 className={styles.researchTitleText} key={animationKey}>Research</h2>
    </>
  );
};

export default Research;
