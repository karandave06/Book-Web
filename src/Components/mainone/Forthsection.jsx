import React from 'react'
import Teamcard from './Teamcard'
import img1 from '../../../public/UI-face-1.jpg'
import img2 from '../../../public/UI-face-2.jpg'
import img3 from '../../../public/UI-face-3.jpg'
import img4 from '../../../public/UI-face-4.jpg'
import './section-4.scss'

const Forthsection = () => {
  return (
    <section className='forthsection '>
<div className="container forthsection  text-center">

    <h1 className='text-dark'>What our Readers say's about us</h1>
    <p className='text-seceondary'>Lorem, ipsum dolor sit amet mpora magni voluptas!</p>
      
</div>

<div className="team row">
     <div className="col-md-4 col-12 text-center">
  <Teamcard img={img3} title='John Wick' />
   </div>

   <div className="col-md-4 col-12  text-center">
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
     <Teamcard img={img2} title="Sharlock Holmes" />
    </div>
    <div className="carousel-item">
      <Teamcard img={img1} text="Jack Sparrow" />
    </div>
    
  </div>
</div>
   </div>

   <div className="col-md-4 col-12 text-center">
    <Teamcard img={img4} title="Black Widow" />
   </div>

</div>
    </section>
  )
}

export default Forthsection
