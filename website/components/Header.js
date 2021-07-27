import Head from "next/head";

export default function Header() {
	return (
		<Head>
			<title>Armeet.</title>
			<meta name="description" content="Armeet Singh Jatyani. My personal website." />
			<link rel="icon" href="/favicon.ico" />

			<meta property="og:type" content="article" />
			<meta property="og:title" content="Armeet." />
			<meta property="og:description" content="Armeet Singh Jatyani. My personal website." />
			<meta property="og:image" content="https://i.imgur.com/A7vxqwU.png" />
			<meta property="og:url" content="https://armeet.com" />
			<meta property="og:site_name" content="Armeet." />

			<meta name="twitter:title" content="Armeet." />
			<meta name="twitter:description" content="Armeet Singh Jatyani. My personal website." />
			<meta name="twitter:image" content="https://i.imgur.com/A7vxqwU.png" />
			<meta name="twitter:site" content="https://armeet.com" />
			<meta name="twitter:creator" content="@ArmeetJatyani" />
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
		</Head>
	);
}
