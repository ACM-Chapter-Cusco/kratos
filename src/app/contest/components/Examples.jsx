import Image from "next/image";
import styles from "./Contest.module.css";

const Examples = ({ 
  inputData = "3\n1 1 0\n1 1 1\n1 0 0",
  outputData = "2"
}) => {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      // Failed to copy text
    }
  };

  return (
    <section className={styles.examples_container_section}>
      <h2 className={styles.section_title}>Examples</h2>
      
      <div className={styles.examples_grid}>
        {/* Input Example */}
        <div className={`${styles.examples_box} ${styles.examples_input}`}>
          <header className={styles.examples_header}>
            <span className={styles.examples_label}>INPUT</span>
            <button 
              onClick={() => handleCopy(inputData)}
              className={styles.copy_icon}
              aria-label="Copy input data"
            >
              <Image 
                src="/pages/contest/icons/icon-copy.svg" 
                alt="Copy" 
                width={25} 
                height={25}
              />
            </button>
          </header>
          
          <div className={styles.examples_divider}></div>
          
          <pre className={styles.examples_content}>
            {inputData.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < inputData.split('\n').length - 1 && <br/>}
              </span>
            ))}
          </pre>
        </div>
        
        {/* Output Example */}
        <div className={`${styles.examples_box} ${styles.examples_output}`}>
          <header className={styles.examples_header}>
            <span className={styles.examples_label}>OUTPUT</span>
            <button 
              onClick={() => handleCopy(outputData)}
              className={styles.copy_icon}
              aria-label="Copy output data"
            >
              <Image 
                src="/pages/contest/icons/icon-copy.svg" 
                alt="Copy" 
                width={25} 
                height={25}
              />
            </button>
          </header>
          
          <div className={styles.examples_divider}></div>
          
          <pre className={styles.examples_content}>
            {outputData.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < outputData.split('\n').length - 1 && <br/>}
              </span>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Examples;
