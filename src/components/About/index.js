// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
        className="about-img"
      />
    </div>
  </div>
)

export default About
