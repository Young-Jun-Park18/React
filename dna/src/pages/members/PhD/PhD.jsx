import styles from "./PhD.module.css";

function PhD(){
  return(
    <>
      <div className={styles.phWrap}>
        <div className={styles.phBox}>
          <div className={styles.phTitle}>
            <h2>Ph.D. Students</h2>
            <div className= {styles.phLine1}></div>
            <div className= {styles.phLine2}></div>

            {/* 공통 적용 해제 부분 */}
            <div className={styles.stWrap1}>
              <div className={styles.leftBox1}>
                <div className={styles.stPhoto1}>
                  <img src="../jinhakim.png" alt="김진하 학생 증명사진" />
                </div>
                <div className={styles.stName1}>
                  <h3>Jiha Kim</h3>
                </div>
              </div>
              <div className={styles.introWrap1}>
                <h4 className={styles.introText1}>여기는 소개하는 자리입니다. </h4>
              </div>  
            </div>
            {/* 공통 적용 해제 부분 */}





          </div>
        </div>
      </div>
    
    
    </>
  )
}

export default PhD;