import Tile from '../../components/Tile/Tile'
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.tiles}>
            <Tile title={"Add workout"}/>
            <Tile title={"My calendar"}/>
            <Tile title={"Create plan"}/>
            <Tile title={"Add exercise"}/>
            <Tile title={"Statistics"}/>
        </div>
      </main>
    </>
  )
}

export default MainPage
