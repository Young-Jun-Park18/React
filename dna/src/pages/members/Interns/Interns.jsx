import styles from "./Interns.module.css";
import { useState } from "react";
import RollUp from '../../../rollup'; // 경로 설정 주의

function Interns(){

  const [openedIndexes, setOpenedIndexes] = useState([]); // 여러 개 열리게 하기 위해 배열 사용
  
  const handleMouseEnter = (index) => {
    if (!openedIndexes.includes(index)) {
      setOpenedIndexes((prev) => [...prev, index]); // 이미 열려 있지 않다면 추가
    }
  };

  return(
    <>
      <div className={styles.uiWrap}>
        <div className={styles.uiBox}>
          <div className={styles.uiTitle}>
            <h2>Undergraduate Interns</h2>
            <div className= {styles.uiLine1}></div>
            <div className= {styles.uiLine2}></div>

            {/* 0.Woojin Lim  */}
            <div
              className={`${styles.uiIntroWrap} ${openedIndexes.includes(0) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
            >
              <div className={styles.uiPhoto}>
                <img src="../woojinlim.PNG" alt="임우진 사진" />
              </div>
              <div className={styles.uiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Woojin</span> Lim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Planned to join in the second semester of 2025 (early graduation)</li>
                        <li><span>Email</span>: @mju.ac.kr</li>
                        <li><a href="#"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Woojin Lim */}

            {/* 1. Jiwon Seo*/}
            <div
              className={`${styles.uiIntroWrap} ${openedIndexes.includes(1) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              <div className={styles.uiPhoto}>
                <img src="../jiwonseo.PNG" alt="서지원 사진" />
              </div>
              <div className={styles.uiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Jiwon</span> Seo</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Planned to join in the first semester of 2026 </li>
                        <li><span>Email</span>: @mju.ac.kr</li>
                        <li><a href="#"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Jiwon Seo */}          



            
          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Interns;