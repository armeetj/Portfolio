import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Armeet." description="Hi, I'm Armeet. Check out my personal website!" />
    </div>
  )
}
