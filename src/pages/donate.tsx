import * as React from "react";
import { Link, PageProps } from "gatsby";
import { SEO } from "../components/seo.jsx";
import Header from "../components/Header";
import classes from "./Pages.module.scss";

const DonatePage: React.FC<PageProps> = () => {
	return (
		<main>
            <Header />
            <div className={classes.content}>
			<h1>Donate</h1>
			<p>
				Stripe is easy with Gatsby. Check{" "}
				<a href="https://www.gatsbyjs.com/docs/how-to/adding-common-features/processing-payments-with-stripe/">
					this
				</a>
                <br />
				<br />
				<Link to="/">Go home</Link>.
			</p>
            </div>
		</main>
	);
};

export default DonatePage;

export const Head = () => <SEO title="Donate" />;
