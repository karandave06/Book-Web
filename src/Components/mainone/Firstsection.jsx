import React from 'react'
import './section-1.scss'
import photo1 from '/public/pexels-photo-1904769.jpeg'

const Firstsection = () => {
  return (
    <section>

<div className="container text-center firstsection">
  <div className="row">
    <div className="col-md-6">
      <div className="pray">
        <img src={photo1} alt="" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="panel text-start">
        <h1>Mr Karan Dave</h1>
        <p className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda harum aut maiores architecto labore nostrum quaerat vitae voluptatem fuga voluptate dolores optio, possimus repellendus error aliquid iste eaque?
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ex quisquam ipsam voluptatibus inventore beatae corrupti debitis adipisci natus numquam expedita officia laboriosam cumque autem iure distinctio, velit voluptates dolore dicta, animi perferendis! Consequuntur?</p>
      </div>
    </div>
  </div>
</div>
      
    </section>
  )
}

export default Firstsection
