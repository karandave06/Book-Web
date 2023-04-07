import React from 'react'

const Card = ({title,price}) => {
  return (
    <div className="card">
                    <div className="card-body">
                        <div className="title">
                            <h5 className='card-title'>

                            {title}

                            </h5>
                        </div>

                        <p className="card-text">
                               With supporting text below as a natural ead-in
                        </p>
                        <div className="pricing">
                            <h1>{price}</h1>
                            <a href="#" className='btn btn-dark px-5 py-2 m-2'>Purchase Now</a>
                        </div>
                    </div>
                </div>
  )
}

export default Card
