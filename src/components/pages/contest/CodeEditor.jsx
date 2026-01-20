"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Contest.module.css";
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-java';

const CodeEditor = ({ problemId, codeExamples = {} }) => {
  const [activeLanguage, setActiveLanguage] = useState('Python');
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  // Hide code editor when problem changes
  useEffect(() => {
    setIsCodeVisible(false);
  }, [problemId]);

  const languages = Object.keys(codeExamples);
  
  if (!languages.length) return null;

  const handleCopyCode = async () => {
    try {
      if (codeExamples[activeLanguage]) {
        await navigator.clipboard.writeText(codeExamples[activeLanguage]);
      }
    } catch (error) {
      // Failed to copy code
    }
  };

  const getLineNumbers = (code) => {
    return code.split('\n').map((_, index) => (index + 1).toString());
  };

  const getLanguageKey = (language) => {
    const langMap = { 'Python': 'python', 'C++': 'clike', 'Java': 'java' };
    return langMap[language] || 'javascript';
  };

  return (
    <>
      <div className={styles.code_reveal_container}>
        <div className={styles.code_reveal_line_left}></div>
        <button 
          className={styles.code_reveal_center}
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          aria-label={isCodeVisible ? "Hide code editor" : "Show code editor"}
        >
          <Image 
            src="/pages/contest/icons/icon-reveal-code.svg" 
            alt="Reveal code" 
            width={40} 
            height={26}
          />
        </button>
        <div className={styles.code_reveal_line_right}></div>
      </div>

      {isCodeVisible && (
        <section className={styles.code_editor_section}>
          <header className={styles.code_editor_header}>
            <div className={styles.code_language_tabs} role="tablist">
              {languages.map(lang => (
                <button 
                  key={lang}
                  role="tab"
                  aria-selected={activeLanguage === lang}
                  className={`${styles.code_language_tab} ${activeLanguage === lang ? styles.active : ''}`}
                  onClick={() => setActiveLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleCopyCode}
              className={styles.copy_icon}
              aria-label="Copy code"
            >
              <Image 
                src="/pages/contest/icons/icon-copy.svg" 
                alt="Copy" 
                width={25} 
                height={25}
              />
            </button>
          </header>
          
          <div className={styles.code_editor_content}>
            <div className={styles.code_line_numbers}>
              {getLineNumbers(codeExamples[activeLanguage] || '').map(lineNum => (
                <div key={lineNum}>{lineNum}</div>
              ))}
            </div>
            
            <pre 
              className={styles.code_editor_text}
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                  codeExamples[activeLanguage] || '', 
                  Prism.languages[getLanguageKey(activeLanguage)] || Prism.languages.javascript, 
                  getLanguageKey(activeLanguage)
                )
              }}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default CodeEditor;
