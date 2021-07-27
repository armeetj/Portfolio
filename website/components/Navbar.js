import styles from "../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.nav}>
				<div className={styles.navLeft}>
					<a href="#">
						<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 -6.10352e-06C14.6957 -6.10352e-06 9.60859 1.6857 5.85786 4.68629C2.10714 7.68687 0 11.7565 0 16V40L7.5 34L13.75 39L20 34L26.25 39L32.5 34L40 40V16C40 11.7565 37.8929 7.68687 34.1421 4.68629C30.3914 1.6857 25.3043 -6.10352e-06 20 -6.10352e-06Z" fill="#000" />
							<path d="M19.5 20.4L19.5429 20.4006" stroke="#00F7CA" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M30.5 20.4L30.5429 20.4006" stroke="#00F7CA" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</a>
					<a href="#">
						<h1>Armeet.</h1>
					</a>
				</div>
				<div className={styles.navMiddle}>
					<a href="/about">/about</a>
					<a href="/projects">/projects</a>
					<a href="/contact">/contact</a>
					<a href="/socials">/socials</a>
				</div>
				<div className={styles.navRight}>
					<a className={styles.button} href="/blog">
						/blog
					</a>
					<a className={styles.button} href="/resume">
						/resume
					</a>
				</div>
			</div>
		</div>
	);
}
