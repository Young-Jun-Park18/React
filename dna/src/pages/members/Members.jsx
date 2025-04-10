import styles from './Members.module.css';
import {Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
// useLocation은 현재 경로를 확인할 수 있게 도와주는 라이브러리

function Members(){

  const location = useLocation(); /// 현재 내 위치를 확인해주는 변수

  return(
    <>
      <div className={styles.membersBg}>
      </div>
      <nav className={styles.membersBarWrap}>
        <div className={styles.membersBar}>
          <ul className={styles.membersSelect}>
             {/* 현재 저장된 내 위치경로가 /Members/Professor가 맞으면 className이 active, 아니면 빈칸 */}
             <li className={location.pathname === "/Members/Professor" ? styles.active : ""}>
              <Link to="/Members/Professor" className={styles.membersLink}>Professor</Link>
            </li>
            <li className={location.pathname === "/Members/PhD" ? styles.active : ""}>
              <Link to="/Members/PhD" className={styles.membersLink}>Ph.D. Students</Link>
            </li>
            <li className={location.pathname === "/Members/MS" ? styles.active : ""}>
              <Link to="/Members/MS" className={styles.membersLink}>M.S. Students</Link>
            </li>
            <li className={location.pathname === "/Members/Interns" ? styles.active : ""}>
              <Link to="/Members/Interns" className={styles.membersLink}>Undergraduate Interns</Link>
            </li>
            <li className={location.pathname === "/Members/Alumni" ? styles.active : ""}>
              <Link to="/Members/Alumni" className={styles.membersLink}>Alumni</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2 className={styles.membersTitleText}>Members</h2>



      <div className={styles.pagesArea}>
        <Outlet/> {/* 이 위치에서 각 탭의 내용을 보여줌 */}
      </div>

    
    
    
    
    
    
    </>
  );
};

export default Members;