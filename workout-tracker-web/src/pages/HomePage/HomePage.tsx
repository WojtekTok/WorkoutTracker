import styles from './HomePage.module.css'
import Button from '../../components/shared/Button/Button'
import RadarPlaceholder from '../../components/Charts/RadarChart/RadarChart'

const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.firstRow}>
          <button className={styles.calendar}>Placeholder</button>
          <Button className={styles.startWorkoutButton}>Start <br/> Workout</Button>
        </div>
        <div className={styles.textStatistics}>
          <p>It's been <span className={styles.highlightedText}>5 days</span> since your last workout.</p>
          <p>You managed to <span className={styles.highlightedText}>increase</span> average strength by <span className={styles.highlightedText}>1.2%</span></p>
          <p>Your next workout is in <span className={styles.highlightedText}>5</span> days</p>
        </div>
        <div className={styles.chart}>
          <RadarPlaceholder />
        </div>
      </main>
    </>
  )
}

export default HomePage
