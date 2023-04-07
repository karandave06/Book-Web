import React from 'react'
import './footer.scss'



const Footer = () => {
  return (
    <div className='footer'>

    <div className="container p-0">
        <div className="row text-left">
            <div className="col-md-5 col-md-5">
                <h1 className='text-light'>About Us</h1>
                <p className="text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id numquam quis eveniet molestiae eaque obcaecati ipsam. Ab!
                </p>

                <p className="pt-4 text-light">
                    Copyright 	&#169;2023 All rights reserved | <span>Karan Dave</span>
                </p>
            </div>
            <div className="col-md-5" >
                <h4 className="text-light" id='news'>

                    News letters
                    
                </h4>
                <p className="text-light">
                    Stay Updated
                </p>
                <form action="#" className="form-inline">
                    <div className="col">
                        <div className="input-group pr-5">
                            <input type="text" placeholder='Email' className="form-control bg-dark text-white" />
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-2 col-sm-12">

                <h4 className="text-white">
                    Follow Us
                </h4>
                <p className="text-light">Let us be social</p>
                <div className="column">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-youtube"></i>

                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
