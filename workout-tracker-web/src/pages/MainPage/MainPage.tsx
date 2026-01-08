import Tile from '../../components/Tile/Tile'
import styles from './MainPage.module.css'
import {
  FaDumbbell,
  FaCalendarAlt,
  FaClipboardList,
  FaPlusCircle,
  FaChartBar
} from 'react-icons/fa'

const MainPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tiles}>
            <Tile title="Add workout" icon={<FaDumbbell />} />
            <Tile title="My calendar" icon={<FaCalendarAlt />} />
            <Tile title="Create plan" icon={<FaClipboardList />} />
            <Tile title="Add exercise" icon={<FaPlusCircle />} />
            <Tile title="Statistics" icon={<FaChartBar />} />
        </div>
      </main>
    </>
  )
}

export default MainPage
