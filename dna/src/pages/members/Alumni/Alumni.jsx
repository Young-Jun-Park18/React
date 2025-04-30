import styles from "./Alumni.module.css";
import { useState } from "react";
import RollUp from '../../../rollup'; // 경로 설정 주의

function Alumni(){

  const [openedIndexes, setOpenedIndexes] = useState([]); // 여러 개 열리게 하기 위해 배열 사용
  
  const handleMouseEnter = (index) => {
    if (!openedIndexes.includes(index)) {
      setOpenedIndexes((prev) => [...prev, index]); // 이미 열려 있지 않다면 추가
    }
  };
  return(
    <>
      <div className={styles.aiWrap}>
        <div className={styles.aiBox}>
          <div className={styles.aiTitle}>
            <h2>Alumni</h2>
            <div className= {styles.aiLine1}></div>
            <div className= {styles.aiLine2}></div>

            {/* 0.Gimoon Woo  */}
            <div
              className={`${styles.aiIntroWrap} ${openedIndexes.includes(0) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
            >
              <div className={styles.aiPhoto}>
                <img src="../gimoonwoo.PNG" alt="우기문 사진" />
              </div>
              <div className={styles.aiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Gimoon</span> Woo</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (03/2021 ~ 02/2023)</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: </li>
                        <li><span>Email</span>: gmwoo@mju.ac.kr</li>
                        <li><a href="https://gmwoo.tistory.com/"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Gimoon Woo */}

            {/* 1.Hyungbin Kim*/}
            <div
              className={`${styles.aiIntroWrap} ${openedIndexes.includes(1) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              <div className={styles.aiPhoto}>
                <img src="../hyungbinkim.PNG" alt="김형빈 사진" />
              </div>
              <div className={styles.aiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Hyungbin</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (03/2021 ~ 02/2023)</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: Federated Learning, Digital Health, Data Privacy</li>
                        <li><span>Email</span>: hbkim@mju.ac.kr</li>
                        <li><a href="https://hyungbinklm.tistory.com/"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Hyungbin Kim */}          

            {/* 2. Byungchan Kim */}
            <div
              className={`${styles.aiIntroWrap} ${openedIndexes.includes(2) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(2)}
            >
              <div className={styles.aiPhoto}>
                <img src="../byungchankim.PNG" alt="김병찬 사진" />
              </div>
              <div className={styles.aiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Byungchan</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Combined Course (03/2022 ~ 02/2024)</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: Wireless Communications, Wi-Fi, Performace Analysis, Optimization</li>
                        <li><span>Email</span>: bckim@mju.ac.kr</li>
                        <li><a href="#"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/*Byungchan Kim*/}             
            
            {/* 3. Jeena Kim */}
            <div
              className={`${styles.aiIntroWrap} ${openedIndexes.includes(3) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(3)}
            >
              <div className={styles.aiPhoto}>
                <img src="../jeenakim.PNG" alt="김지나 사진" />
              </div>
              <div className={styles.aiIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Jeena</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Combined Course (03/2022 ~ 02/2024)</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: Reinforcement Learning, UAV Network System</li>
                        <li><span>Email</span>: jnkim@mju.ac.kr</li>
                        <li><a href="https://github.com/JeenaKim99"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/*Jeena Kim*/}      

          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Alumni;