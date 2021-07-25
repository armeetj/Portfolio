import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Armeet</title>
        <meta name="description" content="My personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.nav}>
            <div className={styles.navLeft}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 -6.10352e-06C14.6957 -6.10352e-06 9.60859 1.6857 5.85786 4.68629C2.10714 7.68687 0 11.7565 0 16V40L7.5 34L13.75 39L20 34L26.25 39L32.5 34L40 40V16C40 11.7565 37.8929 7.68687 34.1421 4.68629C30.3914 1.6857 25.3043 -6.10352e-06 20 -6.10352e-06Z" fill="#000"/>
                <path d="M19.5 20.4L19.5429 20.4006" stroke="#00F7CA" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30.5 20.4L30.5429 20.4006" stroke="#00F7CA" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h1>Armeet.</h1>
            </div>
            <div className={styles.navMiddle}>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
              <a href="#">Socials</a>
            </div>
            <div className={styles.navRight}>
              <button><a href="#">Blog</a></button>
              <button><a href="#">Resume</a></button>
            </div>
          </div>
        </div>
        
        <div className={styles.middle}>
          
        </div>
  
        <div className={styles.bottom}>
          
        </div>
      </div>
      
    </div>
  )
}
