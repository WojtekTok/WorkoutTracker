import Navbar from '../components/Navbar/Navbar'
import MainPage from '../pages/MainPage/MainPage'
import styles from './App.module.css'

function App() {
  return (
     <>
      <Navbar />
      
      <main className={styles.page}>
        <MainPage />
      </main>
    </>
  )
}

export default App
