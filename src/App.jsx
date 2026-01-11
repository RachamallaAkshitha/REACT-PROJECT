import './App.css'
import Carousel from './Components/Carousel/Carousel'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import { Footer } from './Components/Footer/Footer'
import { TopProducts } from './Components/Footer/TopProducts/TopProducts'

function App() {

  return (
    <>
       <Carousel/>
       <FeaturedProducts/>
       <TopProducts/>
       <Footer/> 
    </>
  )
}

export default App
