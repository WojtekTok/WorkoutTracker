import Navbar from '../components/Navbar/Navbar'
import HomePage from '../pages/HomePage/HomePage'
import styles from './App.module.css'

function App() {
  return (
     <>
      <Navbar />
      <main className={styles.page}>
        <HomePage />
      </main>
    </>
  )
}

export default App
