import React, { useRef, useEffect, useState } from 'react';
import styles from './rollup.module.css';

const RollUp = ({ children, className = '' }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.rollUp} ${visible ? styles.show : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default RollUp;
