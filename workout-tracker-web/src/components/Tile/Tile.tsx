import styles from './Tile.module.css'
import type { ReactNode } from 'react'

interface TileProps {
  title: string
  icon: ReactNode
}

const Tile = ({ title, icon }: TileProps) => {
  return (
    <div className={styles.tile}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Tile
