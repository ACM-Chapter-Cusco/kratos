"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Problem from "./components/Problem";
import Hints from "./components/Hints";
import CodeEditor from "./components/CodeEditor";
import { ReactLenis } from "lenis/react";
import styles from "./components/Contest.module.css";
import problemsData from "./data/problems.json";

const ContestPage = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const problems = problemsData.problems;

  const handleProblemChange = (index) => {
    setCurrentProblem(index);
  };

  const currentProblemData = problems[currentProblem];

  return (
    <ReactLenis root>
      <div className={styles.contest_container}>
        <Header delay={0} />
        
        <main className={styles.main_content} role="main" aria-label="Contest problem content">
          <Problem 
            problemData={currentProblemData}
            currentIndex={currentProblem}
            totalProblems={problems.length}
            onNavigate={handleProblemChange}
          />
          <Hints hints={currentProblemData.hints} />
          <CodeEditor 
            problemId={currentProblemData.id}
            codeExamples={currentProblemData.code}
          />
        </main>

        <nav className={styles.problem_nav} role="navigation" aria-label="Problem navigation">
          {problems.map((problem, index) => (
            <button 
              key={problem.id}
              className={`${styles.problem_dot} ${index === currentProblem ? styles.active_problem : ''}`}
              onClick={() => handleProblemChange(index)}
              aria-label={`Go to problem ${problem.id}`}
              aria-current={index === currentProblem ? 'page' : undefined}
            >
              {index === currentProblem && (
                <span className={styles.problem_letter}>{problem.id}</span>
              )}
            </button>
          ))}
        </nav>

        <div className={styles.background_text} aria-hidden="true">
          <div className={styles.rotated_text_container}>
            <div className={styles.cuscontest_text}>CUSCONTEST XX</div>
          </div>
          <div className={styles.vertical_bar}></div>
          <div className={styles.vertical_row_left}>
            <Image 
              src="/contest/play.svg" 
              alt="Play icon" 
              width={6} 
              height={20}
            />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default ContestPage;
