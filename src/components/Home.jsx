import React from 'react'
import Products from "./Products.jsx"

function Home(props) {
  return(
    <div className="hero">
    <div className="card bg-dark text-white border-0">
        <img src="/assets/ecommerce-advertising.jpg" className="card-img" alt="" height="650px"/>
      </div>
      <Products />
    </div>
  )
}
export default Home
