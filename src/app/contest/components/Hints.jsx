"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Contest.module.css";

const Hints = ({ hints = [] }) => {
  const [expandedHints, setExpandedHints] = useState({});

  // Reset hints when problem changes
  useEffect(() => {
    setExpandedHints({});
  }, [hints]);

  const toggleHint = (hintId) => {
    setExpandedHints(prev => ({
      ...prev,
      [hintId]: !prev[hintId]
    }));
  };

  if (!hints.length) return null;

  return (
    <section className={styles.hints_section}>
      <div className={styles.hints_container}>
        {hints.map((hint, index) => (
          <div key={hint.id}>
            <button 
              className={styles.hint_item}
              onClick={() => toggleHint(hint.id)}
              aria-expanded={expandedHints[hint.id]}
              aria-controls={`hint-content-${hint.id}`}
            >
              <span className={styles.hint_title}>{hint.title}</span>
              <div className={`${styles.hint_icon} ${expandedHints[hint.id] ? styles.expanded : ''}`}>
                <Image 
                  src="/pages/contest/icons/icon-angle-down.svg" 
                  alt="Expand hint" 
                  width={16} 
                  height={16}
                />
              </div>
            </button>
            
            {expandedHints[hint.id] && (
              <div 
                id={`hint-content-${hint.id}`}
                className={styles.hint_content}
              >
                {hint.content}
              </div>
            )}
            
            {index < hints.length - 1 && (
              <div className={styles.hint_divider}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hints;
