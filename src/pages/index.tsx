import * as React from "react";
import type { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import Header from "../components/Header";
import classes from "./Pages.module.scss";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<Header />
			<div className={classes.content}>
				<h1>Hello World</h1>
				<br />
				<p>
					Here I will show you an example of images in Gatsby, for
					more info refer to the{" "}
					<a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-image/">
						docs here
					</a>
					.
				</p>
				<br />
				<p>
					<q>
						The Gatsby Image plugin handles the hard parts of
						producing images in multiple sizes and formats for you!
					</q>
				</p>
				<br />
				<br />
				<h2>Static Image</h2>
				<br />
				<p>
					Note that with <code>StaticImage</code> you can't pass a
					prop into it, for that I think you need to use <code>GatsbyImage</code>
				</p>
				<StaticImage src="../images/coomer.jpg" alt="A coomer" />
			</div>
		</main>
	);
};

export default IndexPage;

export const Head = () => (
	<SEO /> // to override title you can do <SEO title="Page Two" />
);
