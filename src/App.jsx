import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar"
import Firstsection from "./Components/mainone/Firstsection"
import Forthsection from "./Components/mainone/Forthsection"
import Secondsection from "./Components/mainone/Secondsection"
import Thirdsection from "./Components/mainone/Thirdsection"



function App() {

  return (
   
      <div className="app">

<div className="header">
<Navbar />
      <Header />
</div>
      
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Forthsection />
      <Footer />
 
        
    </div>
  )
}

export default App
