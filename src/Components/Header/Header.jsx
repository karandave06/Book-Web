import React from 'react'
import './header.scss'
import headerimg from  '../../../public/header-img-2.png'

const Header = () => {
  return (
    <section className='container text-center header'>
      <div className="row">
        <div className="col-md-7 col-sm-12">
            <h6>AUTHOR : JOSEPH MURPHT</h6>
            <h1>THE POWER OF SUBCONSCIOUS MIND</h1>

            <p>If someone talks of subconsciousness, I cannot tell whether he means the term topographically to indicate something lying in the mind beneath. </p>
            <button className='btn btn-light px-5 py-2'>By Now at $99.71 </button>
        </div>
        <div className="col-md-5 col-sm-12 h-20 w-20">
            <img src ={headerimg} alt="img" />
        </div>
      </div>
    </section>
  )
}

export default Header
