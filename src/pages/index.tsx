import * as React from "react";
import type { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { SEO } from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main>
			<h1>Hello World</h1>
			<p>
				Here I will show you a couple of examples of images in Gatsby,
				for more info refere to the <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-image/">
					 docs here
				</a>
			</p>
      <p>
        <q>The Gatsby Image plugin handles the hard parts of producing images in multiple sizes and formats for you!</q>
      </p>
      <h2>
        Static Image
      </h2>
      <p>Note that with <code>StaticImage</code> you can't pass a prop into it, for that I think you need to use GatsbyImage</p>
      <StaticImage src="../images/coomer.jpg" alt="A coomer" />
		</main>
	);
};

export default IndexPage;

export const Head = () => (
  <SEO /> // to override title you can do <SEO title="Page Two" />
)