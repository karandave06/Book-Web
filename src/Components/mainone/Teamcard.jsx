import React from 'react'

const Teamcard = ({img,title}) => {
  return (
    <div className="card mr-2 d-inline-block shadow-lg">
        <div className="card-img-top">
            <img src={img} className='img-fluid d-block w-100 border-radius' alt="img" />
        </div>
        <h3 className="card-title">
           {title}
        </h3>
        <p className="card-text">
           0. Maiores et ut voluptas atque quo quia architecto illo alias possimus, hic fugit totam cupiditate.
        </p>
        <a href="#" className='text-secondary text-decoration-none'>CEO AT GOOGLE</a>
     </div>
  )
}

export default Teamcard
