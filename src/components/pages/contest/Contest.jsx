"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CopyIcon } from "@/lib/icons/svgs/CopyIcon";
import { AngleDownIcon } from "@/lib/icons/svgs/AngleDownIcon";
import { PlayIcon } from "@/lib/icons/svgs/PlayIcon";
import { RevealCodeIcon } from "@/lib/icons/svgs/RevealCodeIcon";
import styles from "./Contest.module.css";

const Contest = () => {
  const [activeLanguage, setActiveLanguage] = useState('Python');
  const [showTemas, setShowTemas] = useState(false);
  const [showPista1, setShowPista1] = useState(false);
  const [showPista2, setShowPista2] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(0);

  const problems = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div className={styles.contest_container}>
      <div className={styles.main_content}>
        {/* Problem Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.problem_section}
        >
          <div className={styles.problem_title}>{problems[currentProblem]}. Team</div>
          
          <div className={styles.problem_limits}>
            time limit per test 2 seconds<br/>
            memory limit per test 256 megabytes
          </div>
          
          <div className={styles.problem_content}>
            <div className={styles.problem_description}>
              One day three best friends Petya, Vasya and Tonya decided to form a team and take part in programming contests. Participants are usually offered several problems during programming contests. Long before the start the friends decided that they will implement a problem if at least two of them are sure about the solution. Otherwise, the friends won't write the problem's solution.<br/><br/>
              This contest offers n problems to the participants. For each problem we know, which friend is sure about the solution. Help the friends find the number of problems for which they will write a solution.
            </div>
            
            {/* Input Section */}
            <div className={styles.section}>
              <div className={styles.section_title}>Input</div>
              <div className={styles.section_text}>
                The first input line contains a single integer n (1 ≤ n ≤ 1000) — the number of problems in the contest. Then n lines contain three integers each, each integer is either 0 or 1. If the first number in the line equals 1, then Petya is sure about the problem's solution, otherwise he isn't sure. The second number shows Vasya's view on the solution, the third number shows Tonya's view. The numbers on the lines are separated by spaces.
              </div>
            </div>
            
            {/* Output Section */}
            <div className={styles.section}>
              <div className={styles.section_title}>Output</div>
              <div className={styles.section_text}>
                Print a single integer — the number of problems the friends will implement on the contest.
              </div>
            </div>

            {/* Examples Section */}
            <div className={styles.examples_section}>
              <div className={styles.section_title}>Examples</div>
              <div className={styles.examples_container}>
                <div className={`${styles.example_box} ${styles.example_input}`}>
                  <div className={styles.example_header}>
                    <div className={styles.example_label}>INPUT</div>
                    <CopyIcon />
                  </div>
                  <div className={styles.example_divider}></div>
                  <div className={styles.example_content}>
                    3<br/>1 1 0<br/>1 1 1<br/>1 0 0
                  </div>
                </div>
                <div className={`${styles.example_box} ${styles.example_output}`}>
                  <div className={styles.example_header}>
                    <div className={styles.example_label}>OUTPUT</div>
                    <CopyIcon />
                  </div>
                  <div className={styles.example_divider}></div>
                  <div className={styles.example_content}>
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Pistas in One Section - Closer Together */}
        <div className={styles.all_pistas_section}>
          <div className={styles.pista_item} onClick={() => setShowTemas(!showTemas)}>
            <div className={styles.pista_title}>Temas</div>
            <AngleDownIcon />
          </div>
          {showTemas && (
            <div className={styles.pista_content}>Contenido de temas aquí...</div>
          )}
          
          <div className={styles.pista_divider}></div>
          
          <div className={styles.pista_item} onClick={() => setShowPista1(!showPista1)}>
            <div className={styles.pista_title}>Pista 1</div>
            <AngleDownIcon />
          </div>
          {showPista1 && (
            <div className={styles.pista_content}>Contenido de pista 1 aquí...</div>
          )}
          
          <div className={styles.pista_divider}></div>
          
          <div className={styles.pista_item} onClick={() => setShowPista2(!showPista2)}>
            <div className={styles.pista_title}>Pista 2</div>
            <AngleDownIcon />
          </div>
          {showPista2 && (
            <div className={styles.pista_content}>Contenido de pista 2 aquí...</div>
          )}
        </div>

        {/* Reveal Code Icon with Line Divisions */}
        <div className={styles.reveal_code_container}>
          <div className={styles.reveal_line_left}></div>
          <div className={styles.reveal_code_center} onClick={() => setShowCodeEditor(!showCodeEditor)}>
            <RevealCodeIcon />
          </div>
          <div className={styles.reveal_line_right}></div>
        </div>

        {/* Code Editor Section - Conditional */}
        {showCodeEditor && (
          <div className={styles.code_section}>
            <div className={styles.code_header}>
              <div className={styles.language_tabs}>
                {['Python', 'C++', 'Java'].map(lang => (
                  <div 
                    key={lang}
                    className={`${styles.language_tab} ${activeLanguage === lang ? styles.active : ''}`}
                    onClick={() => setActiveLanguage(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
              <CopyIcon />
            </div>
            <div className={styles.code_content}>
              <div className={styles.line_numbers}>1<br/>2<br/>3<br/>4</div>
              <div className={styles.code_text}>
                {activeLanguage === 'Python' && (
                  <>
                    <span className={styles.keyword}>def</span>
                    <span className={styles.space}> </span>
                    <span className={styles.function}>solve</span>
                    <span className={styles.bracket}>()</span>
                    <span className={styles.punctuation}>:</span>
                    <br/>
                    <span className={styles.space}>    </span>
                    <span className={styles.keyword}>return</span>
                    <span className={styles.space}> </span>
                    <span className={styles.number}>0</span>
                  </>
                )}
                {activeLanguage === 'C++' && (
                  <>
                    <span className={styles.keyword}>#include</span>
                    <span className={styles.space}> </span>
                    <span className={styles.string}>&lt;iostream&gt;</span>
                    <br/>
                    <span className={styles.keyword}>int</span>
                    <span className={styles.space}> </span>
                    <span className={styles.function}>main</span>
                    <span className={styles.bracket}>()</span>
                  </>
                )}
                {activeLanguage === 'Java' && (
                  <>
                    <span className={styles.keyword}>public</span>
                    <span className={styles.space}> </span>
                    <span className={styles.keyword}>class</span>
                    <span className={styles.space}> </span>
                    <span className={styles.function}>Solution</span>
                    <br/>
                    <span className={styles.punctuation}>{'{'}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Side Navigation Dots */}
      <div className={styles.side_nav}>
        <div className={`${styles.nav_dot} ${styles.active_dot}`}></div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_dot}></div>
        <div className={styles.nav_dot}></div>
      </div>

      {/* Problem Navigation Dots - Right Side */}
      <div className={styles.problem_nav}>
        {problems.map((problem, index) => (
          <div 
            key={problem}
            className={`${styles.problem_dot} ${index === currentProblem ? styles.active_problem : ''}`}
            onClick={() => setCurrentProblem(index)}
          >
            {index === currentProblem && <span className={styles.problem_letter}>{problem}</span>}
          </div>
        ))}
      </div>

      {/* Side Navigation with PlayIcon */}
      <div className={styles.side_nav}>
        <PlayIcon />
      </div>

      {/* Background Text with Vertical Row Icon - Left ONLY */}
      <div className={styles.background_text}>
        <div className={styles.rotated_text_container}>
          <div className={styles.cuscontest_text}>CUSCONTEST XX</div>
        </div>
        <div className={styles.vertical_row_left}>
          <div className={styles.row_bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
