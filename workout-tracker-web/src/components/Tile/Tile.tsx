
import styles from './Tile.module.css'

interface TileProps {
  title: string
}

const Tile = ({ title }: TileProps) => {
  return <div className={styles.tile}>{title}</div>
}

export default Tile