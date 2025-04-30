import { useState } from "react";
import styles from "./PhD.module.css";
import RollUp from '../../../rollup'; // 경로 설정 주의

function PhD() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.phWrap}>
      <div className={styles.phBox}>
        <div className={styles.phTitle}>
          <h2>Ph.D. Students</h2>
          <div className={styles.phLine1}></div>
          <div className={styles.phLine2}></div>

          {/* jiha kim */}
          <div
            className={`${styles.phIntroWrap} ${hovered ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => setHovered(true)}
          >
            <div className={styles.phPhoto}>
              <img src="../jinhakim.png" alt="김진하 학생 사진" />
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

          {/* jiha kim */}
          <div
            className={`${styles.phIntroWrap} ${hovered ? styles.hoverTriggered : ""}`}
            onMouseEnter={() => setHovered(true)}
          >
            <div className={styles.phPhoto}>
              <img src="../jinhakim.png" alt="김진하 학생 사진" />
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

          

        </div>
      </div>
    </div>
  );
}

export default PhD;
