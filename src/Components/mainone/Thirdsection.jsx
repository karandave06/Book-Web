import React from 'react'
import '../mainone/section-3.scss'

const Thirdsection = () => {
  return (
    <div className='thirdsection container-fluid  text-center'>
    <div className="row">
        <div className="col-md-12 col-sm-12">
            <h1>Downolad out app for all platform</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate a maiores non sequi molestiae nobis quam veritatis? Veniam facere autem ipsum exercitationem cum!</p>
        </div>
    </div>

    <div className="platform row">
        <div className="col-md-6 col-sm-12 text-right">

            <div className="desktop shadow-lg">
                <div className="d-flex flex-row justify-content-center">
                <i className="fa-solid fa-desktop fa-3x p-3"></i>
                <div className="text-left">
                    <h3 className='p-1 m-0'>Desktop</h3>
                    <p className="p-0 m-0">On Website</p>
                </div>

                </div>
            </div>

        </div>
        <div className="col-md-6 col-sm-12 text-left">
<div className="desktop shadow-lg">
                <div className="d-flex flex-row justify-content-center">
                <i className="fa-solid fa-mobile-alt fa-3x p-3"></i>
                <div className="text-left">
                    <h3>Mobile</h3>
                    <p>On Playstore</p>
                </div>

                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Thirdsection
