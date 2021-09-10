import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
	return (
		<div className={styles.container}>
			<div className={styles.nav}>
				<div className={styles.left}>
					<div className={styles.mainLeft}>
						<Link href="/">
							<svg className={styles.logo} viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
								<path className={styles.ghostBody} d="M12 -3.66211e-06C8.8174 -3.66211e-06 5.76516 1.01142 3.51472 2.81177C1.26428 4.61212 0 7.05392 0 9.6V24L4.5 20.4L8.25 23.4L12 20.4L15.75 23.4L19.5 20.4L24 24V9.6C24 7.05392 22.7357 4.61212 20.4853 2.81177C18.2348 1.01142 15.1826 -3.66211e-06 12 -3.66211e-06Z" />
								<path className={styles.ghostEye} d="M11 12L11.0257 12.0004" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								<path className={styles.ghostEye} d="M18 12L18.0257 12.0004" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</Link>
						<Link href="/">
							<h1 className={styles.title}>Armeet.</h1>
						</Link>
					</div>
				</div>
				<div className={styles.right}>
					<Link href="/">
						<a className={styles[props.current == "home" ? "current" : ""]}>Home</a>
					</Link>
					<Link href="/projects">
						<a className={styles[props.current == "projects" ? "current" : ""]}>Projects</a>
					</Link>
					<Link href="/contact">
						<a className={styles[props.current == "contact" ? "current" : ""]}>Contact</a>
					</Link>
					<Link href="/about">
						<a className={styles[props.current == "about" ? "current" : ""]}>About</a>
					</Link>
					<Link href="/socials">
						<a className={styles[props.current == "socials" ? "current" : ""]}>Socials</a>
					</Link>
					<Link href="/blog">
						<a className={styles[props.current == "blog" ? "current" : ""]}>Blog</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
