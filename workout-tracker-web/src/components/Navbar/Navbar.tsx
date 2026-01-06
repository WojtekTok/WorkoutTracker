import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      Workout<span className={styles.accent}>Tracker</span>
    </nav>
  )
}

export default Navbar
