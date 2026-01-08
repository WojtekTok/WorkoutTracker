import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import DropdownButton from './DropdownButton/DropdownButton'
import DropdownMenu from './DropdownMenu/DropdownMenu'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector(`.${styles.dropdown}`)
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdown}>
        <DropdownButton onClick={() => setOpen(o => !o)} />
      </div>

      Workout<span className={styles.accent}>Tracker</span>

      {open && <DropdownMenu onClose={() => setOpen(false)} />}
    </nav>
  )
}

export default Navbar
