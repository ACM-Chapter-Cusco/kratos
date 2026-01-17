"use client";

import Examples from "./Examples";
import styles from "./Contest.module.css";

const Problem = ({ problemData, currentIndex, totalProblems, onNavigate }) => {
  if (!problemData) return null;

  return (
    <section className={styles.problem_section}>
      {/* Mobile Navigation */}
      <div className={styles.mobile_nav}>
        <button 
          className={styles.nav_arrow}
          onClick={() => onNavigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous problem"
        >
          ←
        </button>
        
        <h1 className={styles.problem_title}>
          {problemData.id}. {problemData.title}
        </h1>
        
        <button 
          className={styles.nav_arrow}
          onClick={() => onNavigate(currentIndex + 1)}
          disabled={currentIndex === totalProblems - 1}
          aria-label="Next problem"
        >
          →
        </button>
      </div>

      {/* Desktop Title */}
      <h1 className={`${styles.problem_title} ${styles.desktop_title}`}>
        {problemData.id}. {problemData.title}
      </h1>
      
      <div className={styles.problem_limits}>
        time limit per test {problemData.timeLimit}<br/>
        memory limit per test {problemData.memoryLimit}
      </div>
      
      <div className={styles.problem_content}>
        <div className={styles.problem_description}>
          {problemData.description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <section className={styles.section}>
          <h2 className={styles.section_title}>Input</h2>
          <p className={styles.section_text}>{problemData.input}</p>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.section_title}>Output</h2>
          <p className={styles.section_text}>{problemData.output}</p>
        </section>

        <Examples 
          inputData={problemData.examples.input}
          outputData={problemData.examples.output}
        />
      </div>
    </section>
  );
};

export default Problem;
