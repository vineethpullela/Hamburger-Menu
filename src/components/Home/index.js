// Write your code here

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="home-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-img"
        alt="home"
      />
    </div>
  </div>
)

export default Home
