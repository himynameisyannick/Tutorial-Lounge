import { Link } from 'gatsby'
import React from 'react'


export default function Footer() {
  return (
    <footer>
           <div class="content-footer">
              <div class="contribution-footer">
              <h1>Contirbutions</h1>
              <p>Github</p>
              <p>Projects</p>
              </div>

              <div class="about-footer">
              <h1>About</h1>
              <p>Creator</p>
              <p>Projects</p>
              </div>
              
              <div class="social-footer">
              <h1>Social</h1>
              <p>Email</p>
              <p>Mastodon</p>
              <p>Github</p>
              <p>LinkedIn</p>
              </div>
           </div>

           <div class="legal-footer">
              <p>Copyright © 2023 Yannick Lahti.</p>
           </div>

        </footer>
  )
}