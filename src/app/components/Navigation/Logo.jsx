import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={`${styles.logo_container} ml-8`}>
      <div className={styles.rombo}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Logo;
