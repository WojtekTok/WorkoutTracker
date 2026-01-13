import Calendar from 'react-calendar'
import styles from './WorkoutCalendar.module.css'
import 'react-calendar/dist/Calendar.css'

const WorkoutCalendar = () => (
  <div className={styles.wrapper}>
    <Calendar />
  </div>
)

export default WorkoutCalendar
