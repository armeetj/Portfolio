import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Armeet." description="Hi, I'm Armeet. Check out my personal website!" />
      <Navbar current="home" />
    </div>
  )
}
