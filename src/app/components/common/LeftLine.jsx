import styles from './LeftLine.module.css'


const LeftLine = ({ color }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center mt-5 ${styles.circle_gradient}`}
        style={{
          '--color': `#${color}66`,
          '--color-20': `#${color}11`,
        }}
      >
        <div
          className={`${styles.line_top}`}
          style={{ '--color': `#${color}` }}
        />
        <div
          className='w-7 h-7 bg-transparent border border-1 rounded rotate-45 my-5'
          style={{ borderColor: `#${color}` }}
        />
        <div
          className={`${styles.line_down}`}
          style={{ '--color': `#${color}` }}
        />
      </div>
    </>
  )
}

export default LeftLine