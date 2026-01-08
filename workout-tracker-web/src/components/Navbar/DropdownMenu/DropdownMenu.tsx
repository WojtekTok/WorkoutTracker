import styles from './DropdownMenu.module.css'
import {
  FaDumbbell,
  FaCalendarAlt,
  FaClipboardList,
  FaPlusCircle,
  FaChartBar,
} from 'react-icons/fa'

interface DropdownMenuProps {
  onClose: () => void
}

const DropdownMenu = ({ onClose }: DropdownMenuProps) => {
  return (
    <div className={styles.dropdown}>
      <button onClick={onClose}>
        <FaDumbbell />
        <span>Add workout</span>
      </button>

      <button onClick={onClose}>
        <FaCalendarAlt />
        <span>My calendar</span>
      </button>

      <button onClick={onClose}>
        <FaClipboardList />
        <span>Create plan</span>
      </button>

      <button onClick={onClose}>
        <FaPlusCircle />
        <span>Add exercise</span>
      </button>

      <button onClick={onClose}>
        <FaChartBar />
        <span>Statistics</span>
      </button>
    </div>
  )
}

export default DropdownMenu
