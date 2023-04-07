import React,{useState} from 'react'
import './navbar.scss'

const Navbar = () => {

  const [color,setcolor] = useState(false)
  const changcolor = ()=>{
    if(window.scrollY >= 90){
      setcolor(true)
    }else{
      setcolor(false)
    }
  }

  window.addEventListener('scroll',changcolor)
  return (
    <div >
   <nav className={color ?  "navbar-bg navbar-expand-lg position-stickey" : " navbar navbar-expand-lg"}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
  <i className="fa-solid fa-book-open-reader fa-3x me-4"></i>
    Books
    
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <i className="fas fa-align-right text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

    <div className="m-auto"></div>

      <ul className="navbar-nav">
      <div className="mr-auto"></div>

       
       

      
        <li className="nav-item">
          <a className="nav-link" href="course">Course</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="price">Price</a>
        </li>

        <li className="nav-item dropdown">
         <div className="dropdown">
            <a href="#" className='nav-link'>Pages</a>
            <div className="dropdown-content">
                <a href="#">Generic</a>
                <a href="#">Element</a>
            </div>
         </div>
        </li>
        

        <li className="nav-item">
          <a className="nav-link" href="fact">Fact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>

        
        
        
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
