import React from "react"
import '../styles/global.css'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      
      {/* Hero Page */}
      <section class="hero" id="home">
      <p class="page-one-greeting">Hi, my name is</p>
      <h1 class="page-one-name">Yannick Lahti.</h1>
      <h1 class="page-one-what-i-do">I build things for the web.</h1>
      <p class="page-one-description">
        I'm a web developer specializing in building and designing exceptional digital experiences.
        Currently I'm focused on building child focused apps to improve young minds and cognitive development.
      </p>

      <div class="page-one-about-me">
        <a href='/about'>My story & Journey</a>
      </div>
      </section>


      {/* Profile page */}
      <section class="profile" id="about">
      <h1>My Recent Work</h1>

      
      {/* personal image comes here */}
      <div class="left-image">

      </div>

      </section>


  
  </Layout>
)
}
