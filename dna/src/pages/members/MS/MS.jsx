import styles from "./MS.module.css";
import { useState } from "react";
import RollUp from '../../../rollup'; // 경로 설정 주의

function MS(){

    const [openedIndexes, setOpenedIndexes] = useState([]); // 여러 개 열리게 하기 위해 배열 사용
  
    const handleMouseEnter = (index) => {
      if (!openedIndexes.includes(index)) {
        setOpenedIndexes((prev) => [...prev, index]); // 이미 열려 있지 않다면 추가
      }
    };

  return(
    <>
      <div className={styles.msWrap}>
        <div className={styles.msBox}>
          <div className={styles.msTitle}>
            <h2>M.S. Students</h2>
            <div className= {styles.msLine1}></div>
            <div className= {styles.msLine2}></div>

            {/* 0.Geonhui Kim  */}
            <div
              className={`${styles.msIntroWrap} ${openedIndexes.includes(0) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(0)}
            >
              <div className={styles.msPhoto}>
                <img src="../geonhuikim.PNG" alt="김건희 사진" />
              </div>
              <div className={styles.msIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Geonhui</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (09/2023 ~ )</li>
                        <li>B.S. Dept. Computer Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: Al/ML modeling and prediction, Federated Learning</li>
                        <li><span>Email</span>: ghkim919@mju.ac.kr</li>
                        <li><a href="https://sites.google.com/view/geonhui-kim"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Geonhui Kim */}

            {/* 1. Hwan Kim*/}
            <div
              className={`${styles.msIntroWrap} ${openedIndexes.includes(1) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(1)}
            >
              <div className={styles.msPhoto}>
                <img src="../hwankim.PNG" alt="김 환 사진" />
              </div>
              <div className={styles.msIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Hwan</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (09/2023 ~ )</li>
                        <li>B.S. Dept. Computer Software at Korean Bible University, Seoul, South Korea</li>
                        <li><span>Email</span>: @mju.ac.kr</li>
                        <li><a href="#"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/* Hwan Kim */}          

            {/* 2. Chaeyun Lim */}
            <div
              className={`${styles.msIntroWrap} ${openedIndexes.includes(2) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(2)}
            >
              <div className={styles.msPhoto}>
                <img src="../chaeyunlim.PNG" alt="임채윤 사진" />
              </div>
              <div className={styles.msIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Chaeyun</span> Lim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (03/2025 ~ )</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest : VR/AR</li>
                        <li><span>Email</span>: dlacodbs0627@mju.ac.kr</li>
                        <li><a href="https://github.com/ChaeDoll"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/*Chaeyun Lim*/}             
            
            {/* 3. Seohyeon Kim */}
            <div
              className={`${styles.msIntroWrap} ${openedIndexes.includes(3) ? styles.hoverTriggered : ""}`}
              onMouseEnter={() => handleMouseEnter(3)}
            >
              <div className={styles.msPhoto}>
                <img src="../seohyeonkim.PNG" alt="김서현 사진" />
              </div>
              <div className={styles.msIntro}>
                <RollUp>
                  <div className={styles.name}>
                    <h1><span>Seohyeon</span> Kim</h1>
                    <br />
                    <div className={styles.scrollBox} data-lenis-prevent>
                      <ul>
                        <li>M.S. Course (03/2025 ~ )</li>
                        <li>B.S. Dept. Information and Communication Engineering at Myongji University Gyeonggi-do, South Korea</li>
                        <li>Research Interest: Multimodal, Image classification</li>
                        <li><span>Email</span>: seohy2on@mju.ac.kr</li>
                        <li><a href="#"><span>Link</span>: Webpage</a></li>
                      </ul>
                    </div>
                  </div>
                </RollUp>
              </div>
            </div>
            {/*Seohyeon Kim*/}      
          </div>
        </div>
      </div>
    </>
  )
}

export default MS;