import Head from "next/head";

export default function Header({title, desc, url}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc} />
			<link rel="icon" href="/favicon.ico" />

			<meta property="og:type" content="article" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:image" content="https://i.imgur.com/A7vxqwU.png" />
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={title} />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={desc} />
			<meta name="twitter:image" content="https://i.imgur.com/A7vxqwU.png" />
			<meta name="twitter:site" content={url} />
			<meta name="twitter:creator" content="@ArmeetJatyani" />

			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
		</Head>
	);
}
