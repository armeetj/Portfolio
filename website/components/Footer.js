import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer(props) {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="black" />
					<path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="black" />
					<path d="M15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8C13 9.10457 13.8954 10 15 10Z" fill="black" />
					<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.926 22 13.648 21.254 13.648 20.312C13.648 19.875 13.468 19.477 13.211 19.187C12.921 18.898 12.773 18.535 12.773 18.062C12.7692 17.8419 12.8098 17.6233 12.8922 17.4192C12.9747 17.2151 13.0975 17.0298 13.2531 16.8741C13.4088 16.7185 13.5941 16.5957 13.7982 16.5132C14.0023 16.4308 14.2209 16.3902 14.441 16.394H16.437C19.488 16.394 21.992 13.891 21.992 10.84C21.965 6.012 17.461 2 12 2Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<p>light</p>
			</div>

			<div className={styles.center}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M17.5 6.5H17.5111" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M24 3.00002C23.0424 3.67549 21.9821 4.19212 20.86 4.53002C20.2577 3.83753 19.4573 3.34671 18.567 3.12394C17.6767 2.90118 16.7395 2.95721 15.8821 3.28447C15.0247 3.61173 14.2884 4.19442 13.773 4.95373C13.2575 5.71305 12.9877 6.61235 13 7.53001V8.53001C11.2426 8.57558 9.50127 8.18583 7.93101 7.39546C6.36074 6.60509 5.01032 5.43865 4 4.00002C4 4.00002 0 13 9 17C6.94053 18.398 4.48716 19.0989 2 19C11 24 22 19 22 7.50001C21.9991 7.22147 21.9723 6.94361 21.92 6.67002C22.9406 5.66351 23.6608 4.39273 24 3.00002Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 23V19.13C16.0375 18.6532 15.9731 18.1738 15.811 17.7238C15.6489 17.2738 15.3929 16.8634 15.06 16.52C18.2 16.17 21.5 14.98 21.5 9.52C21.4997 8.12383 20.9627 6.7812 20 5.77C20.4559 4.54851 20.4236 3.19835 19.91 2C19.91 2 18.73 1.65 16 3.48C13.708 2.85882 11.292 2.85882 9 3.48C6.27 1.65 5.09 2 5.09 2C4.57638 3.19835 4.54414 4.54851 5 5.77C4.03013 6.7887 3.49252 8.14346 3.5 9.55C3.5 14.97 6.8 16.16 9.94 16.55C9.611 16.89 9.35726 17.2954 9.19531 17.7399C9.03335 18.1844 8.96681 18.6581 9 19.13V23M9 20C4 21.5 4 17.5 2 17L5.5 19.5L9 20Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H4C2.9 18 2 17.1 2 16V4C2 2.9 2.9 2 4 2Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M22 4L12 11L2 4" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>

			<div className={styles.right}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 3V15" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
				</svg>

				<p>v0.0.0</p>
			</div>
		</div>
	);
}
