import { FaBars } from 'react-icons/fa'
import styles from './DropdownButton.module.css'

interface DropdownButtonProps {
  onClick: () => void
}

const DropdownButton = ({ onClick }: DropdownButtonProps) => {
  return (
    <button
      className={styles.dropdown}
      onClick={onClick}
      aria-label="Open menu"
    >
      <FaBars />
    </button>
  )
}

export default DropdownButton
