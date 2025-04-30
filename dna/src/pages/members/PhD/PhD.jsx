import { useState } from "react";
import styles from "./PhD.module.css";
import RollUp from '../../../rollup'; // 경로 설정 주의

function PhD() {
  const [openedIndexes, setOpenedIndexes] = useState([]); // 여러 개 열리게 하기 위해 배열 사용

  const handleMouseEnter = (index) => {
    if (!openedIndexes.includes(index)) {
      setOpenedIndexes((prev) => [...prev, index]); // 이미 열려 있지 않다면 추가
    }
  };

  return (
    <div className={styles.phWrap}>
      <div className={styles.phBox}>
        <div className={styles.phTitle}>
          <h2>Ph.D. Students</h2>
          <div className={styles.phLine1}></div>
          <div className={styles.phLine2}></div> 

          
          {/*----------------공통 부분 제외 학생부분 --------------*/}
          {/* 0. jiha kim */}
          <div
            className={`${styles.phIntroWrap} ${openedIndexes.includes(0) ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => handleMouseEnter(0)}
          >
            <div className={styles.phPhoto}>
              <img src="../jinhakim.png" alt="김지하 사진" />
            </div>
            <div className={styles.phIntro}>
              <RollUp>
                <div className={styles.name}>
                  <h1><span>Jiha</span> Kim</h1>
                  <br />
                  <div className={styles.scrollBox} data-lenis-prevent>
                    <ul>
                      <li>Ph.D./M.S. Combined Course (09/2020 ~ )</li>
                      <li>B.S. Dept. Computer Software at Korean Bible University, Seoul, South Korea</li>
                      <li>Research Interest: Security system, AI/ML modeling and prediction, Image classification</li>
                      <li><span>Email</span>: yaki5896@mju.ac.kr</li>
                      <li><a href="https://yaki-toki.github.io/"><span>Link</span>: Webpage</a></li>
                    </ul>
                  </div>
                </div>
              </RollUp>
            </div>
          </div>
          {/* jiha kim */}

          {/* 1. youngho kim */}
          <div
            className={`${styles.phIntroWrap} ${openedIndexes.includes(1) ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
          >
            <div className={styles.phPhoto}>
              <img src="../younghokim.PNG" alt="김영호 사진" />
            </div>
            <div className={styles.phIntro}>
              <RollUp>
                <div className={styles.name}>
                  <h1><span>Youngho</span> Kim</h1>
                  <br />
                  <div className={styles.scrollBox} data-lenis-prevent>
                    <ul>
                      <li>Ph.D./M.S. Combined Course (03/2021 ~ )</li>
                      <li>B.S. Dept. Computer Software at Korean Bible University, Seoul, South Korea</li>
                      <li>Research Interest: Al/ML modeling and prediction, Image classification, Intelligent system development</li>
                      <li><span>Email</span>:  yhkim98@mju.ac.kr</li>
                      <li><a href="https://kyh980909.github.io/"><span>Link</span>: Webpage</a></li>
                    </ul>
                  </div>
                </div>
              </RollUp>
            </div>
          </div>
          {/* youngho kim */}          

          {/* 2. deokjung kim */}
          <div
            className={`${styles.phIntroWrap} ${openedIndexes.includes(2) ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
          >
            <div className={styles.phPhoto}>
              <img src="../deokjungkim.PNG" alt="김덕정 사진" />
            </div>
            <div className={styles.phIntro}>
              <RollUp>
                <div className={styles.name}>
                  <h1><span>Deokjung</span> Kim</h1>
                  <br />
                  <div className={styles.scrollBox} data-lenis-prevent>
                    <ul>
                      <li>Ph.D. Course (09/2024 ~ )</li>
                      <li>M.S. </li>
                      <li>B.S. </li>
                      <li><span>Email</span>: @mju.ac.kr</li>
                      <li><a href="#"><span>Link</span>: Webpage</a></li>
                    </ul>
                  </div>
                </div>
              </RollUp>
            </div>
          </div>
          {/*deokjung kim*/}             
          
          {/* 3. younghoon kim */}
          <div
            className={`${styles.phIntroWrap} ${openedIndexes.includes(3) ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
          >
            <div className={styles.phPhoto}>
              <img src="../younghoonkim.PNG" alt="김영훈 사진" />
            </div>
            <div className={styles.phIntro}>
              <RollUp>
                <div className={styles.name}>
                  <h1><span>Younghoon</span> Kim</h1>
                  <br />
                  <div className={styles.scrollBox} data-lenis-prevent>
                    <ul>
                      <li>Ph.D. Course (09/2024 ~ )</li>
                      <li>M.S. </li>
                      <li>B.S. </li>
                      <li><span>Email</span>: @mju.ac.kr</li>
                      <li><a href="#"><span>Link</span>: Webpage</a></li>
                    </ul>
                  </div>
                </div>
              </RollUp>
            </div>
          </div>
          {/*younghoon kim*/}                     

          

        </div>
      </div>
    </div>
  );
}

export default PhD;
