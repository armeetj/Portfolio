import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/img/armeet.png";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header title="Armeet." description="Hi, I'm Armeet. Check out my personal website!" />
			<Navbar current="home" />
			<div className={styles.main}>
				<div className={styles.profilePictureContainer}>
					<Image src={profilePic} />
				</div>
				<h1>Hi, I'm <span>Armeet</span>!</h1>
				<p> 
					Student @EVHS<br></br>Status: Grinding college apps...
				</p>

				<Link href="/socials">
					<button className={styles.socialsButton}>
						<svg className={styles.logo} viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
							<path className={styles.ghostBody} d="M12 -3.66211e-06C8.8174 -3.66211e-06 5.76516 1.01142 3.51472 2.81177C1.26428 4.61212 0 7.05392 0 9.6V24L4.5 20.4L8.25 23.4L12 20.4L15.75 23.4L19.5 20.4L24 24V9.6C24 7.05392 22.7357 4.61212 20.4853 2.81177C18.2348 1.01142 15.1826 -3.66211e-06 12 -3.66211e-06Z" />
							<path className={styles.ghostEye} d="M11 12L11.0257 12.0004" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							<path className={styles.ghostEye} d="M18 12L18.0257 12.0004" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						Socials
					</button>
				</Link>
			</div>
			<Footer />
		</div>
	);
}
