import Navbar from "../components/Navbar"
import MiddleSection from '../components/MiddleSection'
import Footer from "../components/Footer"
import FeaturedProducts from "../components/FeaturedProducts"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MiddleSection />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}

export default HomePage
