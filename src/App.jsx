import './App.css'
import { Advantages } from './Components/Advantages/Advantages'
import Carousel from './Components/Carousel/Carousel'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import { Footer } from './Components/Footer/Footer'
import { TopProducts } from './Components/TopProducts/TopProducts'
import { AppRouter } from './Router/AppRouter'



function App() {

  return (
    <>
       <AppRouter/>
       <Advantages/>
       <Footer/> 
    </>
  )
}

export default App
