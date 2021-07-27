import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import armeet_circle from "../public/armeet_circle.png";

export default function Home() {
	return (
		<div className={styles.container}>
			<Header />
			<Navbar />
			<div className={styles.middle}>
				<div className={styles.heroLeft}>
					<h2 className="heroGreeting">Hi,</h2>
					<h1 className="heroTitle">
						I'm <span>Armeet.</span>
					</h1>
					<p>
						I’m a senior{" "}
						<a href="https://evhs.schoolloop.com/" target="_blank">
							@EVHS.
						</a>{" "}
						I enjoy computers, physics, psychology, and math. Get to know more <a href="#">#about</a> me.
					</p>
					<p>
						In my free time I play video games, watch YouTube, or learn something through one of my many <a href="#">#projects.</a>
					</p>
					<p>
						Want to reach out? <a href="#">#contact</a> me! Also follow my <a href="#">#socials!</a>
					</p>
					<p>
						Read my thoughts on stuff, book/movie reviews in my <a href="#">#blog.</a> Check out my <a href="#">#resume.</a>
					</p>
				</div>
				<div className={styles.heroRight}>
					<div className={styles.card}>
						<Image src={armeet_circle} layout="intrinsic" alt="Armeet picture" width="400px" height="400px" />
						<div className={styles.socialLogos}>
							<a href="https://instagram.com/armeetjatyani" target="_blank">
								<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M24 17.055C24.1851 18.3034 23.9719 19.5783 23.3906 20.6985C22.8094 21.8187 21.8897 22.7271 20.7624 23.2945C19.6352 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7146 23.0701 13.8223 22.1777C12.9299 21.2854 12.3416 20.1343 12.1411 18.8883C11.9406 17.6423 12.1381 16.3648 12.7055 15.2376C13.2729 14.1103 14.1813 13.1906 15.3015 12.6094C16.4217 12.0281 17.6966 11.8149 18.945 12C20.2184 12.1888 21.3973 12.7822 22.3075 13.6925C23.2178 14.6027 23.8112 15.7816 24 17.055Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M26.25 9.75H26.265" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>

							<a href="https://twitter.com/armeetjatyani" target="_blank">
								<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M34.5 4.49999C33.0636 5.51321 31.4732 6.28816 29.79 6.79499C28.8866 5.75626 27.686 5.02003 26.3506 4.68588C25.0151 4.35173 23.6092 4.43579 22.3231 4.92667C21.037 5.41756 19.9327 6.29159 19.1595 7.43057C18.3863 8.56954 17.9815 9.9185 18 11.295V12.795C15.364 12.8633 12.7519 12.2787 10.3965 11.0932C8.04112 9.90761 6.01548 8.15795 4.5 5.99999C4.5 5.99999 -1.5 19.5 12 25.5C8.91079 27.5969 5.23074 28.6484 1.5 28.5C15 36 31.5 28.5 31.5 11.25C31.4986 10.8322 31.4584 10.4154 31.38 10.005C32.9109 8.49523 33.9912 6.58906 34.5 4.49999V4.49999Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>

							<a href="https://open.spotify.com/user/8waroglncue8nq135egdemw1g?si=70e536dd27454b1a" target="_blank">
								<svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.2609 32.0435C25.4251 32.0435 32.0435 25.4251 32.0435 17.2609C32.0435 9.09666 25.4251 2.47826 17.2609 2.47826C9.09666 2.47826 2.47826 9.09666 2.47826 17.2609C2.47826 25.4251 9.09666 32.0435 17.2609 32.0435Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M23.7652 18.2587C21.5988 17.3852 19.3253 16.8055 17.0051 16.5351C14.7703 16.3265 12.5171 16.436 10.313 16.8603" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" />
									<path d="M21.873 22.859C20.1007 22.2218 18.2634 21.782 16.3946 21.5478C14.7668 21.3879 13.1246 21.4581 11.5163 21.7562" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" />
									<path d="M9.14079 11.7189C12.183 11.1614 15.288 11.029 18.3666 11.3256C21.1061 11.5335 23.7828 12.2509 26.2591 13.441" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" />
								</svg>
							</a>

							<a href="https://github.com/armeetjatyani" target="_blank">
								<svg viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M24 34V28.195C24.0563 27.4797 23.9596 26.7607 23.7165 26.0857C23.4734 25.4107 23.0894 24.7951 22.59 24.28C27.3 23.755 32.25 21.97 32.25 13.78C32.2496 11.6857 31.444 9.6718 30 8.155C30.6838 6.32276 30.6354 4.29752 29.865 2.5C29.865 2.5 28.095 1.975 24 4.72C20.562 3.78823 16.938 3.78823 13.5 4.72C9.405 1.975 7.635 2.5 7.635 2.5C6.86456 4.29752 6.81622 6.32276 7.5 8.155C6.04519 9.68305 5.23878 11.7152 5.25 13.825C5.25 21.955 10.2 23.74 14.91 24.325C14.4165 24.835 14.0359 25.4431 13.793 26.1099C13.55 26.7766 13.4502 27.4871 13.5 28.195V34M13.5 29.5C6 31.75 6 25.75 3 25L13.5 29.5Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>

							<a href="https://www.linkedin.com/in/armeet-jatyani-8a8096108/" target="_blank">
								<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M24 12C26.3869 12 28.6761 12.9482 30.364 14.636C32.0518 16.3239 33 18.6131 33 21V31.5H27V21C27 20.2044 26.6839 19.4413 26.1213 18.8787C25.5587 18.3161 24.7956 18 24 18C23.2044 18 22.4413 18.3161 21.8787 18.8787C21.3161 19.4413 21 20.2044 21 21V31.5H15V21C15 18.6131 15.9482 16.3239 17.636 14.636C19.3239 12.9482 21.6131 12 24 12V12Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M9 13.5H3V31.5H9V13.5Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>

							<a href="mailto:armeetjatyani@gmail.com" target="_blank">
								<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6 6H30C31.65 6 33 7.35 33 9V27C33 28.65 31.65 30 30 30H6C4.35 30 3 28.65 3 27V9C3 7.35 4.35 6 6 6Z" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M33 9L18 19.5L3 9" stroke="#00F7CA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className={styles.footer}>
					<div className={styles.footerLeft}>
						<a href="#">
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="black" />
								<path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="black" />
								<path d="M15 10C16.1046 10 17 9.10457 17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8C13 9.10457 13.8954 10 15 10Z" fill="black" />
								<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.926 22 13.648 21.254 13.648 20.312C13.648 19.875 13.468 19.477 13.211 19.187C12.921 18.898 12.773 18.535 12.773 18.062C12.7692 17.8419 12.8098 17.6233 12.8922 17.4192C12.9747 17.2151 13.0975 17.0298 13.2531 16.8741C13.4088 16.7185 13.5941 16.5957 13.7982 16.5132C14.0023 16.4308 14.2209 16.3902 14.441 16.394H16.437C19.488 16.394 21.992 13.891 21.992 10.84C21.965 6.012 17.461 2 12 2Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<p>highlighter</p>
						</a>
					</div>
					<div className={styles.footerMiddle}>
						<a href="#">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
									<path
										d="M20 10.4688C20 11.168 19.832 11.8164 19.4961 12.4102C19.1602 13.0039 18.7109 13.4688 18.1445 13.793C18.1602 13.8984 18.168 14.0625 18.168 14.2852C18.168 15.3438 17.8125 16.2422 17.1094 16.9844C16.4023 17.7305 15.5508 18.1016 14.5547 18.1016C14.1094 18.1016 13.6836 18.0195 13.2812 17.8555C12.9688 18.4961 12.5195 19.0117 11.9297 19.4062C11.3438 19.8047 10.6992 20 10 20C9.28516 20 8.63672 19.8086 8.05859 19.418C7.47656 19.0312 7.03125 18.5117 6.71875 17.8555C6.31641 18.0195 5.89453 18.1016 5.44531 18.1016C4.44922 18.1016 3.59375 17.7305 2.87891 16.9844C2.16406 16.2422 1.80859 15.3398 1.80859 14.2852C1.80859 14.168 1.82422 14.0039 1.85156 13.793C1.28516 13.4648 0.835938 13.0039 0.5 12.4102C0.167969 11.8164 0 11.168 0 10.4688C0 9.72656 0.1875 9.04297 0.558594 8.42578C0.929688 7.80859 1.42969 7.35156 2.05469 7.05469C1.89062 6.60938 1.80859 6.16016 1.80859 5.71484C1.80859 4.66016 2.16406 3.75781 2.87891 3.01562C3.59375 2.27344 4.44922 1.89844 5.44531 1.89844C5.89062 1.89844 6.31641 1.98047 6.71875 2.14453C7.03125 1.50391 7.48047 0.988281 8.07031 0.59375C8.65625 0.199219 9.30078 0 10 0C10.6992 0 11.3438 0.199219 11.9297 0.589844C12.5156 0.984375 12.9688 1.5 13.2812 2.14062C13.6836 1.97656 14.1055 1.89453 14.5547 1.89453C15.5508 1.89453 16.4023 2.26562 17.1094 3.01172C17.8164 3.75781 18.168 4.65625 18.168 5.71094C18.168 6.20312 18.0938 6.64844 17.9453 7.05078C18.5703 7.34766 19.0703 7.80469 19.4414 8.42188C19.8125 9.04297 20 9.72656 20 10.4688ZM9.57422 13.4805L13.7031 7.29688C13.8086 7.13281 13.8398 6.95312 13.8047 6.76172C13.7656 6.57031 13.668 6.41797 13.5039 6.31641C13.3398 6.21094 13.1602 6.17578 12.9688 6.20312C12.7734 6.23438 12.6172 6.32812 12.5 6.49219L8.86328 11.9609L7.1875 10.2891C7.03906 10.1406 6.86719 10.0703 6.67578 10.0781C6.48047 10.0859 6.3125 10.1562 6.16406 10.2891C6.03125 10.4219 5.96484 10.5898 5.96484 10.793C5.96484 10.9922 6.03125 11.1602 6.16406 11.2969L8.46484 13.5977L8.57812 13.6875C8.71094 13.7773 8.84766 13.8203 8.98047 13.8203C9.24219 13.8164 9.44141 13.707 9.57422 13.4805Z"
										fill="black"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect width="20" height="20" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<p>Armeet Singh Jatyani.</p>
						</a>
					</div>
					<div className={styles.footerRight}>
						<a href="#">
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 3V15" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<p>v1.0.0</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
