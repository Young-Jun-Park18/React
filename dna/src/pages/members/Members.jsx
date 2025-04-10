import styles from './Members.module.css';
import {Routes, Route, Link, Outlet} from 'react-router-dom';

function Members(){
  return(
    <>
      <div className={styles.membersBg}></div>
      <nav className={styles.membersBarWrap}>
        <div className={styles.membersBar}>
          <ul className={styles.membersSelect}>
            <li><Link to="/Members/Professor">Professor</Link></li>
            <li><Link to="/Members/PhD">Ph.D. Students</Link></li>
            <li><Link to="/Members/MS">M.S. Students</Link></li>
            <li><Link to="/Members/Interns">Undergraduate Interns</Link></li>
            <li><Link to="/Members/Alumni">Alumni</Link></li>
          </ul>
        </div>
      </nav>

      <div className={styles.pagesArea}>
        <Outlet/> {/* 이 위치에서 각 탭의 내용을 보여줌 */}
      </div>

    
    
    
    
    
    
    </>
  );
};

export default Members;