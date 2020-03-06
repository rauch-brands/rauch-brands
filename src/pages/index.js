import React from "react"

import "../styles/index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Description from "../components/description"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-container">
      <div className="image-container">
        <div className="card-4">
          <Image src="radko" />
        </div>
        <div className="card-2 description">
          <Description src="radko" />
          <a
            href="https://www.christopherradko.com/"
            target="_blank"
            className="button btnFade btnBlueGreen"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="card-4 ">
          <Image src="jay" />
        </div>
        <div className="card-2 description">
          <Description src="jay" />
          <a
            href="https://www.jaystrongwater.com/"
            target="_blank"
            className="button btnFade btnBlueGreen"
          >
            Visit Site
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="card-4 ">
          <Image src="kat" />
        </div>
        <div className="card-2 description">
          <Description src="kat" />
          <a
            href="https://www.katandannie.com/"
            target="_blank"
            className="button btnFade btnBlueGreen"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
