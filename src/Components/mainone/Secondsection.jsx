import React from 'react'
import './section-2.scss'
import Card from './Card'

const Secondsection = () => {
  return (
    <section className='secondsection container-fluid p-0'>
      <div className="cover">
        <div className="content text-center">
            <h1>Some Features That Made Us Unique</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, rerum.</p>
        </div>
      </div>



      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
            <div className="rect">
                <h1>2345</h1>
                <p>Happy Client</p>
            </div>
            <div className="rect">
            <h1>7585</h1>
                <p>Cups Coffee</p>
            </div>
            <div className="rect">
            <h1>4585</h1>
                <p>Ticket's Submitted</p>
            </div>
            <div className="rect">
            <h1>5689</h1>
                <p>Total Project</p>
            </div>
        </div>
      </div>


      <div className="purchase text-center">
        <h1>Purchase Whatever You Want</h1>
        <p id="purchase-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ad?</p>

    


        <div className="cards">
            <div className="d-flex flex-row justify-content-center flex-wrap">

                <Card title={'PDF'}  price={'$65.2'}/>
                <Card title={'E-BOOK'}  price={'$103.01'}/>
                <Card title={'Print Copy'}  price={'$99.99'}/>


            </div>
        </div>

        </div>
    </section>
  )
}

export default Secondsection
