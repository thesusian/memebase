import * as React from "react"
import { Link, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import Header from "../components/Header";
import classes from "./Pages.module.scss";

const LibraryPage: React.FC<PageProps> = () => {
    return (
      <main>
        <Header />
        <div className={classes.content}>

        <h1>Library</h1>
        <p>
          Here we will have a gallery of all the memes.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
        </div>
      </main>
    )
  }
  
  export default LibraryPage

  export const Head = () => (
    <SEO title="Library" />
  )