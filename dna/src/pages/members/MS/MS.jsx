import styles from "./MS.module.css";

function MS(){
  return(
    <>
      <div className={styles.msWrap}>
        <div className={styles.msBox}>
          <div className={styles.msTitle}>
            <h2>M.S. Students</h2>
            <div className= {styles.msLine1}></div>
            <div className= {styles.msLine2}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MS;