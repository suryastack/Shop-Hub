import Navbar from "../components/Navbar"
import MiddleSection from '../components/MiddleSection'
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <MiddleSection />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
