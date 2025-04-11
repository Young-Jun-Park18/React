import styles from "./Professor.module.css";

function Professor(){
  return(
    <>
      <div className= {styles.professorWrap}>
        <div className= {styles.professorBox}>
          <div className= {styles.professorTitle}>
            <h2>Professor</h2>
            <div className= {styles.professorLine1}></div>
            <div className= {styles.professorLine2}></div>
            <div className={styles.professorIntroWrap}>
              <div className={styles.professorPhoto}>
                <img src="/profH.jpg" alt="박현희 교수님 사진" />
              </div>
              <div className={styles.professorIntro}>
                내용이 추가될 예정입니다
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Professor;