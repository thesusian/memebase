import * as React from "react"
import { Link, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import Header from "../components/Header";
import classes from "./Pages.module.scss";

const EthosPage: React.FC<PageProps> = () => {
    return (
      <main>
        <Header />
        <div className={classes.content}>
        <h1>Ethos</h1>
        <p>
          Fraser has this in the original website, not sure what it's supposed to have.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
        </div>
      </main>
    )
  }
  
  export default EthosPage

  export const Head = () => (
    <SEO title="Ethos" />
  )